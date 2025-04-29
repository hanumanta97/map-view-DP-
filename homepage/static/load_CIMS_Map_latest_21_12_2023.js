




//************* OpenLayers Code ******************

// var thaneEcwLayer = L.tileLayer.wms(`${url}/geoserver/mayureshWorkspace/wms?`, {
//     layers: 'test_ECW',
//     maxZoom: 28
// })
// var thaneEcwLayer = new ol.layer.Tile({
//   source: new ol.source.TileWMS({
//     url: `${url}/geoserver/mayureshWorkspace/wms?`,
//     params: { 'LAYERS': 'mayureshWorkspace:test_ECW', 'TILED': true },
//     serverType: 'geoserver',
//     // Countries have transparency, so do not fade tiles:
//     transition: 0
//   }),
// })



var replacer = function (key, value) {
  if (value.geometry) {
    var type;
    var rawType = value.type;
    var geometry = value.geometry;

    if (rawType === 1) {
      type = 'MultiPoint';
      if (geometry.length == 1) {
        type = 'Point';
        geometry = geometry[0];
      }
    } else if (rawType === 2) {
      type = 'MultiLineString';
      if (geometry.length == 1) {
        type = 'LineString';
        geometry = geometry[0];
      }
    } else if (rawType === 3) {
      type = 'Polygon';
      if (geometry.length > 1) {
        type = 'MultiPolygon';
        geometry = [geometry];
      }
    }

    return {
      'type': 'Feature',
      'geometry': {
        'type': type,
        'coordinates': geometry
      },
      'properties': value.tags
    };
  } else {
    return value;
  }
};



// var worldImagery = new ol.layer.Tile({
//   source: new ol.source.XYZ({
//     url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
//     maxZoom: 28,
//     opacity: 0.1,
//   })
// });
var worldImagery = new ol.layer.Tile({
  source: new ol.source.OSM(),
  crossOrigin: "anonymous"
})

var tilePixels = new ol.proj.Projection({
  code: 'TILE_PIXELS',
  units: 'tile-pixels'
});

//   var map = new ol.Map({
//     layers: [
//     //   new ol.layer.Tile({
//     //     source: new ol.source.OSM()
//     //   })
//     // worldImagery,
//     // thaneEcwLayer,
//     // structure_footprintLayer
//     ],
//     target: 'map',
//     view: new ol.View({
//       center: [0,0],
//       zoom: 2
//     })
//   });


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


// var url = '/proxy/http://103.121.74.84:8910'
var url = 'http://127.0.0.1:8910'

// var wmsSource_bharat_revelo = new ol.source.TileWMS({
//   url: `${url}/geoserver/TUMC_CIMS/wms`,
//   /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
//   params: { 'LAYERS': 'TUMC_CIMS:BHARAT_3857', 'TILED': true, },
//   serverType: 'geoserver',
// });

// var wmsLayer_bharat_revelo = new ol.layer.Tile({
//   source: wmsSource_bharat_revelo
// });

// var wmsSource_maharashtra_revelo = new ol.source.TileWMS({
//   url: `${url}/geoserver/TUMC_CIMS/wms`,
//   /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
//   params: { 'LAYERS': 'TUMC_CIMS:MAHARASHTRA_3857', 'TILED': true, },
//   serverType: 'geoserver',
// });

// var wmsLayer_maharashtra_revelo = new ol.layer.Tile({
//   source: wmsSource_maharashtra_revelo
// });


// var wmsSource_Structure_Footprint = new ol.source.TileWMS({
//   url: `${url}/geoserver/TUMC_CIMS/wms`,
//   params: { 'LAYERS': 'TUMC_CIMS:structure_footprint', 'TILED': true,'tilesorigin':[8206165.8987565543502569, 2211079.1521550379693508] },
//   serverType: 'geoserver',
// });
var wmsSource_Structure_Footprint = new ol.source.ImageWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:structure_footprint', 'TILED': true, 'tilesorigin': [8206165.8987565543502569, 2211079.1521550379693508] },
  serverType: 'geoserver',
});



//creating extent 
// var extent =new ol.extent.createEmpty();
// extent.extend(8053175.3886260651051998, 2132338.2525001205503941, 8206165.8987565543502569, 2211079.1521550379693508);

// var wmsLayer_Structure_Footprint = new ol.layer.Tile({
//   source: wmsSource_Structure_Footprint
// });
var wmsLayer_Structure_Footprint = new ol.layer.Image({
  source: wmsSource_Structure_Footprint
});

var wmsSource_Structure_Footprint_kdmc = new ol.source.ImageWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:structure_footprint_kdmc', 'TILED': true },
  serverType: 'geoserver',
});


var wmsLayer_Structure_Footprint_kdmc = new ol.layer.Image({
  source: wmsSource_Structure_Footprint_kdmc
});

var wmsSource_Structure_Footprint_mbmc = new ol.source.ImageWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:structure_footprint_mbmc', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer_Structure_Footprint_mbmc = new ol.layer.Image({
  source: wmsSource_Structure_Footprint_mbmc
});


var wmsSource_basemap_polygon = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:basemap_polygon', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer_basemap_polygon = new ol.layer.Tile({
  source: wmsSource_basemap_polygon
});


var wmsSource_basemap_polygon_kdmc = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:basemap_polygon_kdmc', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer_basemap_polygon_kdmc = new ol.layer.Tile({
  source: wmsSource_basemap_polygon_kdmc
});


var wmsSource_basemap_polygon_mbmc = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:basemap_polygon_mbmc', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer_basemap_polygon_mbmc = new ol.layer.Tile({
  source: wmsSource_basemap_polygon_mbmc
});


var wms_baseMap_Line = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:basemap_line', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer_baseMap_Line = new ol.layer.Tile({
  source: wms_baseMap_Line
});


var wms_baseMap_Line_kdmc = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:basemap_line_kdmc', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer_baseMap_Line_kdmc = new ol.layer.Tile({
  source: wms_baseMap_Line_kdmc
});

var wms_baseMap_Line_mbmc = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:basemap_line_mbmc', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer_baseMap_Line_mbmc = new ol.layer.Tile({
  source: wms_baseMap_Line_mbmc
});

var wms_basemap_point = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:basemap_point', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer_basemap_point = new ol.layer.Tile({
  source: wms_basemap_point
});


var wms_basemap_point_kdmc = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:basemap_point_kdmc', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer_basemap_point_kdmc = new ol.layer.Tile({
  source: wms_basemap_point_kdmc
});



var wms_basemap_point_mbmc = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:basemap_point_mbmc', 'TILED': true },
  serverType: 'geoserver',
});
var wmsLayer_basemap_point_mbmc = new ol.layer.Tile({
  source: wms_basemap_point_mbmc
});


// adding new points data to vector layer


//adding styling to point




var vectorSource = new ol.source.Vector({
});
var newVectorLayer = new ol.layer.Vector({
  source: vectorSource
})
var vectorSource_1 = new ol.source.Vector({});
var newVectorLayer_1 = new ol.layer.Vector({
  source: vectorSource_1
})
var multipointarray = new ol.geom.MultiPoint([], 'XY',
  // ol.proj.transform([1,1], 'EPSG:4326', 'EPSG:3857'),
  // ol.proj.transform([-88,75], 'EPSG:4326', 'EPSG:3857')
);


var wmsSource_mis_point = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:mis_point_3857', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer_mis_point = new ol.layer.Tile({
  source: wmsSource_mis_point
});

var wmsSource_mis_point_kdmc = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:mis_point_kdmc_3857', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer_mis_point_kdmc = new ol.layer.Tile({
  source: wmsSource_mis_point_kdmc
});

var wmsSource_mis_point_mbmc = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: { 'LAYERS': 'TUMC_CIMS:mis_point_mbmc_3857', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer_mis_point_mbmc = new ol.layer.Tile({
  source: wmsSource_mis_point_mbmc
});



var wmsSource_boundary = new ol.source.ImageWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: {
    'LAYERS': 'TUMC_CIMS:boundary', 'TILED': true,
    CQL_FILTER: '',
    // 'sld':'file:///D:/DjangoCIMS/djangoDev/CIMS_TUMC/CIMS_DEPLOY/CIMS_TUMC_live_copy_26_6_2024/CIMS_TUMC/static/boundary_colored_pix_5_1.sld'
  },
  serverType: 'geoserver',
});

var wmsLayer_boundary = new ol.layer.Image({
  source: wmsSource_boundary
});

var wmsSource_boundary_kdmc = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: {
    'LAYERS': 'TUMC_CIMS:BOUNDARY_KDMC', 'TILED': true,
    CQL_FILTER: ''
  },
  serverType: 'geoserver',
});

var wmsLayer_boundary_kdmc = new ol.layer.Tile({
  source: wmsSource_boundary_kdmc
});

var wmsSource_boundary_mbmc = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: {
    'LAYERS': 'TUMC_CIMS:BOUNDARY_MBMC', 'TILED': true,
    CQL_FILTER: ''
  },
  serverType: 'geoserver',
});

var wmsLayer_boundary_mbmc = new ol.layer.Tile({
  source: wmsSource_boundary_mbmc
});

var wmsSource_LiDAR = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: {
    'LAYERS': 'TUMC_CIMS:lidar', 'TILED': true,
    // 'LAYERS': 'TUMC_CIMS:LiDAR', 'TILED': true,
    CQL_FILTER: ''
  },
  serverType: 'geoserver',
});

var wmsLayer_LiDAR = new ol.layer.Tile({
  source: wmsSource_LiDAR
});

var wmsSource_LiDAR_kdmc = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: {
    'LAYERS': 'TUMC_CIMS:LiDAR_KDMC', 'TILED': true,
    CQL_FILTER: ''
  },
  serverType: 'geoserver',
});

var wmsLayer_LiDAR_kdmc = new ol.layer.Tile({
  source: wmsSource_LiDAR_kdmc
});

var wmsSource_LiDAR_mbmc = new ol.source.TileWMS({
  url: `${url}/geoserver/TUMC_CIMS/wms`,
  /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
  params: {
    'LAYERS': 'TUMC_CIMS:LiDAR_MBMC', 'TILED': true,
    CQL_FILTER: ''
  },
  serverType: 'geoserver',
});

var wmsLayer_LiDAR_mbmc = new ol.layer.Tile({
  source: wmsSource_LiDAR_mbmc
});


/**
 * Elements that make up the popup.
 */
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');


/**
 * Create an overlay to anchor the popup to the map.
 */
var overlay = new ol.Overlay({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250
  }
});


/**
 * Add a click handler to hide the popup.
 * return {boolean} Don't follow the href.
 */
// closer.onclick = function () {
//   overlay.setPosition(undefined);
//   closer.blur();
//   return false;
// };


var OSMLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
})


let r_data_map = document.getElementById('r_data')


// var map = new ol.Map({
//   layers: [
//     worldImagery,
//     OSMLayer,
//     wmsLayer_basemap_point,
//     wmsLayer_baseMap_Line,
//     wmsLayer_Structure_Footprint,
//     wmsLayer_basemap_polygon,
//     wmsLayer_boundary,
//     wmsLayer_mis_point
//   ],
//   overlays: [overlay],
//   view: view,
//   target: 'map'
// });

function rotateLogoVisible() {
  let r = document.getElementsByClassName('ol-rotate ol-hidden')
  r[1].style.visibility = 'visible'
  r[1].style.opacity = 100
}

var map = null

function updateSize() {
  map.updateSize();
  map.renderSync();
}

// var scaleLineControl = new ol.control.ScaleLine();
// scaleLineControl.setUnits('metric')




// var rotationControl = new ol.control.Rotate({'autoHide':false})
// rotationControl.autoHide = false
// ////console.log('rotationControl')
// ////console.log(rotationControl)

var modified_JSON_2_map = null


var legendElement = document.getElementById("legendDiv")
var Legend = new ol.control.Control({ element: legendElement });

function setArrowStyle(olRotate) {
  let coll1 = olRotate.valueOf('0')
  coll1[0].style.backgroundColor = "rgba(0,0,0,0)"
  coll1[1].style.backgroundColor = "rgba(0,0,0,0)"
  coll1[2].style.backgroundColor = "rgba(0,0,0,0)"
  coll1[3].style.marginLeft = "-30px"
}

var scaleLineControl = new ol.control.ScaleLine();
scaleLineControl.setUnits('metric')
var imgTag = document.getElementById("arrow")
var olRotate = document.getElementsByClassName("ol-rotate")

////console.log(olRotate);

// for (let index = 0; index < olRotate[0].length; index++) {
//   const element = olRotate[0][index];
//   ////console.log(element);
// }







function atrbtTargetBlank() {
  let atrbt = document.getElementsByClassName("ol-attribution ol-unselectable ol-control")
  let atage = atrbt[0].getElementsByTagName('a')
  atage[0].target = "blank"
  atage[1].target = "blank"
}


var rotationControl = new ol.control.Rotate({ 'autoHide': false, 'className': 'ol-rotate ol-unselectable ol-control', 'label': imgTag })
// var rotationControl = new ol.control.Rotate({ 'autoHide': false,})
// var rotationControl = null


if (r_data_map.length !== 0) {

  let modified_JSON_map = r_data_map.innerText.replaceAll("'", '"')

  // ////console.log(modified_JSON)
  let modified_JSON_1_map = JSON.constructor(modified_JSON_map)
  modified_JSON_2_map = JSON.parse(modified_JSON_1_map)
  // ////console.log(modified_JSON_2_map['rto'])



  var newVectorLayer_1_base = new ol.layer.Vector({
  })



  if (modified_JSON_2_map['rto'][0] === '4') {
    map = new ol.Map({
      interactions: ol.interaction.defaults({
        doubleClickZoom: false
      }),
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([
        scaleLineControl, rotationControl, Legend
        // scaleLineControl,Legend
      ]),
      layers: [
        worldImagery,
        OSMLayer,
        wmsLayer_basemap_point,
        wmsLayer_baseMap_Line,
        wmsLayer_Structure_Footprint,
        wmsLayer_basemap_polygon,
        wmsLayer_boundary,
        wmsLayer_mis_point,
        wmsLayer_LiDAR,
        newVectorLayer_1_base
      ],
      overlays: [overlay],
      view: view,
      target: 'map'
    });

    updateSize()
    // rotationControl = new ol.control.Rotate({ 'autoHide': false, 'className': 'ol-rotate ol-unselectable ol-control', 'label': imgTag })
    // var olRotate_ = document.getElementsByClassName("ol-rotate")
    setArrowStyle(olRotate)
    map.on('postrender', atrbtTargetBlank);
    var duration = 1000;
    let zoom1 = view.getZoom()
    view.animate({
      zoom: zoom1 - 1,
      duration: duration / 8
    }, {
      zoom: zoom1 + 1,
      duration: duration
    }, updateSize);

  } else if (modified_JSON_2_map['rto'][0] === '5') {
    // rotationControl = new ol.control.Rotate({ 'autoHide': false, 'className': 'ol-rotate ol-unselectable ol-control', 'label': imgTag })
    // view.center = [8141019.0,2182280.6]   
    // view.centerOn(8141019.0,2182280.6) 

    map = new ol.Map({
      interactions: ol.interaction.defaults({
        doubleClickZoom: false
      }),
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([
        scaleLineControl, rotationControl, Legend
      ]),
      layers: [
        worldImagery,
        OSMLayer,
        wmsLayer_basemap_point_kdmc,
        wmsLayer_baseMap_Line_kdmc,
        wmsLayer_Structure_Footprint_kdmc,
        wmsLayer_basemap_polygon_kdmc,
        wmsLayer_boundary_kdmc,
        wmsLayer_mis_point_kdmc,
        wmsLayer_LiDAR_kdmc
      ],
      overlays: [overlay],
      view: view,
      target: 'map'
    });
    setArrowStyle(olRotate)
    map.on('postrender', atrbtTargetBlank);
    map.getView().setCenter([8141019.0, 2182280.6])
    // map.getView().setZoom(map.getView().getZoom() + 2)
    // updateSize()
    // console.log('')
    // map.getView().setZoom(map.getView().getZoom() - 3)
    // map.on(	'change',()=>{

    //   var p = document.querySelector('canvas')

    //   p.addEventListener('click', () => {
    //     updateSize()
    //   })
    //   p.click()
    // })
    // updateSize()

    var duration = 1000;
    let zoom1 = view.getZoom()
    view.animate({
      zoom: zoom1 - 1,
      duration: duration / 2
    }, {
      zoom: zoom1 + 1,
      duration: duration
    }, updateSize);


  }
  else if (modified_JSON_2_map['rto'][0] === '4M') {
    // rotationControl = new ol.control.Rotate({ 'autoHide': false, 'className': 'ol-rotate ol-unselectable ol-control', 'label': imgTag })

    // view.center = [8109997,2191492]    
    // view.centerOn(8109997,2191492)

    map = new ol.Map({
      interactions: ol.interaction.defaults({
        doubleClickZoom: false
      }),
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([
        scaleLineControl, rotationControl, Legend
      ]),
      layers: [
        worldImagery,
        OSMLayer,
        wmsLayer_basemap_point_mbmc,
        wmsLayer_baseMap_Line_mbmc,
        wmsLayer_Structure_Footprint_mbmc,
        wmsLayer_basemap_polygon_mbmc,
        wmsLayer_boundary_mbmc,
        wmsLayer_mis_point_mbmc,
        wmsLayer_LiDAR_mbmc
      ],
      overlays: [overlay],
      view: view,
      target: 'map'
    });
    map.getView().setCenter([8109997, 2191492])
    updateSize()
    setArrowStyle(olRotate)
    map.on('postrender', atrbtTargetBlank);
    var duration = 1000;
    let zoom1 = view.getZoom()
    view.animate({
      zoom: zoom1 - 1,
      duration: duration / 2
    }, {
      zoom: zoom1 + 1,
      duration: duration
    }, updateSize);

  }


}


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
    scaleLineControl, rotationControl, Legend
  ])
  ,
  layers: [
    worldImagery,
    OSMLayer,
    wmsLayer_basemap_point,
    wmsLayer_baseMap_Line,
    wmsLayer_Structure_Footprint,
    wmsLayer_basemap_polygon,
    wmsLayer_boundary,
    wmsLayer_mis_point,
    wmsLayer_LiDAR,
    newVectorLayer_1_base
  ],
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
wmsLayer_basemap_point.setVisible(true)
updateSize()
// rotationControl = new ol.control.Rotate({ 'autoHide': false, 'className': 'ol-rotate ol-unselectable ol-control', 'label': imgTag })
// var olRotate_ = document.getElementsByClassName("ol-rotate")
// setArrowStyle(olRotate)
// map.on('postrender', atrbtTargetBlank);
// var duration = 1000;
// let zoom1 = view.getZoom()
// view.animate({
//   zoom: zoom1-1,
//   duration: duration/8
// }, {
//   zoom: zoom1+1,
//   duration: duration
// },updateSize);





// geojson vector tile generation code ******************

// var url = 'https://openlayers.org/en/v4.6.5/examples/data/geojson/countries.geojson';

// fetch(url).then(function(response) {
//   return response.json();
// }).then(function(json) {
//   var tileIndex = geojsonvt(json, {
//     extent: 4096,
//     debug: 1
//   });
//   var vectorSource = new ol.source.VectorTile({
//     format: new ol.format.GeoJSON(),
//     tileLoadFunction: function(tile) {
//       var format = tile.getFormat();
//       var tileCoord = tile.getTileCoord();
//       var data = tileIndex.getTile(tileCoord[0], tileCoord[1], -tileCoord[2] - 1);

//       var features = format.readFeatures(
//           JSON.stringify({
//             type: 'FeatureCollection',
//             features: data ? data.features : []
//           }, replacer));
//       tile.setLoader(function() {
//         tile.setFeatures(features);
//         tile.setProjection(tilePixels);
//       });
//     },
//     url: 'data:' // arbitrary url, we don't use it in the tileLoadFunction
//   });
//   var vectorLayer = new ol.layer.VectorTile({
//     source: vectorSource
//   });
//   map.addLayer(vectorLayer);
// });


// geojson vector tile generation code ****************** codeEndsHere


var currZoom = map.getView().getZoom();
map.on('moveend', function (e) {
  var newZoom = map.getView().getZoom();
  if (currZoom != newZoom) {
    // ////console.log('zoom end, new zoom: ' + newZoom);
    currZoom = newZoom;
    // map.updateSize()
    // map.renderSync()
  }
});






map.on('singleclick', function (evt) {
  if (vectorLayer3) {

    map.removeLayer(vectorLayer3)
  }

  if (vectorLayer2) {

    map.removeLayer(vectorLayer2)
  }
  // ////console.log(evt)
  // document.getElementById('popup_').innerHTML = '';

  // updateSize()
  var viewResolution = /** @type {number} */ (view.getResolution());


  if (modified_JSON_2_map['rto'][0] === '4') {

    var url = wmsSource_mis_point.getGetFeatureInfoUrl(
      evt.coordinate, viewResolution, 'EPSG:3857',
      // { 'INFO_FORMAT': 'text/html' });
      { 'INFO_FORMAT': 'application/json' });
    if (url) {
      // ////console.log(url)

      document.getElementById('lidar_prop_pane').style.display = 'none'

      // document.getElementById('info').innerHTML =
      //   '<iframe seamless src="' + url + '"></iframe>';
      // document.getElementById('info').href = url;

      // document.getElementById('popup_').src = url;
      suidDataRequestClick(url)
    }
  } else if (modified_JSON_2_map['rto'][0] === '5') {

    var url = wmsSource_mis_point_kdmc.getGetFeatureInfoUrl(
      evt.coordinate, viewResolution, 'EPSG:3857',
      // { 'INFO_FORMAT': 'text/html' });
      { 'INFO_FORMAT': 'application/json' });
    if (url) {
      // ////console.log(url)

      document.getElementById('lidar_prop_pane').style.display = 'none'
      suidDataRequestClick(url)
    }
  }
  else if (modified_JSON_2_map['rto'][0] === '4M') {

    var url = wmsSource_mis_point_mbmc.getGetFeatureInfoUrl(
      evt.coordinate, viewResolution, 'EPSG:3857',
      { 'INFO_FORMAT': 'application/json' });
    if (url) {
      document.getElementById('lidar_prop_pane').style.display = 'none'
      ////console.log(url)
      suidDataRequestClick(url)
    }
  }
});

var eventID = null
map.on('dblclick', function (evt) {
  if (vectorLayer3) {

    map.removeLayer(vectorLayer3)
  }

  if (vectorLayer2) {

    map.removeLayer(vectorLayer2)
  }
  // ////console.log(evt)
  var viewResolution = /** @type {number} */ (view.getResolution());

  if (modified_JSON_2_map['rto'][0] === '4') {

    var lidar_url = wmsSource_LiDAR.getGetFeatureInfoUrl(
      evt.coordinate, viewResolution, 'EPSG:3857',
      { 'INFO_FORMAT': 'application/json' });
    if (lidar_url) {

      // ////console.log('lidar_url')
      // ////console.log(lidar_url)
      lidarDataRequestClick(lidar_url, modified_JSON_2_map['rto'][0])
      // eventID = setInterval(attachEvent, 10000)

    }
  } else if (modified_JSON_2_map['rto'][0] === '5') {

    var lidar_url = wmsSource_LiDAR_kdmc.getGetFeatureInfoUrl(
      evt.coordinate, viewResolution, 'EPSG:3857',
      { 'INFO_FORMAT': 'application/json' });
    if (lidar_url) {
      // ////console.log('lidar_url')
      // ////console.log(lidar_url)
      lidarDataRequestClick(lidar_url, modified_JSON_2_map['rto'][0])
      // eventID = setInterval(attachEvent, 10000)
    }
  }
  else if (modified_JSON_2_map['rto'][0] === '4M') {

    var lidar_url = wmsSource_LiDAR_mbmc.getGetFeatureInfoUrl(
      evt.coordinate, viewResolution, 'EPSG:3857',
      { 'INFO_FORMAT': 'application/json' });
    if (lidar_url) {
      ////console.log( lidar_url )
      lidarDataRequestClick(lidar_url, modified_JSON_2_map['rto'][0])
    }
  }
});



//adding layergroup

// var mis_point_layer = new ol.layer.Tile({
//   source: new ol.source.TileWMS({
//     url: `${url}/geoserver/TUMC_CIMS/wms`,
//     params: { 'LAYERS': 'TUMC_CIMS:mis_point', 'TILED': true },
//     serverType: 'geoserver',
//     // Countries have transparency, so do not fade tiles:
//     transition: 0
//   }),
//   title: 'mis_point',
//   visible: false
// })



// var ecw_layer = new ol.layer.Tile({
//   source: new ol.source.TileWMS({
//     url: `${url}/geoserver/mayureshWorkspace/wms?`,
//     params: { 'LAYERS': 'mayureshWorkspace:test_ECW', 'TILED': true },
//     serverType: 'geoserver',
//     // Countries have transparency, so do not fade tiles:
//     transition: 0
//   }),
//   title: 'test_ECW',
//   visible: false
// })
// var layerGroup = new ol.layer.Group({
//   layers: [mis_point_layer
//     ,
//     ecw_layer,
//     //   new ol.layer.Tile({
//     //     source: new ol.source.MapQuest({
//     //       layer: 'hyb'
//     //     }),
//     //     title: 'MapQuest Hybrid',
//     //     visible: false
//     //   }),
//     //   new ol.layer.Tile({
//     //     source: new ol.source.OSM(),
//     //     title: 'OpenStreetMap',
//     //     visible: false
//     //   })
//   ],
//   // zIndex: 9999
// });

// map.addLayer(layerGroup);





// var $layersList = $('#js-layers');

// layerGroup.getLayers().forEach(function (element, index, array) {
//   var $li = $('<li />');
//   $li.text(element.get('title'));
//   $layersList.append($li);
// });

// $layersList.sortable({
//   update: function () {
//     var topLayer = $layersList.find('li:first-child').text();

//     layerGroup.getLayers().forEach(function (element) {
//       element.setVisible(element.get('title') === topLayer);
//     });
//   }
// });


document.getElementById('BASEMAP_POINT_LAYER').checked = true
document.getElementById('BASEMAP_POINT_LAYER').oninput = function (e) {
  // alert('clicked!')
  // ////console.log(e)
  // alert('clicked!')
  // ////console.log(e.target.checked)

  if (modified_JSON_2_map['rto'][0] === '4') {
    if (e.target.checked === true) {
      wmsLayer_basemap_point.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_basemap_point.setVisible(false)
    }
  } else if (modified_JSON_2_map['rto'][0] === '5') {
    if (e.target.checked === true) {
      wmsLayer_basemap_point_kdmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_basemap_point_kdmc.setVisible(false)
    }

  }
  else if (modified_JSON_2_map['rto'][0] === '4M') {
    if (e.target.checked === true) {
      wmsLayer_basemap_point_mbmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_basemap_point_mbmc.setVisible(false)
    }

  }

}


document.getElementById('BASEMAP_LINE_LAYER').checked = true
document.getElementById('BASEMAP_LINE_LAYER').oninput = function (e) {
  // alert('clicked!')
  // ////console.log(e)
  // alert('clicked!')
  // ////console.log(e.target.checked)

  if (modified_JSON_2_map['rto'][0] === '4') {

    if (e.target.checked === true) {
      wmsLayer_baseMap_Line.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_baseMap_Line.setVisible(false)
    }
  } else if (modified_JSON_2_map['rto'][0] === '5') {

    if (e.target.checked === true) {
      wmsLayer_baseMap_Line_kdmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_baseMap_Line_kdmc.setVisible(false)
    }

  }
  else if (modified_JSON_2_map['rto'][0] === '4M') {
    if (e.target.checked === true) {
      wmsLayer_baseMap_Line_mbmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_baseMap_Line_mbmc.setVisible(false)
    }
  }


}

document.getElementById('BASEMAP_POLYGON_LAYER').checked = true
document.getElementById('BASEMAP_POLYGON_LAYER').oninput = function (e) {
  // alert('clicked!')
  // ////console.log(e)
  // alert('clicked!')
  // ////console.log(e.target.checked)

  if (modified_JSON_2_map['rto'][0] === '4') {

    if (e.target.checked === true) {
      wmsLayer_basemap_polygon.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_basemap_polygon.setVisible(false)
    }

  } else if (modified_JSON_2_map['rto'][0] === '5') {

    if (e.target.checked === true) {
      wmsLayer_basemap_polygon_kdmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_basemap_polygon_kdmc.setVisible(false)
    }

  }
  else if (modified_JSON_2_map['rto'][0] === '4M') {

    if (e.target.checked === true) {
      wmsLayer_basemap_polygon_mbmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_basemap_polygon_mbmc.setVisible(false)
    }

  }

}


document.getElementById('Structure_Footprint_LAYER').checked = true
document.getElementById('Structure_Footprint_LAYER').oninput = function (e) {
  // alert('clicked!')
  ////console.log(e.target.checked)
  ////console.log(modified_JSON_2_map['rto'])

  if (modified_JSON_2_map['rto'][0] === '4') {

    if (e.target.checked === true) {
      wmsLayer_Structure_Footprint.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_Structure_Footprint.setVisible(false)
    }

  } else if (modified_JSON_2_map['rto'][0] === '5') {

    if (e.target.checked === true) {
      wmsLayer_Structure_Footprint_kdmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_Structure_Footprint_kdmc.setVisible(false)
    }

  } else if (modified_JSON_2_map['rto'][0] === '4M') {
    if (e.target.checked === true) {
      wmsLayer_Structure_Footprint_mbmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_Structure_Footprint_mbmc.setVisible(false)
    }

  }


}



document.getElementById('boundary_LAYER').checked = true
document.getElementById('boundary_LAYER').oninput = function (e) {
  // alert('clicked!')
  ////console.log(e.target.checked)

  if (modified_JSON_2_map['rto'][0] === '4') {
    if (e.target.checked === true) {
      wmsLayer_boundary.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_boundary.setVisible(false)
    }
  } else if (modified_JSON_2_map['rto'][0] === '5') {
    if (e.target.checked === true) {
      wmsLayer_boundary_kdmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_boundary_kdmc.setVisible(false)
    }
  }
  else if (modified_JSON_2_map['rto'][0] === '4M') {
    if (e.target.checked === true) {
      wmsLayer_boundary_mbmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_boundary_mbmc.setVisible(false)
    }

  }
}

document.getElementById('mis_point_LAYER').checked = true
document.getElementById('mis_point_LAYER').oninput = function (e) {
  // alert('clicked!')
  ////console.log(e.target.checked)

  if (modified_JSON_2_map['rto'][0] === "4") {

    if (e.target.checked === true) {
      wmsLayer_mis_point.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_mis_point.setVisible(false)
    }
  } else if (modified_JSON_2_map['rto'][0] === "5") {

    if (e.target.checked === true) {
      wmsLayer_mis_point_kdmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_mis_point_kdmc.setVisible(false)
    }
  }
  else if (modified_JSON_2_map['rto'][0] === "4M") {

    if (e.target.checked === true) {
      wmsLayer_mis_point_mbmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_mis_point_mbmc.setVisible(false)
    }
  }
}



document.getElementById('lidar_LAYER').checked = true
document.getElementById('lidar_LAYER').oninput = function (e) {
  // alert('clicked!')
  ////console.log(e.target.checked)

  if (modified_JSON_2_map['rto'][0] === "4") {

    if (e.target.checked === true) {
      wmsLayer_LiDAR.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_LiDAR.setVisible(false)
    }
  } else if (modified_JSON_2_map['rto'][0] === "5") {

    if (e.target.checked === true) {
      wmsLayer_LiDAR_kdmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_LiDAR_kdmc.setVisible(false)
    }
  }
  else if (modified_JSON_2_map['rto'][0] === "4M") {

    if (e.target.checked === true) {
      wmsLayer_LiDAR_mbmc.setVisible(true)
    } else if (e.target.checked == false) {
      wmsLayer_LiDAR_mbmc.setVisible(false)
    }
  }
}


document.getElementById('Satellite_Image_Layer').checked = true
document.getElementById('Satellite_Image_Layer').oninput = function (e) {
  // alert('clicked!')
  ////console.log(e.target.checked)

  if (modified_JSON_2_map['rto']) {

    if (e.target.checked === true) {
      worldImagery.setVisible(true)
    } else if (e.target.checked == false) {
      worldImagery.setVisible(false)
    }
  }

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
// function toggleLayer(element) {
//   if (element.checked) {
//     ////console.log('checked!')
//   }
//   else {
//     ////console.log('Un - checked!')
//   }
// }























//snap interaction
// let snapInteract = new ol.interaction.Snap({
//   source: tempVector.getSource()
// });
// map.addInteraction(snapInteract);

// function snapFeat(fs) {


//   let tempsnapInteract = new ol.interaction.Snap({
//     source: fs
//   });
//   map.addInteraction(tempsnapInteract);
// }

// let fa = map.getLayers().a

// if (map.getLayers().a.length != 0) {
//   for (let index = 0; index < fa.length; index++) {
//     const feat_element = fa[index];
//     let featSource = feat_element.getSource()
//     snapFeat(featSource)

//   }
// }








// adding single click interaction
// var selectSingleClick = new ol.interaction.Select();
// var selectSingleClick = new ol.interaction.Select({
//   condition: ol.events.condition.click
// });
// map.addInteraction(selectSingleClick);

// map.on('click', function (evt) {
//   ////console.log(evt)
// })



// **** change mouse cursor to pointer when feature is present
// map.on('pointermove', function(evt) {
//   map.getTargetElement().style.cursor =
//       map.hasFeatureAtPixel(evt.pixel) ? 'pointer' : '';
// });


// map.on('pointermove', function (evt) {

// //  console.log(document.getElementById('mis_point_LAYER').checked); 

// if (document.getElementById('mis_point_LAYER').checked === true) {

//   var viewResolution = /** @type {number} */ (view.getResolution());

//   if (modified_JSON_2_map['rto'][0] === "4") {
//     var url = wmsSource_mis_point.getGetFeatureInfoUrl(
//       evt.coordinate, viewResolution, 'EPSG:3857',
//       // { 'INFO_FORMAT': 'text/html' }
//       { 'INFO_FORMAT': 'application/json' }
//     );
//     if (url) {
//       // ////console.log('hovercode -')
//       // ////console.log(url)
//       let new_url = url

//       //* function to suid popup****
//       suidDataRequestPopup(new_url, evt.coordinate)
//       //* function to suid popup****


//       // content.innerHTML = '<p>You clicked here:</p><code>' + 'popup' +
//       //   '</code>';
//       // overlay.setPosition(evt.coordinate);


//       // document.getElementById('info').href = url;
//       // document.getElementById('popup').src = url;
//     }

//   } else if (modified_JSON_2_map['rto'][0] === "5") {
//     var url = wmsSource_mis_point_kdmc.getGetFeatureInfoUrl(
//       evt.coordinate, viewResolution, 'EPSG:3857',
//       // { 'INFO_FORMAT': 'text/html' }
//       { 'INFO_FORMAT': 'application/json' }
//     );
//     if (url) {
//       let new_url = url
//       suidDataRequestPopup(new_url, evt.coordinate)
//     }
//   }
//   else if (modified_JSON_2_map['rto'][0] === "4M") {
//     var url = wmsSource_mis_point_mbmc.getGetFeatureInfoUrl(
//       evt.coordinate, viewResolution, 'EPSG:3857',
//       // { 'INFO_FORMAT': 'text/html' }
//       { 'INFO_FORMAT': 'application/json' }
//     );
//     if (url) {
//       let new_url = url
//       suidDataRequestPopup(new_url, evt.coordinate)
//     }
//   }
// }

// });



//change mouse cursor to pointer when feature is present **** end


// **********click and get feature
// this.map.on('click', function(evt){
//     var feature = evt.map.forEachFeatureAtPixel(evt.pixel, function(feature) {
//                        return feature;
//                     });
//       if (feature) {
//           ////console.log("Feature found");
//         }
//       });
// click and get feature ********ends






//******adding point geometry to single layer
//       let pnt0 = new ol.geom.Point([0, 0]);
//       let pnt1 = new ol.geom.Point([1, 1]);
//       let pnt2 = new ol.geom.Point([2, 2]);
//       let pnt3 = new ol.geom.Point([3, 3]);
// var pntfeature0 = new ol.Feature({
//   name: "Thane",
//   geometry: pnt0
// });
// vectorSource_1.addFeature(pntfeature0);
// var pntfeature1 = new ol.Feature({
//   name: "Thane",
//   geometry: pnt1
// });
// vectorSource_1.addFeature(pntfeature1);
// var pntfeature2 = new ol.Feature({
//   name: "Thane",
//   geometry: pnt2
// });
// vectorSource_1.addFeature(pntfeature2);
// var pntfeature3 = new ol.Feature({
//   name: "Thane",
//   geometry: pnt3
// });
// vectorSource_1.addFeature(pntfeature3);

//adding point geometry to single layer ends ******

// ////console.log(newVectorLayer_1)
// simple snap interaction for a layer
// var snap = new ol.interaction.Snap({
//   source: newVectorLayer_1
// });
// map.addInteraction(snap);

// map.getLayers().item(i).getSource().getSource().clear();
// ////console.log(map.getLayers())

//geeting source of single object
// ////console.log(map.getLayers().a[3].getSource().clear())







/**
 * Add a click handler to the map to render the popup.
 */
// map.on('singleclick', function (evt) {
//   var coordinate = evt.coordinate;
//   var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(
//     coordinate, 'EPSG:3857', 'EPSG:4326'));

//   content.innerHTML = '<p>You clicked here:</p><code>' + hdms +
//     '</code>';
//   overlay.setPosition(coordinate);
// });





function suidDataRequestPopup(n_url, eventCoordinates) {
  suid_data = new XMLHttpRequest()
  url_local = 'getPopupSuid'
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
      if (suidResponseData === 'No Feature Found') {
        ////console.log('No Feature Found')
        // content.style.display = 'none'
      } else if (suidResponseData === 'No suid found') {
        ////console.log('No suid found')
        // content.style.display = 'none'
      } else {
        ////console.log(suidResponseData)
        document.getElementById('searchSUID_Input').value = suidResponseData
        // content.innerHTML = '<p>SUID :</p><code>' + suidResponseData +
        //   '</code>';
        // overlay.setPosition(eventCoordinates);
      }
    }
  };
  suid_data.send(`geoserverURL=${n_url}`)
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
        add_ricoh(suidResponseProperties)
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



function appendlidar_Data(params) {
  ////console.log(params)
}



// function lidarDataRequestClick(n_url) {

//   lidar_data = new XMLHttpRequest()
//   let lidar_local = 'getClickLidar'
//   lidar_data.open('POST', lidar_local, true)
//   lidar_data.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   // lidar_data.setRequestHeader("Content-Type", "application/json");
//   // lidar_data.onload = () => {
//   lidar_data.onreadystatechange = () => {
//     // Call a function when the state changes.
//     if (lidar_data.readyState === XMLHttpRequest.DONE && lidar_data.status === 200) {
//       // Request finished. Do processing here.
//       ////console.log(JSON.parse(lidar_data.response))
//       let lidarResponseData = JSON.parse(lidar_data.response)['suid']
//       let lidar_ResponseProperties = JSON.parse(lidar_data.response)['lidarExtract_Properties']
//       if (lidarResponseData === 'No Feature Found') {
//         ////console.log('No Feature Found')
//         // content.style.display = 'none'
//       } else if (lidarResponseData === 'No suid found') {
//         ////console.log('No suid found')
//         // content.style.display = 'none'
//       } else {
//         ////console.log('lidar data received')
//         ////console.log(lidarResponseData)
//         appendlidar_Data(lidar_ResponseProperties)
//       }
//     }
//   };
//   lidar_data.send(`geoserverURL=${n_url}`)
// }


var hotSpotPoint = null
var hotSpotPointLat = null
var hotSpotPointLong = null
var vectorLayer2 = null

function createAddPoint_old(_map_latitude, _map_longitude) {
  // create the source and layer for random features
  ////console.log("_map_latitude,_map_longitude");
  ////console.log(_map_latitude, _map_longitude);
  // let pnt1x = new ol.geom.Point([Number(_map_latitude), Number(_map_longitude)]);
  var pnt1x = ol.proj.transform([Number(_map_latitude), Number(_map_longitude)], 'EPSG:4326', 'EPSG:3857');
  const pnts = [new ol.Feature({ geometry: pnt1x })]
  const vectorSource = new ol.source.Vector({
    pnts
  });
  const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
      image: new ol.style.Circle({
        radius: 100,
        fill: new ol.style.Fill({ color: 'red' })
      })
    })
  });
  return vectorLayer
}
function createAddPoint(_map_latitude, _map_longitude) {



  var layersToRemove = [];
  map.getLayers().forEach(function (layer) {
    ////console.log('layer to remove fund')
    ////console.log(layer)
    if (layer.get('name') != undefined && layer.get('name') === 'Marker') {
      layersToRemove.push(layer);
    }
  });
  ////console.log('layersToRemove');
  ////console.log(layersToRemove);
  if (vectorLayer2) {

    map.removeLayer(vectorLayer2)
  }

  // create the source and layer for random features
  ////console.log("_map_latitude,_map_longitude");
  ////console.log(_map_latitude, _map_longitude);
  var pnt1x = ol.proj.transform([Number(_map_latitude), Number(_map_longitude)], 'EPSG:4326', 'EPSG:3857');
  ////console.log("pnt1x[1],pnt1x[0]");
  ////console.log(pnt1x[1], pnt1x[0]);
  var pnt2x = ol.proj.transform([Number(_map_longitude), Number(_map_latitude)], 'EPSG:4326', 'EPSG:3857');
  ////console.log("pnt2x[1],pnt2x[0]");
  ////console.log(pnt2x[1], pnt2x[0]);
  // var iconFeature = new ol.Feature({
  //   geometry: new ol.geom.Point([Number(_map_latitude),Number(_map_longitude)]),
  // });
  var iconFeature2 = new ol.Feature({
    geometry: new ol.geom.Point([pnt2x[0], pnt2x[1]]),
    name: 'Marker'
  });

  var vectorSource2 = new ol.source.Vector({
    features: [iconFeature2]
  });


  vectorLayer2 = new ol.layer.Vector({
    source: vectorSource2,
    style: new ol.style.Style({
      image: new ol.style.Circle({
        radius: 30,
        stroke: new ol.style.Stroke({
          color: 'red',
          width: 3
        }),
        // fill: new ol.style.Fill({ color: 'red' })
        fill: new ol.style.Fill({
          color: 'rgba(255,0,0,0.4)'
        })
      })
    })
  });
  map.addLayer(vectorLayer2)
  var duration = 3000;

  function flash(feature) {
    var start = new Date().getTime();
    var listenerKey;

    function animate(event) {
      var vectorContext = event.vectorContext;
      var frameState = event.frameState;
      var flashGeom = feature.getGeometry().clone();
      var elapsed = frameState.time - start;
      var elapsedRatio = elapsed / duration;
      // radius will be 5 at start and 30 at end.
      var radius = ol.easing.easeOut(elapsedRatio) * 25 + 5;
      var opacity = ol.easing.easeOut(1 - elapsedRatio);

      var style = new ol.style.Style({
        image: new ol.style.Circle({
          radius: radius * 5,
          snapToPixel: false,
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 0, 0, ' + opacity + ')',
            width: 0.25 * 4 + opacity
          })
        })
      });

      vectorContext.setStyle(style);
      vectorContext.drawGeometry(flashGeom);
      if (elapsed > duration) {
        ol.Observable.unByKey(listenerKey);
        return;
      }
      // tell OpenLayers to continue postcompose animation
      map.render();
    }
    listenerKey = map.on('postcompose', animate);
  }


  flash(iconFeature2);
  // map.on('change', function(e) {
  // });


}



function createAddPoint_search_suid(_map_latitude, _map_longitude) {
  var layersToRemove = [];
  map.getLayers().forEach(function (layer) {
    if (layer.get('name') != undefined && layer.get('name') === 'Marker') {
      layersToRemove.push(layer);
    }
  });
  if (vectorLayer2) {

    map.removeLayer(vectorLayer2)
  }
  var pnt1x = ol.proj.transform([Number(_map_latitude), Number(_map_longitude)], 'EPSG:4326', 'EPSG:3857');
  var pnt2x = ol.proj.transform([Number(_map_longitude), Number(_map_latitude)], 'EPSG:4326', 'EPSG:3857');
  var iconFeature2 = new ol.Feature({
    geometry: new ol.geom.Point([pnt2x[0], pnt2x[1]]),
    name: 'Marker'
  });

  var vectorSource2 = new ol.source.Vector({
    features: [iconFeature2]
  });


  vectorLayer2 = new ol.layer.Vector({
    source: vectorSource2,
    style: new ol.style.Style({
      image: new ol.style.Circle({
        radius: 12,
        stroke: new ol.style.Stroke({
          color: 'black',
          width: 5
        }),
        fill: new ol.style.Fill({
          // color: 'rgba(255,0,0,0)'
          color: 'rgba(255,255,255,1)'

        })
      })
    })
  });
  map.addLayer(vectorLayer2)
  map.getView().setCenter([pnt2x[0], pnt2x[1]])
  map.getView().setZoom(22)

  var duration = 3000;

  function flash(feature) {
    var start = new Date().getTime();
    var listenerKey;

    function animate(event) {
      var vectorContext = event.vectorContext;
      var frameState = event.frameState;
      var flashGeom = feature.getGeometry().clone();
      var elapsed = frameState.time - start;
      var elapsedRatio = elapsed / duration;
      var radius = ol.easing.easeOut(elapsedRatio) * 25 + 5;
      var opacity = ol.easing.easeOut(1 - elapsedRatio);

      var style = new ol.style.Style({
        image: new ol.style.Circle({
          radius: radius * 5,
          snapToPixel: false,
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 0, 0, ' + opacity + ')',
            width: 0.25 * 4 + opacity
          })
        })
      });

      vectorContext.setStyle(style);
      vectorContext.drawGeometry(flashGeom);
      if (elapsed > duration) {
        ol.Observable.unByKey(listenerKey);
        return;
      }
      // tell OpenLayers to continue postcompose animation
      map.render();
    }
    listenerKey = map.on('postcompose', animate);
  }

  flash(iconFeature2);
}



var new_info = []
function lidarDataRequestClick(n_url, rto) {
  if (vectorLayer3) {

    map.removeLayer(vectorLayer3)
  }

  let lidarDiv = document.getElementById('Lidar_Div')
  if (lidarDiv.hasChildNodes() === true) {
    while (lidarDiv.hasChildNodes()) {
      lidarDiv.removeChild(lidarDiv.lastChild);
    }
  }
  $.ajax({
    "type": "GET",
    "url": "getClickLidar",
    "data": { "url": n_url, "rto": rto },
  }
  ).then(function (response) {
    ////console.log(response)
    let lidar_prop_pane = document.getElementById('lidar_prop_pane')
    if (response['suid'] === "Image Found") {
      let imageName = response['image']
      let this_suid = response['this_suid']

      // hotSpotPoint = new_info['geom']
      hotSpotPointLat = response['hotSpotPointLat']
      hotSpotPointLong = response['hotSpotPointLong']
      var pntlyr = createAddPoint(hotSpotPointLat, hotSpotPointLong)

      // ////console.log("imageName")
      // ////console.log(imageName)
      new_info = response['new_info']
      let HotSpots = buildHotSpot(new_info, this_suid)
      ////console.log('HotSpots')
      ////console.log(HotSpots)
      lidar_prop_pane.style.display = 'block'
      // ////console.log(pntlyr)

      ////console.log('layer has been added to map!!!')

      // ////console.log('pannellum.viewer');
      // ////console.log(pannellum.viewer);

      function bfp(ev) {
        // ev.preventDefault();
        ////console.log('bfp event');


        ////console.log(ev);
      }
      function afp(ev) {
        ////console.log('afp event');
        ////console.log(ev);
        print(window)
      }
      // window.onbeforeprint = bfp(ev)
      // window.onafterprint = afp(ev)

      window.addEventListener("afterprint", (event) => {
        ////console.log(event);
        ////console.log("After print");
        // window.close()
      });
      window.addEventListener("beforeprint", (event) => {
        ////console.log(event);
        ////console.log("before print");
        event.preventDefault()
        // window.close()
      });

      // let pv = pannellum.viewer('Lidar_Div', {

      //   "default": {
      //     "firstScene": "circle",
      //     "author": "Matthew Petroff",
      //     "sceneFadeDuration": 1000
      //   },
      //   "scenes": {
      //     "circle": {
      //       "title": "Mason Circle",
      //       "hfov": 110,
      //       "pitch": -3,
      //       "yaw": 117,
      //       "type": "equirectangular",
      //       "panorama": "readLidarImage",
      //       "autoLoad": true,
      //       "pitch": 2.3,
      //       "strings": {
      //         "fileAccessError": "The file does not exists.!",
      //       },
      //       "hotSpots": []
      //     }
      //   }
      // })

      // window.close()
      let pv = pannellum.viewer('Lidar_Div',
        {
          'scenes': [], 'autoLoad': false
        });
      pv.destroy()

      pv = pannellum.viewer('Lidar_Div',
        {
          'scenes': [], 'autoLoad': false
        });
      let scn = {
        "type": "equirectangular",
        "panorama": "readLidarImage"
      }

      pv.addScene('test', scn);
      pv.loadScene('test', 0, 0, 120);


      for (let index = 0; index < HotSpots.length; index++) {
        const element = HotSpots[index];
        pv.addHotSpot(element, pv.getScene());
      }



      var suidPointer = document.getElementsByClassName("pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-scene pnlm-pointer pnlm-tooltip pnlm-pointer")
      ////console.log('suidPointer')
      if (suidPointer.length > 0) {
        ////console.log(suidPointer)
      }
      ////console.log(pv);
      if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        ////console.log("mediaQueryList");
        ////console.log(mediaQueryList);
        // mediaQueryList.addEventListener(function(mql) {
        //     if (mql.matches) {
        //         beforePrint();
        //     } else {
        //         afterPrint();
        //     }
        // });
      }


    } else if (response['suid'] === "Image not Found") {
      lidar_prop_pane.style.display = 'none'

    } else if (response['suid'] === "No suid found") {
      lidar_prop_pane.style.display = 'none'

    }
  })
}




// code for read ricoh image//

function add_ricoh(suidProps) {
  // console.log('add_ricoh\n');
  // console.log(suidProps);


  let lidarDiv = document.getElementById('Lidar_Div')
  if (lidarDiv.hasChildNodes() === true) {
    while (lidarDiv.hasChildNodes()) {
      lidarDiv.removeChild(lidarDiv.lastChild);
    }
  }


  $.ajax({
    "type": "GET",
    "url": "urlconstructorRicoh",
    "data": { "rto": suidProps['rto'], "urp": suidProps['urp'], "urc": suidProps['urc'], "block": suidProps['block'], "suid": suidProps['suid'] },
  }
  ).then(function (response) {
    let lidar_prop_pane = document.getElementById('lidar_prop_pane')
    if (response['suid'] === "Image Found") {
      // let imageName = response['image']
      // let this_suid = response['this_suid']

      lidar_prop_pane.style.display = 'block'


      // let pv = pannellum.viewer('Lidar_Div', {

      //   "default": {
      //     "firstScene": "circle",
      //     "author": "Matthew Petroff",
      //     "sceneFadeDuration": 1000
      //   },
      //   "scenes": {
      //     "circle": {
      //       "title": "Mason Circle",
      //       "hfov": 110,
      //       "pitch": -3,
      //       "yaw": 117,
      //       "type": "equirectangular",
      //       "panorama": "readLidarImage",
      //       "autoLoad": true,
      //       "pitch": 2.3,
      //       "strings": {
      //         "fileAccessError": "The file does not exists.!",
      //       },
      //       "hotSpots": []
      //     }
      //   }
      // })

      // window.close()
      let pv = pannellum.viewer('Lidar_Div',
        {
          'scenes': [], 'autoLoad': false
        });
      pv.destroy()

      pv = pannellum.viewer('Lidar_Div',
        {
          'scenes': [], 'autoLoad': false
        });
      let scn = {
        "type": "equirectangular",
        "panorama": "readRicohImage"
      }

      pv.addScene('test', scn);
      pv.loadScene('test', 0, 0, 120);

    } else if (response['suid'] === "Image not Found") {
      lidar_prop_pane.style.display = 'none'

    } else if (response['suid'] === "No suid found") {
      lidar_prop_pane.style.display = 'none'

    }

  })



}
// code for read ricoh image ends here//

// SETTING BASEMAP POINT AND LINE FALSE BY DEFAULT
document.getElementById('BASEMAP_POINT_LAYER').checked = false
document.getElementById('BASEMAP_LINE_LAYER').checked = false
document.getElementById('BASEMAP_POLYGON_LAYER').checked = false
document.getElementById('Satellite_Image_Layer').checked = false
document.getElementById('Structure_Footprint_LAYER').checked = false
document.getElementById('lidar_LAYER').checked = false
document.getElementById('mis_point_LAYER').checked = false


wmsLayer_basemap_point.setVisible(false)
wmsLayer_baseMap_Line.setVisible(false)
wmsLayer_basemap_polygon.setVisible(false)
wmsLayer_Structure_Footprint.setVisible(false)
wmsLayer_LiDAR.setVisible(false)
wmsLayer_mis_point.setVisible(false)

wmsLayer_basemap_point_kdmc.setVisible(false)
wmsLayer_baseMap_Line_kdmc.setVisible(false)
wmsLayer_basemap_polygon_kdmc.setVisible(false)
wmsLayer_Structure_Footprint_kdmc.setVisible(false)
wmsLayer_LiDAR_kdmc.setVisible(false)
wmsLayer_mis_point_kdmc.setVisible(false)

wmsLayer_basemap_point_mbmc.setVisible(false)
wmsLayer_baseMap_Line_mbmc.setVisible(false)
wmsLayer_basemap_polygon_mbmc.setVisible(false)
worldImagery.setVisible(false)
wmsLayer_Structure_Footprint_mbmc.setVisible(false)
wmsLayer_LiDAR_mbmc.setVisible(false)
wmsLayer_mis_point_mbmc.setVisible(false)



//single suid search
function ShowSUIDInfo() {
  let suidInput = document.getElementById('searchSUID_Input')
  ////console.log(suidInput.value)
  if (suidInput.value !== '') {
    ////console.log(suidInput)
    suid_search_data = new XMLHttpRequest()
    url_local = 'searchSUID'
    suid_search_data.open('POST', url_local, true)
    suid_search_data.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    suid_search_data.onreadystatechange = () => {
      // Call a function when the state changes.
      if (suid_search_data.readyState === XMLHttpRequest.DONE && suid_search_data.status === 200) {
        // Request finished. Do processing here.
        ////console.log(JSON.parse(suid_search_data.response))
        let suidResponseData = JSON.parse(suid_search_data.response)['suidSearchData']
        ////console.log(suidResponseData)
        suidResponseData.pop()
        suidResponseData.pop()
        suidResponseData.pop()
        suidResponseData.pop()
        suidResponseData.pop()
        suidResponseData.pop()
        suidResponseData.pop()

        // let suidResponseProperties = JSON.parse(suid_search_data.response)['suidExtract_Properties']
        // appendSUID_search_Data(suidResponseProperties)
        let propPanel = document.getElementById('suid_prop_pane')

        var searchPointLat = 0
        var searchPointLong = 0

        let prop_temp_div_2 = document.getElementById('prop_temp_div')
        if (prop_temp_div_2 !== null) {
          prop_temp_div_2.parentNode.removeChild(prop_temp_div_2)
        }
        let prop_temp_div = document.createElement('div')
        prop_temp_div.id = 'prop_temp_div'
        prop_temp_div.style.paddingLeft = '10px'
        prop_temp_div.style.paddingRight = '10px'
        prop_temp_div.style.paddingBottom = '10px'

        if (suidResponseData !== 'No valid Suid Found' && suidResponseData.length !== 0) {
          for (let su_index = 0; su_index < suidResponseData.length; su_index++) {
            let su_element = suidResponseData[su_index];
            ////console.log("su_element")
            ////console.log(su_element[0])
            ////console.log(su_element[1])
            // searchSUID_append(su_element[0],su_element[1],propPanel)


            if (su_element[0] === 'latitude') {
              searchPointLat = su_element[1]
            } else if (su_element[0] === 'longitude') {
              searchPointLong = su_element[1]
            } else {

            }

            if (su_element[0] !== 'objectid' && su_element[0] !== 'ui_file' && su_element[0] !== 'ui_type' && su_element[0] !== 'ui_name') {
              if (su_element[1] !== null && su_element[1] !== '') {
                let tempEle = document.createElement('code')
                let tempSpan = document.createElement('span')
                let tempEle_1 = document.createElement('code')
                tempEle.style.color = 'black'
                tempEle.style.fontSize = '1em'
                tempEle.className = 'suidDynamicData'
                let temphr = document.createElement('br')
                tempEle.id = su_element[0]
                tempEle.innerText = su_element[0] + ' : ' + su_element[1]
                let suid_prop_element_ = document.createElement('code')
                tempEle_1.innerText = su_element[0]
                tempEle_1.style.color = 'tomato'
                tempEle_1.style.fontWeight = 'bold'
                tempEle_1.style.fontSize = 'large'
                suid_prop_element_.innerText = ' : ' + su_element[1]
                suid_prop_element_.style.color = 'black'
                suid_prop_element_.style.fontSize = 'large'
                tempSpan.appendChild(tempEle_1)
                tempSpan.appendChild(suid_prop_element_)
                prop_temp_div.appendChild(tempSpan)
                // prop_temp_div.appendChild(tempEle)
                prop_temp_div.appendChild(temphr)
              }
            }
          }
          propPanel.appendChild(prop_temp_div)
          if (searchPointLat !== 0 && searchPointLong !== 0) {
            createAddPoint_search_suid(searchPointLat, searchPointLong)
          }
        }

      }
    };
    suid_search_data.send(`suidInput=${suidInput.value}`)

  }
}



function searchSUID_append(su_e_key, su_e_value, propertyPanel) {

  // let final_load_dict = creatDictionaryFromList(su_e)



  // for (const su_key in su_e) {
  //     let se_kv_elm = su_e[su_key];
  //     if (se_kv_elm !== '') { 
  //       if (su_key !== 'ui_file' && su_key !== 'ui_type' && su_key !== 'ui_name' && su_key !=="objectid") {        

  //       }     
  //     }
  // }
}

// function creatDictionaryFromList(SUID_Data_List) {
//   finalSUID_dictionary = {}
//   for (let inx = 0; inx < SUID_Data_List.length; inx++) {
//     let suEle = SUID_Data_List[inx];
//     // ////console.log(suEle)
//     if(!suEle[1]){
//     }else{
//       let tempValue = suEle[1]
//       if (tempValue !== null && tempValue !== ''){
//         finalSUID_dictionary[suEle[0]] =tempValue 
//       }
//     }
//   }
//   return finalSUID_dictionary
// }

var tempLayerCheckListBoundary = []
var tempLayerCheckListBasemapPoint = []
var tempLayerCheckListBasemapPolygon = []
var tempLayerCheckListBasemapLine = []
var tempLayerCheckListStructureFootprint = []

$.ajax({
  "type": "GET",
  "url": "getAttributesForLayerFilter",
}).then(function (response) {

  let boundaryAtt = response['boundaryAttributesForLayerFilter']
  ////console.log(boundaryAtt)
  let boundaryCollapseDiv = document.getElementById('collapse-div-boundary')
  // boundaryCollapseDiv.parentNode.removeChild(boundaryCollapseDiv)
  for (let index = 0; index < boundaryAtt.length; index++) {
    const element = boundaryAtt[index];
    ////console.log(element)
    createLayerFilterCheck(boundaryCollapseDiv, element)
  }

  let basemap_point_Att = response['basemap_points_AttributesForLayerFilter']
  ////console.log(basemap_point_Att)
  let baseMap_point_CollapseDiv = document.getElementById('collapse-div-basemap_point')
  // boundaryCollapseDiv.parentNode.removeChild(boundaryCollapseDiv)
  for (let index = 0; index < basemap_point_Att.length; index++) {
    const element = basemap_point_Att[index];
    ////console.log(element)
    createLayerFilterCheck(baseMap_point_CollapseDiv, element)
  }

  let basemap_line_Att = response['basemap_line_AttributesForLayerFilter']
  let baseMap_line_CollapseDiv = document.getElementById('collapse-div-basemap_line')
  for (let index = 0; index < basemap_line_Att.length; index++) {
    const element = basemap_line_Att[index];
    createLayerFilterCheck(baseMap_line_CollapseDiv, element)
  }

  let basemap_polygon_Att = response['basemap_polygon_AttributesForLayerFilter']
  let baseMap_polygon_CollapseDiv = document.getElementById('collapse-div-basemap_polygon')
  for (let index = 0; index < basemap_polygon_Att.length; index++) {
    const element = basemap_polygon_Att[index];
    createLayerFilterCheck(baseMap_polygon_CollapseDiv, element)
  }

  // let basemap_structure_footprint_Att = response['basemap_structureFootprint_AttributesForLayerFilter']
  // let baseMap_structure_footprint_CollapseDiv = document.getElementById('collapse-div-structure_footprint')
  // for (let index = 0; index < basemap_structure_footprint_Att.length; index++) {
  //   const element = basemap_structure_footprint_Att[index];
  //   createLayerFilterCheck(baseMap_structure_footprint_CollapseDiv, element)
  // }
})


function createLayerFilterCheck(mainDiv, attributeName) {

  if (modified_JSON_2_map['rto'][0] === '4') {

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
  } else if (modified_JSON_2_map['rto'][0] === '5') {
    let tempCheckBox = document.createElement('input')
    tempCheckBox.type = 'checkbox'
    tempCheckBox.id = attributeName
    let tempLabel = document.createElement('label')
    tempLabel.innerText = attributeName
    tempLabel.for = attributeName
    // tempCheckBox.appendChild(tempLabel)
    ////console.log(tempCheckBox)
    tempCheckBox.checked = true
    tempCheckBox.onclick = layerToggleCheck_KDMC
    temp_P = document.createElement('p')
    mainDiv.appendChild(temp_P)
    mainDiv.appendChild(tempCheckBox)
    mainDiv.appendChild(tempLabel)
  }
  else if (modified_JSON_2_map['rto'][0] === '4M') {
    let tempCheckBox = document.createElement('input')
    tempCheckBox.type = 'checkbox'
    tempCheckBox.id = attributeName
    let tempLabel = document.createElement('label')
    tempLabel.innerText = attributeName
    tempLabel.for = attributeName
    // tempCheckBox.appendChild(tempLabel)
    ////console.log(tempCheckBox)
    tempCheckBox.checked = true
    tempCheckBox.onclick = layerToggleCheck_MBMC
    temp_P = document.createElement('p')
    mainDiv.appendChild(temp_P)
    mainDiv.appendChild(tempCheckBox)
    mainDiv.appendChild(tempLabel)
  }
}

function hideLayer(listAttr) {
  let hide_query = ``
  if (listAttr.length > 0) {
    for (let i = 0; i < listAttr.length; i++) {
      if (i + 1 !== listAttr.length) {
        const e = `ui_type not like '${listAttr[i]}' and `;
        hide_query = hide_query + e
      } else {
        const e = `ui_type not like '${listAttr[i]}'`;
        hide_query = hide_query + e
      }
    }
  } else {
    ////console.log("it's empty!")
  }
  ////console.log('hide_query')
  ////console.log(hide_query)
  return hide_query
}

function layerToggleCheck(e) {

  ////console.log(e.target.parentElement.id)
  if (e.target.parentElement.id == 'collapse-div-boundary') {
    ////console.log(e.target.id)

    ////console.log(wmsSource_boundary['i']['CQL_FILTER'])
    // ////console.log(wmsLayer_boundary)
    if (!e.target.checked) {
      tempLayerCheckListBoundary.push(e.target.id)
      ////console.log('tempLayerCheckListBoundary')
      ////console.log('attribute added!')
      // tempLayerCheckListBoundary.push(e.target.checked)
      ////console.log(tempLayerCheckListBoundary)

      let final_hide = hideLayer(tempLayerCheckListBoundary)
      // wmsSource_boundary['i']['CQL_FILTER'] = `ui_type!='${e.target.id}'`
      // wmsSource_boundary['i']['CQL_FILTER'] = `ui_type not like'${e.target.id}'`
      wmsSource_boundary['i']['CQL_FILTER'] = final_hide
      wmsSource_boundary.refresh()
    } else if (e.target.checked) {
      ////console.log('attribute removed')
      let attrIndx = tempLayerCheckListBoundary.indexOf(e.target.id)
      tempLayerCheckListBoundary.splice(start = attrIndx, deleteCount = 1)
      ////console.log(tempLayerCheckListBoundary)
      let final_show = hideLayer(tempLayerCheckListBoundary)
      wmsSource_boundary['i']['CQL_FILTER'] = ``
      wmsSource_boundary['i']['CQL_FILTER'] = final_show
      wmsSource_boundary.refresh()

    }

  } else if (e.target.parentElement.id == 'collapse-div-basemap_point') {
    ////console.log(e.target.id)
    ////console.log(wms_basemap_point['i']['CQL_FILTER'])
    // ////console.log(wmsLayer_boundary)
    if (!e.target.checked) {
      tempLayerCheckListBasemapPoint.push(e.target.id)
      let final_hide_b_points = hideLayer(tempLayerCheckListBasemapPoint)
      // wms_basemap_point['i']['CQL_FILTER'] = `ui_type='${e.target.id}'`
      wms_basemap_point['i']['CQL_FILTER'] = final_hide_b_points
      wms_basemap_point.refresh()
    } else if (e.target.checked) {
      let attrIndx_b_points = tempLayerCheckListBasemapPoint.indexOf(e.target.id)
      tempLayerCheckListBasemapPoint.splice(start = attrIndx_b_points, deleteCount = 1)
      let final_show_b_points = hideLayer(tempLayerCheckListBasemapPoint)
      // wms_basemap_point['i']['CQL_FILTER'] = ``
      wms_basemap_point['i']['CQL_FILTER'] = final_show_b_points
      wms_basemap_point.refresh()

    }

  } else if (e.target.parentElement.id == 'collapse-div-basemap_line') {
    if (!e.target.checked) {
      tempLayerCheckListBasemapLine.push(e.target.id)
      let final_hide_b_line = hideLayer(tempLayerCheckListBasemapLine)
      wms_baseMap_Line['i']['CQL_FILTER'] = final_hide_b_line
      wms_baseMap_Line.refresh()
    } else if (e.target.checked) {
      let attrIndx_b_line = tempLayerCheckListBasemapLine.indexOf(e.target.id)
      tempLayerCheckListBasemapLine.splice(start = attrIndx_b_line, deleteCount = 1)
      let final_show_b_line = hideLayer(tempLayerCheckListBasemapLine)
      wms_baseMap_Line['i']['CQL_FILTER'] = final_show_b_line
      wms_baseMap_Line.refresh()

    }

  } else if (e.target.parentElement.id == 'collapse-div-basemap_polygon') {
    if (!e.target.checked) {
      tempLayerCheckListBasemapPolygon.push(e.target.id)
      let final_hide_b_polygon = hideLayer(tempLayerCheckListBasemapPolygon)
      wmsSource_basemap_polygon['i']['CQL_FILTER'] = final_hide_b_polygon
      wmsSource_basemap_polygon.refresh()
    } else if (e.target.checked) {
      let attrIndx_b_polygon = tempLayerCheckListBasemapPolygon.indexOf(e.target.id)
      tempLayerCheckListBasemapPolygon.splice(start = attrIndx_b_polygon, deleteCount = 1)
      let final_show_b_polygon = hideLayer(tempLayerCheckListBasemapPolygon)
      wmsSource_basemap_polygon['i']['CQL_FILTER'] = final_show_b_polygon
      wmsSource_basemap_polygon.refresh()

    }

  }
  // else if (e.target.parentElement.id == 'collapse-div-structure_footprint') {
  //   if (!e.target.checked) {
  //     tempLayerCheckListStructureFootprint.push(e.target.id)
  //     let final_hide_b_structure_footprint = hideLayer(tempLayerCheckListStructureFootprint)
  //     wmsSource_Structure_Footprint['i']['CQL_FILTER'] = final_hide_b_structure_footprint
  //     wmsSource_Structure_Footprint.refresh()
  //   } else if (e.target.checked) {
  //     let attrIndx_b_polygon = tempLayerCheckListStructureFootprint.indexOf(e.target.id)
  //     tempLayerCheckListStructureFootprint.splice(start = attrIndx_b_polygon, deleteCount = 1)
  //     let final_show_b_structure_footprint = hideLayer(tempLayerCheckListStructureFootprint)
  //     wmsSource_Structure_Footprint['i']['CQL_FILTER'] = final_show_b_structure_footprint
  //     wmsSource_Structure_Footprint.refresh()

  //   }

  // }
}




function layerToggleCheck_KDMC(e) {

  ////console.log(e.target.parentElement.id)
  if (e.target.parentElement.id == 'collapse-div-boundary') {
    ////console.log(e.target.id)

    ////console.log(wmsSource_boundary_kdmc['i']['CQL_FILTER'])
    if (!e.target.checked) {
      tempLayerCheckListBoundary.push(e.target.id)
      ////console.log('tempLayerCheckListBoundary')
      ////console.log('attribute added!')
      // tempLayerCheckListBoundary.push(e.target.checked)
      ////console.log(tempLayerCheckListBoundary)

      let final_hide = hideLayer(tempLayerCheckListBoundary)
      // wmsSource_boundary['i']['CQL_FILTER'] = `ui_type!='${e.target.id}'`
      // wmsSource_boundary['i']['CQL_FILTER'] = `ui_type not like'${e.target.id}'`
      wmsSource_boundary_kdmc['i']['CQL_FILTER'] = final_hide
      wmsSource_boundary_kdmc.refresh()
    } else if (e.target.checked) {
      ////console.log('attribute removed')
      let attrIndx = tempLayerCheckListBoundary.indexOf(e.target.id)
      tempLayerCheckListBoundary.splice(start = attrIndx, deleteCount = 1)
      ////console.log(tempLayerCheckListBoundary)
      let final_show = hideLayer(tempLayerCheckListBoundary)
      wmsSource_boundary_kdmc['i']['CQL_FILTER'] = ``
      wmsSource_boundary_kdmc['i']['CQL_FILTER'] = final_show
      wmsSource_boundary_kdmc.refresh()

    }

  } else if (e.target.parentElement.id == 'collapse-div-basemap_point') {
    ////console.log(e.target.id)
    ////console.log(wms_basemap_point_kdmc['i']['CQL_FILTER'])
    // ////console.log(wmsLayer_boundary)
    if (!e.target.checked) {
      tempLayerCheckListBasemapPoint.push(e.target.id)
      let final_hide_b_points = hideLayer(tempLayerCheckListBasemapPoint)
      // wms_basemap_point['i']['CQL_FILTER'] = `ui_type='${e.target.id}'`
      wms_basemap_point_kdmc['i']['CQL_FILTER'] = final_hide_b_points
      wms_basemap_point_kdmc.refresh()
    } else if (e.target.checked) {
      let attrIndx_b_points = tempLayerCheckListBasemapPoint.indexOf(e.target.id)
      tempLayerCheckListBasemapPoint.splice(start = attrIndx_b_points, deleteCount = 1)
      let final_show_b_points = hideLayer(tempLayerCheckListBasemapPoint)
      // wms_basemap_point['i']['CQL_FILTER'] = ``
      wms_basemap_point_kdmc['i']['CQL_FILTER'] = final_show_b_points
      wms_basemap_point_kdmc.refresh()

    }

  } else if (e.target.parentElement.id == 'collapse-div-basemap_line') {
    if (!e.target.checked) {
      tempLayerCheckListBasemapLine.push(e.target.id)
      let final_hide_b_line = hideLayer(tempLayerCheckListBasemapLine)
      wms_baseMap_Line_kdmc['i']['CQL_FILTER'] = final_hide_b_line
      wms_baseMap_Line_kdmc.refresh()
    } else if (e.target.checked) {
      let attrIndx_b_line = tempLayerCheckListBasemapLine.indexOf(e.target.id)
      tempLayerCheckListBasemapLine.splice(start = attrIndx_b_line, deleteCount = 1)
      let final_show_b_line = hideLayer(tempLayerCheckListBasemapLine)
      wms_baseMap_Line_kdmc['i']['CQL_FILTER'] = final_show_b_line
      wms_baseMap_Line_kdmc.refresh()

    }

  } else if (e.target.parentElement.id == 'collapse-div-basemap_polygon') {
    if (!e.target.checked) {
      tempLayerCheckListBasemapPolygon.push(e.target.id)
      let final_hide_b_polygon = hideLayer(tempLayerCheckListBasemapPolygon)
      wmsSource_basemap_polygon_kdmc['i']['CQL_FILTER'] = final_hide_b_polygon
      wmsSource_basemap_polygon_kdmc.refresh()
    } else if (e.target.checked) {
      let attrIndx_b_polygon = tempLayerCheckListBasemapPolygon.indexOf(e.target.id)
      tempLayerCheckListBasemapPolygon.splice(start = attrIndx_b_polygon, deleteCount = 1)
      let final_show_b_polygon = hideLayer(tempLayerCheckListBasemapPolygon)
      wmsSource_basemap_polygon_kdmc['i']['CQL_FILTER'] = final_show_b_polygon
      wmsSource_basemap_polygon_kdmc.refresh()

    }

  }
  // else if (e.target.parentElement.id == 'collapse-div-structure_footprint') {
  //   if (!e.target.checked) {
  //     tempLayerCheckListStructureFootprint.push(e.target.id)
  //     let final_hide_b_structure_footprint = hideLayer(tempLayerCheckListStructureFootprint)
  //     wmsSource_Structure_Footprint_kdmc['i']['CQL_FILTER'] = final_hide_b_structure_footprint
  //     wmsSource_Structure_Footprint_kdmc.refresh()
  //   } else if (e.target.checked) {
  //     let attrIndx_b_polygon = tempLayerCheckListStructureFootprint.indexOf(e.target.id)
  //     tempLayerCheckListStructureFootprint.splice(start = attrIndx_b_polygon, deleteCount = 1)
  //     let final_show_b_structure_footprint = hideLayer(tempLayerCheckListStructureFootprint)
  //     wmsSource_Structure_Footprint_kdmc['i']['CQL_FILTER'] = final_show_b_structure_footprint
  //     wmsSource_Structure_Footprint_kdmc.refresh()

  //   }

  // }
}


function layerToggleCheck_MBMC(e) {

  ////console.log(e.target.parentElement.id)
  if (e.target.parentElement.id == 'collapse-div-boundary') {
    ////console.log(e.target.id)

    ////console.log(wmsSource_boundary_mbmc['i']['CQL_FILTER'])
    if (!e.target.checked) {
      tempLayerCheckListBoundary.push(e.target.id)
      ////console.log('tempLayerCheckListBoundary')
      ////console.log('attribute added!')
      // tempLayerCheckListBoundary.push(e.target.checked)
      ////console.log(tempLayerCheckListBoundary)

      let final_hide = hideLayer(tempLayerCheckListBoundary)
      // wmsSource_boundary['i']['CQL_FILTER'] = `ui_type!='${e.target.id}'`
      // wmsSource_boundary['i']['CQL_FILTER'] = `ui_type not like'${e.target.id}'`
      wmsSource_boundary_mbmc['i']['CQL_FILTER'] = final_hide
      wmsSource_boundary_mbmc.refresh()
    } else if (e.target.checked) {
      ////console.log('attribute removed')
      let attrIndx = tempLayerCheckListBoundary.indexOf(e.target.id)
      tempLayerCheckListBoundary.splice(start = attrIndx, deleteCount = 1)
      ////console.log(tempLayerCheckListBoundary)
      let final_show = hideLayer(tempLayerCheckListBoundary)
      wmsSource_boundary_mbmc['i']['CQL_FILTER'] = ``
      wmsSource_boundary_mbmc['i']['CQL_FILTER'] = final_show
      wmsSource_boundary_mbmc.refresh()

    }

  } else if (e.target.parentElement.id == 'collapse-div-basemap_point') {
    ////console.log(e.target.id)
    ////console.log(wms_basemap_point_mbmc['i']['CQL_FILTER'])
    // ////console.log(wmsLayer_boundary)
    if (!e.target.checked) {
      tempLayerCheckListBasemapPoint.push(e.target.id)
      let final_hide_b_points = hideLayer(tempLayerCheckListBasemapPoint)
      // wms_basemap_point['i']['CQL_FILTER'] = `ui_type='${e.target.id}'`
      wms_basemap_point_mbmc['i']['CQL_FILTER'] = final_hide_b_points
      wms_basemap_point_mbmc.refresh()
    } else if (e.target.checked) {
      let attrIndx_b_points = tempLayerCheckListBasemapPoint.indexOf(e.target.id)
      tempLayerCheckListBasemapPoint.splice(start = attrIndx_b_points, deleteCount = 1)
      let final_show_b_points = hideLayer(tempLayerCheckListBasemapPoint)
      // wms_basemap_point['i']['CQL_FILTER'] = ``
      wms_basemap_point_mbmc['i']['CQL_FILTER'] = final_show_b_points
      wms_basemap_point_mbmc.refresh()

    }

  } else if (e.target.parentElement.id == 'collapse-div-basemap_line') {
    if (!e.target.checked) {
      tempLayerCheckListBasemapLine.push(e.target.id)
      let final_hide_b_line = hideLayer(tempLayerCheckListBasemapLine)
      wms_baseMap_Line_mbmc['i']['CQL_FILTER'] = final_hide_b_line
      wms_baseMap_Line_mbmc.refresh()
    } else if (e.target.checked) {
      let attrIndx_b_line = tempLayerCheckListBasemapLine.indexOf(e.target.id)
      tempLayerCheckListBasemapLine.splice(start = attrIndx_b_line, deleteCount = 1)
      let final_show_b_line = hideLayer(tempLayerCheckListBasemapLine)
      wms_baseMap_Line_mbmc['i']['CQL_FILTER'] = final_show_b_line
      wms_baseMap_Line_mbmc.refresh()

    }

  } else if (e.target.parentElement.id == 'collapse-div-basemap_polygon') {
    if (!e.target.checked) {
      tempLayerCheckListBasemapPolygon.push(e.target.id)
      let final_hide_b_polygon = hideLayer(tempLayerCheckListBasemapPolygon)
      wmsSource_basemap_polygon_mbmc['i']['CQL_FILTER'] = final_hide_b_polygon
      wmsSource_basemap_polygon_mbmc.refresh()
    } else if (e.target.checked) {
      let attrIndx_b_polygon = tempLayerCheckListBasemapPolygon.indexOf(e.target.id)
      tempLayerCheckListBasemapPolygon.splice(start = attrIndx_b_polygon, deleteCount = 1)
      let final_show_b_polygon = hideLayer(tempLayerCheckListBasemapPolygon)
      wmsSource_basemap_polygon_mbmc['i']['CQL_FILTER'] = final_show_b_polygon
      wmsSource_basemap_polygon_mbmc.refresh()

    }

  }
  // else if (e.target.parentElement.id == 'collapse-div-structure_footprint') {
  //   if (!e.target.checked) {
  //     tempLayerCheckListStructureFootprint.push(e.target.id)
  //     let final_hide_b_structure_footprint = hideLayer(tempLayerCheckListStructureFootprint)
  //     wmsSource_Structure_Footprint_mbmc['i']['CQL_FILTER'] = final_hide_b_structure_footprint
  //     wmsSource_Structure_Footprint_mbmc.refresh()
  //   } else if (e.target.checked) {
  //     let attrIndx_b_polygon = tempLayerCheckListStructureFootprint.indexOf(e.target.id)
  //     tempLayerCheckListStructureFootprint.splice(start = attrIndx_b_polygon, deleteCount = 1)
  //     let final_show_b_structure_footprint = hideLayer(tempLayerCheckListStructureFootprint)
  //     wmsSource_Structure_Footprint_mbmc['i']['CQL_FILTER'] = final_show_b_structure_footprint
  //     wmsSource_Structure_Footprint_mbmc.refresh()

  //   }

  // }
}




$("#searchButton").on('click', function () {
  on_loader();

  ////console.log("finalSelectedValues")

  ////console.log($('#rtoListData')[0].options['selectedIndex'])

  if ($('#rtoListData')[0].options['selectedIndex'] != -1) {
    var FselectedRTOind = $('#rtoListData')[0].options['selectedIndex']
    ////console.log("FselectedRTOind")
    ////console.log(FselectedRTOind)
    var FselectedRTO = $('#rtoListData')[0].options[FselectedRTOind].innerText
    // var FselectedRTO = $('#rtoListData')[0].options['selectedIndex'].innerText
    ////console.log("FselectedRTO")
    ////console.log(FselectedRTO)
  } else {
    var FselectedRTO = '0'
    // var selected_rto = '0'
  }


  // let FselectedSectorind1 = $('#sectorListData')[0].options['selectedIndex']
  // ////console.log("sectorListData selection")
  // ////console.log($('#sectorListData')[0].options[FselectedSectorind1])
  if ($('#sectorListData')[0].options['selectedIndex'] != -1) {
    var FselectedSectorind = $('#sectorListData')[0].options['selectedIndex']
    var FselectedSector = $('#sectorListData')[0].options[FselectedSectorind].innerText
  } else {
    // var selected_sector = '0'
    // ////console.log(selected_sector)
    var FselectedSector = '0'
    ////console.log(FselectedSector)
  }

  // // ////console.log($('#URPListData')[0].options[0].value == '0')
  if ($('#URPListData')[0].options['selectedIndex'] != -1) {
    var FselectedURPind = $('#URPListData')[0].options['selectedIndex']
    var FselectedURP = $('#URPListData')[0].options[FselectedURPind].innerText

  } else {
    // var selected_URP = '0'
    var FselectedURP = '0'
  }


  if ($('#URCListData')[0].options['selectedIndex'] != -1) {
    var FselectedURCind = $('#URCListData')[0].options['selectedIndex']
    var FselectedURC = $('#URCListData')[0].options[FselectedURCind].innerText

  } else {
    var FselectedURC = '0'
    // var selected_URC = '0'
  }


  if ($('#blockListData')[0].options['selectedIndex'] != -1) {
    var FselectedBlockind = $('#blockListData')[0].options['selectedIndex']
    var FselectedBlock = $('#blockListData')[0].options[FselectedBlockind].innerText
  } else {
    var FselectedBlock = '0'
    // var selected_block = '0'
  }



  // let FselectedRTO = getSelectedValue('rtoListData')
  // let FselectedSector = getSelectedValue('sectorListData')
  // let FselectedURP = getSelectedValue('URPListData')
  // let FselectedURC = getSelectedValue('URCListData')
  // let Fselectedblock = getSelectedValue('blockListData')

  ////console.log(FselectedRTO)
  ////console.log(FselectedSector)
  ////console.log(FselectedURP)
  ////console.log(FselectedURC)
  ////console.log("FselectedBlock : ", FselectedBlock)
  ////console.log("FselectedBlock : ", typeof (FselectedBlock))

  // ////console.log(FselectedSector)

  // let dctn = makeSelectionDict(a = FselectedRTO,b= FselectedSector,c = FselectedURP,d = FselectedURC,e = FselectedBlock)

  // if FselectedRTO
  // wmsSource_mis_point['i']['CQL_FILTER'] = `block='${FselectedBlock},'`

  if (FselectedRTO != 0 && FselectedRTO != '' && FselectedSector != 0 && FselectedSector != ''
    && FselectedURP != 0 && FselectedURP != '' && FselectedURC != 0 && FselectedURC != ''
    && FselectedBlock != 0 && FselectedBlock != '') {
    ////console.log('-----1-----')
    if (FselectedRTO == '4') {
      wmsSource_mis_point['i']['CQL_FILTER'] = `rto='${FselectedRTO}' and sector='${FselectedSector}' and urp='${FselectedURP}' and urc='${FselectedURC}' and block='${FselectedBlock}'`
      wmsSource_mis_point.refresh()
    } else if (FselectedRTO == '5') {
      wmsSource_mis_point_kdmc['i']['CQL_FILTER'] = `rto='${FselectedRTO}' and sector='${FselectedSector}' and urp='${FselectedURP}' and urc='${FselectedURC}' and block='${FselectedBlock}'`
      wmsSource_mis_point_kdmc.refresh()
    } else if (FselectedRTO == '4M') {
      wmsSource_mis_point_mbmc['i']['CQL_FILTER'] = `rto='${FselectedRTO}' and sector='${FselectedSector}' and urp='${FselectedURP}' and urc='${FselectedURC}' and block='${FselectedBlock}'`
      wmsSource_mis_point_mbmc.refresh()
    }
  } else if (FselectedRTO != 0 && FselectedRTO != '' && FselectedSector != 0 && FselectedSector != ''
    && FselectedURP != 0 && FselectedURP != '' && FselectedURC != 0 && FselectedURC != '') {
    if (FselectedRTO == '4') {
      wmsSource_mis_point['i']['CQL_FILTER'] = `rto='${FselectedRTO}' and sector='${FselectedSector}' and urp='${FselectedURP}' and urc='${FselectedURC}' `
      wmsSource_mis_point.refresh()
    } else if (FselectedRTO == '5') {
      wmsSource_mis_point_kdmc['i']['CQL_FILTER'] = `rto='${FselectedRTO}' and sector='${FselectedSector}' and urp='${FselectedURP}' and urc='${FselectedURC}' `
      wmsSource_mis_point_kdmc.refresh()
    } else if (FselectedRTO == '4M') {
      wmsSource_mis_point_mbmc['i']['CQL_FILTER'] = `rto='${FselectedRTO}' and sector='${FselectedSector}' and urp='${FselectedURP}' and urc='${FselectedURC}' `
      wmsSource_mis_point_mbmc.refresh()
    }
    ////console.log('-----2-----')
  } else if (FselectedRTO != 0 && FselectedRTO != '' && FselectedSector != 0 && FselectedSector != ''
    && FselectedURP != 0 && FselectedURP != '') {
    if (FselectedRTO == '4') {
      wmsSource_mis_point['i']['CQL_FILTER'] = `rto='${FselectedRTO}' and sector='${FselectedSector}' and urp='${FselectedURP}'`
      wmsSource_mis_point.refresh()
    } else if (FselectedRTO == '5') {
      wmsSource_mis_point_kdmc['i']['CQL_FILTER'] = `rto='${FselectedRTO}' and sector='${FselectedSector}' and urp='${FselectedURP}'`
      wmsSource_mis_point_kdmc.refresh()
    } else if (FselectedRTO == '4M') {
      wmsSource_mis_point_mbmc['i']['CQL_FILTER'] = `rto='${FselectedRTO}' and sector='${FselectedSector}' and urp='${FselectedURP}'`
      wmsSource_mis_point_mbmc.refresh()
    }
    ////console.log('-----3-----')
  } else if (FselectedRTO != 0 && FselectedRTO != '' && FselectedSector != 0 && FselectedSector != '') {
    if (FselectedRTO == '4') {
      wmsSource_mis_point['i']['CQL_FILTER'] = `rto='${FselectedRTO}' and sector='${FselectedSector}'`
      wmsSource_mis_point.refresh()
    } else if (FselectedRTO == '5') {
      wmsSource_mis_point_kdmc['i']['CQL_FILTER'] = `rto='${FselectedRTO}' and sector='${FselectedSector}'`
      wmsSource_mis_point_kdmc.refresh()
    } else if (FselectedRTO == '4M') {
      wmsSource_mis_point_mbmc['i']['CQL_FILTER'] = `rto='${FselectedRTO}' and sector='${FselectedSector}'`
      wmsSource_mis_point_mbmc.refresh()
    }
    ////console.log('-----4-----')
  } else if (FselectedRTO != 0 && FselectedRTO != '') {
    if (FselectedRTO == '4') {
      wmsSource_mis_point['i']['CQL_FILTER'] = `rto='${FselectedRTO}'`
      wmsSource_mis_point.refresh()
    } else if (FselectedRTO == '5') {
      wmsSource_mis_point_kdmc['i']['CQL_FILTER'] = `rto='${FselectedRTO}'`
      wmsSource_mis_point_kdmc.refresh()
    } else if (FselectedRTO == '4M') {
      wmsSource_mis_point_mbmc['i']['CQL_FILTER'] = `rto='${FselectedRTO}'`
      wmsSource_mis_point_mbmc.refresh()
    }
    ////console.log('-----5-----')
  }

  off_loader();
})




function buildHotSpot(new_info, ts) {
  var hs = []
  // let sample = {
  //   "pitch": -2.1,
  //   "yaw": 132.9,
  //   "type": "scene",
  //   "text": "Spring House or Dairy",
  //   "sceneId": "house"
  // }
  ////console.log('inside buildHotSpot !')
  ////console.log(new_info)
  if (new_info['empty'] === 'no') {



    for (const ni_key in new_info) {
      ////console.log(ni_key)


      let stdHS = {

        "pitch": -2.1,
        "yaw": '',
        "type": "scene",
        "text": "",
        "sceneId": "",
        "clickHandlerFunc": chf,
        "createTooltipFunc": mouseOverWalk_Point,
        // "createTooltipArgs":[ni_key,new_info[`${ni_key}_coordinates`]]
      }
      if (ni_key !== 'empty') {
        ////console.log('let ni = new_info[ni_key];')
        let ni = new_info[ni_key];

        // if (ni < 0) {
        //   ni = ni * -1
        // }
        stdHS['yaw'] = ni
        stdHS['sceneId'] = ni_key
        stdHS['text'] = ni_key
        stdHS['clickHandlerArgs'] = ni_key
        stdHS['createTooltipArgs'] = [ni_key, new_info[`${ni_key}_coordinates`]]

        if (ni !== 180 & ni !== 0 & ni_key !== ts & typeof (new_info[`${ni_key}_coordinates`]) !== 'undefined') {
          hs.push(stdHS)
        }
      }
    }


  } else {

  }
  // hs.push(sample)
  return hs
}

// "house": {
//   "title": "Spring House or Dairy",
//   "hfov": 110,
//   "yaw": 5,
//   "type": "equirectangular",
//   "panorama": "/images/bma-0.jpg",
//   "hotSpots": [
//       {
//           "pitch": -0.6,
//           "yaw": 37.1,
//           "type": "scene",
//           "text": "Mason Circle",
//           "sceneId": "circle",
//           "targetYaw": -23,
//           "targetPitch": 2
//       }
//   ]
// }



// function readHotSpot(new_info) {
//   var hs_dict_coll = []
//   if (new_info['empty'] === 'no') {
//     for (const ni_key in new_info) {
//       let nd = {}
//       nd[`${ni_key}`] = {}
//       nd[`${ni_key}`]['title'] = 'panorama'
//       nd[`${ni_key}`]['hfov'] = '110'
//       nd[`${ni_key}`]['type'] = 'equirectangular'
//       nd[`${ni_key}`]['panorama'] = getNewImage(ni_key)
//       hs_dict_coll.push(nd)
//     }

//   } else {

//   }
//   return hs
// }

function getNewImage(imageID) {
  $.ajax({
    "type": "GET",
    "url": "get_New_Lidar_Image",
    "data": { 'new_image_id': imageID }
  }).then(function (response) {
    if (response['response'] === 'No Image Found') {

    } else {

    }
  })

}


function attachEvent_old() {
  ////console.log('attach event function')
  ////console.log('params')
  var lidarDiv2 = document.getElementById('Lidar_Div')
  var qqq = document.getElementsByClassName('pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-scene pnlm-pointer pnlm-tooltip')
  ////console.log('qqq')
  ////console.log(qqq)
  ////console.log(qqq.length)

  // if (lidarDiv2.hasChildNodes() === true){
  //   if (qqq.length !== 0) {
  //     qqq[0].onclick = ()=>{alert('street view!')}
  //   }
  // }
  var lidarDiv3 = document.getElementsByClassName('pnlm-render-container')
  ////console.log('lidarDiv3')
  if (lidarDiv3.length !== 0) {
    ////console.log('lidarDiv3.length !== 0')
    if (lidarDiv3 !== null) {
      ////console.log('lidarDiv3 !== null')
      if (lidarDiv3[0]) {
        ////console.log('lidarDiv3[0]')
        ////console.log('lidarDiv3[0].childNodes.length : ', lidarDiv3[0].childNodes.length)
        if (qqq !== null) {
          for (const key in qqq) {
            const elementP = qqq[key];
            elementP.onclick = function (e) {
              let walk_through_number = e.target.textContent
              ////console.log('walk_through_number : ', walk_through_number)
              NewlidarDataRequestClick(walk_through_number)

            }
          }

          // clearInterval(eventID)

        }
        else if (lidarDiv3[0].childNodes.length >= 2) {
          ////console.log('lidarDiv3[0].childNodes.length >= 2')
          ////console.log('interval has been cleared!!!')
          ////console.log('lidarDiv3[0].childNodes[0]')
          ////console.log(lidarDiv3[0].childNodes[0])
          ////console.log('lidarDiv3[0].childNodes[1]')
          ////console.log(lidarDiv3[0].childNodes)
          for (let index = 0; index < lidarDiv3[0].childNodes.length; index++) {
            const elem = lidarDiv3[0].childNodes[index];
            ////console.log(elem)
          }
          // lidarDiv3[0].childNodes[1].onclick = function(e){
          //   let walk_through_number = e.target.textContent
          //   ////console.log( 'walk_through_number : ',walk_through_number)
          //   NewlidarDataRequestClick(walk_through_number)

          // }

          for (const key in qqq) {
            const elementP = qqq[key];
            elementP.onclick = function (e) {
              let walk_through_number = e.target.textContent
              ////console.log('walk_through_number : ', walk_through_number)
              NewlidarDataRequestClick(walk_through_number)

            }
          }

          // clearInterval(eventID)
        } else {
          ////console.warn('panorama yet to load');
          // clearInterval(eventID)
        }
      }
    } else {
      // clearInterval(eventID)
      ////console.warn('panorama yet to load');
    }
  } else if (lidarDiv3.length === 0) {
    // clearInterval(eventID)
    ////console.warn('panorama yet to load');

  }



}



function attachEvent() {
  ////console.log('attach event function')
  ////console.log('params')
  var lidarDiv2 = document.getElementById('Lidar_Div')
  var qqq = document.getElementsByClassName('pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-scene pnlm-pointer pnlm-tooltip')
  ////console.log('qqq')
  ////console.log(qqq)
  ////console.log(qqq.length)
  for (let index = 0; index < qqq.length; index++) {
    const eq = qqq[index];
    ////console.log(eq)
  }


  for (const keyp in qqq) {
    let elementPp = qqq[keyp];
    ////console.log(elementPp)
    elementPp.onclick = function (e) {
      // alert('new pano request!')
      let walk_through_number = e.target.textContent
      ////console.log('walk_through_number : ', walk_through_number)
      NewlidarDataRequestClick(walk_through_number)
      // eventID = setInterval(attachEvent,10000)
    }
  }
  // clearInterval(eventID)
  // if (qqq !== null) {
  //   for (const key in qqq) {
  //     const elementP = qqq[key];
  //     elementP.onclick = function (e) {
  //       let walk_through_number = e.target.textContent
  //       ////console.log('walk_through_number : ', walk_through_number)
  //       NewlidarDataRequestClick(walk_through_number)

  //     }
  //   }


  // }
  // clearInterval(eventID)
}


function NewlidarDataRequestClick(walk_through_number) {
  if (vectorLayer3) {

    map.removeLayer(vectorLayer3)
  }
  // alert('NewlidarDataRequestClick !')
  let lidarDiv = document.getElementById('Lidar_Div')
  if (lidarDiv.hasChildNodes() === true) {
    while (lidarDiv.hasChildNodes()) {
      lidarDiv.removeChild(lidarDiv.lastChild);
    }
  }
  $.ajax({
    "type": "GET",
    "url": "getHotSpotLidar",
    "data": { "walk_through_number": walk_through_number, "rto": modified_JSON_2_map['rto'][0] },
  }
  ).then(function (response) {
    ////console.log(response)
    let lidar_prop_pane = document.getElementById('lidar_prop_pane')
    if (response['suid'] === "Image Found") {
      let imageName = response['image']

      let hotSpotPointLat = response['hotSpotPointLat']
      let hotSpotPointLong = response['hotSpotPointLong']


      let pntlyr1 = createAddPoint(hotSpotPointLat, hotSpotPointLong)

      ////console.log("imageName")
      ////console.log(imageName)
      let new_info = response['new_info']
      let this_suid = response['this_suid']
      let HotSpots = buildHotSpot(new_info, this_suid)
      ////console.log('HotSpots')
      ////console.log(HotSpots)
      lidar_prop_pane.style.display = 'block'

      // let pv = pannellum.viewer('Lidar_Div', {
      //   "default": {
      //     "firstScene": "circle",
      //     "author": "Matthew Petroff",
      //     "sceneFadeDuration": 1000
      //   },
      //   "scenes": {
      //     "circle": {
      //       "title": "Mason Circle",
      //       "hfov": 110,
      //       "pitch": -3,
      //       "yaw": 117,
      //       "type": "equirectangular",
      //       "panorama": "readLidarImageHotSpot",
      //       "autoLoad": true,
      //       "pitch": 2.3,
      //       "strings": {
      //         "fileAccessError": "The file does not exists.!",
      //       },
      //       // "hotSpots": HotSpots
      //       "hotSpots": []
      //     }
      //   },

      // })

      let pv = pannellum.viewer('Lidar_Div',
        {
          'scenes': [], 'autoLoad': false
        });
      let scn = {
        "type": "equirectangular",
        "panorama": "readLidarImageHotSpot"
      }

      pv.addScene('test', scn);
      pv.loadScene('test', 0, 0, 120);
      ////console.log(pv);

      for (let index = 0; index < HotSpots.length; index++) {
        const element = HotSpots[index];
        pv.addHotSpot(element, pv.getScene());
      }

      let cconfig = pv.getConfig()['hotSpots']
      ////console.log('cconfig')
      ////console.log(cconfig)

      for (let index = 0; index < cconfig.length; index++) {
        const element = cconfig[index];
        ////console.log(element['div']);
        ////console.log(element.div);
        element['div'].addEventListener('mouseover', function (params) {
          alert(params.textContent)
        })
      }
      // var suidPointer = document.getElementsByClassName("pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-scene pnlm-pointer pnlm-tooltip pnlm-pointer")
      var suidPointer = document.getElementsByClassName("pnlm-pointer")
      ////console.log('suidPointer')
      if (suidPointer.length > 0) {
        ////console.log(suidPointer)
        for (let index = 0; index < suidPointer.length; index++) {
          const element = suidPointer[index];
        }
      }

    } else if (response['suid'] === "Image not Found") {
      lidar_prop_pane.style.display = 'none'

    } else if (response['suid'] === "No suid found") {
      lidar_prop_pane.style.display = 'none'

    }
  })
}



// function createPointAddToMap(pnt2x) {
//   var iconFeature2 = new ol.Feature({
//     geometry: new ol.geom.Point([pnt2x[0], pnt2x[1]]),
//   });

//   var vectorSource2 = new ol.source.Vector({
//     features: [iconFeature2]
//   });
//   var vectorLayer2 = new ol.layer.Vector({
//     source: vectorSource2,
//     style: new ol.style.Style({
//       image: new ol.style.Circle({
//         radius: 30,
//         stroke: new ol.style.Stroke({
//           color: 'red',
//           width: 3
//         }),
//         fill: new ol.style.Fill({
//           color: 'rgba(255,0,0,0.4)'
//         })
//       })
//     })
//   });
//   map.addLayer(vectorLayer2)
// }



function chf(e, v) {
  ////console.log(e);
  // alert(`chf!\n${v}`)
  NewlidarDataRequestClick(v)
  // ////console.log(e);
}



var vectorLayer3 = null
function createAddPoint_MouseOver(_map_latitude, _map_longitude) {



  var layersToRemove1 = [];
  map.getLayers().forEach(function (layer) {
    ////console.log('layer to remove fund')
    ////console.log(layer)
    if (layer.get('name') != undefined && layer.get('name') === 'HoverMarker') {
      layersToRemove1.push(layer);
    }
  });
  ////console.log('layersToRemove');
  ////console.log(layersToRemove1);
  if (vectorLayer3) {

    map.removeLayer(vectorLayer3)
  }

  // create the source and layer for random features
  ////console.log("_map_latitude,_map_longitude");
  ////console.log(_map_latitude, _map_longitude);
  var pnt1x = ol.proj.transform([Number(_map_latitude), Number(_map_longitude)], 'EPSG:4326', 'EPSG:3857');
  ////console.log("pnt1x[1],pnt1x[0]");
  ////console.log(pnt1x[1], pnt1x[0]);
  var pnt2x = ol.proj.transform([Number(_map_longitude), Number(_map_latitude)], 'EPSG:4326', 'EPSG:3857');
  ////console.log("pnt2x[1],pnt2x[0]");
  ////console.log(pnt2x[1], pnt2x[0]);
  // var iconFeature = new ol.Feature({
  //   geometry: new ol.geom.Point([Number(_map_latitude),Number(_map_longitude)]),
  // });
  var iconFeature3 = new ol.Feature({
    geometry: new ol.geom.Point([pnt2x[0], pnt2x[1]]),
    name: 'HoverMarker'
  });

  var vectorSource3 = new ol.source.Vector({
    features: [iconFeature3]
  });


  vectorLayer3 = new ol.layer.Vector({
    source: vectorSource3,
    style: new ol.style.Style({
      image: new ol.style.Circle({
        radius: 30,
        stroke: new ol.style.Stroke({
          color: 'rgba(6, 17, 244,0.5)',
          width: 3
        }),
        // fill: new ol.style.Fill({ color: 'red' })
        fill: new ol.style.Fill({
          color: 'rgba(6, 17, 244,0.5)'
        })
      })
    })
  });
  map.addLayer(vectorLayer3)
}

function mouseOverWalk_Point(div, k) {
  div.addEventListener("mouseout", function (e) {
    if (e) {
      ////console.log('mouseout div');
      ////console.log(div);
    }
    if (vectorLayer3) {

      map.removeLayer(vectorLayer3)
    }
  })

  div.addEventListener('mouseover', function (e) {

    ////console.log(k[0]);
    ////console.log("\n\n");
    ////console.log(typeof (k[1]));
    if (typeof (k[1]) !== 'undefined') {
      if (k[1].length === 2) {
        createAddPoint_MouseOver(k[1][0], k[1][1])
        // ////console.log('logging mouseover event!');
        // ////console.log(e)
      }
    }
  }, 'false');
}




// 04\\06\\01\\03_U\\G\\004
// 04\\06\\01\\01_U\\II\\247
// 04\\06\\01\\01_U\\G\\282



