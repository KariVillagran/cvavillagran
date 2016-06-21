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
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor:'transparent'
        },
        title: {
            text: 'Habilidades técnicas'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Tecnologia',
            colorByPoint: true,
            data:  [{
                            "name": "Reportabilidad",
                            "y": 20
                        }, {
                            "name": "IBM Cognos",
                            "y": 20
                        }, {
                            "name": "PL/SQL",
                            "sliced": true,
                            "y": 20
                        }, {
                            "name": "SQL",
                            "y": 10
                        }, {
                            "name": "Modelamiento DB",
                            "y": 5
                        }, {
                            "name": "C#",
                            "y": 5
                        }, {
                            "name": "HTML",
                            "y": 2
                        }, {
                            "name": "CSS",
                            "y": 2
                        }, {
                            "name": "JS",
                            "y": 2
                        }, {
                            "name": "JSON",
                            "y": 2
                        }, {
                            "name": "Ingles",
                            "y": 2
                        }]
        }]
    });
});

$(function () {

    $('#polar-chart').highcharts({

        chart: {
            polar: true,
            type: 'line',
            backgroundColor:'transparent'
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
            data: [43, 74, 45, 35, 40, 30],
            pointPlacement: 'on'
        }]

    });
});
