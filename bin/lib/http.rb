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
      req = Typhoeus::Request.new(url)
      req.on_complete do |r|
        request[:url] = url
        yield r, request
      end
      $hydra.queue(req)
    end

    $hydra.run
  end

end