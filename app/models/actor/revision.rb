class Revision
  include Mongoid::Document

  embedded_in :actor
  field :creada, type: Time, default: -> {Time.now}
  field :aceptado, type: Boolean, default: false
  field :changeSet, type: Hash

end