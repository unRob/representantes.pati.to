class Puesto
  include Mongoid::Document

  field :_id, type: NilClass, default: nil, overwrite: true
  field :puesto, type: String
  embedded_in :actor
  belongs_to :comision, class_name: 'Comision'

  def as_json(options={})
    attrs = super(options)
    attrs['comision'] = attrs['comision'].to_s
    attrs.delete 'comision_id'
    attrs
  end

end