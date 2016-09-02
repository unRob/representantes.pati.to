module Secretario
  require 'httparty'

  class HTTP
    include HTTParty
    if ENV['DEV']
      debug_output $stderr
    end


    def self.get endpoint, expecting: :dom
      data = super endpoint

      case expecting
        when :json then JSON.parse(data.body, symbolize_names: true)
        when :dom
          doc = Nokogiri::HTML(data.body)
          doc.encoding = 'utf-8'
          doc
        when :bytes then data.body
        else raise "No se como decodificar #{expecting}"
      end

    end
  end #HTTP
end #module