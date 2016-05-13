/**
 * Created by zw on 2015/12/23.
 */

var fnClickImport = function () {
    var type = $("body").data("platform-type");
    if ("customers" != type) {
        $("#myModal").modal("show");
    }
    else {
        $("#myCustomerModal").modal("show");
    }
};

$(function () {
    var columns = [];
    var importColumns = [];
    var hTitle = "";
    var type = $("body").data("platform-type");
    switch (type) {
        case 'brands':
            columns = [
                {
                    "title": "品牌序号",
                    "data": "key"
                },
                {
                    "title": "品牌名称",
                    "data": "name"
                },
                {
                    "title": "品牌描述",
                    "data": "desc"
                },
                {
                    "title": "品牌编号",
                    "data": "code"
                },
                {
                    "title": "负责人",
                    "data": "officer"
                },
                {
                    "title": "负责人邮箱",
                    "data": "officerEmail"
                },
                {
                    "title": "负责人手机",
                    "data": "officerMobile"
                },
                {
                    "title": "操作",
                    "data": "key",
                    "render": function (data, type, row, meta) {
                        var render = '<button class="btn btn-white btn-xs" name="btnShowOp" data-data-id="' + data +
                            '" title="查看品牌" >查看' + '</button>';
                        render += '<button class="btn btn-white btn-xs" name="btnDelOp" data-data-id="' + data +
                            '" data-data-name="' + row['name'] + '" title="删除品牌" >删除' + '</button>';
                        return render;
                    }
                }
            ];
            importColumns = [
                {
                    "title": "",
                    "data": "key",
                    "render": function (data, type, row, meta) {
                        return '<input name="btnSelOp" type="checkbox" data-data-row="' + meta.row + '">';
                    }
                },
                {
                    "title": "序号",
                    "data": "key"
                },
                {
                    "title": "公司",
                    "data": "companyName"
                },
                {
                    "title": "名称",
                    "data": "name"
                },
                {
                    "title": "描述",
                    "data": "desc"
                },
                {
                    "title": "编号",
                    "data": "code"
                },
                {
                    "title": "负责人",
                    "data": "officer"
                },
                {
                    "title": "负责人邮箱",
                    "data": "officerEmail"
                },
                {
                    "title": "负责人手机",
                    "data": "officerMobile"
                }
            ];
            hTitle = "品牌列表";
            break;
        case 'users':
            columns = [
                {
                    "title": "用户编号",
                    "data": "key"
                },
                {
                    "title": "用户名",
                    "data": "userName"
                },
                {
                    "title": "操作",
                    "data": "key",
                    "render": function (data, type, row, meta) {
                        var render = '<button class="btn btn-white btn-xs" name="btnShowOp" data-data-id="' + data +
                            '" title="查看用户" >查看' + '</button>';
                        render += '<button class="btn btn-white btn-xs" name="btnDelOp" data-data-id="' + data +
                            '" data-data-name="' + row['userName'] + '" title="删除用户" >删除' + '</button>';
                        return render;
                    }
                }
            ];
            importColumns = [
                {
                    "title": "",
                    "data": "key",
                    "render": function (data, type, row, meta) {
                        return '<input name="btnSelOp" type="checkbox" data-data-row="' + meta.row + '">';
                    }
                },
                {
                    "title": "用户编号",
                    "data": "key"
                },
                {
                    "title": "用户名",
                    "data": "userName"
                },
                {
                    "title": "公司名称",
                    "data": "companyName"
                }
            ];
            hTitle = "用户列表";
            break;
        case 'companies':
            columns = [
                {
                    "title": "公司序号",
                    "data": "key"
                },
                {
                    "title": "公司名称",
                    "data": "name"
                },
                {
                    "title": "公司描述",
                    "data": "desc"
                },
                {
                    "title": "公司编号",
                    "data": "code"
                },
                {
                    "title": "操作",
                    "data": "key",
                    "render": function (data, type, row, meta) {
                        var render = '<button class="btn btn-white btn-xs" name="btnShowOp" data-data-id="' + data +
                            '" title="查看公司" >查看' + '</button>';
                        render += '<button class="btn btn-white btn-xs" name="btnDelOp" data-data-id="' + data +
                            '" data-data-name="' + row['name'] + '" title="删除公司" >删除' + '</button>';
                        return render;
                    }
                }
            ];
            importColumns = [
                {
                    "title": "",
                    "data": "key",
                    "render": function (data, type, row, meta) {
                        return '<input name="btnSelOp" type="checkbox" data-data-row="' + meta.row + '">';
                    }
                },
                {
                    "title": "公司名称",
                    "data": "name"
                },
                {
                    "title": "公司描述",
                    "data": "desc"
                },
                {
                    "title": "公司编号",
                    "data": "code"
                }
            ];
            hTitle = "公司列表";
            break;
        case 'customers':
            columns = [
                {
                    "title": "帐户编号",
                    "data": "key"
                },
                {
                    "title": "帐户名",
                    "data": "customerName"
                },
                {
                    "title": "帐户描述",
                    "data": "customerDesc"
                },
                {
                    "title": "操作",
                    "data": "key",
                    "render": function (data, type, row, meta) {
                        var render = '<button class="btn btn-white btn-xs" name="btnShowOp" data-data-id="' + data +
                            '" title="查看帐户" >查看' + '</button>';
                        render += '<button class="btn btn-white btn-xs" name="btnDelOp" data-data-id="' + data +
                            '" data-data-name="' + row['customerName'] + '" title="删除帐户" >删除' + '</button>';
                        return render;
                    }
                }
            ];

            hTitle = "帐户列表";
            break;
    }
    $("#table-title").text(hTitle);
    var url = XREWIN.getPlatformDataUrl(type);
    var table = $('#list_table').DataTable({
        "scrollX": true,
        "stateSave": true,
        "tableTools": {
            "sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf"
        },
        language: {
            url: '/localisation/dataTables/zh-cn.json'
        },
        "ajax": {"url": url, "dataSrc": ""},
        "columns": columns
    });

    table.on('draw.dt', function (e, settings, json, xhr) {
        $(this).find("button[name=btnDelOp]").click(function () {
            var that = $(this);
            var id = that.data("data-id");
            var name = that.data("data-name");
            swal(
                {
                    title: "确定删除？",
                    text: "【" + name + "】删除后将不能被还原！",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function (isConfirm) {
                    if (isConfirm) {
                        $.ajax({
                            url: XREWIN.getPlatformDeleteUrl(type),
                            type: "POST",
                            data: {key: id},
                            success: function (data) {
                                if (data == '1') {
                                    table.ajax.reload();
                                    swal("删除成功！", "【" + name + "】已删除", "success");
                                }
                                else {
                                    swal("删除失败！", "", "error");
                                }
                            },
                            error: function () {
                                swal("错误提示", "删除数据失败，请联系管理员！", "error");
                            }
                        });
                    } else {
                        swal("取消成功！", "【" + name + "】已取消删除", "success");
                    }
                }
            );
        });
    });

    var addPlatformData = function (type, dataList) {
        swal({
            title: "确定导入？",
            text: "导入的内容将保存在本系统中",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                $.ajax({
                    url: XREWIN.getPlatformImportUrl(type),
                    type: "POST",
                    data: {data: JSON.stringify(dataList)},
                    success: function (data) {
                        if (data == '1') {
                            swal("保存成功！", "", "success");
                            table.ajax.reload();
                        }
                        else {
                            swal("保存失败！", "", "error");
                        }
                    },
                    error: function () {
                        swal("错误提示", "保存数据失败，请联系管理员！", "error");
                    }
                });
            } else {
                swal("取消成功！", "", "success");
            }
        });
    };

    var importTable = null;
    $("#myModal").on("shown.bs.modal", function () {
        var $model = $(this);
        var importUrl = XREWIN.getSystemDataUrl(type);
        if (importTable == null) {
            importTable = $('#import_table').DataTable({
                "scrollX": true,
                "stateSave": true,
                "tableTools": {
                    "sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf"
                },
                language: {
                    url: '/localisation/dataTables/zh-cn.json'
                },
                "order": [[1, 'asc']],
                "ajax": {"url": importUrl, "type": "GET", "dataSrc": ""},
                "columns": importColumns
            });

            var selectedData = [];

            importTable.on('draw.dt', function () {
                $(this).find("input[name=btnSelOp]").change(function () {
                    var row = $(this).data("data-row");
                    if ($(this).prop("checked") === true) {
                        selectedData[row] = importTable.data()[row];
                    }
                    else {
                        selectedData[row] = null;
                    }
                });
            });

            $("#btnImportPlatform").unbind("click").click(function () {
                var dataList = [];
                for (var i = 0; i < selectedData.length; i++) {
                    if (selectedData[i]) {
                        dataList.push(selectedData[i]);
                    }
                }
                addPlatformData(type, dataList);
                $model.modal('hide');
            });
        }
    });

    $("#myCustomerModal").on("shown.bs.modal", function () {
        var $model = $(this);
        $("#btnAddCustomer").unbind("click").click(function () {
            var customerName = $model.find("#txtCustomerName").val();
            var customerPassword = $model.find("#pwdCustomerPassword").val();
            var customerDesc = $model.find("#txtCustomerDesc").val();
            var url = XREWIN.getCustomerDataUrl();
            $.ajax({
                url: url,
                type: "POST",
                data: {
                    "name": customerName,
                    "password": customerPassword
                },
                success: function (data) {
                    if (data && data.error) {
                        swal("错误提示", data.error, "error");
                    }
                    else {
                        addPlatformData(type, [{
                            key: data.customer_id,
                            company_key: data.company_id,
                            customerName: customerName,
                            customerDesc: customerDesc,
                            customer_pwd: customerPassword,
                            customer_balance: data.customer_balance
                        }]);
                        $model.modal('hide');
                    }
                },
                error: function () {
                    swal("错误提示", "从服务器取得数据失败，请联系管理员！", "error");
                }
            });
        });
    });
});