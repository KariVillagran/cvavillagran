var habilidadesJson = { "Habilidades": [{
							"nombre": "Reportabilidad",
							"cantidad": "95"
						}, {
							"nombre": "IBM Cognos",
							"cantidad": "80"
						}, {
							"nombre": "PL/SQL",
							"cantidad": "90"
						}, {
							"nombre": "SQL",
							"cantidad": "92"
						}, {
							"nombre": "Modelamiento DB",
							"cantidad": "88"
						}, {
							"nombre": "C#",
							"cantidad": "72"
						}, {
							"nombre": "HTML",
							"cantidad": "82"
						}, {
							"nombre": "CSS",
							"cantidad": "53"
						}, {
							"nombre": "JS",
							"cantidad": "20"
						}, {
							"nombre": "JSON",
							"cantidad": "15"
						}, {
							"nombre": "Ingles",
							"cantidad": "33"
						}]
					};				

$(function () {
    $('#bubble-chart').highcharts({

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Habilidades tecnicas'
        },

        subtitle: {
            text: 'Distribución de las habilidades tecnologicas'
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Meses de experiencia'
            },
            labels: {
                format: '{value} Meses'
            },
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 5,
                label: {
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Meses utilizando la tecnologia/mes'
                },
                zIndex: 3
            }]
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Dominio de la tecnologia'
            },
            labels: {
                format: '{value} %'
            },
            maxPadding: 0.2,
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 15,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic'
                    },
                    text: '% de dominio/mes',
                    x: -10
                },
                zIndex: 3
            }]
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                '<tr><th>Meses de exp.:</th><td>{point.x}</td></tr>' +
                '<tr><th>% de dominio:</th><td>{point.y}%</td></tr>' +
                '<tr><th>Trabajo:</th><td>{point.z}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: [
                { x: 34, y: 95, z: 3, name: 'RE', country: 'Reportabilidad' },
                { x: 30, y: 80, z: 2, name: 'IBM', country: 'IBM Cognos' },
                { x: 36, y: 90, z: 3, name: 'PL', country: 'PL/SQL' },
                { x: 60, y: 92, z: 3, name: 'SQL', country: 'Lenguaje SQL' },
				{ x: 60, y: 88, z: 4, name: 'DB', country: 'Modelamiento Base de datos' },
                { x: 29, y: 72, z: 2, name: 'C#', country: 'Lenguaje C#' },
                { x: 25, y: 82, z: 2, name: 'WEB', country: 'HTML' },
                { x: 20, y: 53, z: 1.5, name: 'CSS', country: 'Estilos CSS' },
                { x: 12, y: 20, z: 1.2, name: 'JS', country: 'Javascript' },
                { x: 3, y: 15, z: 1.1, name: 'JSON', country: 'JSON' },
                { x: 13, y: 33, z: 1.9, name: 'EN', country: 'Ingles' }
            ]
        }]

    });
});


$(function () {

    $('#polar-chart').highcharts({

        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: 'Fortalezas y Debilidades',
            x: -50
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Proactividad', 
						 'Comunicación', 
						 'Trabajo en equipo', 
						 'Tolerancia',
						 'Autodidacta', 
						 'Liderazgo'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },
		
		credits: {
				enabled: false
		},

        series: [{
            name: 'Desarrollo',
            data: [43, 74, 45, 35, 40, 10],
            pointPlacement: 'on'
        }]

    });
});
