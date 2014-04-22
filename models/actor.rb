class Actor
	include Mongoid::Document
  store_in collection: 'actores'

  embeds_one :meta, class_name: 'Meta'
  field :camara, type: String #local, federal, senado
  field :nombre, type: String
  field :distrito, type: String
  field :entidad, type: Integer
  field :tipo_distrito, type: String #local, federal

  field :genero, type: Integer
  field :partido, type: String

  field :correo, type: String
  embeds_many :telefonos
  embeds_many :links

  embeds_many :puestos #de comisiones

  embeds_many :reviews
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

  def self.deDistritos(distritos)
    dtos = distritos.map {|dto| dto.id}
    dtos << 'sf'+distritos.first.entidad
    any_in("distrito.id" => dtos).desc(:eleccion)
  end

  def stub
    I18n.transliterate(nombre).downcase.gsub(/[^a-z\s]/, '').gsub(' ', '-')
  end

  def congreso
    return "Diputado #{tipo}" unless tipo == 'senador'
    "Senador"
  end

  def distrito_json
    return "Distrito #{distrito['id'].split(/-/)[1]}" unless tipo == 'senador'
    entidad
  end

  def as_json(options={})
    attrs = super(options)
    attrs["id"] = attrs["_id"].to_s
    attrs["stub"] = stub
    attrs
  end
	
end


class Review
  include Mongoid::Document

  field :created, type: Time, default: -> {Time.now}
  field :reviewed, type: Boolean, default: false
  field :changeSet, type: Hash

end

class Puesto
  include Mongoid::Document

  field :_id, type: NilClass, default: nil, overwrite: true
  field :puesto, type: String
  belongs_to :comision, class_name: 'Comision'

  def as_json(options={})
    attrs['comision'] = attrs['comision'].to_s
    attrs.delete 'comision_id'
    attrs
  end

end

class Link
  include Mongoid::Document

  field :_id, type: NilClass, default: nil, overwrite: true

  field :servicio, type: String
  field :url, type: String

end