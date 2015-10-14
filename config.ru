# encoding: utf-8

require 'sinatra/base'
require 'rubygems'
require 'bundler'
ENV['LANG'] = 'en_US.UTF-8'
ENV['LC_TYPE'] = 'en_US.UTF-8'
Encoding.default_external="UTF-8"

Bundler.require :http, :bloat, :datasource
Encoding.default_external = 'utf-8'

I18n.available_locales= [:es]
I18n.enforce_available_locales = true
require './app/app.rb'

map '/' do
  run Representantes::App
end
