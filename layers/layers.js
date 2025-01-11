ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-14.835882, -7.007647, 18.792353, 9.792353]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_region_1 = new ol.format.GeoJSON();
var features_region_1 = format_region_1.readFeatures(json_region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_1.addFeatures(features_region_1);
var lyr_region_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_region_1, 
                style: style_region_1,
                popuplayertitle: "region",
                interactive: true,
                title: '<img src="styles/legend/region_1.png" /> region'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_region_1.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_region_1];
lyr_region_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Population': 'Population', });
lyr_region_1.set('fieldImages', {'id': '', 'Name': '', 'Population': '', });
lyr_region_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Population': 'inline label - visible with data', });
lyr_region_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});