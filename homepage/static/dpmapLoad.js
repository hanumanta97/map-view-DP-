var url = "http://127.0.0.1:8910"
// var url = "http://103.121.74.84:8910"


var OSMLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
})

function updateSize() {
  map.updateSize();
  map.renderSync();
}

var wms_basemap_point = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:basemap_point', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var wmsLayer_basemap_point = new ol.layer.Tile({
  source: wms_basemap_point
});

var DP_Source = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'DP:DP_MBMC', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var DP_Layer = new ol.layer.Tile({
  source: DP_Source
});


var ALL_CTS_BNDs = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:ALL_CTS_BNDs', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var ALL_CTS_BNDs_Layer = new ol.layer.Tile({
  source: ALL_CTS_BNDs
});

var Arrow = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Arrow', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Arrow_Layer = new ol.layer.Tile({
  source: Arrow
});

var Building_Footprint_Label = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Building_Footprint_Label', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Building_Footprint_Label_Layer = new ol.layer.Tile({
  source: Building_Footprint_Label
});


var Building_Footprints = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Building_Footprints', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Building_Footprints_Layer = new ol.layer.Tile({
  source: Building_Footprints
});

var CRZ_2019_R1 = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:CRZ_2019_R1', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var CRZ_2019_R1_Layer = new ol.layer.Tile({
  source: CRZ_2019_R1
});

var CTS_Boundary_R1 = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:CTS_Boundary_R1', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var CTS_Boundary_R1_Layer = new ol.layer.Tile({
  source: CTS_Boundary_R1
});

var Cadastre_Boundary_R1 = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Cadastre_Boundary_R1', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Cadastre_Boundary_R1_Layer = new ol.layer.Tile({
  source: Cadastre_Boundary_R1
});

var Congested_Area_Boundary = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Congested_Area_Boundary', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Congested_Area_Boundary_Layer = new ol.layer.Tile({
  source: Congested_Area_Boundary
});

var Corporation_Boundary = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Corporation_Boundary', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Corporation_Boundary_Layer = new ol.layer.Tile({
  source: Corporation_Boundary
});

var Creek = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Creek', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Creek_Layer = new ol.layer.Tile({
  source: Creek
});

var DP_Boundary_R1 = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:DP_Boundary_R1', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var DP_Boundary_R1_Layer = new ol.layer.Tile({
  source: DP_Boundary_R1
});

var DRAFT_RESERVATION_R6_CHANGES = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:DRAFT_RESERVATION_R6_CHANGES', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var DRAFT_RESERVATION_R6_CHANGES_Layer = new ol.layer.Tile({
  source: DRAFT_RESERVATION_R6_CHANGES
});

var ESZ_Boundary = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:ESZ_Boundary', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var ESZ_Boundary_Layer = new ol.layer.Tile({
  source: ESZ_Boundary
});

var Elevated_40M_Road = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Elevated_40M_Road', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Elevated_40M_Road_Layer = new ol.layer.Tile({
  source: Elevated_40M_Road
});

var Elevated_Coastal_Road_R1 = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Elevated_Coastal_Road_R1', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Elevated_Coastal_Road_R1_Layer = new ol.layer.Tile({
  source: Elevated_Coastal_Road_R1
});

var Flyover = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Flyover', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Flyover_Layer = new ol.layer.Tile({
  source: Flyover
});

var GRIDs_a1 = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:GRIDs_a1', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var GRIDs_a1_Layer = new ol.layer.Tile({
  source: GRIDs_a1
});

var Gaothan = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Gaothan', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Gaothan_Layer = new ol.layer.Tile({
  source: Gaothan
});

var M5_PSP = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:M5_PSP', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var M5_PSP_Layer = new ol.layer.Tile({
  source: M5_PSP
});

var MANGROVE_POLYGON = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:MANGROVE_POLYGON', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var MANGROVE_POLYGON_Layer = new ol.layer.Tile({
  source: MANGROVE_POLYGON
});

var METROSTATIONS = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:METROSTATIONS', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var METROSTATIONS_Layer = new ol.layer.Tile({
  source: METROSTATIONS
});

var MIDC = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:MIDC', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var MIDC_Layer = new ol.layer.Tile({
  source: MIDC
});

var MODIFICATION_NO = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:MODIFICATION_NO', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var MODIFICATION_NO_Layer = new ol.layer.Tile({
  source: MODIFICATION_NO
});

var MODIFICATION_PLU_R1 = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:MODIFICATION_PLU_R1', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var MODIFICATION_PLU_R1_Layer = new ol.layer.Tile({
  source: MODIFICATION_PLU_R1
});

var Metroline = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Metroline', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Metroline_Layer = new ol.layer.Tile({
  source: Metroline
});

var Modification_Cross_Line = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Modification_Cross_Line', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Modification_Cross_Line_Layer = new ol.layer.Tile({
  source: Modification_Cross_Line
});

var Modification_Line = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Modification_Line', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Modification_Line_Layer = new ol.layer.Tile({
  source: Modification_Line
});

var NH_EW_Label = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:NH_EW_Label', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var NH_EW_Label_Layer = new ol.layer.Tile({
  source: NH_EW_Label
});

var Nala_Line_R1 = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Nala_Line_R1', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Nala_Line_R1_Layer = new ol.layer.Tile({
  source: Nala_Line_R1
});

var Outer_Road = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Outer_Road', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Outer_Road_Layer = new ol.layer.Tile({
  source: Outer_Road
});

var Power_Transmission_Line = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Power_Transmission_Line', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Power_Transmission_Line_Layer = new ol.layer.Tile({
  source: Power_Transmission_Line
});

var Proposed_Flyover = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Proposed_Flyover', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Proposed_Flyover_Layer = new ol.layer.Tile({
  source: Proposed_Flyover
});

var Published_Srvy_Line = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Published_Srvy_Line', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Published_Srvy_Line_Layer = new ol.layer.Tile({
  source: Published_Srvy_Line
});

var Railway = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Railway', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Railway_Layer = new ol.layer.Tile({
  source: Railway
});

var Railway_over_Bridge = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Railway_over_Bridge', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Railway_over_Bridge_Layer = new ol.layer.Tile({
  source: Railway_over_Bridge
});

var Road_Label_R1 = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Road_Label_R1', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Road_Label_R1_Layer = new ol.layer.Tile({
  source: Road_Label_R1
});

var Subway_Line = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Subway_Line', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Subway_Line_Layer = new ol.layer.Tile({
  source: Subway_Line
});

var Transmission_Tower = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Transmission_Tower', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Transmission_Tower_Layer = new ol.layer.Tile({
  source: Transmission_Tower
});

var Village_Boundary_R1 = new ol.source.TileWMS({
  url: `${url}/geoserver/DP/wms`,
  /* url: `/proxy/{url}/geoserver/TUMC_CIMS/wms`, */
  params: { 'LAYERS': 'DP:Village_Boundary_R1', 'TILED': true },
  serverType: 'geoserver', crossOrigin: 'anonymous'
});

var Village_Boundary_R1_Layer = new ol.layer.Tile({
  source: Village_Boundary_R1
});


var LayerList_old = [
  OSMLayer,
  // DP_Layer,
  // ,
  M5_PSP_Layer
  , GRIDs_a1_Layer
  , MODIFICATION_NO_Layer
  , Published_Srvy_Line_Layer
  , Congested_Area_Boundary_Layer
  , Nala_Line_R1_Layer
  , CRZ_2019_R1_Layer
  , Modification_Line_Layer
  , Modification_Cross_Line_Layer
  , ESZ_Boundary_Layer
  , Road_Label_R1_Layer
  , NH_EW_Label_Layer
  , Proposed_Flyover_Layer
  , Flyover_Layer
  , METROSTATIONS_Layer
  , Outer_Road_Layer
  , Elevated_Coastal_Road_R1_Layer
  , Elevated_40M_Road_Layer
  , Transmission_Tower_Layer
  , Power_Transmission_Line_Layer
  , Metroline_Layer
  , Railway_over_Bridge_Layer
  , Arrow_Layer
  , Subway_Line_Layer
  , Corporation_Boundary_Layer
  , DP_Boundary_R1_Layer
  , Railway_Layer
  , MIDC_Layer
  , ALL_CTS_BNDs_Layer
  , Village_Boundary_R1_Layer
  , Gaothan_Layer
  , CTS_Boundary_R1_Layer
  , Cadastre_Boundary_R1_Layer
  , Building_Footprint_Label_Layer
  , Building_Footprints_Layer
  , MANGROVE_POLYGON_Layer
  , DRAFT_RESERVATION_R6_CHANGES_Layer
  , MODIFICATION_PLU_R1_Layer
  , Creek_Layer
]


var LayerList = [

Corporation_Boundary_Layer
,DP_Boundary_R1_Layer
,Village_Boundary_R1_Layer
,GRIDs_a1_Layer
,MIDC_Layer
,Nala_Line_R1_Layer
,Road_Label_R1_Layer
,NH_EW_Label_Layer
,Proposed_Flyover_Layer
,Flyover_Layer
,METROSTATIONS_Layer
,Outer_Road_Layer
,Elevated_Coastal_Road_R1_Layer
,Elevated_40M_Road_Layer
,Transmission_Tower_Layer
,Power_Transmission_Line_Layer
,Metroline_Layer
,Railway_over_Bridge_Layer
,Arrow_Layer
,Subway_Line_Layer
,Railway_Layer
,Building_Footprint_Label_Layer
,Building_Footprints_Layer
,Creek_Layer
,Published_Srvy_Line_Layer
,Congested_Area_Boundary_Layer
,ALL_CTS_BNDs_Layer
,Gaothan_Layer
,CTS_Boundary_R1_Layer
,Cadastre_Boundary_R1_Layer
,CRZ_2019_R1_Layer
,ESZ_Boundary_Layer
,MANGROVE_POLYGON_Layer
,M5_PSP_Layer
,MODIFICATION_NO_Layer
,Modification_Line_Layer
,Modification_Cross_Line_Layer
,DRAFT_RESERVATION_R6_CHANGES_Layer
,MODIFICATION_PLU_R1_Layer,
OSMLayer
]


var view = new ol.View({
  // projection: 'EPSG:4326',
  projection: 'EPSG:3857',
  zoom: 10,
  // center: [73.02, 19.19]
  // center: [0, 0]
  center: [8109997, 2191492],
  rotation: 0,
  enableRotation: false,
  // enableRotation:true,
  extent: [
    8053175.3886260651051998, 2132338.2525001205503941, 8206165.8987565543502569, 2211079.1521550379693508
  ],
  minZoom: 10,
  maxZoom: 28
})


// map = new ol.Map({
//     layers: [
//         OSMLayer,
//     ],
//     // overlays: [overlay],
//     view: view,
//     target: 'map'
// });


// var legendElement = document.getElementById("legendDiv")
// var Legend = new ol.control.Control({ element: legendElement });

function setArrowStyle(olRotate) {
  let coll1 = olRotate.valueOf('0')
  coll1[0].style.backgroundColor = "rgba(0,0,0,0)"
  coll1[1].style.backgroundColor = "rgba(0,0,0,0)"
  coll1[2].style.backgroundColor = "rgba(0,0,0,0)"
  coll1[3].style.marginLeft = "-30px"
}
var imgTag = document.getElementById("arrow")
var olRotate = document.getElementsByClassName("ol-rotate")
var rotationControl = new ol.control.Rotate({ 'autoHide': false, 'className': 'ol-rotate ol-unselectable ol-control', 'label': imgTag })
var scaleLineControl = new ol.control.ScaleLine();
// scaleLineControl.setUnits('metric')

map = new ol.Map({
  interactions: ol.interaction.defaults({
    doubleClickZoom: false
  }),
  controls: ol.control.defaults({
    attributionOptions: {
      collapsible: false
    }
  })
    .extend([
      scaleLineControl, rotationControl
    ])
  ,
  // layers: [
  //     //   worldImagery,
  //     OSMLayer,
  //     // arrow_layer
  //     DP_Layer,
  //     // ALL_CTS_BNDs_Layer
  // ],
  layers: LayerList.reverse(),
  // overlays: [overlay],
  view: view,
  target: 'map'
});

// map = new ol.Map({
//   layers: [
//     OSMLayer,
//   ],
//   // overlays: [overlay],
//   view: view,
//   target: 'map'
// });
//   wmsLayer_basemap_point.setVisible(true)

setArrowStyle(olRotate)
updateSize()

map.on('moveend', function (e) {
  // var newZoom = map.getView().getZoom();
  map.updateSize()
});

var getFeat = function getFeatAtPix(f, l) {
  console.log(f);
  return f
}

var cardEle = document.getElementsByClassName("card-wrapper")[0]
var cardEle_0 = document.getElementsByClassName("card-wrapper")
var cardparent = document.getElementById('cardSlider')

map.on('singleclick', function (evt) {

  // map.forEachFeatureAtPixel
  var featuresAtPixel = [];
  var featureLayers = [];
  var featureinfo = []
  console.log(evt.pixel);

  var pixel = map.getEventPixel(evt.originalEvent);

  var viewResolution = /** @type {number} */ (view.getResolution());

  // cardEle.parentNode.removeChild(cardEle)
  // let y_ = document.getElementsByClassName("card w-100")[0] 
  // while (y_.children.length !== 0) {
  //   y_.removeChild(y_.lastChild)
  // }
  while (cardEle_0[0].children.length !== 0) {
    cardEle_0[0].removeChild(cardEle_0[0].lastChild)
  }

  // if (cardEle !== null) {
    // cardEle.innerHTML = ""
  // }

  map.forEachLayerAtPixel(pixel, function (lyr_, ftr) {
    // console.log(lyr_);
    console.log(lyr_.getSource());
    console.log(lyr_);
    if (lyr_.getSource().B === "geoserver" && lyr_.N.visible==true) {
      let tempftSource = lyr_.getSource().getGetFeatureInfoUrl(
        evt.coordinate, viewResolution, 'EPSG:3857',
        //   { 'INFO_FORMAT': 'text/html' });
        { 'INFO_FORMAT': 'application/json' });

      console.log(tempftSource);

      $.ajax({
        "type": "GET",
        "url": `${tempftSource}`,
      }
      ).then(function (response) {

        console.log(response);
        let tempFeat_ = response['features']
        // console.log(tempFeat_[0].id);
        // console.log(tempFeat_[0].properties);

        let card_div_1 = document.createElement('div')
        card_div_1.className = "card w-100"
        let card_div_2 = document.createElement('div')
        card_div_2.className = "card-body CB"

        let temp_h5_title = document.createElement('h5')
        temp_h5_title.className = "card-title"
        if (tempFeat_[0].id) {
          
          temp_h5_title.innerText = tempFeat_[0].id
          card_div_2.appendChild(temp_h5_title)
        } else {
          temp_h5_title.innerText = "Feature"
          card_div_2.appendChild(temp_h5_title)
          
        }
        // console.log(tempFeat_[0].properties);
        appendFeatureProperties(tempFeat_[0].properties, card_div_2)
        card_div_1.appendChild(card_div_2)
        cardEle.appendChild(card_div_1)
      })
      // <div class="card w-100">
      //             <div class="card-body CB">
    }
  }
  )



  // try {

  // var pixel = map.getEventPixel(evt.originalEvent);
  // map.forEachLayerAtPixel(pixel, function(l) {
  //   console.log(l);
  //   return true;
  // }

  // );
  // } catch (error) {
  //   console.log(error);
  // }


  // [ 281.1999969482422, 228.39999389648438 ]
  // map.forEachFeatureAtPixel(pixel,
  //  function (feat) {
  //       console.log(feat);
  //      return feat;
  //  });
  //  console.log(feature);
  // map.forEachFeatureAtPixel(evt.pixel,
  //   function (feature,layer) {
  //     console.log(feature);
  //     console.log("layer",layer);
  //     featuresAtPixel.push(feature);
  //   }
  //   , {
  //   layerFilter: function (layer) {
  //     featureLayers.push(layer)
  //   }
  // }
  // );
  console.log(featuresAtPixel);
  console.log(featureLayers);

  // var url = layer.getGetFeatureInfoUrl(
  //   evt.coordinate, viewResolution, 'EPSG:3857',
  //   //   { 'INFO_FORMAT': 'text/html' });
  //   { 'INFO_FORMAT': 'application/json' });

  // if (url) {
  //   console.log(url)

  //   document.getElementById('lidar_prop_pane').style.display = 'none'
  //   suidDataRequestClick(url)
  // }
});





function appendFeatureProperties(suidProp_obj, prop_temp_div) {
  for (const propkey in suidProp_obj) {
    let suid_prop_element = suidProp_obj[propkey];
    let tempSpan = document.createElement('span')
    let tempEle = document.createElement('code')
    let tempEle_1 = document.createElement('code')
    tempEle.style.color = 'black'
    tempEle.style.fontSize = '1em'
    tempEle.className = 'suidDynamicData'
    let temphr = document.createElement('br')
    tempEle.id = propkey
    let suid_prop_element_ = document.createElement('code')
    tempEle_1.innerText = propkey
    tempEle_1.style.color = 'tomato'
    tempEle_1.style.fontWeight = 'bold'
    tempEle_1.style.fontSize = 'large'
    tempEle.innerText = propkey + ' : ' + suid_prop_element
    suid_prop_element_.innerText = ' : ' + suid_prop_element
    suid_prop_element_.style.color = 'black'
    suid_prop_element_.style.fontSize = 'large'
    tempSpan.appendChild(tempEle_1)
    tempSpan.appendChild(suid_prop_element_)
    // prop_temp_div.appendChild(tempEle)
    prop_temp_div.appendChild(tempSpan)
    prop_temp_div.appendChild(temphr)
  }
}




function suidDataRequestClick(n_url) {
  let prop_temp_div_ = document.getElementById('prop_temp_div')
  suid_data = new XMLHttpRequest()
  url_local = 'getClickSuid'
  suid_data.open('POST', url_local, true)
  suid_data.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // suid_data.setRequestHeader("Content-Type", "application/json");
  // suid_data.onload = () => {
  suid_data.onreadystatechange = () => {
    // Call a function when the state changes.
    if (suid_data.readyState === XMLHttpRequest.DONE && suid_data.status === 200) {
      // Request finished. Do processing here.
      ////console.log(JSON.parse(suid_data.response))
      let suidResponseData = JSON.parse(suid_data.response)['suid']
      let suidResponseProperties = JSON.parse(suid_data.response)['suidExtract_Properties']
      if (suidResponseData === 'No Feature Found') {
        ////console.log('No Feature Found')
        // content.style.display = 'none'
      } else if (suidResponseData === 'No suid found') {
        ////console.log('No suid found')
        // content.style.display = 'none'
      } else {
        ////console.log('click event')
        ////console.log(suidResponseData)
        if (prop_temp_div_ !== null) {
          prop_temp_div_.parentNode.removeChild(prop_temp_div_)
        }
        appendSUID_Data(suidResponseProperties)
      }
    }
  };
  suid_data.send(`geoserverURL=${n_url}`)
}


function appendSUID_Data(resp) {
  ////console.log('inside suid_prop_element function')
  // let propPanel = document.getElementsByClassName('pane')
  let propPanel = document.getElementById('suid_prop_pane')
  let prop_temp_div = document.createElement('div')
  prop_temp_div.id = 'prop_temp_div'
  prop_temp_div.style.padding = '20px'
  prop_temp_div.style.paddingTop = '0px'
  suidProp_obj = resp
  ////console.log(suidProp_obj)
  for (const propkey in suidProp_obj) {
    let suid_prop_element = suidProp_obj[propkey];
    if (suid_prop_element !== '' && suid_prop_element !== null && suid_prop_element !== 'null' && suid_prop_element !== 'NULL') {
      if (propkey !== 'ui_file' && propkey !== 'ui_type' && propkey !== 'ui_name' && propkey !== 'sr_no_') {
        let tempSpan = document.createElement('span')
        let tempEle = document.createElement('code')
        let tempEle_1 = document.createElement('code')
        tempEle.style.color = 'black'
        tempEle.style.fontSize = '1em'
        tempEle.className = 'suidDynamicData'
        let temphr = document.createElement('br')
        tempEle.id = propkey
        let suid_prop_element_ = document.createElement('code')
        tempEle_1.innerText = propkey
        tempEle_1.style.color = 'tomato'
        tempEle_1.style.fontWeight = 'bold'
        tempEle_1.style.fontSize = 'large'
        tempEle.innerText = propkey + ' : ' + suid_prop_element
        suid_prop_element_.innerText = ' : ' + suid_prop_element
        suid_prop_element_.style.color = 'black'
        suid_prop_element_.style.fontSize = 'large'
        tempSpan.appendChild(tempEle_1)
        tempSpan.appendChild(suid_prop_element_)
        // prop_temp_div.appendChild(tempEle)
        prop_temp_div.appendChild(tempSpan)
        prop_temp_div.appendChild(temphr)
      }
    }
  }
  propPanel.appendChild(prop_temp_div)
}


document.getElementById('OpenStreetMaps_Layer').checked = true
document.getElementById('OpenStreetMaps_Layer').oninput = function (e) {
  // alert('clicked!')
  ////console.log(e.target.checked)
  if (e.target.checked === true) {
    OSMLayer.setVisible(true)
  } else if (e.target.checked == false) {
    OSMLayer.setVisible(false)
  }

}


boundary_layer_set = [
  Corporation_Boundary_Layer,DP_Boundary_R1_Layer,Village_Boundary_R1_Layer,GRIDs_a1_Layer,MIDC_Layer
]
document.getElementById('BOUNDARY_LAYER').checked = true
document.getElementById('BOUNDARY_LAYER').oninput = function (e) {
  if (e.target.checked === true) {
    for (let index = 0; index < boundary_layer_set.length; index++) {
      const element = boundary_layer_set[index];
      element.setVisible(true)
    }
  } else if (e.target.checked == false) {
    for (let index = 0; index < boundary_layer_set.length; index++) {
      const element = boundary_layer_set[index];
      element.setVisible(false)
    }
  }

}


let boundaryCollapseDiv = document.getElementById('collapse-div-BOUNDARY')
// boundaryCollapseDiv.parentNode.removeChild(boundaryCollapseDiv)
for (let index = 0; index < boundary_layer_set.length; index++) {
  const element = boundary_layer_set[index];
  console.log(element.getSource().i["LAYERS"]);
  layername = element.getSource().i["LAYERS"]
  ////console.log(element)
  createLayerFilterCheck(boundaryCollapseDiv, layername , element)
}


var BASEMAP_OLD = [NH_EW_Label_Layer, Flyover_Layer, Outer_Road_Layer, Transmission_Tower_Layer, Power_Transmission_Line_Layer, Metroline_Layer,
  Railway_over_Bridge_Layer, Arrow_Layer, Subway_Line_Layer, Railway_Layer,
  Nala_Line_R1_Layer, Road_Label_R1_Layer, Building_Footprint_Label_Layer
]

var BASEMAP = [
  Nala_Line_R1_Layer 
,Road_Label_R1_Layer
,NH_EW_Label_Layer
,Proposed_Flyover_Layer
,Flyover_Layer
,METROSTATIONS_Layer
,Outer_Road_Layer
,Elevated_Coastal_Road_R1_Layer
,Elevated_40M_Road_Layer
,Transmission_Tower_Layer
,Power_Transmission_Line_Layer
,Metroline_Layer
,Railway_over_Bridge_Layer
,Arrow_Layer
,Subway_Line_Layer
,Railway_Layer
,Building_Footprint_Label_Layer
,Building_Footprints_Layer
,Creek_Layer
]

document.getElementById('BASEMAP_LINE_LAYER').checked = true
document.getElementById('BASEMAP_LINE_LAYER').oninput = function (e) {
  if (e.target.checked === true) {
    // MODIFICATION_PLU_R1_Layer.setVisible(true)
    for (let index = 0; index < BASEMAP.length; index++) {
      const element = BASEMAP[index];
      element.setVisible(true)
    }
  } else if (e.target.checked == false) {
    // MODIFICATION_PLU_R1_Layer.setVisible(false)
    for (let index = 0; index < BASEMAP.length; index++) {
      const element = BASEMAP[index];
      element.setVisible(false)
    }
  }
}

let boundaryCollapseDiv_BASEMAP = document.getElementById('collapse-div-basemap_line')

for (let index = 0; index < BASEMAP.length; index++) {
  const element = BASEMAP[index];
  console.log(element.getSource().i["LAYERS"]);
  layername = element.getSource().i["LAYERS"]

  createLayerFilterCheck(boundaryCollapseDiv_BASEMAP, layername , element)
}



var REVENUE_BOUNDARY = [
  Published_Srvy_Line_Layer
,Congested_Area_Boundary_Layer
,ALL_CTS_BNDs_Layer
,Gaothan_Layer
,CTS_Boundary_R1_Layer
,Cadastre_Boundary_R1_Layer
]
document.getElementById('BASEMAP_POLYGON_LAYER').checked = true
document.getElementById('BASEMAP_POLYGON_LAYER').oninput = function (e) {
  if (e.target.checked === true) {
    // MODIFICATION_PLU_R1_Layer.setVisible(true)
    for (let index = 0; index < REVENUE_BOUNDARY.length; index++) {
      const element = REVENUE_BOUNDARY[index];
      element.setVisible(true)
    }
  } else if (e.target.checked == false) {
    // MODIFICATION_REVENUE_BOUNDARY_R1_Layer.setVisible(false)
    for (let index = 0; index < REVENUE_BOUNDARY.length; index++) {
      const element = REVENUE_BOUNDARY[index];
      element.setVisible(false)
    }
  }
}

let boundaryCollapseDiv_REVENUE_BOUNDARY= document.getElementById('collapse-div-basemap_polygon')

for (let index = 0; index < REVENUE_BOUNDARY.length; index++) {
  const element = REVENUE_BOUNDARY[index];
  console.log(element.getSource().i["LAYERS"]);
  layername = element.getSource().i["LAYERS"]

  createLayerFilterCheck(boundaryCollapseDiv_REVENUE_BOUNDARY, layername , element)
}


var CRZ = [
  CRZ_2019_R1_Layer
,ESZ_Boundary_Layer
,MANGROVE_POLYGON_Layer
]

document.getElementById('Structure_Footprint_LAYER').checked = true
document.getElementById('Structure_Footprint_LAYER').oninput = function (e) {
  if (e.target.checked === true) {
    // MODIFICATION_PLU_R1_Layer.setVisible(true)
    for (let index = 0; index < CRZ.length; index++) {
      const element = CRZ[index];
      element.setVisible(true)
    }
  } else if (e.target.checked == false) {
    // MODIFICATION_PLU_R1_Layer.setVisible(false)
    for (let index = 0; index < CRZ.length; index++) {
      const element = CRZ[index];
      element.setVisible(false)
    }
  }
}

let boundaryCollapseDiv_CRZ= document.getElementById('collapse-div-structure_footprint')

for (let index = 0; index < CRZ.length; index++) {
  const element = CRZ[index];
  console.log(element.getSource().i["LAYERS"]);
  layername = element.getSource().i["LAYERS"]

  createLayerFilterCheck(boundaryCollapseDiv_CRZ, layername , element)
}



var Modifications = [
  M5_PSP_Layer
,MODIFICATION_NO_Layer
,Modification_Line_Layer
,Modification_Cross_Line_Layer
]


document.getElementById('boundary_LAYER').checked = true
document.getElementById('boundary_LAYER').oninput = function (e) {
  if (e.target.checked === true) {
    // MODIFICATION_PLU_R1_Layer.setVisible(true)
    for (let index = 0; index < Modifications.length; index++) {
      const element = Modifications[index];
      element.setVisible(true)
    }
  } else if (e.target.checked == false) {
    // MODIFICATION_PLU_R1_Layer.setVisible(false)
    for (let index = 0; index < Modifications.length; index++) {
      const element = Modifications[index];
      element.setVisible(false)
    }
  }
}

let boundaryCollapseDiv_Modifications= document.getElementById('collapse-div-boundary')

for (let index = 0; index < Modifications.length; index++) {
  const element = Modifications[index];
  console.log(element.getSource().i["LAYERS"]);
  layername = element.getSource().i["LAYERS"]

  createLayerFilterCheck(boundaryCollapseDiv_Modifications, layername , element)
}


var PLU_layer = [
DRAFT_RESERVATION_R6_CHANGES_Layer
,MODIFICATION_PLU_R1_Layer
]

document.getElementById('mis_point_LAYER').checked = true
document.getElementById('mis_point_LAYER').oninput = function (e) {
  if (e.target.checked === true) {
    // MODIFICATION_PLU_R1_Layer.setVisible(true)
    for (let index = 0; index < PLU_layer.length; index++) {
      const element = PLU_layer[index];
      element.setVisible(true)
    }
  } else if (e.target.checked == false) {
    // MODIFICATION_PLU_R1_Layer.setVisible(false)
    for (let index = 0; index < PLU_layer.length; index++) {
      const element = PLU_layer[index];
      element.setVisible(false)
    }
  }
}


let boundaryCollapseDiv_PLU_layer = document.getElementById('collapse-div-PLU')

for (let index = 0; index < PLU_layer.length; index++) {
  const element = PLU_layer[index];
  console.log(element.getSource().i["LAYERS"]);
  layername = element.getSource().i["LAYERS"]

  createLayerFilterCheck(boundaryCollapseDiv_PLU_layer , layername , element)
}


// hide single layes
// M5_PSP.setVisible(false)
// GRIDs_a1.setVisible(false)
// MODIFICATION_NO.setVisible(false)
// Published_Srvy_Line.setVisible(false)
// Congested_Area_Boundary.setVisible(false)
// Nala_Line_R1.setVisible(false)
// CRZ_2019_R1.setVisible(false)
// Modification_Line.setVisible(false)
// Modification_Cross_Line.setVisible(false)
// ESZ_Boundary.setVisible(false)
// Road_Label_R1.setVisible(false)
// NH_EW_Label.setVisible(false)
// Proposed_Flyover.setVisible(false)
// Flyover.setVisible(false)
// METROSTATIONS.setVisible(false)
// Outer_Road.setVisible(false)
// Elevated_Coastal_Road_R1.setVisible(false)
// Elevated_40M_Road.setVisible(false)
// Transmission_Tower.setVisible(false)
// Power_Transmission_Line.setVisible(false)
// Metroline.setVisible(false)
// Railway_over_Bridge.setVisible(false)
// Arrow.setVisible(false)
// Subway_Line.setVisible(false)
// Corporation_Boundary.setVisible(false)
// DP_Boundary_R1.setVisible(false)
// Railway.setVisible(false)
// MIDC.setVisible(false)
// ALL_CTS_BNDs.setVisible(false)
// Village_Boundary_R1.setVisible(false)
// Gaothan.setVisible(false)
// CTS_Boundary_R1.setVisible(false)
// Cadastre_Boundary_R1.setVisible(false)
// Building_Footprint_Label.setVisible(false)
// Building_Footprints.setVisible(false)
// MANGROVE_POLYGON.setVisible(false)
// DRAFT_RESERVATION_R6_CHANGES.setVisible(false)
// MODIFICATION_PLU_R1.setVisible(false)
// Creek.setVisible(false)




var layerNamesList = map.getLayers().a
function createLayerFilterCheck(mainDiv, attributeName ,element) {
  let tempCheckBox = document.createElement('input')
  tempCheckBox.type = 'checkbox'
  tempCheckBox.id = attributeName
  let tempLabel = document.createElement('label')
  tempLabel.innerText = attributeName
  tempLabel.for = attributeName
  // tempCheckBox.appendChild(tempLabel)
  ////console.log(tempCheckBox)
  tempCheckBox.checked = true
  tempCheckBox.onclick = layerToggleCheck
  temp_P = document.createElement('p')
  mainDiv.appendChild(temp_P)
  mainDiv.appendChild(tempCheckBox)
  mainDiv.appendChild(tempLabel)
}



function layerToggleCheck(e) {

  ////console.log(e.target.parentElement.id)
  if (e.target.parentElement.id == 'collapse-div-BOUNDARY') {

    if (!e.target.checked) {
      console.log(e.target);
      let layerName = e.target.id
      console.log(layerName);
      // layerName = layerName+"_Layer"
      console.log(layerName);

      for (let index = 0; index < map.getLayers().a.length; index++) {
        const layer_element = map.getLayers().a[index];
        if (layer_element.N.source.B === "geoserver") {
          if (layer_element.N.source.i.LAYERS === layerName) {
            layer_element.setVisible(false)
          }
        }
      }

    } else if (e.target.checked) {

      console.log(e.target);
      let layerName = e.target.id
      console.log(layerName);
      // layerName = layerName+"_Layer"
      console.log(layerName);

      for (let index = 0; index < map.getLayers().a.length; index++) {
        const layer_element = map.getLayers().a[index];
        if (layer_element.N.source.B === "geoserver") {
          if (layer_element.N.source.i.LAYERS === layerName) {
            layer_element.setVisible(true)
          }
        }
      }


    }

  } else if (e.target.parentElement.id == 'collapse-div-structure_footprint') {
    if (!e.target.checked) {
      console.log(e.target);
      let layerName = e.target.id
      console.log(layerName);
      // layerName = layerName+"_Layer"
      console.log(layerName);

      for (let index = 0; index < map.getLayers().a.length; index++) {
        const layer_element = map.getLayers().a[index];
        if (layer_element.N.source.B === "geoserver") {
          if (layer_element.N.source.i.LAYERS === layerName) {
            layer_element.setVisible(false)
          }
        }
      }

    } else if (e.target.checked) {

      console.log(e.target);
      let layerName = e.target.id
      console.log(layerName);
      // layerName = layerName+"_Layer"
      console.log(layerName);

      for (let index = 0; index < map.getLayers().a.length; index++) {
        const layer_element = map.getLayers().a[index];
        if (layer_element.N.source.B === "geoserver") {
          if (layer_element.N.source.i.LAYERS === layerName) {
            layer_element.setVisible(true)
          }
        }
      }


    }


  } else if (e.target.parentElement.id == 'collapse-div-basemap_line') {
    if (!e.target.checked) {
      console.log(e.target);
      let layerName = e.target.id
      console.log(layerName);
      // layerName = layerName+"_Layer"
      console.log(layerName);

      for (let index = 0; index < map.getLayers().a.length; index++) {
        const layer_element = map.getLayers().a[index];
        if (layer_element.N.source.B === "geoserver") {
          if (layer_element.N.source.i.LAYERS === layerName) {
            layer_element.setVisible(false)
          }
        }
      }

    } else if (e.target.checked) {

      console.log(e.target);
      let layerName = e.target.id
      console.log(layerName);
      // layerName = layerName+"_Layer"
      console.log(layerName);

      for (let index = 0; index < map.getLayers().a.length; index++) {
        const layer_element = map.getLayers().a[index];
        if (layer_element.N.source.B === "geoserver") {
          if (layer_element.N.source.i.LAYERS === layerName) {
            layer_element.setVisible(true)
          }
        }
      }


    }


    


  } else if (e.target.parentElement.id == 'collapse-div-basemap_polygon') {
    if (!e.target.checked) {
      console.log(e.target);
      let layerName = e.target.id
      console.log(layerName);
      // layerName = layerName+"_Layer"
      console.log(layerName);

      for (let index = 0; index < map.getLayers().a.length; index++) {
        const layer_element = map.getLayers().a[index];
        if (layer_element.N.source.B === "geoserver") {
          if (layer_element.N.source.i.LAYERS === layerName) {
            layer_element.setVisible(false)
          }
        }
      }

    } else if (e.target.checked) {

      console.log(e.target);
      let layerName = e.target.id
      console.log(layerName);
      // layerName = layerName+"_Layer"
      console.log(layerName);

      for (let index = 0; index < map.getLayers().a.length; index++) {
        const layer_element = map.getLayers().a[index];
        if (layer_element.N.source.B === "geoserver") {
          if (layer_element.N.source.i.LAYERS === layerName) {
            layer_element.setVisible(true)
          }
        }
      }


    }


  }else if (e.target.parentElement.id == 'collapse-div-boundary') {
    if (!e.target.checked) {
      console.log(e.target);
      let layerName = e.target.id
      console.log(layerName);
      // layerName = layerName+"_Layer"
      console.log(layerName);

      for (let index = 0; index < map.getLayers().a.length; index++) {
        const layer_element = map.getLayers().a[index];
        if (layer_element.N.source.B === "geoserver") {
          if (layer_element.N.source.i.LAYERS === layerName) {
            layer_element.setVisible(false)
          }
        }
      }

    } else if (e.target.checked) {

      console.log(e.target);
      let layerName = e.target.id
      console.log(layerName);
      // layerName = layerName+"_Layer"
      console.log(layerName);

      for (let index = 0; index < map.getLayers().a.length; index++) {
        const layer_element = map.getLayers().a[index];
        if (layer_element.N.source.B === "geoserver") {
          if (layer_element.N.source.i.LAYERS === layerName) {
            layer_element.setVisible(true)
          }
        }
      }


    }


  }

  else if (e.target.parentElement.id == 'collapse-div-PLU') {
    if (!e.target.checked) {
      console.log(e.target);
      let layerName = e.target.id
      console.log(layerName);
      // layerName = layerName+"_Layer"
      console.log(layerName);

      for (let index = 0; index < map.getLayers().a.length; index++) {
        const layer_element = map.getLayers().a[index];
        if (layer_element.N.source.B === "geoserver") {
          if (layer_element.N.source.i.LAYERS === layerName) {
            layer_element.setVisible(false)
          }
        }
      }

    } else if (e.target.checked) {

      console.log(e.target);
      let layerName = e.target.id
      console.log(layerName);
      // layerName = layerName+"_Layer"
      console.log(layerName);

      for (let index = 0; index < map.getLayers().a.length; index++) {
        const layer_element = map.getLayers().a[index];
        if (layer_element.N.source.B === "geoserver") {
          if (layer_element.N.source.i.LAYERS === layerName) {
            layer_element.setVisible(true)
          }
        }
      }


    }


  }
}