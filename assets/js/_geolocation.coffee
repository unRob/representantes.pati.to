class Geolocation
  constructor: (option)->
    @geocoder = null
    @gl = null
    @latitude = null
    @longitude = null
    @option =
      success:(obj)->
      notFunction:->
      unknown:(error)->
      forbidden:(error)->
      timeOut:(error)->
      lang:"es"
    @_extends option
    @_init()


  _extends:(option)->
    if option is undefined
      return
    for param of option
      @option[param] = option[param]
    @

  _init:->
    if window.google?.maps
      @geocoder = new google.maps.Geocoder()
    @gl = navigator.geolocation;
    @

  getCurrentPosition:->
    gl = @gl
    if gl
      gl.getCurrentPosition @_successGl, @_error
    else
      @option.notFunction.call @
    @

  _error:(error)=>
    opt = @option
    if error
      switch error.code
        when 1
          opt.forbidden.call @, error
        when 3
          opt.timeOut.call @, error
        when 0,2
          opt.unknown.call @, error
        else
          opt.unknown.call @, error
    @

  _successGl:(position)=>
    @latitude = position.coords.latitude
    @longitude = position.coords.longitude
    geo = @geocoder
    if geo
      geo.geocode
        latLng:new google.maps.LatLng position.coords.latitude, position.coords.longitude
        language:@option.lang
        @_successGeo
    else
      @option.success.call @,
        latitude:@latitude
        longitude:@longitude
    @

  _successGeo:(results, status)=>
    @option.success.call @,
      latitude:@latitude
      longitude:@longitude
    @
