ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([106.089924, 22.634464, 106.236191, 22.721798]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Lorung_2 = new ol.format.GeoJSON();
var features_Lorung_2 = format_Lorung_2.readFeatures(json_Lorung_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lorung_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lorung_2.addFeatures(features_Lorung_2);
var lyr_Lorung_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lorung_2, 
                style: style_Lorung_2,
                popuplayertitle: "Lo rung",
                interactive: true,
    title: 'Lo rung<br />\
    <img src="styles/legend/Lorung_2_0.png" /> BC1<br />\
    <img src="styles/legend/Lorung_2_1.png" /> BC2<br />\
    <img src="styles/legend/Lorung_2_2.png" /> Cay an qua, CN lau nam(17)<br />\
    <img src="styles/legend/Lorung_2_3.png" /> Dat trong co cay bui (Ib)<br />\
    <img src="styles/legend/Lorung_2_4.png" /> Dat trong co cay go rai rac (Ic)<br />\
    <img src="styles/legend/Lorung_2_5.png" /> Dat trong co co (Ia)<br />\
    <img src="styles/legend/Lorung_2_6.png" /> Lười học<br />\
    <img src="styles/legend/Lorung_2_7.png" /> Nui da khong rung<br />\
    <img src="styles/legend/Lorung_2_8.png" /> Rung ngheo<br />\
    <img src="styles/legend/Lorung_2_9.png" /> Rung nui da<br />\
    <img src="styles/legend/Lorung_2_10.png" /> Rung phuc hoi IIa<br />\
    <img src="styles/legend/Lorung_2_11.png" /> Rung phuc hoi IIb<br />\
    <img src="styles/legend/Lorung_2_12.png" /> Rung trong<br />\
    <img src="styles/legend/Lorung_2_13.png" /> Ruong bang , bac thang<br />\
    <img src="styles/legend/Lorung_2_14.png" /> Vuon rung<br />\
    <img src="styles/legend/Lorung_2_15.png" /> <br />'
        });
var format_Bufferxacat_3 = new ol.format.GeoJSON();
var features_Bufferxacat_3 = format_Bufferxacat_3.readFeatures(json_Bufferxacat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bufferxacat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bufferxacat_3.addFeatures(features_Bufferxacat_3);
var lyr_Bufferxacat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bufferxacat_3, 
                style: style_Bufferxacat_3,
                popuplayertitle: "Buffer xa cat",
                interactive: true,
                title: '<img src="styles/legend/Bufferxacat_3.png" /> Buffer xa cat'
            });
var format_Bufferhuyencat_4 = new ol.format.GeoJSON();
var features_Bufferhuyencat_4 = format_Bufferhuyencat_4.readFeatures(json_Bufferhuyencat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bufferhuyencat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bufferhuyencat_4.addFeatures(features_Bufferhuyencat_4);
var lyr_Bufferhuyencat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bufferhuyencat_4, 
                style: style_Bufferhuyencat_4,
                popuplayertitle: "Buffer huyen cat",
                interactive: true,
                title: '<img src="styles/legend/Bufferhuyencat_4.png" /> Buffer huyen cat'
            });
var format_Ranhgioihuyen_5 = new ol.format.GeoJSON();
var features_Ranhgioihuyen_5 = format_Ranhgioihuyen_5.readFeatures(json_Ranhgioihuyen_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Ranhgioihuyen_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ranhgioihuyen_5.addFeatures(features_Ranhgioihuyen_5);
var lyr_Ranhgioihuyen_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ranhgioihuyen_5, 
                style: style_Ranhgioihuyen_5,
                popuplayertitle: "Ranh gioi huyen",
                interactive: true,
                title: '<img src="styles/legend/Ranhgioihuyen_5.png" /> Ranh gioi huyen'
            });
var format_Ranhgioixa_6 = new ol.format.GeoJSON();
var features_Ranhgioixa_6 = format_Ranhgioixa_6.readFeatures(json_Ranhgioixa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Ranhgioixa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ranhgioixa_6.addFeatures(features_Ranhgioixa_6);
var lyr_Ranhgioixa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ranhgioixa_6, 
                style: style_Ranhgioixa_6,
                popuplayertitle: "Ranh gioi xa",
                interactive: true,
                title: '<img src="styles/legend/Ranhgioixa_6.png" /> Ranh gioi xa'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Lorung_2.setVisible(true);lyr_Bufferxacat_3.setVisible(true);lyr_Bufferhuyencat_4.setVisible(true);lyr_Ranhgioihuyen_5.setVisible(true);lyr_Ranhgioixa_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_Lorung_2,lyr_Bufferxacat_3,lyr_Bufferhuyencat_4,lyr_Ranhgioihuyen_5,lyr_Ranhgioixa_6];
lyr_Lorung_2.set('fieldAliases', {'Ma_trang_t': 'Ma_trang_t', 'Hien_trang': 'Hien_trang', 'Dien_tich': 'Dien_tich', 'Chu_vi': 'Chu_vi', 'Ldlr': 'Ldlr', });
lyr_Bufferxacat_3.set('fieldAliases', {'ID': 'ID', });
lyr_Bufferhuyencat_4.set('fieldAliases', {'ID': 'ID', });
lyr_Ranhgioihuyen_5.set('fieldAliases', {'ID': 'ID', });
lyr_Ranhgioixa_6.set('fieldAliases', {'ID': 'ID', });
lyr_Lorung_2.set('fieldImages', {'Ma_trang_t': 'TextEdit', 'Hien_trang': 'TextEdit', 'Dien_tich': 'TextEdit', 'Chu_vi': 'TextEdit', 'Ldlr': 'TextEdit', });
lyr_Bufferxacat_3.set('fieldImages', {'ID': 'TextEdit', });
lyr_Bufferhuyencat_4.set('fieldImages', {'ID': 'TextEdit', });
lyr_Ranhgioihuyen_5.set('fieldImages', {'ID': 'TextEdit', });
lyr_Ranhgioixa_6.set('fieldImages', {'ID': 'TextEdit', });
lyr_Lorung_2.set('fieldLabels', {'Ma_trang_t': 'no label', 'Hien_trang': 'no label', 'Dien_tich': 'header label - visible with data', 'Chu_vi': 'no label', 'Ldlr': 'no label', });
lyr_Bufferxacat_3.set('fieldLabels', {'ID': 'no label', });
lyr_Bufferhuyencat_4.set('fieldLabels', {'ID': 'no label', });
lyr_Ranhgioihuyen_5.set('fieldLabels', {'ID': '', });
lyr_Ranhgioixa_6.set('fieldLabels', {'ID': '', });
lyr_Ranhgioixa_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});