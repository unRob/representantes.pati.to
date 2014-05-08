module Entidades

  @@entidades = [
    "aguascalientes",
    "baja california",
    "baja california sur",
    "campeche",
    "coahuila",
    "colima",
    "chiapas",
    "chihuahua",
    "distrito federal",
    "durango",
    "guanajuato",
    "guerrero",
    "hidalgo",
    "jalisco",
    "méxico",
    "michoacán",
    "morelos",
    "nayarit",
    "nuevo león",
    "oaxaca",
    "puebla",
    "querétaro",
    "quintana roo",
    "san luis potosí",
    "sinaloa",
    "sonora",
    "tabasco",
    "tamaulipas",
    "tlaxcala",
    "veracruz",
    "yucatán",
    "zacatecas"
  ]

  def self.entidades
    @@entidades
  end

  def self.nombre_de_entidad indice
    self.entidades[indice-1]
  end

  def self.entidad_de_nombre
    self.entidades.index(indice+1)
  end

end