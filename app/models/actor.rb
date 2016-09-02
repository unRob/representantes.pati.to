# encoding: utf-8

ActiveSupport::Inflector.inflections do |inflect|
  inflect.plural(/^(meta)$/i, 'meta')
  inflect.singular(/^(meta)$/i, 'meta')
end

class Actor
	include Mongoid::Document
  include Sluggable

  store_in collection: 'actores'

  embeds_one :meta, as: :metadateable
  accepts_nested_attributes_for :meta

  field :camara, type: String #local, federal, senado
    validates :camara, inclusion: { in: ['local', 'federal', 'senado'] }
  field :nombre, type: String
  set_slug :nombre

  field :apellido, type: String
  field :_transliterado, type: String #el nombre y apellido transliterado para búsquedas
  field :distrito, type: String
    validate :distrito, :distrito_correcto
  field :entidad, type: Integer

  field :activo, type: Boolean, default: true
  belongs_to :legislatura


  field :genero, type: Integer
    validates :genero, inclusion: { in: [0,1] }
  field :partido, type: String

  field :correo, type: String

  field :imagen
  # field :puestos, type: Array
  field :suplente, type: String
  field :eleccion, type: String #mayoría relativa, primera minoría, representación proporcional
    validates :eleccion, inclusion: { in: ['mayoría relativa', 'primera minoría', 'representación proporcional'] }

  # Diputados
  field :curul, type: String
  field :cabecera, type: String

  embeds_many :telefonos
  embeds_many :links
  embeds_many :puestos #de comisiones

  embeds_one :inasistencias, class_name: 'Inasistencias'
  embeds_one :votaciones, class_name: 'Votaciones'
  embeds_many :revisiones, class_name: "Revision"

  # Indexes
  index({activo: 1})
  index({camara: 1})
  index({distrito: 1})
  index({entidad: 1})
  index({"meta.fkey" => 1}, {unique: true})
  index({nombre: 1})
  index({partido: 1})
  index({_transliterado: 1})

  default_scope ->{ where(activo: true) }
  scope :deDistritos, ->(distritos) {
    dtos = distritos.map {|dto| dto.id}
    puts dtos
    any_in("distrito" => dtos).desc(:distrito).desc(:eleccion)
  }



  #--------------
  # Validaciones
  #--------------
  before_save do |doc|
    self._transliterado = I18n.transliterate(nombre).downcase
  end

  def distrito_correcto
    expr = /^d[lf]-[1-3]{,1}\d-(\d{1,2}|rp|c[1-5])$/
    errors.add(:distrito, 'Formato incorrecto') unless !(distrito =~ expr).nil?
  end




  def nombre
    if apellido
      super+" "+apellido
    else
      super
    end
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
    attrs['links'] = attrs['links'] || []
    attrs['meta']['lastCrawl'] = l(meta.lastCrawl, '%d de %B, %y %H:%M:%S')
    attrs
  end

end