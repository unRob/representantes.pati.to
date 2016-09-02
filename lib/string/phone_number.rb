module PhoneNumber
  refine String do
    def as_phone_number area_code = false
      formatted = case self.length
        when 13, self.match(/^044/)
           # 044 55 5555 5555
          if self.match(/^044(55|33|81)/)
            self.scan(/^(\d{3})(\d{2})(\d{4})(\d{4})$/)
          else
            # 044 777 777 777
            self.scan(/^(\d{3})(\d{3})(\d{3})(\d{3})$/)
          end
        when 12
           # 01 55 5555 5555
          if self.match(/^01(55|33|81)/)
            self.scan(/^(\d{2})(\d{2})(\d{4})(\d{4})$/)
          else
            # 01 777 777 7777
            self.scan(/^(\d{2})(\d{3})(\d{3})(\d{4})$/)
          end
        # 777 777 7777
        when 10 then self.scan(/^(\d{3})(\d{3})(\d{4})$/)
        # 5555 5555
        when 8 then self.scan(/^(\d{4})(\d{4})$/)
        # 777 7777
        when 7 then self.scan(/^(\d{3})(\d{4})$/)
        else
          raise "No se que hacer con #{self.length} dígitos <#{self.match(/^044/)}>"
      end.flatten.join(' ')

      formatted = formatted.gsub(/^01\s?/, '') unless area_code
      formatted
    end
  end
end