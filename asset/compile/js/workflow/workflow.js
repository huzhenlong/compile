/**
 * Created by Bigdata02 on 2015/9/11.
 */

var work_flow_model = new FormModal({
    "id": "model_workflow",
    "title": TxtContent.work.flowTitle,
    "elements": [
        {
            "require": true,
            "labelName": TxtContent.work.labelName10,
            "type": "text",
            "name": "name",
            validators: {
                notEmpty: {
                    message:TxtContent.work.msg
                }
            }
        },
        {
            "labelName": TxtContent.work.labelName11,
            "type": "select",
            "name": "brandKey",
            "selectOptions": {
                "url": PLATFORM.getGetSelectBrandsUrl(),
                "textName": "name",
                "valueName": "key",
                "defaultValue": 0
            }

        },
        {
            "type": "hidden",
            "name": "publicFlag",
            "defaultValue": "1",
            "checkOptions": [{value: "1", text: "是否公开"}]
        },
        {
            "type": "hidden",
            "name": "operWf",
            "defaultValue": "add"
        },
        {
            "type": "hidden",
            "name": "key"
        }
    ],
    "submitBindFunc": function () {
        var name = work_flow_model.getValue("name");
        var brandKey = work_flow_model.getValue("brandKey");
        var key = work_flow_model.getValue("key");
        var publicFlag = work_flow_model.getValue("publicFlag");
        var operWf = work_flow_model.getValue("operWf");

        var fd = new FormData();
        fd.append("name", name);
        fd.append("brandKey", brandKey);
        fd.append("key", key);
        if (publicFlag == null || publicFlag.length == 0) {
            fd.append("publicFlag", 0);
        } else {
            fd.append("publicFlag", 1);
        }

        key = WORKFLOW.addAndUpdateWorkFlow(fd);
        if (key == null) {
            return false;
        }
        if (operWf == "add") {
            XREWIN.openNewWindow(XREWIN.getWorkFlowPage(), {"name": name, "brand": brandKey, "key": key});
            return false;
        } else if (operWf == "update") {
            swal(
                {
                    title: TxtContent.modSuc,
                    text: "",
                    type: "info",
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: TxtContent.confirm
                }, function () {
                    window.location.reload();
                }
            );
        }

    },
    "clear": true
});

function newWorkFLow() {
    work_flow_model.show();
}


function echoData(workFlowName, brandKey, workFlowId, publicFlag) {
    work_flow_model.setValue("name", workFlowName);
    work_flow_model.setValue("brandKey", brandKey);
    work_flow_model.setValue("key", workFlowId);
    work_flow_model.setValue("publicFlag", publicFlag);
    work_flow_model.setValue("operWf", "update");
    work_flow_model.show();
}


function deleteData(diagramId) {
    var ret = WORKFLOW.delWorkFlow(diagramId);
    if (ret) {
        swal(
            {
                title: TxtContent.delSuc,
                text: "",
                type: "info",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: TxtContent.confirm
            }, function () {
                window.location.reload();
            }
        );
    }
}


function vialate() {
    var workFlowName = $('#workFlowName').val();
    if (workFlowName == "") {
        alert(TxtContent.work.errNameNull);
        result = false;
        return result
    }
    //workFlowName = escape(workFlowName);
    var result = WORKFLOW.existByNameWorkFlow(workFlowName);
    if (result) {
        alert(TxtContent.work.errNameRep);
        return false;
    }
    return true;


}

function publishWorkFlow(diagramId) {
    var ret = WORKFLOW.publish(diagramId);
    if (ret) {
        swal(
            {
                title: TxtContent.publishSuc,
                text: "",
                type: "info",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: TxtContent.confirm
            }, function () {
                window.location.reload();
            }
        );
    }

}

function runWorkFlow(diagramId) {
    var ret = WORKFLOW.run(diagramId);
    if (ret) {
        swal(
            {
                title: TxtContent.runSuc,
                text: "",
                type: "info",
                confirmButtonColor: "#DD6B55",
                confirmButtonText:  TxtContent.confirm
            }, function () {
                window.location.reload();
            }
        );
    }
}

function stopWorkFlow(diagramId) {
    var ret = WORKFLOW.stop(diagramId);
    if (ret) {
        swal(
            {
                title: TxtContent.stopSuc,
                text: "",
                type: "info",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: TxtContent.confirm
            }, function () {
                window.location.reload();
            }
        );

    }

}








