class Assets

  require 'sass'
  require 'coffee-script'

  # Root containing css and js folders
  @root = nil
  # map of dependencies
  @map = {}
  # Valid extensions
  @extensions = ['.js', '.css', '.sass', '.scss', '.coffee']

  def self.root= root
    @root = root
    Sass.load_paths << "#{@root}/css"

    Dir.glob("#{root}/**/*").each do |p|
      next unless File.file? p
      add_to_map(p)
    end

  end

  def self.map
    @map
  end

  def self.root
    @root
  end


  def self.get_file relative_path
    @map[relative_path]
  end

  def self.add path
    add_to_map path
    rp = relative_path(path)
    file = @map[rp]

    [file]
  end

  def self.modify path
    rp = relative_path(path)
    file = @map[rp]
    file.touch

    changed = [file]

    file.dependants.each do |parent|
      changed << get_file(parent)
    end
    changed
  end

  def self.delete path
    rp = relative_path(path)
    file = @map[rp]

    changed = []
    file.dependants.each do |parent|
      @map[parent].touch
      changed << parent
    end

    @map.delete rp
    changed
  end


  def self.relative_path path
    # regresa "js/main" de "/path/to/assets/js/main.coffee"
    path.gsub("#{@root}/", '').gsub(File.extname(path), '')
  end


  private

  def self.type_for path
    return :js if path =~ /\.(js|coffee)$/
    return :css if path =~ /\.(s?css|sass)$/
  end


  def self.add_to_map path
    return false unless @extensions.include? File.extname(path)

    # /Users/rob/Sites/representantes2/assets/js/portada.coffee
    type = type_for(path) # :js
    rp = relative_path(path) # js/portada

    if @map.keys.include? rp
      file = @map[rp]
    else
      file = AssetCompiler::instance(type)
    end

    file.path = path

    # Lo agregamos al mapa
    @map[rp] = file
    



    # [js/jquery, js/mustache]
    file.dependencies.each do |dependency|

      dependency_relative_path = "#{type}/#{dependency}"
      

      # si no está en el mapa, lo ponemos
      unless @map.keys.include? dependency_relative_path
        #puts "instanciando dependencia #{dependency_relative_path}"
        dep = AssetCompiler::instance(type)
      else
        dep = @map[dependency_relative_path]
      end
      dep.set_dependant rp
      
      #puts "Agregando (#{dependency_relative_path}) a #{rp}"
      @map[dependency_relative_path] = dep
    end
  end

end

module AssetCompiler

  def self.instance(type)
    return AssetCompiler::JSCompiler.new  if type == :js
    return AssetCompiler::CSSCompiler.new if type == :css
    puts "No se como compilar #{type}"
    exit
  end

  class CompilationError < Exception
    @msg = nil
    @backtrace = nil
    def initialize(file, line, error)

    end
  end

  class AbstractCompiler
    
    attr_reader :path, :relative_path

    def initialize
      @type = nil
      @contents = ''
      @compiled = ''
      @path = nil
      @dependencies = []
      @dependants = []
      @matcher = 'asdf'
    end
  
    def type
      @type
    end

    def path= path
      @path = path
      @relative_path = Assets.relative_path(path)
      touch
    end

    def set_dependencies
      @dependencies = @contents.scan(@matcher).flatten
    end

    def set_dependant parent
      @dependants.push(parent).uniq
    end

    def dependencies
      @dependencies
    end

    def dependants
      @dependants
    end

    def touch
      begin
        @contents = File.read(@path)
        set_dependencies
      rescue Exception => e
        puts self.inspect
        puts e
        puts e.backtrace
        exit
      end
    end

    def to_s
      do_compilation
    end
  end




  class JSCompiler < AbstractCompiler
    
    def initialize
      super
      @matcher = /#= require\s+([\w]+)/
      @options = {bare: true}
      @type = :js
    end

    def do_compilation
      touch
      @compiled = ''

      dependencies.each do |dep|
        contents = Assets.get_file("#{@type}/#{dep}").to_s
        return nil if !contents
        @compiled += contents+"\n"
      end

      if @path =~ /\.coffee$/
        begin
          @compiled += CoffeeScript.compile(@contents, @options)
        rescue Exception => e
          puts "Error en #{path}"
          puts e
          return nil
        end
      else
        @compiled += @contents
      end
      @compiled
    end

  end

  class CSSCompiler < AbstractCompiler
    

    def initialize
      super
      @matcher = /@import\s+"([^"]+)";/
      @type = :css
      @options = {style: :compressed, cache: false}
    end

    def do_compilation
      return nil if dependants.count > 0 && relative_path =~ %r{/_.+}

      touch
      begin
        return Sass.compile @contents, @options
      rescue Sass::SyntaxError => e
        puts e.sass_backtrace_str path
        nil
      end
    end
  end

end