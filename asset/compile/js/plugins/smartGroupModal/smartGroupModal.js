/**
 * Created by HZL on 2016/1/26.
 */
(function ($, window, document, undefined) {
    var arrayFirst = {
        id: "parentId", iClass: 'fa-users', isReadOnly: true, index: 0
    }, arrayLast = {
        id: "vertical-timeline-last", iClass: 'fa-user', isReadOnly: true, selectAble: false
    }, table;
    //定义SGModal的构造函数
    var SGModal = function (setting) {
        var that = this;
        //默认值
        that.defaults = {
            modalId: "smartGroupModal",
            modalTitle: TxtContent.smartGroup,
            modalWrapId: "smartGroupModalWrap",
            tableId: "sgTable",
            modalSaveId: "smartGroupModalSaveId",
            modalOkId: "smartGroupModalOkId",
            modalCancelId: "smartGroupModalCancelId",
            modalSave: TxtContent.save,
            modalOk: TxtContent.confirm,
            modalCancel: TxtContent.cancel,
            scene: "modal",
            extendData: {
                selectAble: true,
                selected: false,
                parentId: ''
            },
            func: function (fd, rowData) {
                fd.append('parentId', that.getParentId());
                XREWIN.loadingType = "toast";
                SMARTGROUP.addSmartGroupNode(fd, function () {
                    XREWIN.loadingType = "";
                    var that = this.data.split(",");
                    if (that.code == "1" || 1) {
                        rowData.count = that[1];
                        rowData.id = that[0];
                        table.row.add(rowData).draw();
                    }
                    else {
                        swal("", that.message, "error")
                    }
                    new SGModal().smartGroupModalSave(setting.groupKey);
                });
            }
        };

        //扩展默认值
        that.options = $.extend({}, that.defaults, setting);

        return that.init();
    };

    //定义SGModal方法
    SGModal.prototype = {

        //初始化
        init: function () {
            var that = this;
            //判断页面中是否有创建好的modal
            var curModal = $("body").find("#" + that.options.modalId);
            if (that.options.$obj) {
                var curFlat = that.options.$obj.find("#" + that.options.modalWrapId + that.options.groupKey);
                if (curFlat.length == 0 && that.options.showForm && that.options.showForm == "flat") {
                    that.buildFlat();
                    //that.tabClosePop();
                    that.loadSmartGroupModal();
                }
                return that;
            }

            if (curModal.length == 0) {
                that.buildModal();
                that.tabClosePop();
            }


            return that;
        },

        //组建flat
        buildFlat: function () {
            var that = this;
            var body = that.options.$obj.append(that.modalBody());
            var box = body.find("#" + that.options.modalWrapId + that.options.groupKey);
            box.smartGroupFilter({
                scene: that.options.scene,
                func: that.options.func,
                groupKey: that.options.groupKey
            });
            box.append(that.createDataTable());
            that.addTableData();
        },

        //切换时关闭弹框
        tabClosePop: function () {
            //组建modal
            var preIndex;
            $('.sg-tabs-container .nav li').on("click", function () {
                var curIndex = $(this).index();
                if (preIndex && preIndex != curIndex) {
                    $('body').smartGroupFilter().closePopFun();
                }
                preIndex = curIndex;
            });
        },

        //加载SmartGroupModal
        loadSmartGroupModal: function () {
            var that = this;
            SMARTGROUP.getSmartGroup({"data": that.options.groupKey}, function () {
                var content = JSON.parse(this.data.content);
                var childLen, array = [];
                if (content) {
                    arrayFirst = content.shift();
                    arrayLast = content.pop();
                    for (var i = 0; i < content.length; i++) {
                        var child = content[i].childrenItem;
                        if (child && child.length > 0) {
                            childLen = child.length - 1;
                            for (var j = 0; j < child.length; j++) {
                                child[j].count = j == 0 ? content[i].count : child[j].count;
                                child[j].index = content[i].index + j;
                                array.push(child[j]);
                            }
                            i++;
                        }
                        content[i].index = childLen ? (content[i].index + childLen) : content[i].index;
                        array.push(content[i]);
                    }
                }
                if (table) {
                    table.rows.add(array).draw();
                }

            });
        },

        //显示sgModal
        show: function () {
            var that = this;
            $("#" + that.options.modalId).modal("show");
            that.loadSmartGroupModal();
        },

        //隐藏sgModal
        hide: function () {
            var that = this;
            $("#" + that.options.modalId).modal("hide");
            //清楚数据
            table.clear().draw();
        },

        //组建sgModal
        buildModal: function () {
            var that = this;
            //创建modal框架
            var $modalBox = $(that.modalWrap());
            var modalBox = $modalBox.find(".modal-content");
            modalBox.append(that.modalHeader());
            modalBox.append(that.modalBody());
            modalBox.append(that.modalBtn());
            var body = $("body").append($modalBox);
            var box = body.find("#" + that.options.modalWrapId + that.options.groupKey);
            box.empty();
            box.smartGroupFilter({
                scene: that.options.scene,
                func: that.options.func,
                groupKey: that.options.groupKey
            });
            box.append(that.createDataTable());
            that.addTableData();
            //绑定modalOk
            body.find('#' + that.options.modalOkId).on("click", function () {
                that.smartGroupModalOk();
            });
            //绑定modalCancel
            body.find('#' + that.options.modalCancelId).on("click", function () {
                that.hide();
                if (that.options.btnCancelModalHide) {
                    that.options.btnCancelModalHide.modal('show');
                }
            });
        },

        //创建sgModal框架方法
        modalWrap: function () {
            var that = this;
            return '<div class="modal" id="' + that.options.modalId + '" role="dialog" aria-hidden="true">' +
                '<div class="modal-dialog"><div class="modal-content sg-content"></div></div></div>';
        },

        //创建sgModalHeader方法
        modalHeader: function () {
            var that = this;
            return '<div class="modal-header"><button type="button" class="close" data-dismiss="modal">' +
                '<span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                '<h4 class="modal-title">' + that.options.modalTitle + '</h4></div>';
        },

        //创建sgModalBody
        modalBody: function () {
            var that = this;
            return '<div class="modal-body sg-modal-body"><div class="clearfix" id="' + that.options.modalWrapId + that.options.groupKey + '"></div></div>';
        },

        //创建sgModalBtn
        modalBtn: function () {
            var that = this;
            return '<div class="modal-footer">' +
                '<button id="' + that.options.modalOkId + '" class="btn btn-info">' + that.options.modalOk + '</button>' +
                '<button id="' + that.options.modalCancelId + '" class="btn btn-default" data-dismiss="modal">' + that.options.modalCancel +
                '</button></div>';
        },

        //创建dataTable
        createDataTable: function () {
            var that = this;
            return '<table class="table row-bordered table-hover" id="' + that.options.tableId + that.options.groupKey + '"></table>';
        },

        //modalSave
        smartGroupModalSave: function (groupKey) {
            var that = this;
            var tableData = table.data();
            var regroupData = [arrayFirst];
            if (tableData) {
                var dataLen = tableData.length;
                arrayLast.index = dataLen + 1;
                for (var i = 0; i < dataLen; i++) {
                    var curData = $.extend(tableData[i], that.options.extendData, {'index': i + 1});
                    regroupData.push(curData);
                }
                regroupData.push(arrayLast);
            }
            SMARTGROUP.updateSmartGroup({
                "content": JSON.stringify(regroupData),
                "key": groupKey
            });
        },

        //点击modalOk
        smartGroupModalOk: function () {
            var that = this;
            if (typeof that.options.modalOkFunc == 'function') {
                that.options.modalOkFunc();
            }
            that.smartGroupModalSave(that.options.groupKey);
            that.hide();
        },

        //添加tableData
        addTableData: function () {
            var sgThat = this;
            table = $('#' + sgThat.options.tableId + sgThat.options.groupKey).DataTable({
                "stateSave": true,
                "aLengthMenu": [5, 10],
                "iDeferLoading": 5,
                'searching': false,
                'ordering': false,
                "tableTools": {
                    "sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf"
                },
                language: {
                    url: '/localisation/dataTables/zh-cn.json'
                },
                columns: [
                    {
                        "title": "类型",
                        "data": "iClass",
                        "render": function (data, type, row, meta) {
                            return '<i class="fa ' + data + '"></i>';
                        }
                    },
                    {
                        "title": "条件",
                        "data": "text"
                    },
                    {
                        "title": "数量",
                        "data": "count"
                    },
                    {
                        "title": "操作",
                        "data": "id",
                        "render": function (data, type, row, meta) {
                            return '<button class="btn btn-white btn-xs" name="btnDelOp" data-id="' + data +
                                '" title="删除" ><i class="fa fa-trash"></i></button>';
                        }
                    }
                ]
            });

            table.on('draw.dt', function (e, settings, json, xhr) {
                //删除
                $(this).find("button[name=btnDelOp]").off().on('click', function () {
                    var that = $(this);
                    swal(
                        {
                            title: TxtContent.isDel,
                            type: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: TxtContent.confirm,
                            cancelButtonText: TxtContent.cancel
                        }, function () {
                            SMARTGROUP.delSmartGroupNode({"data": that.data("id")}, function () {
                                table.row(that.parents('tr')).remove().draw();
                                new SGModal().smartGroupModalSave(sgThat.options.groupKey);
                            });
                        }
                    );
                });
            });
        },

        //获取父节点id
        getParentId: function () {
            var parentId = '';
            var tData = table.data();
            var tDataLen = tData.length;
            if (tData && tDataLen > 0) {
                parentId = tData[tDataLen - 1]["id"];
            } else {
                parentId = "parentId"
            }
            return parentId;
        }
    };

    /**
     * 智能分组外部接口
     */
    $.fn.smartGroupModal = function (options) {
        var plugin = this;

        //创建Modal实体对象
        var modal = new SGModal(options);
        //弹出modal
        plugin.on("click", function () {
            //显示弹框
            modal.show();
        });

        return plugin;
    };

    if (!window.SGTableModal) {
        window.SGTableModal = SGModal;
    }

})(jQuery, window, document);
