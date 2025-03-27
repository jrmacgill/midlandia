var wms_layers = [];

var format_midlandia_layer_0 = new ol.format.GeoJSON();
var features_midlandia_layer_0 = format_midlandia_layer_0.readFeatures(json_midlandia_layer_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_midlandia_layer_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_midlandia_layer_0.addFeatures(features_midlandia_layer_0);
var lyr_midlandia_layer_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_midlandia_layer_0, 
                style: style_midlandia_layer_0,
                popuplayertitle: 'midlandia_layer',
                interactive: false,
                title: '<img src="styles/legend/midlandia_layer_0.png" /> midlandia_layer'
            });
var format_Cities_1 = new ol.format.GeoJSON();
var features_Cities_1 = format_Cities_1.readFeatures(json_Cities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_1.addFeatures(features_Cities_1);
var lyr_Cities_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cities_1, 
                style: style_Cities_1,
                popuplayertitle: 'Cities',
                interactive: true,
                title: '<img src="styles/legend/Cities_1.png" /> Cities'
            });
var format_AvalonPress_2 = new ol.format.GeoJSON();
var features_AvalonPress_2 = format_AvalonPress_2.readFeatures(json_AvalonPress_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AvalonPress_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvalonPress_2.addFeatures(features_AvalonPress_2);
cluster_AvalonPress_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_AvalonPress_2
});
var lyr_AvalonPress_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AvalonPress_2, 
                style: style_AvalonPress_2,
                popuplayertitle: 'AvalonPress',
                interactive: true,
                title: '<img src="styles/legend/AvalonPress_2.png" /> AvalonPress'
            });

lyr_midlandia_layer_0.setVisible(true);lyr_Cities_1.setVisible(true);lyr_AvalonPress_2.setVisible(true);
var layersList = [lyr_midlandia_layer_0,lyr_Cities_1,lyr_AvalonPress_2];
lyr_midlandia_layer_0.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'name': 'name', });
lyr_Cities_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'name': 'name', });
lyr_AvalonPress_2.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'date': 'date', 'article': 'article', 'snippet': 'snippet', });
lyr_midlandia_layer_0.set('fieldImages', {'qc_id': '', 'id': 'TextEdit', 'name': '', });
lyr_Cities_1.set('fieldImages', {'qc_id': '', 'id': '', 'name': '', });
lyr_AvalonPress_2.set('fieldImages', {'qc_id': '', 'id': 'TextEdit', 'date': '', 'article': '', 'snippet': '', });
lyr_midlandia_layer_0.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'name': 'no label', });
lyr_Cities_1.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'name': 'inline label - always visible', });
lyr_AvalonPress_2.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'date': 'hidden field', 'article': 'inline label - always visible', 'snippet': 'no label', });
lyr_AvalonPress_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});