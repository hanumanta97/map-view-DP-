var url = 'http://127.0.0.1:8910'

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
    title: 'Boundary', 
  source: wmsSource_boundary
});

var wmsSource_mis_point = new ol.source.TileWMS({
    url: `${url}/geoserver/TUMC_CIMS/wms`,
    /* url: '/proxy/http://103.121.74.84:8910/geoserver/TUMC_CIMS/wms', */
    params: { 'LAYERS': 'TUMC_CIMS:mis_point_3857', 'TILED': true },
    serverType: 'geoserver',
  });
  
  var wmsLayer_mis_point = new ol.layer.Tile({
    title: 'MIS POINT',
    source: wmsSource_mis_point
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


var layerGroup_1 = new ol.layer.Group({
    // A layer must have a title to appear in the layerswitcher
    title: 'BASEMAPS',
    // Setting the layers type to 'base' results
    // in it having a radio button and only one
    // base layer being visibile at a time
    type: 'base',
    // Setting combine to true causes sub-layers to be hidden
    // in the layerswitcher, only the parent is shown
    combine: true,
    visible: false,
    layers: [
      new ol.layer.Tile({
        source: new ol.source.Stamen({
          layer: 'watercolor'
        })
      }),
      new ol.layer.Tile({
        source: new ol.source.Stamen({
          layer: 'terrain-labels'
        })
      }),
      new ol.layer.Tile({
        // A layer must have a title to appear in the layerswitcher
        title: 'OSM',
        // Again set this layer as a base layer
        type: 'base',
        visible: true,
        source: new ol.source.OSM()
      })
    ]
  })

var layerGroup_2 = new ol.layer.Group({
    // A layer must have a title to appear in the layerswitcher
    title: 'CIMS',
    fold:'open',
    // Setting the layers type to 'base' results
    // in it having a radio button and only one
    // base layer being visibile at a time
    // type: 'base',
    // Setting combine to true causes sub-layers to be hidden
    // in the layerswitcher, only the parent is shown
    // combine: true,
    // visible: false,
    layers: [
        wmsLayer_mis_point,
        wmsLayer_boundary,
      ],

  })

var map = new ol.Map({
  layers: [new ol.layer.Group({
    title: 'Base maps',
    layers:[layerGroup_1]
  })
    ,
    new ol.layer.Group({
        title: 'Overlays',
        fold: 'open',
        layers:[layerGroup_2]}),
  ],
  view: view,
  target: 'map'
});



var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    tipLabel: 'Show layer list', // Optional label for button
    collapseTipLabel: 'Hide layer list', // Optional label for button
    groupSelectStyle: 'children' // Can be 'children' [default], 'group' or 'none'
  });
  map.addControl(layerSwitcher);






//   layers: [
//     new ol.layer.Group({
//       // A layer must have a title to appear in the layerswitcher
//       title: 'Base maps',
//       layers: [
//         new ol.layer.Group({
//           // A layer must have a title to appear in the layerswitcher
//           title: 'Water color with labels',
//           // Setting the layers type to 'base' results
//           // in it having a radio button and only one
//           // base layer being visibile at a time
//           type: 'base',
//           // Setting combine to true causes sub-layers to be hidden
//           // in the layerswitcher, only the parent is shown
//           combine: true,
//           visible: false,
//           layers: [
//             new ol.layer.Tile({
//               source: new ol.source.Stamen({
//                 layer: 'watercolor'
//               })
//             }),
//             new ol.layer.Tile({
//               source: new ol.source.Stamen({
//                 layer: 'terrain-labels'
//               })
//             })
//           ]
//         }),
//         new ol.layer.Tile({
//           // A layer must have a title to appear in the layerswitcher
//           title: 'Water color',
//           // Again set this layer as a base layer
//           type: 'base',
//           visible: false,
//           source: new ol.source.Stamen({
//             layer: 'watercolor'
//           })
//         }),
//         new ol.layer.Tile({
//           // A layer must have a title to appear in the layerswitcher
//           title: 'OSM',
//           // Again set this layer as a base layer
//           type: 'base',
//           visible: true,
//           source: new ol.source.OSM()
//         })
//       ]
//     }),],