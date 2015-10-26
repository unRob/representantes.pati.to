class Inasistencias
  include Mongoid::Document

  embedded_in :actor
  field :_id, type: NilClass, default: nil, overwrite: true
  field :total, type: Integer
  field :sesiones, type: Integer
  field :periodos, type: Hash

end