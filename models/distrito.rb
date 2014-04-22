class Distrito
	include Mongoid::Document

  field :tipo, type: String
  field :entidad, type: String
  field :secciones, type: Array


  def self.deSeccion seccion
    where(secciones: seccion.id)
  end

end