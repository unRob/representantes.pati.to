module Log

  def self.info(msg, nl=true)
    self.write(:info, msg, nl)
  end

  def self.warn(msg, nl=true)
    self.write(:warn, msg, nl)
  end

  def self.error(msg, nl=true)
    self.write(:error, msg, nl)
  end

  def self.debug(msg, nl=true)
    self.write(:debug, msg, nl)
  end

  def self.json(msg, nl=nil)
    self.out header(:debug)+"\n"
    self.out JSON.pretty_generate(msg)
  end

  private

  def self.header(type)
    "[#{type.upcase}]   #{Time.now}"
  end

  def self.write(type, msg, nl)
    nl = "\n" unless nl == false
    self.out "#{header(type)} - #{msg}#{nl}";
  end

  def self.out str
    $stdout << str
  end
end