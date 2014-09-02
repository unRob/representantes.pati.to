# encoding: utf-8

require 'uri'
require 'r18n-core'
#require 'active_support/core_ext/string/filters' 
include R18n::Helpers;
R18n.set('es')

class RepresentantesApp < Sinatra::Base

  # léase en tono de https://www.youtube.com/watch?v=9_FiIkutpPk

  set :root, File.dirname(__FILE__)

  # Loadeamos todos los plugins de sinatra  
  register Sinatra::ConfigFile
  register Sinatra::Cookies
  register Sinatra::JSON
  register Sinatra::MultiRoute
  register Sinatra::Namespace

  # Y configuramos para reloadear
  enable :sessions
  set :session_secret, 'un montón de ricos huevones'

  # Hacemos más fácil la vida en sinatra
  require_relative 'helpers/files'

  # Porqué en corto vamos a configurar 
  Files::with_files 'config/*yml' do |file|
    config_file file
  end

  # Primero verás, las libreriás
  # Con sus archivos bien bizarros al azar
  Files::require_dir './lib'

  # Y luego helpers
  # Descagando el ObjectSpace
  # Rubby y sinatra son un pedo, como ves
  Files::with_files './helpers/*rb' do |file|
    existing_modules = ObjectSpace.each_object(Module).to_a
    require file
    (ObjectSpace.each_object(Module).to_a - existing_modules).each do |mod|
      helpers mod
    end
  end
  
  # Después modelos
  Files::require_dir './models'
  # Siguen controladores
  Files::require_dir './controllers'
  # Unos datos y otros lógica porque EME-VE-CE


  # Y luego hasta atrás configuro los requests
  # Con pendejadas que siempre olvidas tú
  configure :production, :development do
    settings.environment = ENV['RACK_ENV'].to_sym
    ENV['SASS_PATH'] = 'assets/css'

    # Luego el sinatra-r18n es bien necio
    R18n.set('es')
    I18n.enforce_available_locales = true
    
    set :default_locale, 'es'
    set :locale, 'es'

    $settings = settings

    Mongoid.configure do |config|
      config.sessions = settings.mongodb[:sessions]
    end

    # Bien pinche necio, les digo
    set :default_locale, 'es-mx'
  end

  # Muestra un mapa
  get '/' do
    view :portada
  end

  get '/acerca-de' do
    view :acerca
  end

end