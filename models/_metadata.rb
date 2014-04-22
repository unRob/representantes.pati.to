class Meta
  include Mongoid::Document

  field :_id, type: NilClass, default: nil, overwrite: true
  field :fkey, type: String
  field :lastCrawl, type: Time
  field :creado, type: Time, default: ->{ Time.now }

end