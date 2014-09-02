# Representantes Pati.to

http://representantes.pati.to

## Como contribuir

En corto, con los distritos electorales de tu estado, en formato [GeoJSON](http://geojson.org), así como la información de tu congreso local.

### Distritos electorales y Secciones
Corriendo `./bin/distritos` podemos tomar el [Marco Geográfico Nacional](https://github.com/unRob/informacion-publica) que me dió el IFE, e ingestarlo a MongoDB.


### Crawler
con este script iniciamos la base de datos, corriendo `bin/crawl`

```text
usage: ./crawl camara:accion [test]
Cámaras:
  - diputados
  - senado
Acciones:
  actores, comisiones, asistencias
```

La explicación larga está en el [wiki](../../wiki/Como-contribuir), y para echar a andar tu entorno de desarrollo, puedes leer [los primeros pasos](../../wiki/First-RUN,-Forrest!-RUN!)
