/**
 * Created by HZL on 2016/2/23.
 */
//删除多余的引入
$('script[src="/js/smartgroup/smartgroup.filter.js"]').remove();
//浏览器key
browserKey = {"key": XREWIN.getUrlParam("key")};
/**
 * 显示总体情况table
 */
//获取总体情况data
var totalData = PLAT.getTotalReportForSms(browserKey);
console.log(totalData);
//任务信息table
$(".taskTable").smsTaskInfo(totalData["taskInfo"]);

//总体信息table
$(".totalTable").smsTotalCase(totalData["totalInfo"]);

//tab切换
$("#tabs").tabs({
    "tabs": [
        {
            "icon": "fa fa-dashboard fa-fw",
            "title": "总体情况",
            "content": $("#totalCase").html()
        }
    ]
});

// 总体信息chart
var totalInfo = totalData["totalInfo"];
var option = {
    title: {
        text: '阶段报表'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
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
        data: ['提交数量', '发送成功数量']
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
                {value: totalInfo["submitCount"]["count"], name: '提交数量'},
                {value: totalInfo["sendSuccess"]["count"], name: '发送成功数量'}
            ]
        }
    ]
};

$("#main").eChart(option);







