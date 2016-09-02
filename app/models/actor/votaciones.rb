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