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

def formatoTelefono digitos, sinLD = false
  formatted = case digitos.length
    when 13, digitos.match(/^044/)
       # 044 55 5555 5555
      if digitos.match(/^044(55|33|81)/)
        digitos.scan(/^(\d{3})(\d{2})(\d{4})(\d{4})$/)
      else
        # 044 777 777 777
        digitos.scan(/^(\d{3})(\d{3})(\d{3})(\d{3})$/)
      end
    when 12
       # 01 55 5555 5555
      if digitos.match(/^01(55|33|81)/)
        digitos.scan(/^(\d{2})(\d{2})(\d{4})(\d{4})$/)
      else
        # 01 777 777 7777
        digitos.scan(/^(\d{2})(\d{3})(\d{3})(\d{4})$/)
      end
    # 777 777 7777
    when 10 then digitos.scan(/^(\d{3})(\d{3})(\d{4})$/)
    # 5555 5555
    when 8 then digitos.scan(/^(\d{4})(\d{4})$/)
    # 777 7777
    when 7 then digitos.scan(/^(\d{3})(\d{4})$/)
    else
      raise "No se que hacer con #{digitos.length} dígitos <#{digitos.match(/^044/)}>"
  end.flatten.join(' ')

  formatted = formatted.gsub(/^01\s?/, '') if sinLD
  formatted
end