class Entidad

  DATA = [
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

  def self.todas
    DATA
  end

  def self.[] indice
    DATA[indice-1]
  end

  def self.llamada indice
    DATA.index(indice)+1
  end

end