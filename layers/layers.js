var wms_layers = [];

var format_BUILDINGCATEGORIZED_0 = new ol.format.GeoJSON();
var features_BUILDINGCATEGORIZED_0 = format_BUILDINGCATEGORIZED_0.readFeatures(json_BUILDINGCATEGORIZED_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDINGCATEGORIZED_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDINGCATEGORIZED_0.addFeatures(features_BUILDINGCATEGORIZED_0);
var lyr_BUILDINGCATEGORIZED_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUILDINGCATEGORIZED_0, 
                style: style_BUILDINGCATEGORIZED_0,
                interactive: true,
    title: 'BUILDING CATEGORIZED<br />\
    <img src="styles/legend/BUILDINGCATEGORIZED_0_0.png" /> RELIGIOUS<br />\
    <img src="styles/legend/BUILDINGCATEGORIZED_0_1.png" /> COMMUNITY SERVICE<br />\
    <img src="styles/legend/BUILDINGCATEGORIZED_0_2.png" /> COMMERCIAL<br />\
    <img src="styles/legend/BUILDINGCATEGORIZED_0_3.png" /> INDUSTRIAL<br />\
    <img src="styles/legend/BUILDINGCATEGORIZED_0_4.png" /> HOUSES<br />'
        });
var format_ROADSYSTEM_1 = new ol.format.GeoJSON();
var features_ROADSYSTEM_1 = format_ROADSYSTEM_1.readFeatures(json_ROADSYSTEM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADSYSTEM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADSYSTEM_1.addFeatures(features_ROADSYSTEM_1);
var lyr_ROADSYSTEM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROADSYSTEM_1, 
                style: style_ROADSYSTEM_1,
                interactive: true,
    title: 'ROAD SYSTEM<br />\
    <img src="styles/legend/ROADSYSTEM_1_0.png" /> REGIONAL ROAD<br />\
    <img src="styles/legend/ROADSYSTEM_1_1.png" /> MAIN ROAD<br />\
    <img src="styles/legend/ROADSYSTEM_1_2.png" /> LOCAL ROAD<br />\
    <img src="styles/legend/ROADSYSTEM_1_3.png" /> RESIDENTIAL ROAD<br />'
        });
var format_MAPSYMBOLS_2 = new ol.format.GeoJSON();
var features_MAPSYMBOLS_2 = format_MAPSYMBOLS_2.readFeatures(json_MAPSYMBOLS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAPSYMBOLS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAPSYMBOLS_2.addFeatures(features_MAPSYMBOLS_2);
var lyr_MAPSYMBOLS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAPSYMBOLS_2, 
                style: style_MAPSYMBOLS_2,
                interactive: true,
    title: 'MAP SYMBOLS <br />\
    <img src="styles/legend/MAPSYMBOLS_2_0.png" /> AL-QUDS SQUARE<br />\
    <img src="styles/legend/MAPSYMBOLS_2_1.png" /> BANK<br />\
    <img src="styles/legend/MAPSYMBOLS_2_2.png" /> CAR SHOWROOM<br />\
    <img src="styles/legend/MAPSYMBOLS_2_3.png" /> CLOTHING STORE<br />\
    <img src="styles/legend/MAPSYMBOLS_2_4.png" /> COFFEE CENTER<br />\
    <img src="styles/legend/MAPSYMBOLS_2_5.png" /> COFFEE SHOP<br />\
    <img src="styles/legend/MAPSYMBOLS_2_6.png" /> CULTURAL CENTER<br />\
    <img src="styles/legend/MAPSYMBOLS_2_7.png" /> ELECTRONICS SHOP<br />\
    <img src="styles/legend/MAPSYMBOLS_2_8.png" /> ENGINEERING OFFICE<br />\
    <img src="styles/legend/MAPSYMBOLS_2_9.png" /> FACTORY<br />\
    <img src="styles/legend/MAPSYMBOLS_2_10.png" /> FURNITURE STORE<br />\
    <img src="styles/legend/MAPSYMBOLS_2_11.png" /> GAS STATION<br />\
    <img src="styles/legend/MAPSYMBOLS_2_12.png" /> GIFT CENTER<br />\
    <img src="styles/legend/MAPSYMBOLS_2_13.png" /> HALLS<br />\
    <img src="styles/legend/MAPSYMBOLS_2_14.png" /> LIBRARY<br />\
    <img src="styles/legend/MAPSYMBOLS_2_15.png" /> MONEY CHANGER<br />\
    <img src="styles/legend/MAPSYMBOLS_2_16.png" /> MOSQUE<br />\
    <img src="styles/legend/MAPSYMBOLS_2_17.png" /> POST OFFICE<br />\
    <img src="styles/legend/MAPSYMBOLS_2_18.png" /> PUBLIC DEPARTMENT<br />\
    <img src="styles/legend/MAPSYMBOLS_2_19.png" /> RADIO CENTER<br />\
    <img src="styles/legend/MAPSYMBOLS_2_20.png" /> RESIDENTIAL CENTER<br />\
    <img src="styles/legend/MAPSYMBOLS_2_21.png" /> RESTURANT<br />\
    <img src="styles/legend/MAPSYMBOLS_2_22.png" /> SHOPPING CENTER<br />\
    <img src="styles/legend/MAPSYMBOLS_2_23.png" /> TECHNICAL CENTER<br />\
    <img src="styles/legend/MAPSYMBOLS_2_24.png" /> TRAVEL AGENT<br />'
        });

lyr_BUILDINGCATEGORIZED_0.setVisible(true);lyr_ROADSYSTEM_1.setVisible(true);lyr_MAPSYMBOLS_2.setVisible(true);
var layersList = [lyr_BUILDINGCATEGORIZED_0,lyr_ROADSYSTEM_1,lyr_MAPSYMBOLS_2];
lyr_BUILDINGCATEGORIZED_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Type': 'Type', 'NAME': 'NAME', 'NAME1': 'NAME1', });
lyr_ROADSYSTEM_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'name': 'name', 'lenght': 'lenght', 'Type': 'Type', });
lyr_MAPSYMBOLS_2.set('fieldAliases', {'name': 'name', 'Field': 'Field', 'TYPE': 'TYPE', });
lyr_BUILDINGCATEGORIZED_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Type': 'TextEdit', 'NAME': 'TextEdit', 'NAME1': 'TextEdit', });
lyr_ROADSYSTEM_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'name': 'TextEdit', 'lenght': 'TextEdit', 'Type': 'TextEdit', });
lyr_MAPSYMBOLS_2.set('fieldImages', {'name': 'TextEdit', 'Field': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_BUILDINGCATEGORIZED_0.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'inline label', 'Type': 'inline label', 'NAME': 'no label', 'NAME1': 'inline label', });
lyr_ROADSYSTEM_1.set('fieldLabels', {'Shape_Leng': 'inline label', 'name': 'no label', 'lenght': 'no label', 'Type': 'no label', });
lyr_MAPSYMBOLS_2.set('fieldLabels', {'name': 'inline label', 'Field': 'no label', 'TYPE': 'no label', });
lyr_MAPSYMBOLS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});