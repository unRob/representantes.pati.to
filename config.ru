# encoding: utf-8

require 'sinatra/base'
require './app.rb'
require 'rubygems'
require 'bundler'

map '/' do 
  run RepresentantesApp
end
