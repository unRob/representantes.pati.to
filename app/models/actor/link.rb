class Link
  include Mongoid::Document

  embedded_in :actor
  field :_id, type: NilClass, default: nil, overwrite: true

  field :servicio, type: String
  field :url, type: String

end