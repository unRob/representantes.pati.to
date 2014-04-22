# Representantes Pati.to

http://representantes.pati.to

## Distritos electorales y Secciones
Corriendo `./bin/distritos` podemos tomar el [Marco Geográfico Nacional](https://github.com/unRob/informacion-publica) que me dió el IFE, e ingestarlo a MongoDB.

## Crawler
De acá sacamos (casi) todos los datos, corriendo `bin/crawl`

```text
usage: ./crawl camara:accion [test]
Cámaras:
  - diputados
  - senado
Acciones:
  actores, comisiones, asistencias
```

## Como contribuir

En corto, con los distritos electorales de tu estado, en formato [GeoJSON](http://geojson.org), así como la información de tu congreso local.

Ve [camaras/ejemplo.md] para obtener más información