info = {
  camara: 'diputados',
  romano: 'lxii',
  empieza: Time.parse('2015-09-01'),
  termina: Time.parse('2018-08-31')
}

urls = {
  base: 'http://sitl.diputados.gob.mx/LXIII_leg/',
  lista: 'http://sitl.diputados.gob.mx/LXIII_leg/listado_diputados_gpnp.php?tipot=TOTAL',
  comisiones: 'http://sitl.diputados.gob.mx/LXIII_leg/listado_de_comisioneslxiii.php?tct='
}

Secretario::Legislaturas.registra(info) do

  comisiones = [
    'http://sitl.diputados.gob.mx/LXIII_leg/integrantes_de_comisionlxiii.php?comt=1', # mesa directiva
    'http://sitl.diputados.gob.mx/LXIII_leg/integrantes_de_comisionlxiii.php?comt=5', # administración
  ]
  comisiones += [1,2].map {|com|
    Secretario::HTTP.get(urls[:comisiones]+com.to_s).css('tr a.linkVerde').map {|link|
      'http://sitl.diputados.gob.mx/LXIII_leg/' + link.attr('href')
    }
  }.flatten


  lista :comisiones, comisiones
  lista :actores, Secretario::HTTP.get(urls[:lista]).css('.linkVerde').map { |link|
    urls[:base] + link.attr('href')
  }

  set :telefonos, {
    4 => '56281300',
    5 => '50363000'
  }

end