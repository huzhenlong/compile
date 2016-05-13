/**
 * Created by HZL on 2016/3/18.
 */

angular.element("#content_breadcrumb").remove();
/**
 * KPI
 */
angular.module("KPI", [])
    .config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    })
    .controller("KPIContent", function ($scope) {
        $scope.firstL = TxtContent.firstL;
        $scope.firstR = TxtContent.firstR;
        $scope.firstM = TxtContent.firstM;
        $scope.firstB = TxtContent.firstB;
        $scope.secondR = TxtContent.secondR;
        $scope.secondL = TxtContent.secondL;
        $scope.secondM = TxtContent.secondM;
        $scope.secondB = TxtContent.secondB;
        $scope.thirdR = TxtContent.thirdR;
        $scope.thirdL = TxtContent.thirdL;
        $scope.thirdM = TxtContent.thirdM;
        $scope.thirdB = TxtContent.thirdB;
        $scope.chart = TxtContent.chart;
        $scope.chart7 = TxtContent.chart7;
        $scope.chart1 = TxtContent.chart1;
        $scope.chart3 = TxtContent.chart3;
        $scope.marketSuccessCount = 6665;
        $scope.marketScale = '69%';
        $scope.marketCount = 665465;
        $scope.marketIncome = 6665;
        $scope.marketIncomeScale = "1:58";
        $scope.marketCost = 665465;
        $scope.noMarketMemberCount = 56435;
        $scope.memberScale = '55%';
        $scope.memberCount = 45654646;
        $scope.toggleGap = function (obj, gap) {
            angular.element("#toggleGapTime").find("button").removeClass("active");
            obj.target.className = 'btn btn-xs btn-white active';
        };
    });

/**
 * 活跃度
 */

var myChart = echarts.init(document.getElementById('activity'));
myChart.showLoading();

//$.get('/test/disk.tree.json', function (diskData) {
myChart.hideLoading();

function colorMappingChange(value) {
    var levelOption = getLevelOption(value);
    myChart.setOption({
        series: [{
            levels: levelOption
        }]
    });
}

var formatUtil = echarts.format;

function getLevelOption() {
    return [
        {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    gapWidth: 5
                }
            }
        },
        {
            itemStyle: {
                normal: {
                    gapWidth: 1
                }
            }
        },
        {
            colorSaturation: [0.35, 0.5],
            itemStyle: {
                normal: {
                    gapWidth: 1,
                    borderColorSaturation: 0.6
                }
            }
        }
    ];
}

myChart.setOption(option = {


    tooltip: {
        formatter: function (info) {
            var value = info.value;
            var treePathInfo = info.treePathInfo;
            var treePath = [];

            for (var i = 1; i < treePathInfo.length; i++) {
                treePath.push(treePathInfo[i].name);
            }

            return [
                '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
                TxtContent.chartInfo.person + formatUtil.addCommas(value) + TxtContent.people
            ].join('');
        }
    },

    series: [
        {
            name: TxtContent.chartInfo.person,
            type: 'treemap',
            visibleMin: 300,
            label: {
                show: true,
                formatter: '{b}'
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff'
                }
            },
            levels: getLevelOption(),
            //data: diskData
            data: [
                {
                    "value": 450,
                    "name": "营销3次以上会员",
                    "path": "营销3次以上会员"
                },
                {
                    "value": 156,
                    "name": "营销1-3次会员",
                    "path": "营销1-3次会员"
                },
                {
                    "value": 466,
                    "name": "未营销会员",
                    "path": "未营销会员"
                },
                {
                    "value": 160,
                    "name": "准营销会员",
                    "path": "准营销会员"
                }
            ]
        }
    ],
    color: ['#61a0a8', '#749f83', '#d48265', '#c23531']
});
//});

/**
 * 营销指标
 */

//营销参数
var marketParam = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top: '8px',
        left: '1%',
        right: '2%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: TxtContent.chartInfo.date
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: TxtContent.chartInfo.memberType1,
            type: 'line',
            stack: TxtContent.chartInfo.total,
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: TxtContent.chartInfo.memberType2,
            type: 'line',
            stack: TxtContent.chartInfo.total,
            areaStyle: {normal: {}},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: TxtContent.chartInfo.memberType3,
            type: 'line',
            stack: TxtContent.chartInfo.total,
            areaStyle: {normal: {}},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: TxtContent.chartInfo.memberType4,
            type: 'line',
            stack: TxtContent.chartInfo.total,
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ],
    color: ['#c23531', '#d48265', '#749f83', '#61a0a8']
};


$("#marketChart").eChart(marketParam);


/**
 * 营销报表
 */

var dataa = [
    {
        "activeName": "哈哈",
        "marketCount": 5646496,
        "marketSuccessCount": 46546,
        "successRate": '54 %',
        "marketCost": 4646,
        "marketIncome": 46546849,
        "ROI": '1:25%'
    },
    {
        "activeName": "哈哈",
        "marketCount": 5646496,
        "marketSuccessCount": 46546,
        "successRate": '54 %',
        "marketCost": 4646,
        "marketIncome": 46546849,
        "ROI": '1:25%'
    },
    {
        "activeName": "哈哈",
        "marketCount": 5646496,
        "marketSuccessCount": 46546,
        "successRate": '54 %',
        "marketCost": 4646,
        "marketIncome": 46546849,
        "ROI": '1:25%'
    }
];
$('#marketTable').DataTable({
    "destroy": true,
    "stateSave": true,
    "tableTools": {
        "sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf"
    },
    language: {
        url: '/localisation/dataTables/zh-cn.json'
    },
    data: dataa,
    "columns": [
        {
            "title": TxtContent.chartInfo.colName1,
            "data": "activeName"
        },
        {
            "title": TxtContent.chartInfo.colName2,
            "data": "marketCount"
        },
        {
            "title": TxtContent.chartInfo.colName3,
            "data": "marketSuccessCount"
        },
        {
            "title": TxtContent.chartInfo.colName4,
            "data": "successRate"
        },
        {
            "title": TxtContent.chartInfo.colName5,
            "data": "marketCost"
        },
        {
            "title": TxtContent.chartInfo.colName6,
            "data": "marketIncome"
        },
        {
            "title": TxtContent.chartInfo.colName7,
            "data": "ROI"
        }
    ]
});