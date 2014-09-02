module MustacheTpl

  @@templates = {}

  def self.mustache_contents(file)
    file = "./views/#{file}.erb"
    unless @@templates[file]
      @@templates[file] = File.read(file)
    end
    @@templates[file]
  end

  def self.render template, data
    Mustache.render self.mustache_contents(template), data
  end

end
