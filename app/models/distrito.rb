class Distrito
	include Mongoid::Document

  field :_id, type: String, overwrite: true
  field :tipo, type: String
  field :entidad, type: String
  field :secciones, type: Array

  index({entidad: 1})
  index({secciones: 1})

  def self.deSeccion seccion
    where(secciones: seccion.id).without(:secciones)
  end

end