module Files

	def self.with_files dir
		Dir.glob(dir).sort.each {|f| yield f }
	end

	# Requiere todos los archivos de un directorio
	def self.require_dir dir
		self.with_files "#{dir}/**/*.rb" do |f|
      begin
  			require f
      rescue Exception => e
        puts "Could not load #{f}"
        puts e
        puts e.backtrace
      end
		end
	end

end