import ApexCharts from 'apexcharts'
export default function RenderPercentageChart(props) {
    var options = {
        chart: {
            height: 280,
            type: "radialBar",
        },

        series: [85],
        colors: ["#4338c9"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "70%",
                    // background: "#293450"
                },
                track: {
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.100
                    }
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#676767",
                        fontSize: "13px"
                    },
                    value: {
                        color: "#444444",
                        fontSize: "40px",
                        show: true
                    }
                }
            }
        },
        // fill: {
        //     type: "gradient",
        //     gradient: {
        //         shade: "dark",
        //         type: "vertical",
        //         stops: [0, 100]
        //     }
        // },
        stroke: {
            lineCap: "round"
        },
        labels: ["Available Man Power"]
    };

    var chart = new ApexCharts(document.querySelector("#percentageChart"), options);

    chart.render();

}