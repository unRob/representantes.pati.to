# encoding: utf-8

require 'sinatra/base'
require 'rubygems'
require 'bundler'

Bundler.require

require './app.rb'

map '/' do 
  run RepresentantesApp
end
