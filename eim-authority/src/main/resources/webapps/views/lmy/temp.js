$(function () {
    var chart = Highcharts.chart('container', {
        chart: {
            animation: {
                duration:2000,
                easing: 'easeOutBounce'
            },
            marginLeft:50,
            marginTop:40,
            marginRight:10,
        },
        title: {
            text: ''
        },
        yAxis: {
            title: {
                align: 'high',
                offset: 0,
                text: '完好率 %',
                rotation: 0,
                y: -20,
                x:10
            },
            tickWidth: 1,
            // floor: 80,
            // ceiling: 90,
            min:80,
            max:90,
            lineWidth: 1,
            tickAmount: 6
        },
        xAxis: {
            min:0,
            max:12,
            tickAmount: 13,
            showFirstLabel:false,
            labels:{
                formatter:function(){
                    return this.value + '月'
                }
            }
        },
        plotOptions: {
            series: {
                pointStart: 1
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            y:-15
        },
        series: [{
            name: '大修',
            data: []
        }, {
            name: '检修',
            data: [82.1],
            color: 'green'
        }, {
            name: '完好',
            data: [83]
        }]
    });
    var i=84;
    $('#button').click(function () {
        chart.series[0].addPoint(i);
        i++;
    });
});



<div id="container" style="max-width:800px;height:300px"></div>
    <button id="button" class="autocompare">新增点</button>