/**
 * Created by HZL on 2016/2/23.
 */
$(function () {

    //浏览器key
    var browserKey = {"key": XREWIN.getUrlParam("key")};
    /**
     * 显示总体情况table
     */
    //获取总体情况data
    var totalData = PLAT.getTotalReport(browserKey);
    var previewType = totalData["taskInfo"]["type"];
    //var previewType = 1;
    $("body").data("isIndividuation", previewType);

    //任务信息table
    $(".taskTable").taskInfo(totalData["taskInfo"]);

    //总体信息table
    $(".totalTable").totalCase(totalData["totalInfo"]);

    //tab切换
    $("#tabs").tabs({
        "tabs": [
            {
                "icon": "fa fa-dashboard fa-fw",
                "title": "总体情况",
                "content": $("#totalCase").html()
            },
            {
                "icon": "fa fa-table fa-fw",
                "title": "点击情况",
                "content": $("#clickCase").html()
            },
            {
                "icon": "fa fa-hand-o-up fa-fw",
                "title": "点击热点",
                "content": previewType ? $('#reportPreview').html() : $('#clickMap').html()
            },
            {
                "icon": "fa fa-bar-chart-o fa-fw",
                "title": "分时段统计",
                "content": $("#period-statistics").html()
            },
            {
                "icon": "fa fa-pie-chart fa-fw",
                "title": "客户端",
                "content": $("#clientWrap").html()
            }
        ]
    });

    /**
     * 解析obj为单独对象的数组
     */
    var objConvertArray = function (obj, name) {
        var arr = [];
        if (obj) {
            for (var i = 0; i < obj.length - 1; i++) {
                arr.push(obj[i][name]);
            }
        }

        return arr;
    };

    var objConvertArrayAll = function (obj, name) {
        var arr = [];
        if (obj) {
            for (var i = 0; i < obj.length; i++) {
                arr.push(obj[i][name]);
            }
        }
        return arr;
    };

    //隐藏热点标记
    var hideHeapMap = function () {
        var mark = $(".heapMark");
        if (mark.length > 0) {
            mark.hide();
        }
    };

    //总体情况
    var total = $('a[href="#tab-0"]');
    total.on('shown.bs.tab', function () {
        hideHeapMap();
        // 总体信息chart
        var totalInfo = totalData["totalInfo"];
        //提交数量
        var totalCount = totalInfo["submitCount"]["count"];
        var option = {
            title: {
                text: '阶段报表'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data: ['提交数量比例', '发送成功比例', '打开比例', '点击比例']
            },
            calculable: true,
            series: [
                {
                    name: '阶段报表',
                    type: 'funnel',
                    left: '10%',
                    top: 60,
                    //x2: 80,
                    bottom: 60,
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        },
                        emphasis: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },


                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    },
                    data: [
                        {value: 100, name: '提交数量比例'},
                        {value: (totalInfo["sendSuccess"]["count"] / totalCount * 100).toFixed(2), name: '发送成功比例'},
                        {value: (totalInfo["open"]["count"] / totalCount * 100).toFixed(2), name: '打开比例'},
                        {value: (totalInfo["click"]["count"] / totalCount * 100).toFixed(2), name: '点击比例'}
                    ]
                }
            ]
        };
        $("#main").eChart(option);
    });

    total.trigger("shown.bs.tab");

    //点击情况
    $('a[href="#tab-1"]').on('shown.bs.tab', function () {
        hideHeapMap();
        //点击情况table
        PLAT.clickReport(browserKey, function () {
            $('#clickCaseTable').DataTable({
                "destroy": true,
                "stateSave": true,
                "tableTools": {
                    "sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf"
                },
                language: {
                    url: '/localisation/dataTables/zh-cn.json'
                },
                data: this.data,
                "columns": [
                    {
                        "title": "链接",
                        "data": "url",
                        "render": function (data, type, row, meta) {
                            return '<a href="' + data + '" target="_blank" title="' + data + '">' + data + '</a>'
                        }
                    },
                    {
                        "title": "点击次数",
                        "data": "clickCount"
                    },
                    {
                        "title": "点击比例",
                        "data": "clickScale"
                    },
                    {
                        "title": "点击人数",
                        "data": "memberCount"
                    },
                    {
                        "title": "人数比例",
                        "data": "peopleScale"
                    }
                ]
            });
        });

    });

    //点击热点
    var map = $('a[href="#tab-2"]');
    map.on('shown.bs.tab', function () {
        hideHeapMap();
        //热点图
        if (!previewType) {
            var mapTemplate = PLAT.getClickTemplate(browserKey);
            var heatMaps = $('#heatMaps');
            heatMaps.append(mapTemplate["html"]);
            heatMaps.heapMap(mapTemplate);
        } else {
            $("#previewSearchBtn").trigger("click");
        }
    });


    //分阶段统计
    $('a[href="#tab-3"]').on('shown.bs.tab', function () {
        hideHeapMap();
        //分阶段table
        var period_data;
        PLAT.getPeriodStatistics(browserKey, function () {
            period_data = this.data;
            $('#periodTable').DataTable({
                "destroy": true,
                "stateSave": true,
                "tableTools": {
                    "sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf"
                },
                language: {
                    url: '/localisation/dataTables/zh-cn.json'
                },
                data: this.data,
                "columns": [
                    {
                        "title": "时间",
                        "data": "time"
                    },
                    {
                        "title": "打开",
                        "data": "open"
                    },
                    {
                        "title": "点击",
                        "data": "click"
                    }
                ]
            });
            /**
             * 分段统计
             */
            var options = {
                title: {
                    text: '按时间分布'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['打开', '点击']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: objConvertArray(period_data, "time")
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '打开',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {
                            normal: {
                                backgroundColor: 'rgba(255, 255, 0, 0.5)'
                            }
                        },
                        data: objConvertArray(period_data, "open")
                    },
                    {
                        name: '点击',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {
                            normal: {
                                backgroundColor: 'rgba(0, 255, 0, 0.5)'
                            }
                        },
                        data: objConvertArray(period_data, "click")
                    }
                ]
            };
            $("#histogram").eChart(options);
        });
    });

    //客户端
    $('a[href="#tab-4"]').on('shown.bs.tab', function () {
        hideHeapMap();
        //客户端table
        var clientData;
        PLAT.getCustomerStatistics(browserKey, function () {
            clientData = this.data;
            $('#clientTable').DataTable({
                "destroy": true,
                "stateSave": true,
                "tableTools": {
                    "sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf"
                },
                language: {
                    url: '/localisation/dataTables/zh-cn.json'
                },
                data: this.data,
                "columns": [
                    {
                        "title": "客户端",
                        "data": "client"
                    },
                    {
                        "title": "苹果系统",
                        "data": "Mac",
                        "render": function (data, type, row, meta) {
                            return '<a href="' + row["MacUrl"] + '" target="_blank" title="' + data + '">' + data + '</a>'
                        }
                    },
                    {
                        "title": "windows系统",
                        "data": "windows",
                        "render": function (data, type, row, meta) {
                            return '<a href="' + row["windowsUrl"] + '" target="_blank" title="' + data + '">' + data + '</a>'
                        }
                    },
                    {
                        "title": "安卓系统",
                        "data": "Android",
                        "render": function (data, type, row, meta) {
                            return '<a href="' + row["AndroidUrl"] + '" target="_blank" title="' + data + '">' + data + '</a>'
                        }
                    },
                    {
                        "title": "其他",
                        "data": "Other",
                        "render": function (data, type, row, meta) {
                            return '<a href="' + row["OtherUrl"] + '" target="_blank" title="' + data + '">' + data + '</a>'
                        }
                    },
                    {
                        "title": "总计",
                        "data": "total",
                        "render": function (data, type, row, meta) {
                            return '<a href="' + row["totalUrl"] + '" target="_blank" title="' + data + '">' + data + '</a>'
                        }
                    }
                ]
            });
            //客户端饼图
            var clientOption = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['移动电话', '平板电脑', 'PC端']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['PC端', '平板电脑', '移动电话']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '苹果系统',
                        type: 'bar',
                        data: objConvertArrayAll(clientData, "Mac")
                    },
                    {
                        name: 'Windows系统',
                        type: 'bar',
                        data: objConvertArrayAll(clientData, "windows")
                    },
                    {
                        name: '安卓系统',
                        type: 'bar',
                        data: objConvertArrayAll(clientData, "Android")
                    },
                    {
                        name: '其他',
                        type: 'bar',
                        data: objConvertArrayAll(clientData, "Other")
                    }
                ]
            };
            $("#clientStatistics").eChart(clientOption);
        });


    });
});





