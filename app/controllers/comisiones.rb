# encoding: utf-8
module Representantes
  class App < Sinatra::Base
    register Sinatra::Namespace
    namespace '/comisiones' do

      get '/:nombre/:id' do |nombre, id|
        comision = Comision.find(id)

        data = {comision: comision}

        if request.xhr? or params[:xhr]
          json data
        else
          view "comisiones/detalles", data
        end

      end


    end #/namespace

  end #/class
end