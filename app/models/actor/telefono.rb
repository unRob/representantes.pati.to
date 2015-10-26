class Telefono
  include Mongoid::Document

  field :_id, type: NilClass, default: nil, overwrite: true

  field :numero, type: String
  field :extension, type: String

end