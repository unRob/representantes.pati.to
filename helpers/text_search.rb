#encoding: utf-8
module TextSearch

  @@traducciones = {
    a: %w{á a}.join(''),
    e: %w{é e}.join(''),
    i: %w{í i}.join(''),
    o: %w{ó o}.join(''),
    u: %w{ú u}.join(''),
    n: %w{ñ n}.join('')
  }

  def self.to_regex str

    str.downcase!
    copy = I18n.transliterate(str)
    

    @@traducciones.each do |letra,reemplazos|
      copy = copy.gsub(letra.to_s, "[#{reemplazos}]")
    end

    /#{copy}/i
  end

end
require 'i18n'