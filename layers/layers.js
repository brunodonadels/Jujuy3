var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_ViviendasenreasruralesINDEC_3 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_3 = format_ViviendasenreasruralesINDEC_3.readFeatures(json_ViviendasenreasruralesINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_3.addFeatures(features_ViviendasenreasruralesINDEC_3);
var lyr_ViviendasenreasruralesINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_3, 
                style: style_ViviendasenreasruralesINDEC_3,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_0.png" /> 900 - 1.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_1.png" /> 1.001 - 1.950<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_2.png" /> 1.951 - 2.950<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_3.png" /> 2.951 - 7.250<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 1.350 - 2.850<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 2.851 - 33.825<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 33.826 - 60.750<br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> 60.751 - 173.800<br />'
        });
var format_PoblacinpordepartamentoINDEC_5 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_5 = format_PoblacinpordepartamentoINDEC_5.readFeatures(json_PoblacinpordepartamentoINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_5.addFeatures(features_PoblacinpordepartamentoINDEC_5);
var lyr_PoblacinpordepartamentoINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_5, 
                style: style_PoblacinpordepartamentoINDEC_5,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_5_0.png" /> 2.450 - 4.650<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_5_1.png" /> 4.651 - 52.630<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_5_2.png" /> 52.631 - 97.040<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_5_3.png" /> 97.041 o más<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 1 - 40<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 41 - 1.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 1.001 - 3.250<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 3.251 o más<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 375 - 2.675<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 2.676 - 13.475<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 13.476 - 73.525<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_3.png" /> 73.526 - 102.000<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 275 - 1.800<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 1.801 - 6.450<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 6.451 - 12.475<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 12.476 - 27.250<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 1 - 2.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 2.001 - 4.750<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 4.751 - 11.800<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 11.801 - 27.000<br />'
        });
var format_HectreasdehortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_10 = format_HectreasdehortalizasINDEC_10.readFeatures(json_HectreasdehortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_10.addFeatures(features_HectreasdehortalizasINDEC_10);
var lyr_HectreasdehortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_10, 
                style: style_HectreasdehortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_1.png" /> 1 - 130<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_2.png" /> 131 - 480<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_3.png" /> 481 - 1.775<br />'
        });
var format_HectreasdecaadeazcarINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdecaadeazcarINDEC_11 = format_HectreasdecaadeazcarINDEC_11.readFeatures(json_HectreasdecaadeazcarINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdecaadeazcarINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdecaadeazcarINDEC_11.addFeatures(features_HectreasdecaadeazcarINDEC_11);
var lyr_HectreasdecaadeazcarINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdecaadeazcarINDEC_11, 
                style: style_HectreasdecaadeazcarINDEC_11,
                interactive: true,
    title: 'Hectáreas de caña de azúcar (INDEC)<br />\
    <img src="styles/legend/HectreasdecaadeazcarINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdecaadeazcarINDEC_11_1.png" /> 275 - 1.700<br />\
    <img src="styles/legend/HectreasdecaadeazcarINDEC_11_2.png" /> 1.701 - 20.000<br />\
    <img src="styles/legend/HectreasdecaadeazcarINDEC_11_3.png" /> 20.001 o más<br />'
        });
var format_HectreasdetabacoINDEC_12 = new ol.format.GeoJSON();
var features_HectreasdetabacoINDEC_12 = format_HectreasdetabacoINDEC_12.readFeatures(json_HectreasdetabacoINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetabacoINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetabacoINDEC_12.addFeatures(features_HectreasdetabacoINDEC_12);
var lyr_HectreasdetabacoINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetabacoINDEC_12, 
                style: style_HectreasdetabacoINDEC_12,
                interactive: true,
    title: 'Hectáreas de tabaco (INDEC)<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_12_1.png" /> 1 - 125<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_12_2.png" /> 126 - 8.80<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_12_3.png" /> 881 o más<br />'
        });
var format_HectreasdectricosINDEC_13 = new ol.format.GeoJSON();
var features_HectreasdectricosINDEC_13 = format_HectreasdectricosINDEC_13.readFeatures(json_HectreasdectricosINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdectricosINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdectricosINDEC_13.addFeatures(features_HectreasdectricosINDEC_13);
var lyr_HectreasdectricosINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdectricosINDEC_13, 
                style: style_HectreasdectricosINDEC_13,
                interactive: true,
    title: 'Hectáreas de cítricos (INDEC)<br />\
    <img src="styles/legend/HectreasdectricosINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdectricosINDEC_13_1.png" /> 1 - 150<br />\
    <img src="styles/legend/HectreasdectricosINDEC_13_2.png" /> 151 - 1.600<br />\
    <img src="styles/legend/HectreasdectricosINDEC_13_3.png" /> 1.601 o más<br />'
        });
var format_HectreasdelegumbresINDEC_14 = new ol.format.GeoJSON();
var features_HectreasdelegumbresINDEC_14 = format_HectreasdelegumbresINDEC_14.readFeatures(json_HectreasdelegumbresINDEC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdelegumbresINDEC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdelegumbresINDEC_14.addFeatures(features_HectreasdelegumbresINDEC_14);
var lyr_HectreasdelegumbresINDEC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdelegumbresINDEC_14, 
                style: style_HectreasdelegumbresINDEC_14,
                interactive: true,
    title: 'Hectáreas de legumbres (INDEC)<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_14_1.png" /> 1 - 200<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_14_2.png" /> 201 - 3.500<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_14_3.png" /> 3.501 - 10.000<br />'
        });
var format_HectreasdeporotosecoMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasdeporotosecoMAGyP_15 = format_HectreasdeporotosecoMAGyP_15.readFeatures(json_HectreasdeporotosecoMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdeporotosecoMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdeporotosecoMAGyP_15.addFeatures(features_HectreasdeporotosecoMAGyP_15);
var lyr_HectreasdeporotosecoMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdeporotosecoMAGyP_15, 
                style: style_HectreasdeporotosecoMAGyP_15,
                interactive: true,
    title: 'Hectáreas de poroto seco (MAGyP)<br />\
    <img src="styles/legend/HectreasdeporotosecoMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdeporotosecoMAGyP_15_1.png" /> 450 - 1.300<br />\
    <img src="styles/legend/HectreasdeporotosecoMAGyP_15_2.png" /> 1.301 - 7.675<br />\
    <img src="styles/legend/HectreasdeporotosecoMAGyP_15_3.png" /> 7.676 - 12.700<br />'
        });
var format_HectreasdetrigoMAGyP_16 = new ol.format.GeoJSON();
var features_HectreasdetrigoMAGyP_16 = format_HectreasdetrigoMAGyP_16.readFeatures(json_HectreasdetrigoMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetrigoMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetrigoMAGyP_16.addFeatures(features_HectreasdetrigoMAGyP_16);
var lyr_HectreasdetrigoMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetrigoMAGyP_16, 
                style: style_HectreasdetrigoMAGyP_16,
                interactive: true,
    title: 'Hectáreas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_16_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_16_1.png" /> 1 - 675<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_16_2.png" /> 676 - 1.350<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_16_3.png" /> 1.356 o más<br />'
        });
var format_HectreasdemazMAGyP_17 = new ol.format.GeoJSON();
var features_HectreasdemazMAGyP_17 = format_HectreasdemazMAGyP_17.readFeatures(json_HectreasdemazMAGyP_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemazMAGyP_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemazMAGyP_17.addFeatures(features_HectreasdemazMAGyP_17);
var lyr_HectreasdemazMAGyP_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemazMAGyP_17, 
                style: style_HectreasdemazMAGyP_17,
                interactive: true,
    title: 'Hectáreas de maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasdemazMAGyP_17_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdemazMAGyP_17_1.png" /> 70 - 650<br />\
    <img src="styles/legend/HectreasdemazMAGyP_17_2.png" /> 651 - 1.500<br />\
    <img src="styles/legend/HectreasdemazMAGyP_17_3.png" /> 1.501 - 2.050<br />'
        });
var format_HectreasdesojaMAGyP_18 = new ol.format.GeoJSON();
var features_HectreasdesojaMAGyP_18 = format_HectreasdesojaMAGyP_18.readFeatures(json_HectreasdesojaMAGyP_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdesojaMAGyP_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdesojaMAGyP_18.addFeatures(features_HectreasdesojaMAGyP_18);
var lyr_HectreasdesojaMAGyP_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdesojaMAGyP_18, 
                style: style_HectreasdesojaMAGyP_18,
                interactive: true,
    title: 'Hectáreas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_1.png" /> 100 - 250<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_2.png" /> 251 - 925<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_3.png" /> 926 o más<br />'
        });
var format_Capacitaciones2020tcnicas_19 = new ol.format.GeoJSON();
var features_Capacitaciones2020tcnicas_19 = format_Capacitaciones2020tcnicas_19.readFeatures(json_Capacitaciones2020tcnicas_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2020tcnicas_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2020tcnicas_19.addFeatures(features_Capacitaciones2020tcnicas_19);
var lyr_Capacitaciones2020tcnicas_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2020tcnicas_19, 
                style: style_Capacitaciones2020tcnicas_19,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2020tcnicas_19.png" /> Capacitaciones 2020 (técnicas)'
            });
var format_Capacitaciones2019tcnicas_20 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_20 = format_Capacitaciones2019tcnicas_20.readFeatures(json_Capacitaciones2019tcnicas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_20.addFeatures(features_Capacitaciones2019tcnicas_20);
var lyr_Capacitaciones2019tcnicas_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_20, 
                style: style_Capacitaciones2019tcnicas_20,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_20.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Capacitaciones2018_21 = new ol.format.GeoJSON();
var features_Capacitaciones2018_21 = format_Capacitaciones2018_21.readFeatures(json_Capacitaciones2018_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018_21.addFeatures(features_Capacitaciones2018_21);
var lyr_Capacitaciones2018_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018_21, 
                style: style_Capacitaciones2018_21,
                interactive: true,
    title: 'Capacitaciones 2018<br />\
    <img src="styles/legend/Capacitaciones2018_21_0.png" /> Concientizacion<br />\
    <img src="styles/legend/Capacitaciones2018_21_1.png" /> Tecnica<br />'
        });
var format_Capacitaciones2017_22 = new ol.format.GeoJSON();
var features_Capacitaciones2017_22 = format_Capacitaciones2017_22.readFeatures(json_Capacitaciones2017_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2017_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2017_22.addFeatures(features_Capacitaciones2017_22);
var lyr_Capacitaciones2017_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2017_22, 
                style: style_Capacitaciones2017_22,
                interactive: true,
    title: 'Capacitaciones 2017<br />\
    <img src="styles/legend/Capacitaciones2017_22_0.png" /> Concientizacion<br />\
    <img src="styles/legend/Capacitaciones2017_22_1.png" /> Tecnica<br />'
        });
var format_LocalidadesJujuy_23 = new ol.format.GeoJSON();
var features_LocalidadesJujuy_23 = format_LocalidadesJujuy_23.readFeatures(json_LocalidadesJujuy_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesJujuy_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesJujuy_23.addFeatures(features_LocalidadesJujuy_23);
var lyr_LocalidadesJujuy_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesJujuy_23, 
                style: style_LocalidadesJujuy_23,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesJujuy_23.png" /> Localidades Jujuy'
            });
var format_BERJujuy_24 = new ol.format.GeoJSON();
var features_BERJujuy_24 = format_BERJujuy_24.readFeatures(json_BERJujuy_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERJujuy_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERJujuy_24.addFeatures(features_BERJujuy_24);
var lyr_BERJujuy_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERJujuy_24, 
                style: style_BERJujuy_24,
                interactive: true,
                title: '<img src="styles/legend/BERJujuy_24.png" /> BER Jujuy'
            });
var format_BERJujuy_25 = new ol.format.GeoJSON();
var features_BERJujuy_25 = format_BERJujuy_25.readFeatures(json_BERJujuy_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERJujuy_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERJujuy_25.addFeatures(features_BERJujuy_25);
var lyr_BERJujuy_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERJujuy_25, 
                style: style_BERJujuy_25,
                interactive: true,
                title: '<img src="styles/legend/BERJujuy_25.png" /> BER Jujuy'
            });
var format_DelegacinJujuy_26 = new ol.format.GeoJSON();
var features_DelegacinJujuy_26 = format_DelegacinJujuy_26.readFeatures(json_DelegacinJujuy_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinJujuy_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinJujuy_26.addFeatures(features_DelegacinJujuy_26);
var lyr_DelegacinJujuy_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinJujuy_26, 
                style: style_DelegacinJujuy_26,
                interactive: true,
                title: '<img src="styles/legend/DelegacinJujuy_26.png" /> Delegación Jujuy'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_ViviendasenreasruralesINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_PoblacinpordepartamentoINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdehortalizasINDEC_10.setVisible(true);lyr_HectreasdecaadeazcarINDEC_11.setVisible(true);lyr_HectreasdetabacoINDEC_12.setVisible(true);lyr_HectreasdectricosINDEC_13.setVisible(true);lyr_HectreasdelegumbresINDEC_14.setVisible(true);lyr_HectreasdeporotosecoMAGyP_15.setVisible(true);lyr_HectreasdetrigoMAGyP_16.setVisible(true);lyr_HectreasdemazMAGyP_17.setVisible(true);lyr_HectreasdesojaMAGyP_18.setVisible(true);lyr_Capacitaciones2020tcnicas_19.setVisible(true);lyr_Capacitaciones2019tcnicas_20.setVisible(true);lyr_Capacitaciones2018_21.setVisible(true);lyr_Capacitaciones2017_22.setVisible(true);lyr_LocalidadesJujuy_23.setVisible(true);lyr_BERJujuy_24.setVisible(true);lyr_BERJujuy_25.setVisible(true);lyr_DelegacinJujuy_26.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_ViviendasenreasruralesINDEC_3,lyr_PEAINDEC_4,lyr_PoblacinpordepartamentoINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdehortalizasINDEC_10,lyr_HectreasdecaadeazcarINDEC_11,lyr_HectreasdetabacoINDEC_12,lyr_HectreasdectricosINDEC_13,lyr_HectreasdelegumbresINDEC_14,lyr_HectreasdeporotosecoMAGyP_15,lyr_HectreasdetrigoMAGyP_16,lyr_HectreasdemazMAGyP_17,lyr_HectreasdesojaMAGyP_18,lyr_Capacitaciones2020tcnicas_19,lyr_Capacitaciones2019tcnicas_20,lyr_Capacitaciones2018_21,lyr_Capacitaciones2017_22,lyr_LocalidadesJujuy_23,lyr_BERJujuy_24,lyr_BERJujuy_25,lyr_DelegacinJujuy_26];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldAliases', {'viv rur': 'viv rur', });
lyr_PEAINDEC_4.set('fieldAliases', {'PEA': 'PEA', });
lyr_PoblacinpordepartamentoINDEC_5.set('fieldAliases', {'poblacion': 'poblacion', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_HectreasdehortalizasINDEC_10.set('fieldAliases', {'hortalizas': 'hortalizas', });
lyr_HectreasdecaadeazcarINDEC_11.set('fieldAliases', {'azucar': 'azucar', });
lyr_HectreasdetabacoINDEC_12.set('fieldAliases', {'tabaco': 'tabaco', });
lyr_HectreasdectricosINDEC_13.set('fieldAliases', {'cítricos': 'cítricos', });
lyr_HectreasdelegumbresINDEC_14.set('fieldAliases', {'legumbres': 'legumbres', });
lyr_HectreasdeporotosecoMAGyP_15.set('fieldAliases', {'poroto': 'poroto', });
lyr_HectreasdetrigoMAGyP_16.set('fieldAliases', {'trigo': 'trigo', });
lyr_HectreasdemazMAGyP_17.set('fieldAliases', {'maiz': 'maiz', });
lyr_HectreasdesojaMAGyP_18.set('fieldAliases', {'soja': 'soja', });
lyr_Capacitaciones2020tcnicas_19.set('fieldAliases', {'localidad': 'localidad', 'tipo': 'tipo', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Capacitaciones2019tcnicas_20.set('fieldAliases', {'localidad': 'localidad', 'tipo': 'tipo', 'fechas': 'fechas', 'asistentes': 'asistentes', 'tematica': 'tematica', });
lyr_Capacitaciones2018_21.set('fieldAliases', {'localidad': 'localidad', 'fechas': 'fechas', 'asistentes': 'asistentes', 'tipo': 'tipo', 'tematica': 'tematica', });
lyr_Capacitaciones2017_22.set('fieldAliases', {'localidad': 'localidad', 'tipo': 'tipo', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_LocalidadesJujuy_23.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BERJujuy_24.set('fieldAliases', {'localidad': 'localidad', 'delegacion': 'delegacion', 'entidad': 'entidad', 'direccion': 'direccion', 'numero': 'numero', });
lyr_BERJujuy_25.set('fieldAliases', {'localidad': 'localidad', 'delegacion': 'delegacion', 'entidad': 'entidad', 'direccion': 'direccion', 'numero': 'numero', });
lyr_DelegacinJujuy_26.set('fieldAliases', {'localidad': 'localidad', 'direccion': 'direccion', 'prest 2016': 'prest 2016', 'prest 2017': 'prest 2017', 'prest 2018': 'prest 2018', 'prest 2019': 'prest 2019', 'prest 2020': 'prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldImages', {'viv rur': 'TextEdit', });
lyr_PEAINDEC_4.set('fieldImages', {'PEA': 'TextEdit', });
lyr_PoblacinpordepartamentoINDEC_5.set('fieldImages', {'poblacion': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_10.set('fieldImages', {'hortalizas': 'TextEdit', });
lyr_HectreasdecaadeazcarINDEC_11.set('fieldImages', {'azucar': 'TextEdit', });
lyr_HectreasdetabacoINDEC_12.set('fieldImages', {'tabaco': 'TextEdit', });
lyr_HectreasdectricosINDEC_13.set('fieldImages', {'cítricos': 'TextEdit', });
lyr_HectreasdelegumbresINDEC_14.set('fieldImages', {'legumbres': 'TextEdit', });
lyr_HectreasdeporotosecoMAGyP_15.set('fieldImages', {'poroto': 'TextEdit', });
lyr_HectreasdetrigoMAGyP_16.set('fieldImages', {'trigo': 'TextEdit', });
lyr_HectreasdemazMAGyP_17.set('fieldImages', {'maiz': 'TextEdit', });
lyr_HectreasdesojaMAGyP_18.set('fieldImages', {'soja': 'TextEdit', });
lyr_Capacitaciones2020tcnicas_19.set('fieldImages', {'localidad': 'TextEdit', 'tipo': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', });
lyr_Capacitaciones2019tcnicas_20.set('fieldImages', {'localidad': 'TextEdit', 'tipo': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', 'tematica': 'TextEdit', });
lyr_Capacitaciones2018_21.set('fieldImages', {'localidad': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', 'tipo': 'TextEdit', 'tematica': 'TextEdit', });
lyr_Capacitaciones2017_22.set('fieldImages', {'localidad': 'TextEdit', 'tipo': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', });
lyr_LocalidadesJujuy_23.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BERJujuy_24.set('fieldImages', {'localidad': 'TextEdit', 'delegacion': 'TextEdit', 'entidad': 'TextEdit', 'direccion': 'TextEdit', 'numero': 'TextEdit', });
lyr_BERJujuy_25.set('fieldImages', {'localidad': 'TextEdit', 'delegacion': 'TextEdit', 'entidad': 'TextEdit', 'direccion': 'TextEdit', 'numero': 'TextEdit', });
lyr_DelegacinJujuy_26.set('fieldImages', {'localidad': 'TextEdit', 'direccion': '', 'prest 2016': '', 'prest 2017': '', 'prest 2018': '', 'prest 2019': '', 'prest 2020': '', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldLabels', {'viv rur': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'PEA': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_5.set('fieldLabels', {'poblacion': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'bovinos': 'inline label', });
lyr_HectreasdehortalizasINDEC_10.set('fieldLabels', {'hortalizas': 'inline label', });
lyr_HectreasdecaadeazcarINDEC_11.set('fieldLabels', {'azucar': 'inline label', });
lyr_HectreasdetabacoINDEC_12.set('fieldLabels', {'tabaco': 'inline label', });
lyr_HectreasdectricosINDEC_13.set('fieldLabels', {'cítricos': 'inline label', });
lyr_HectreasdelegumbresINDEC_14.set('fieldLabels', {'legumbres': 'inline label', });
lyr_HectreasdeporotosecoMAGyP_15.set('fieldLabels', {'poroto': 'inline label', });
lyr_HectreasdetrigoMAGyP_16.set('fieldLabels', {'trigo': 'inline label', });
lyr_HectreasdemazMAGyP_17.set('fieldLabels', {'maiz': 'inline label', });
lyr_HectreasdesojaMAGyP_18.set('fieldLabels', {'soja': 'inline label', });
lyr_Capacitaciones2020tcnicas_19.set('fieldLabels', {'localidad': 'inline label', 'tipo': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Capacitaciones2019tcnicas_20.set('fieldLabels', {'localidad': 'inline label', 'tipo': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', 'tematica': 'inline label', });
lyr_Capacitaciones2018_21.set('fieldLabels', {'localidad': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', 'tipo': 'inline label', 'tematica': 'inline label', });
lyr_Capacitaciones2017_22.set('fieldLabels', {'localidad': 'inline label', 'tipo': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_LocalidadesJujuy_23.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BERJujuy_24.set('fieldLabels', {'localidad': 'inline label', 'delegacion': 'inline label', 'entidad': 'inline label', 'direccion': 'inline label', 'numero': 'inline label', });
lyr_BERJujuy_25.set('fieldLabels', {'localidad': 'inline label', 'delegacion': 'inline label', 'entidad': 'inline label', 'direccion': 'inline label', 'numero': 'inline label', });
lyr_DelegacinJujuy_26.set('fieldLabels', {'localidad': 'inline label', 'direccion': 'inline label', 'prest 2016': 'inline label', 'prest 2017': 'inline label', 'prest 2018': 'inline label', 'prest 2019': 'inline label', 'prest 2020': 'inline label', });
lyr_DelegacinJujuy_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});