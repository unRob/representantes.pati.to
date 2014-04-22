# encoding: utf-8
require 'rubygems'
require 'bundler/setup'

require 'sinatra'
require 'sinatra/base'
#require 'sinatra/assetpack'
require 'sinatra/config_file'
require 'sinatra/cookies'
require 'sinatra/json'
require 'sinatra/multi_route'
require 'sinatra/namespace'
require 'i18n'

require 'json'
require 'mongoid'
require 'mongoid/grid_fs'
require 'sass'
require 'uri'

class RepresentantesApp < Sinatra::Base

  set :root, File.dirname(__FILE__)

  register Sinatra::ConfigFile
  register Sinatra::Cookies
  register Sinatra::JSON
  register Sinatra::MultiRoute
  register Sinatra::Namespace

  enable :sessions
  set :session_secret, 'un montón de ricos huevones'

  require_relative 'helpers/files'

  Files::with_files 'config/*yml' do |file|
    config_file file
  end

  Files::require_dir './lib'

  Files::with_files './helpers/*rb' do |file|
    existing_modules = ObjectSpace.each_object(Module).to_a
    require file
    (ObjectSpace.each_object(Module).to_a - existing_modules).each do |mod|
      helpers mod
    end
  end
  
  Files::require_dir './models'
  Files::require_dir './controllers'


  configure :production, :development do
    settings.environment = ENV['RACK_ENV'].to_sym
    ENV['SASS_PATH'] = 'assets/css'

    $settings = settings

    Mongoid.configure do |config|
      config.sessions= settings.mongodb['sessions']
    end

    set :default_locale, 'es-mx'
  end

  get '/' do
    view :portada
  end

end