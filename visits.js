function getNewCustomers(endpoint) {
$.getJSON(endpoint, function (data) {
    Highcharts.chart('newcustomers', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Visitas'
        },
        credits: {
            enabled: false
        },
        exporting: { 
            enabled: false 
        },
        xAxis: {
            categories: data["categories"]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Cantidad de visitas'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'Nuevos',
            data: data["new"]
        }, {
            name: 'Recurrentes',
            data: data["recurrent"]
        }]
    });
});
}
