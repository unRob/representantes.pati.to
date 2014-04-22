class String
	
  def clean
    self.dup.clean!
  end

  def clean!
    if self.match(/^\s+$/)
      return nil
    end
    self.strip!
    self.gsub!(/\s{2,}/, ' ')
    self
  end

end