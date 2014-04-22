# Cámara local

Para poder tener tus diputados locales en la base de datos necesitamos tres cosas, como mínimo:

1. La lista de secciones electorales federales por distrito local,
2. La lista de comisiones del congreso local
3. la lista de diputados locales


## Secciones electorales

Cada distrito local está compuesto por una lista de secciones federales, y estos se pueden describir así:

```javascript
{
    "_id": "dl-{entidad_numerica}-{id_distrito_local}", // por ejemplo: dl-9-12
    "tipo": "local", // El tipo de distrito, en este caso, local
    "entidad": "entidad_numérica", // El índice numérico de la entidad, por ejemplo 9 para el DF
    "secciones": ["<id_seccion_federal>..."], // por ejemplo, "9-4581"
}
```

Las secciones electorales ya están en la base de datos, y corresponden al formato: `entidad`-`idSeccion`, donde `idSeccion` es un número entero como el que aparece en tu credencial de elector.

Los distritos se pueden ingestar así:

```ruby
#!/usr/bin/env ruby
# encoding: utf-8

require_relative '../common.rb'

listaDistritos = JSON.parse(File.open('./data/distritos.json'), symbolize_keys: true)
#Asumiendo que éstos son un array del ejemplo anterior

listaDistritos.each do |distrito|
    Distrito.create!(distrito)
end
```

Una vez con los datos de cada distrito local, entonces podemos generar la lista de comisiones y diputados.

## Comisiones

Para ingestar comisiones, debemos de tener una lista de las mismas, como las que vienen en las páginas de estos chatos.

Debemos de crear una carpeta dentro de `./camaras` con la siguiente estructura:

```
- camaras
    - diputados
    - senado
    - 09-Distrito-Federal
        - actor.rb
        - asistencias.rb
        - comisiones.rb
        - endpoints.rb
        - lista.rb
```

Dónde el nombre de la carpeta corresponde al índice de tu entidad, seguido del nombre de la misma.

Para comenzar, sería bueno especificar ciertos **endpoints**:

### Requests HTTP y así

Tenemos dos métodos que nos ayudan a hacer requests paralelas y una por una:

#### request

Con este podemos hacer un request a la vez, y nos regresa el body del request al bloque que le pasemos, por ejemplo:

```ruby
# encoding: utf-8
request('http://un-url.com') do |data|
    puts data # <html><head></head><body><p>Hola, burocracia!</p></body></html>
end
```


#### Crawler

Con este podemos mandarle un array de `requests` y un endpoint para hacer requests paralelos, con un bloque a ejecutarse cuando todo salga bien, por ejemplo:

```ruby
requests = [{id: 1}, {id: 2}]
actores = Crawler.new "http://un-url.com/diputados/{{id}}" # el mismo key de cada `requests`
actores.requests = requests

actores.run do |response, request|
    puts request # {id: 1, url: "http://un-url.com/diputados/1"}
    puts response # <html><head></head><body><p>Hola, burocracia!</p></body></html>
end

```


### Endpoints.rb

Acá especificamos dónde se encuentran los recursos que estamos crawleando.

```ruby
module Parser
    
    # tu módulo se debe llamar igual a la carpeta, reemplazando
    # guiones por espacios, sin incluir el índice de la entidad
    module DistritoFederal

        def self.endpoints
            {
                base: 'http://micongreso.entidad.gob.mx/',
                lista: 'http://micongreso.entidad.gob.mx/lista_de_diputados',
                actor: 'http://micongreso.entidad.gob.mx/ver_diputado/{{id_del_diputado}}',
                lista_comisiones: 'http://micongreso.entidad.gob.mx/lista_comisiones' 
            }
        end

    end

end
```


### Lista.rb

Con este script obtenemos una lista de diputados a iterar, algo así:

```ruby
# encoding: utf-8

module Parser

    module DistritoFederal

        class Lista

            def initialize
                @ids = []
                #mod es el módulo actual, en este caso Parser::DistritoFederal
                request(mod.endpoints[:lista]) do |data|
                    doc = Nokogiri::HTML(data)
                    doc.encoding = 'utf-8'
                    @ids = doc.css('.un-diputado-local').map { |link|
                        #el nombre de la variable corresponde a aquel que usaremos en endpoints[:actor]
                        {id_del_diputado: link.attr('href').gsub(/\D/, '')}
                    }
                end
            end

            def to_a
                @ids
            end

            def count
                @ids.count
            end

        end

    end

end
```

### Comision.rb

De acá sacamos las comisiones de cada cámara, y debemos hacerlo **antes** de agregar actores!

```ruby
#!/usr/bin/env ruby
# encoding: utf-8
module Parser

    module Diputados

        class Comision
            attr_accessor :requests
            
            def initialize
                ## la lista de páginas para hacer requests de endpoints[:lista_comisiones]
                @requests = [{id: 1}, {id: 1}]
            end

            def parse data, request
                data = JSON.parse(data, symbolize_keys: true)
                data.comisiones.each do |c|
                    comision = {
                        camara: 'local',
                        entidad: 9,
                        meta: {
                            fkey: c[:url],
                            lastCrawl: Time.now
                        },
                        nombre: c[:nombre],
                        oficina: c[:piso]+" "+c[:oficina],
                        telefonos: [
                            {numero: c[:telefono], extension: c[:extension]}
                        ]
                    }

                    #por cada comision parseada, yieldeamos el valor de la misma
                    yield comision
                end

            end

        end
    end
end
```

### Actor.rb

Acá es dónde se arma el pedo chido, y sólo necesitamos un método `parse`

```ruby
# encoding utf-8

module Parser
    
    module DistritoFederal

        # OPCIONAL
        def self.test
            # método si quieres hacer pruebas con ./crawl 09-Distrito-Federal:actores
        end

        class Actor

            def initialize
                # si debes hacer requests antes o inicializar madres
            end

            # @param data [String] el body del request
            # @param request [Hash], los datos del request
            def parse data, request
                #este método se ejecutará una vez por diputado
                actor = {
                    meta: {
                        fkey: request[:url],
                        lastCrawl: Time.now
                    },
                    camara: "local",
                    distrito: "dl-#{índice_entidad}-#{id_distrito_local}",
                    entidad: 9,
                    tipo_distrito: "local",

                    nombre: "Doña Diputada Local",
                    partido: "psm", # pri,pan,prd,pvem,pt,mc,panal,nil
                    genero: 0, # 1 para batos, 2 para morras (yo se que hay más géneros, pero meh)
                    eleccion: "mayoría relativa" # ó representación proporcional
                    suplente: "Don Suplente",
                    curul: nil, # o un string en caso de que tenga
                    cabecera: "Super Municipio", # la cabecera de este distrito

                    puestos: [
                        {
                            puesto: "integrante",
                            comision: Comision.findOne("meta.fkey" => 'url-de-comision')
                        }
                    ],

                    correo: "diputada.local@congreso.local.gob.mx",
                    telefonos: [
                        {numero: "55424242", extension: "31415"}
                    ],
                    links: [
                        {servicio: "twitter", url: "https://twitter.com/unaDiputadaLocal"}
                    ],
                    imagen: "http://url-para-imagen.com",

                }

                # debemos regresar el actor ya parseado
                return actor
            end

        end

    end

end
```

