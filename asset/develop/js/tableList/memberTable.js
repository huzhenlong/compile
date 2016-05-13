/**
 * Created by HZL on 2015/12/15.
 */

//下拉框内容
var importColumns;
//显示弹框
var fnClickImport = function () {
    $("#memberModal").modal("show");
    importColumns = importMemberColumns;
};

//弹出memberConModal
var memberCon = function () {
    $("#memberConModal").modal("show");
};

$(function () {
    //组建下拉框
    var getSelectMemberColumns = function (name) {
        var select = '<select class="form-control" name="' + name + '"><option value="">'+TxtContent.sel+'</option>';
        $.each(importColumns, function () {
            if (this.column) {
                select += '<option value="' + this.column + '">' + this.name + '</option>';
            }
        });
        select += '</select>';
        return select;
    };

    var getNumberColumns = function (fileColumns) {
        var select = '<select class="form-control numberKey" data-name="numberBind" multiple style="width:100%;">' +
            '<option value="" style="text-align:center">- - - - - - 请选择 - - - - - -</option>';
        $.each(fileColumns, function (i) {
            select += '<option value="' + i + '">' + this + '</option>';
        });
        select += '</select>';
        return select;
    };

    // region 上传会员文件
    var readImportFile = function (fileId, bindBox) {
        var file = document.getElementById(fileId).files[0];
        var reader = new FileReader();
        reader.onload = (function (show) {
            return function (e) {
                show.empty();
                var title = e.target.result.split('\n')[0];
                if (title.length > 2000) {
                    swal({
                        title: TxtContent.fileErr,
                        text: TxtContent.fileErrMsg
                    });
                }
                else {
                    var cols = title.split(',');
                    if (cols.length == 1) {
                        cols = title.split('\t');
                    }
                    if (cols.length == 1) {
                        console.error("格式错误！");
                        return;
                    }
                    var numberSel = '<div class="row"><div class="col-sm-6">'
                        + '<span class="input-group-addon" style="height: 21px;line-height: 20px;border:1px solid #E5E6E7">'+TxtContent.serial+'：</span></div>';
                    numberSel += '<div class="binding-arrows"><i class="fa fa-arrows-h"></i></div>';
                    numberSel += '<div class="col-sm-6">' + getNumberColumns(cols) + '</div></div><hr/>';
                    show.append(numberSel);
                    for (var i = 0; i < cols.length; i++) {
                        var name = 'col_' + i;
                        var col = '<div class="row"><div class="col-sm-6"><div class="input-group"><span class="input-group-addon">'+TxtContent.colName+'：</span>'
                            + '<input type="text" class="form-control" value="' + cols[i] + '" readonly></div></div>';
                        col += '<div class="binding-arrows"><i class="fa fa-arrows-h"></i></div>';
                        col += '<div class="col-sm-6"><div class="input-group"><span class="input-group-addon">'+TxtContent.param+'：</span>'
                            + getSelectMemberColumns(name) + '</div></div></div>';
                        show.append(col);
                    }
                    //验证参数是否重复
                    show.find("select").on("change", function () {
                        var selValue = $(this).val();
                        if (typeof selValue == "string") {
                            $(this).attr("selValue", selValue);
                            var selCount = show.find("select[selValue=" + selValue + "]").length;
                            if (selCount > 1) {
                                $(this).val('');
                                swal("", TxtContent.paramErr, "warning");
                            }
                        }
                    });
                }
                reader.abort();
            };
        })($("#" + bindBox));
        //将文件以二进制形式读入页面
        reader.readAsText(file);
    };

    //选择不同的文件
    $("#member_file").on("change", function () {
        var fileId = $(this).attr("id");
        readImportFile(fileId, "member_binding");
    });

    //表单提交
    var submitForm = function (objId, model, filetype) {
        $("#" + objId).bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                memberFile: {
                    validators: {
                        notEmpty: {
                            message: TxtContent.memberFileIsNull
                        }
                    }
                },
                tradeFile: {
                    validators: {
                        notEmpty: {
                            message:TxtContent.orderFileIsNull
                        }
                    }
                }
            }
        }).on('success.form.bv', function (e) {
            var fd = new FormData(document.getElementById(objId));
            //添加数据
            var selectNum = $("select.numberKey");
            var numberKey = selectNum.val();
            if (numberKey) {
                var stringVal = numberKey.join(",");
                fd.append(selectNum.data("name"), stringVal);
            }
            fd.append("fixGroupKey", localStorage["fixGroupKey"]);
            if (filetype == "memberFile") {
                //上传会员文件接口
                PLAT.importMembers(fd, function () {
                    swal(
                        {
                            title: TxtContent.uploadSuc,
                            text: TxtContent.checkList,
                            type: "success",
                            showCancelButton: true,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: TxtContent.check,
                            cancelButtonText: TxtContent.close
                        }, function () {
                            var url = $(".showLi").first().find("li").eq(2).find("a").attr("href");
                            XREWIN.openNewWindow(url);
                        }
                    );
                });
            }
            //关闭弹框
            model.modal("hide");
        });
    };

    var memberModel = $("#memberModal");
    var memberFormId = $('#member_form').attr("id");
    //提交会员表单
    submitForm(memberFormId, memberModel, "memberFile");

    //重置表单
    memberModel.on('hide.bs.modal', function () {
        $('#member_form').bootstrapValidator('resetForm', true);
        $("#member_binding").empty();
    });
});