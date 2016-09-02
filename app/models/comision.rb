# encoding: utf-8
class Comision
	include Mongoid::Document
  store_in collection: 'comisiones'

  embeds_one :meta, as: :metadateable
  field :camara, type: String
  field :nombre, type: String
  field :oficina, type: String
  field :link, type: String

  field :entidad, type: Integer # para camaras locales

  embeds_many :telefonos
  has_and_belongs_to_many :integrantes, class_name: 'Actor'

  index({"meta.fkey" => 1}, {unique: true, name: 'fkey_index'})
  index({"integrante_ids" => 1})
  index({camara: 1})

  def stub
    I18n.transliterate(nombre).downcase.gsub(/[^a-z\s]/, '').gsub(' ', '-')
  end

  def congreso
    return case camara
      when "diputados" then "Cámara de Diputados"
      when "senado" then "Cámara de Senadores"
      when "local" then "Congreso local, #{Entidades::nombre_de_entidad(entidad).titleize}"
    end
  end

  def integrantes_json

    data = {
      presidencia: [],
      secretaria: [],
      integrantes: []
    }

    integrantes.each {|i|
      com = i.puestos.where({comision: id}).first
      actor = {
        nombre: i.nombre,
        distrito: i.distrito_json,
        stub: i.stub,
        partido: i.partido,
        eleccion: i.eleccion,
        puesto: com.puesto,
        id: i._id.to_s,
        imagen: i.imagen.to_s
      }
      puesto = case com.puesto
        when /^pres/ then :presidencia
        when /^secr/ then :secretaria
        else :integrantes
      end
      data[puesto] << actor
    }

    data

  end

  def as_json options={}
    attrs = super(options)
    attrs['id'] = attrs['_id'].to_s
    attrs['congreso'] = congreso
    attrs['actores'] = integrantes_json
    attrs['meta']['lastCrawl'] = l(meta.lastCrawl, '%d de %B, %y %H:%M:%S')

    attrs.delete 'integrante_ids'

    attrs
  end

end