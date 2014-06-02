# encoding: utf-8
class Actor
	include Mongoid::Document
  store_in collection: 'actores'

  embeds_one :meta, class_name: 'Meta'
  field :camara, type: String #local, federal, senado
  field :nombre, type: String
  field :apellido, type: String
  field :distrito, type: String
  field :entidad, type: Integer
  #field :tipo_distrito, type: String #local, federal

  field :genero, type: Integer
  field :partido, type: String

  field :correo, type: String
  embeds_many :telefonos
  embeds_many :links

  embeds_many :puestos #de comisiones

  embeds_one :inasistencias, class_name: 'Inasistencias'
  embeds_one :votaciones, class_name: 'Votaciones'

  embeds_many :revisiones, class_name: "Revision"
  field :imagen
  field :puestos, type: Array
  field :suplente, type: String
  field :eleccion, type: String #mayoría relativa, primera minoría, representación proporcional

  # Diputados
  field :curul, type: String
  field :cabecera, type: String

  # Indexes
  index({camara: 1})
  index({partido: 1})
  index({"meta.fkn" => 1}, {unique: true})
  index({nombre: 1})
  index({entidad: 1})
  index({distrito: 1})

  def nombre
    if apellido
      super+" "+apellido
    else
      super
    end
  end

  def self.deDistritos(distritos)
    dtos = distritos.map {|dto| dto.id}
    puts dtos
    any_in("distrito" => dtos).desc(:distrito).desc(:eleccion)
  end

  def stub
    I18n.transliterate(nombre).downcase.gsub(/[^a-z\s]/, '').gsub(' ', '-')
  end

  def congreso
    vocal = 'o'
    vocal = (genero == 0 ? 'a' : 'o') if genero
    return case camara
      when "diputados" then "Diputad#{vocal} Federal"
      when "senado" then "Senador#{vocal if vocal == 'a'}"
      when "local" then "Diputad#{vocal} local"
    end
  end

  def poblacion
    return cabecera if cabecera
    return nil unless entidad # por los batos de lista nacional en senado...
    return Entidades::nombre_de_entidad(entidad).titleize
  end

  def distrito_json
    if circ = distrito.scan(/-c(\d+)$/).flatten[0]
      return "Circunscripción #{circ}"
    end

    unless camara == 'senado'
      str = "Distrito #{distrito.split('-').last}"
      str += ", #{poblacion}"
      return str
    end 
    return poblacion || eleccion
  end

  def as_json(options={})
    attrs = super(options)
    puts attrs
    
    attrs["id"] = attrs["_id"].to_s
    attrs['imagen'] = attrs['imagen'].to_s if attrs['imagen']
    attrs['congreso'] = congreso
    attrs['distrito'] = distrito_json
    attrs["stub"] = stub
    attrs['poblacion'] = poblacion
    attrs['puestos'] = puestos.map do |puesto|
      {
        titulo: puesto.puesto != 'integrante',
        puesto: puesto.puesto,
        comision: {
          nombre: puesto.comision.nombre,
          stub: puesto.comision.stub,
          id: puesto.comision.id.to_s
        }
      }
    end
    attrs['meta']['lastCrawl'] = l(meta.lastCrawl, '%d de %B, %y %H:%M:%S')
    attrs
  end
	
end


class Revision
  include Mongoid::Document

  embedded_in :actor
  field :creada, type: Time, default: -> {Time.now}
  field :aceptado, type: Boolean, default: false
  field :changeSet, type: Hash

end

class Puesto
  include Mongoid::Document

  field :_id, type: NilClass, default: nil, overwrite: true
  field :puesto, type: String
  belongs_to :comision, class_name: 'Comision'

  def as_json(options={})
    attrs = super(options)
    attrs['comision'] = attrs['comision'].to_s
    attrs.delete 'comision_id'
    attrs
  end

end

class Link
  include Mongoid::Document

  embedded_in :actor
  field :_id, type: NilClass, default: nil, overwrite: true

  field :servicio, type: String
  field :url, type: String

end

class Inasistencias
  include Mongoid::Document

  embedded_in :actor
  field :_id, type: NilClass, default: nil, overwrite: true
  field :total, type: Integer
  field :sesiones, type: Integer
  field :periodos, type: Hash

end

class Votaciones
  include Mongoid::Document

  embedded_in :actor
  field :_id, type: NilClass, default: nil, overwrite: true
  field :total, type: Integer
  field :a_favor, type: Integer
  field :en_contra, type: Integer
  field :abstencion, type: Integer
  field :ausente, type: Integer
  field :periodos, type: Hash

end