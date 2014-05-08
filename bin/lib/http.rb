class Requester
  include HTTParty
  if ENV['DEV']
    debug_output $stderr
  end
end

def request url, method='get'
  req = Requester.send(method.to_sym, url)
  yield req.body
end

$hydra = Typhoeus::Hydra.new(max_concurrency: 100)
class Crawler
  attr_accessor :base, :requests, :url_parser, :completeHandler

  def initialize url
    @base = url

    @url_parser = -> (request, b) do
      delim = /(\{\{[^}]+\}\})/
      delim_chars = /[{}]+/
      str = b.gsub(delim) {|match|
        key = match.gsub(delim_chars, '')
        request[key.to_sym]
      }
      str
    end

    self
  end

  def url_para request
    self.url_parser.call(request, base)
  end

  def run
    requests.each do |request|
      url = url_para(request)
      #puts url
      h = {
        'Accept' => 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'User-Agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/537.75.14',

      }
      
      #Typhoeus::Config.verbose = true
      req = Typhoeus::Request.new(url, timeout: 60, headers: h)
      req.on_complete do |res|
        request[:url] = url
        if res.success?
          yield res, request
        elsif res.timed_out?
          Log.error "Timeout #{url}"
        else
          Log.error "Request Error: #{res.code}"
          Log.error url
        end
      end

      $hydra.queue(req)
    end

    $hydra.run
  end

end