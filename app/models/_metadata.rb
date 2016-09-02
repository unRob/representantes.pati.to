class Meta
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic

  field :_id, type: NilClass, default: nil, overwrite: true
  field :fkey, type: String
  field :lastCrawl, type: Time
  field :creado, type: Time, default: ->{ Time.now }

  embedded_in :metadateble, polymorphic: true

end