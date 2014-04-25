#encoding: utf-8
require 'rubygems'
require 'bundler/setup'

require 'HTTParty'
require 'Nokogiri'
require 'active_support'
require 'active_support/inflector' #mb_chars
require 'active_support/core_ext/string/filters' #squish
require 'mongoid'
require 'mongoid/grid_fs'
require 'pp'
require 'json'
require 'open-uri'
require 'typhoeus'
require 'yaml'
require 'colored'
I18n.enforce_available_locales = false

RUN_ENV = (ENV['RUN_ENV'] || 'development').to_sym
puts "ENV: #{RUN_ENV}"

require_relative 'lib/string'
require_relative 'lib/http'
require_relative 'lib/romanos'
require_relative 'lib/entidades'
require_relative 'lib/log'
require_relative '../helpers/files.rb'

$mongoConfig = YAML.load_file(File.expand_path('../../config/database.yml', __FILE__))

models = File.expand_path('../../models', __FILE__)
Files.require_dir models

$mongoConfig[:production] = $mongoConfig[:production][:mongodb]
$mongoConfig[:development] = $mongoConfig[:development][:mongodb]

Mongoid.configure do |config|
  config.sessions = $mongoConfig[RUN_ENV][:sessions]
end
$grid = Mongoid::GridFs.build_namespace_for('imagenes')


def get_image(url)
  begin
    bytes = open(url).read
    id = $grid.put(bytes, :content_type => 'image/jpeg')
    return id.to_s
  rescue Mongo::OperationFailure => e
    md5 = e.message.match(/"(\w+)"/)[1]
    imagen_existente = $grid.find_one({md5: md5});
    return imagen_existente['_id'].to_s
  rescue Exception => e
    pp e
    exit
    puts "no encontré la imagen para #{img_url}";
  end
end