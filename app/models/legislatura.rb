class Legislatura
  include Mongoid::Document

  field :entidad, type: String
  field :numero, type: Integer

  field :inicio, type: Time
  field :fin, type: Time
  field :activa, type: Boolean, default: true


  index(activa: 1)
  index(numero: 1)

end