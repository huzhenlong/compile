/**
 * Created by Bigdata02 on 2016/1/19.
 */


$(function () {
    //离开页面时执行
    var unloading = function () {
        $(window).on("beforeunload", function () {
            return TxtContent.skipPrompt;
        });
    };

    var $canvas = $('canvas');
    $canvas.off().on("click", function () {
        unloading();
    });
    //设置宽高
    $canvas[0].width = $(".navbar").width() - 50;
    var setIboxHeight = function () {
        var iboxHeight = $("#wrapper").height() - 250;
        $("#canvases").css({"max-height": iboxHeight, "overflow-y": "auto"});
    };
    setIboxHeight();

    var workflowKey = XREWIN.getUrlParam("key");
    var workflowName = XREWIN.getUrlParam("name");
    var workflow = new Workflow({
        key: workflowKey
    });
    if (workflowKey != null) {
        var ret = WORKFLOW.getByIdWorkFlow(workflowKey);
        var data = JSON.parse(ret.content);
        workflow.loadNodes(data);
    }


    $("#show").click(function () {
        workflow.showThumbnail();
    });

    $("#allEnd").click(function () {
        workflow.setAllPlusNodes(true);
    });

    $("#hide").click(function () {
        //var layer = $('canvas').getLayer("myBox1");
        //layer.visible = false;
    });

    $("#publish").click(function () {
        ret = WORKFLOW.publish(workflowKey);
        if (ret) {
            swal(TxtContent.checkSuc, "", "");
        }
    });

    $("#save").click(function () {
        var diagram = JSON.stringify(workflow.getNodes());
        var ret = WORKFLOW.updateDiagram(diagram, workflowName, workflowKey);
        if (ret != undefined && ret.length > 0) {
            swal(TxtContent.saveSuc, "", "");
        }
        $(window).off("beforeunload");
    });

    $("#run").click(function () {
        var ret = WORKFLOW.run(workflowKey);
        if (ret) {
            swal(TxtContent.runSuc, "", "");
        }
    });

    $("#stop").click(function () {
        var ret = WORKFLOW.stop(workflowKey);
        if (ret) {
            swal(TxtContent.stopSuc, "", "");
        }
    });

    $("#clear").click(function () {
        //console.log(workflow.getNodes());
        //localStorage["workflow"] = JSON.stringify({nodes: []});
        workflow.clearCanvas();
    });

    $("#remove").click(function () {
        var ret = WORKFLOW.remove(workflowKey);
        if (ret) {
            swal(TxtContent.clearSuc, "", "");
        }
    });

    $("#delete").click(function () {
        workflow.deleteSelectedNode();
    });

    $("#addWorkflow").click(function () {
        workflow.addWorkflow();
    });

    $("#workflowReport").popup({
        "id": "workflowReportDialog",
        "title": TxtContent.work.title,
        "elements": [
            {
                "labelName": TxtContent.work.labelName1,
                "type": "report",
                "name": "buy_person_num"
            },
            {
                "labelName": TxtContent.work.labelName2,
                "type": "report",
                "name": "buy_order_num"
            },
            {
                "labelName": TxtContent.work.labelName3,
                "type": "report",
                "name": "buy_price"
            },
            {
                "labelName":TxtContent.work.labelName4 ,
                "type": "report",
                "name": "buy_pct"
            },
            {
                "labelName":TxtContent.work.labelName5 ,
                "type": "report",
                "name": "repurchasing"
            },
            {
                "labelName":TxtContent.work.labelName6 ,
                "type": "report",
                "name": "un_buy_order_num"
            },
            {
                "labelName": TxtContent.work.labelName7,
                "type": "report",
                "name": "un_buy_price"
            },
            {
                "labelName": TxtContent.work.labelName8,
                "type": "report",
                "name": "un_buy_pct"
            },
            {
                "labelName":TxtContent.work.labelName9 ,
                "type": "report",
                "name": "roi"
            }
        ]
    }).on("click", function () {
        var $form = $("#form_workflowReportDialog");
        var jsonObj = WORKFLOW.roiReport();
        var emList = $("#form_workflowReportDialog").find("em");
        for (var l = 0; l < emList.length; l++) {
            for (var key in jsonObj) {
                if (jsonObj.hasOwnProperty(key) && $(emList[l]).attr("name") == key) {
                    $(emList[l]).text(jsonObj[key]);
                }
            }
        }
        $("#subForm", $form).css("display", "none");
    });
});
