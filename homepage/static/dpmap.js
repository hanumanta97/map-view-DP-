var url = 'http://localhost:8910'

var OSMLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
})

var wmsSource_boundary = new ol.source.ImageWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  params: {
    'LAYERS': 'TUMC_CIMS:boundary', 'TILED': true,
    CQL_FILTER: '',
  },
  serverType: 'geoserver',
});

var wmsLayer_boundary = new ol.layer.Image({
  source: wmsSource_boundary
});



var view = new ol.View({
  // projection: 'EPSG:4326',
  projection: 'EPSG:3857',
  zoom: 15,
  // center: [73.02, 19.19]
  // center: [0, 0]
  center: [8121080, 2179051],
  rotation: 0,
  enableRotation: false,
  // enableRotation:true,
  extent: [
    8053175.3886260651051998, 2132338.2525001205503941, 8206165.8987565543502569, 2211079.1521550379693508
  ],
  minZoom: 10,
  maxZoom: 28
})

var map = new ol.Map({
  layers: [
    OSMLayer,
    wmsLayer_boundary,
  ],
  view: view,
  target: 'map'
});