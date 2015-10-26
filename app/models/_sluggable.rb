module Sluggable

  def self.included klass
    klass.extend Sluggable::ClassMethods
    klass.include Sluggable::InstanceMethods
  end

  module InstanceMethods
    using ::SluggableString

    def slug
      property = self.class.class_variable_get :@@sluggable_property
      [
        self.class.name.slug,
        self.send(property).slug
      ].flatten.join('/')
    end

  end

  module ClassMethods
    def set_slug property
      self.class_variable_set :@@sluggable_property, property
    end
  end

end