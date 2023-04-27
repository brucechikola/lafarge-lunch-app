import ApexCharts from 'apexcharts'
import { summaryChart } from 'mock/data';
export default function RenderAreaChart(params) {
    var options = {
        chart: {
            height: 300,
            type: "area"
        },
        dataLabels: {
            enabled: false
        },
        series: [
            {
                name: "Summary Chart",
                data: summaryChart.data
            }
        ],
        // dataLabels: {
        //     style: {
        //         colors: ['#421ABF']
        //     }
        // },
        markers: {
            colors: ['#421ABF']
        },
        fill: {
            colors: ['#421ABF', '#E91E63', '#9C27B0'],
            shade: 'dark',
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            categories: summaryChart.labels
        }
    };

    var chart = new ApexCharts(document.querySelector("#summaryChart"), options);
    chart.render();
}