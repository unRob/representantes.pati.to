class Comision
	include Mongoid::Document
  store_in collection: 'comisiones'

  embeds_one :meta, class_name: 'Meta'
  field :camara, type: String
  field :nombre, type: String
  field :oficina, type: String
  field :link, type: String

  embeds_many :telefonos
  has_and_belongs_to_many :integrantes, class_name: 'Actor'

  index({"meta.fkn" => 1}, {unique: true, name: 'fkn_index'})
  index({"integrante_ids" => 1})
  index({camara: 1})

end