/**
 * Created by HZL
 */

$(function () {

    //modal里的select2
    $(".modal-select2").select2({
        placeholder: TxtContent.sel
    }).on("change", function () {
        $(this).find("option:selected").attr("selected", "selected");
    });

    //会员列表没有工具栏
    if (XREWIN.getUrlParam("sgTool")) {
        $(".ibox-tools").hide();
    }

    //表单提交
    var submitForm = function (objId, model, filetype) {
        $("#" + objId).bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            }
        }).on('success.form.bv', function (e) {

            var fd = new FormData(document.getElementById(objId));

            if (filetype == "addMember") {
                //上传会员文件接口
                SMARTGROUP.addMember(fd, function () {
                    swal(TxtContent.addMemberSuc, "", "success");
                    table.ajax.reload();
                    //关闭弹框
                    model.modal("hide");
                });
            } else if (filetype == "joinFixGroup") {
                //上传会员文件接口
                fd.append("oldJoinFixGroupKey", XREWIN.getUrlParam("key"));
                SMARTGROUP.joinFixGroup(fd, function () {
                    swal(TxtContent.addGroupSuc, "", "success");
                    //刷新列表
                    table.ajax.reload();
                    //关闭弹框
                    model.modal("hide");
                });
            } else if (filetype == "changeFixGroup") {
                //上传会员文件接口
                fd.append("oldChangeFixGroupKey", XREWIN.getUrlParam("key"));
                SMARTGROUP.changeFixGroup(fd, function () {
                    swal(TxtContent.fixGroupSuc, "", "success");
                    //刷新列表
                    table.ajax.reload();
                    //关闭弹框
                    model.modal("hide");
                });
            }
        });
    };


    //增加会员
    var addMemberModal = $("#addMemberModal");
    var addMemberForm = $('#member_form');
    var addMemberFormId = addMemberForm.attr("id");
    //显示弹窗
    $("a[name='addMember']").on("click", function () {
        addMemberModal.modal("show");
    });

    addMemberModal.on('shown.bs.modal', function () {
        addMemberForm.bootstrapValidator('resetForm', true);

        //执行加载会员分组
        SMARTGROUP.listFixGroup(function () {
            var fixGroupKey = $("#fixGroupListKey");
            if (!$.trim(fixGroupKey.html())) {
                //添加options
                XREWIN.addOptions(this.data, "key", "name", fixGroupKey);
                fixGroupKey[0].selectedIndex = -1;
            }
        });
    });

    submitForm(addMemberFormId, addMemberModal, "addMember");

    //加入分组
    var joinFixGroupModal = $("#joinFixGroupModal");
    var joinFixGroupForm = $('#join_fix_group_form');
    var ajoinFixGroupFormId = joinFixGroupForm.attr("id");
    joinFixGroupModal.on('shown.bs.modal', function () {
        joinFixGroupForm.bootstrapValidator('resetForm', true);
        //执行加载会员分组
        SMARTGROUP.listFixGroup(function () {
            var fixGroupKey = $("#newJoinFixGroupKey");
            //添加options
            if (!$.trim(fixGroupKey.html())) {
                XREWIN.addOptions(this.data, "key", "name", fixGroupKey);
                fixGroupKey[0].selectedIndex = -1;
            }
        });
    });

    submitForm(ajoinFixGroupFormId, joinFixGroupModal, "joinFixGroup");


    //变更分组
    var changeFixGroupModal = $("#changeFixGroupModal");
    var changeFixGroupForm = $('#change_fix_group_form');
    var changeFixGroupFormId = changeFixGroupForm.attr("id");
    changeFixGroupModal.on('shown.bs.modal', function () {
        changeFixGroupForm.bootstrapValidator('resetForm', true);

        //执行加载会员分组
        SMARTGROUP.listFixGroup(function () {
            var fixGroupKey = $("#newChangeFixGroupKey");
            //添加options
            if (!$.trim(fixGroupKey.html())) {
                XREWIN.addOptions(this.data, "key", "name", fixGroupKey);
                fixGroupKey[0].selectedIndex = -1;
            }
        });
    });

    submitForm(changeFixGroupFormId, changeFixGroupModal, "changeFixGroup");

    // endregion

    //会员列表操作
    $('#fixGroupKey').val(XREWIN.getUrlParam("key"));
    var table = SMARTGROUP.getListTableGroupMember('list_table'), toolbox;
    table.on('draw.dt', function () {
        //列表查询
        toolBox = $('#toolbox');
        if (!toolBox.html()) {
            toolBox.empty().append('<form role="form" class="form-inline" id="form_search_tool"' +
                'onkeydown="if(event.keyCode==13){return false;}">' + $("#form_search")[0].innerHTML + '</form>');
        }
        var that = $(this);

        //查看
        that.find("button[name=btnShowOp]").each(function () {
            var that = $(this);
            var id = that.data("data-id");
        });

        //查询数据
        $("#checkData", toolBox).click(function () {
            table.ajax.reload();
        });
    });

    //选中列表
    if (!XREWIN.getUrlParam("sgTool")) {
        $('#list_table tbody').on('click', 'tr', function () {
            $(this).toggleClass('selected');
        });
    }

    //获取选中行
    var selectTr = function () {
        var selTr = table.rows('.selected').data();
        var lengthTr = selTr.length;
        if (lengthTr > 0) {
            var keyArray = [];
            for (var i = 0; i < lengthTr; i++) {
                keyArray.push(selTr[i].key);
            }
            return keyArray.join();
        } else {
            return false;
        }
    };

    var title = $('.ibox-title');
    //加入分组
    $("a[name=btnJoinOp]", title).on("click", function () {
        var id = selectTr();
        if (!id) {
            swal(TxtContent.sel, TxtContent.operand, 'warning');
            return false;
        }
        $('#joinFixGroupMemberKey').val(id);
        $("#joinFixGroupModal").modal("show");
    });

    //变更分组
    $("a[name=changeOp]", title).on("click", function () {
        var id = selectTr();
        if (!id) {
            swal(TxtContent.sel, TxtContent.operand, 'warning');
            return false;
        }
        $('#changeFixGroupMemberKey').val(id);
        $("#changeFixGroupModal").modal("show");
    });

    //移除分组
    $("a[name=removeOp]", title).on("click", function () {
        var id = selectTr();
        if (!id) {
            swal(TxtContent.sel, TxtContent.operand, 'warning');
            return false;
        }
        var fixGroupKey = XREWIN.getUrlParam("key");
        swal(
            {
                title: TxtContent.isDel,
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: TxtContent.confirm,
                cancelButtonText: TxtContent.cancel,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    SMARTGROUP.removeFixGroup({"memberKey": id, "fixGroupKey": fixGroupKey}, function () {
                        table.ajax.reload();
                    });
                } else {
                    swal(TxtContent.cancelSuc,"", "error");
                }
            }
        );
    });
});