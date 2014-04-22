class Seccion
	include Mongoid::Document
  store_in collection: 'secciones'


  field :_id, type: String, overwrite: true
  field :entidad, type: Integer
  field :municipio, type: Integer

  # Id del Marco Geográfico nacional
  field :idMGN, type: Integer 
  field :seccion, type: Integer
  field :tipo, type: Integer
  field :coords, type: Hash

  def self.paraCoordenadas coords
    self.geo_spacial(:coords.intersects_point => coords).first
  end

end