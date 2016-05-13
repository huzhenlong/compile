/**
 * Created by zw on 2015/10/10.
 */
(function ($, window, document, undefined) {
    $.fn.smartGroup = function (setting) {
        var plugin = this;
        //region 配置
        //默认值
        var defaults = {
            id: plugin.attr("id"),
            ulClass: "timeline",
            blockClass: "vertical-timeline-block",
            badgeClass: "vertical-timeline-icon navy-bg",
            badgeSel: 'blue-bg',
            iClass: "fa ",
            box: "vertical-timeline-content",
            parentBox: "vertical-timeline-content-parent",
            childBox: "vertical-timeline-content-child",
            boxSpan: "vertical-date"
        };

        //扩展设置
        var options = $.extend({own: {}}, defaults, setting);
        options.firstObj = {id: "parentId", iClass: 'fa-users', isReadOnly: true, index: 0};
        options.lastObj = {id: options.id + "-last", iClass: 'fa-user', isReadOnly: true, selectAble: false};
        plugin.options = options;
        //endregion

        //region 一般方法

        //获取时间轴数据列表
        var getBlockList = function () {
            if (plugin.options.own) {
                return JSON.stringify(plugin.options.own.list);
            }
            return null;
        };

        //加载时间轴
        var addTimeLineData = function (obj) {
            var list = JSON.parse(obj.content);
            if (list != null && list.length > 0) {
                var selData = null;
                for (var i = 0; i < list.length; i++) {
                    var parentObj = list[i];
                    var parentNode = null;
                    //判断添加节点的位置
                    if (parentObj.index == 0) {
                        parentNode = $(createBlock(parentObj)).appendTo(plugin);
                    } else {
                        parentNode = $(createBlock(parentObj)).insertAfter($("#" + list[i - 1].id));
                    }

                    if (parentObj.id.indexOf('_copyItem') != -1) {
                        parentObj.id = parentObj.id.split("_copyItem").join('');
                    }
                    //把数据存入字典
                    plugin.options.own.dic[parentObj.id] = parentObj;
                    var parentLi = $("#" + parentObj.id);
                    if (parentObj.selected) {
                        selData = parentObj;
                    }
                    var badge = getBadge(parentNode);
                    //绑定点击事件
                    badge.bind('click', function () {
                        selectBlockBadge($(this), dicData(this));
                    });

                    //解决多次点击整行变蓝
                    badge.bind("selectstart", function () {
                        return false;
                    });

                    var nodeBody = parentLi.find("." + plugin.options.box);
                    if (parentObj.childrenItem) {
                        parentObj.text = "";
                        var ulNode = $(getTimeLine()).appendTo(nodeBody);
                        for (var j = 0; j < parentObj.childrenItem.length; j++) {
                            var childObj = parentObj.childrenItem[j];
                            if (j == 0) {
                                childObj.count = parentObj.count;
                            }
                            plugin.options.own.dic[childObj.id] = childObj;
                            var sNode = $(createBlock(childObj)).appendTo(ulNode);
                            var sBadge = getBadge(sNode);
                            if (childObj.selected) {
                                selData = childObj;
                            }
                            sBadge.bind('click', function () {
                                selectBlockBadge($(this), dicData(this));
                            });
                        }
                    }
                    if (!parentObj.isReadOnly) {
                        badge.bind('dblclick', function (e) {
                            bindDblclick(this);
                            e.stopPropagation();
                        });
                    }
                }
                if (selData) {
                    selectBlockBadge(getBadge($("#" + selData.id)), selData);
                }
                plugin.options.own.list = list;
            } else {
                plugin.addBlock(options.firstObj);
                plugin.addBlock(options.lastObj);
            }

            //获取count为-1的id
            //plugin.getCount();

            //含有子节点的父节点count为空
            if (list) {
                for (var i = 1; i < list.length - 1; i++) {
                    var childArray = list[i].childrenItem;
                    if (childArray != null && childArray.length > 0) {
                        $("#" + list[i].id).find(".vertical-timeline-content-parent").children(".spanCount").remove();
                    }
                }
            }
        };

        //判断父节点含有子节点
        var hasChildren = function (node) {
            return node != null && $.isArray(node.childrenItem) && node.childrenItem.length > 0;
        };

        //判断第一个子节点
        var isFirstChild = function (node) {
            return node != null && node.id && node.id.indexOf("_copyItem") != -1;
        };

        //获取节点id
        var getNodeId = function (node) {
            if (node.id.indexOf("_copyItem") != -1) {
                return node.id.split("_copyItem").join('');
            } else {
                return node.id;
            }
        };

        //刷新count
        plugin.refreshCount = function () {
            var listArray = plugin.options.own.list;
            //重置count为-1
            for (var i = 1; i < listArray.length - 1; i++) {
                var childArray = listArray[i].childrenItem;
                if (childArray != null && childArray.length > 0) {
                    for (var j = 0; j < childArray.length; j++) {
                        childArray[j].count = -1;
                        addCountLoading(childArray[j]);
                    }
                } else {
                    listArray[i].count = -1;
                    addCountLoading(listArray[i]);
                }
            }

            //获取节点的count为-1的id
            plugin.getCount();

        };

        //获取节点的count为-1的id
        plugin.getCount = function () {

            var listArray = plugin.options.own.list;
            var countKey = [];

            //获取count为-1的id
            for (var i = 1; i < listArray.length - 1; i++) {
                var childArray = listArray[i].childrenItem;
                if (childArray != null && childArray.length > 0) {
                    for (var j = 0; j < childArray.length; j++) {
                        if (childArray[j].count == -1) {
                            countKey.push(getNodeId(childArray[j]));
                        }
                    }
                } else if (listArray[i].count == -1) {
                    countKey.push(getNodeId(listArray[i]));
                }
            }

            if (countKey.length > 0) {
                SMARTGROUP.reCount({"data": countKey.join(',')}, function () {
                    var minus = 0;
                    var countArray = this.data;
                    for (var i = 0; i < countArray.length; i++) {
                        if (plugin.options.own.dic[countArray[i].key]) {
                            plugin.options.own.dic[countArray[i].key].count = countArray[i].count;
                        } else {
                            plugin.options.own.dic[countArray[i].key + '_copyItem'].count = countArray[i].count;
                        }

                        if (countArray[i].count < 0) {
                            minus++;
                        } else {
                            if (!plugin.options.own.dic[countArray[i].key].childrenItem) {
                                $("#" + countArray[i].key).find(".vertical-date").css("margin-top", "15px").text(countArray[i].count);
                            } else if ($("#" + countArray[i].key + "_copyItem").length > 0) {
                                $("#" + countArray[i].key + "_copyItem").find(".vertical-date").css("margin-top", "15px").text(countArray[i].count);
                            }
                        }
                    }
                    //调用保存数据
                    plugin.updateSmartgroupData();
                    if (minus > 0) {
                        setTimeout(plugin.getCount, 10000);
                        return false;
                    }
                });
            } else {
                //调用保存数据
                plugin.updateSmartgroupData();
            }
        };

        //初始化
        var init = function () {
            //清空内容
            plugin.empty();
            plugin.options.own = {
                index: 0,
                dic: {},
                list: []
            };
            plugin.hasClass("dark-timeline") && plugin.addClass("vertical-container dark-timeline center-orientation");
            //加载时间轴
            SMARTGROUP.getSmartGroup({"data": XREWIN.getUrlParam("key")}, function () {
                var that = this.data;
                if (that.status == smartGroupStatus["expire"]) {
                    SMARTGROUP.refreshSG({"groupKey": that.key}, function () {
                        plugin.refreshCount();
                    });
                }
                addTimeLineData(that);
            });
        };

        //克隆数据
        var clone = function (obj) {
            var o;
            if (typeof obj == "object") {
                if (obj === null) {
                    o = null;
                } else {
                    if (obj instanceof Array) {
                        o = [];
                        for (var i = 0, len = obj.length; i < len; i++) {
                            o.push(clone(obj[i]));
                        }
                    } else {
                        o = {};
                        for (var j in obj) {
                            if (obj.hasOwnProperty(j)) {
                                o[j] = clone(obj[j]);
                            }
                        }
                    }
                }
            } else {
                o = obj;
            }
            return o;
        };

        //获取选中的节点
        var getSelectedBlock = function () {
            return plugin.options.own.selBlock;
        };

        //获取选中节点数据
        var getSelectedData = function () {
            return plugin.options.own.selData;
        };

        //获取当前选中节点的id
        var getSelectedId = function () {
            var obj = plugin.options.own.selData;
            var id = "";
            if (obj && obj.id) {
                id = obj.id.replace("_copyItem", "");
            }
            return id;
        };

        //获取父节点的id
        var getFatherId = function () {
            var obj = plugin.options.own.selData;
            var id = "";
            if (obj && obj.id) {
                if (obj.childrenItem) {
                    var length = obj.childrenItem.length;
                    id = obj.childrenItem[length - 1].id
                } else {
                    id = obj.id.replace("_copyItem", "");
                }
            }
            return id;
        };

        //获取节点Id
        var getId = function (badge) {
            var block = $(badge).parent();
            return block.attr("id");
        };

        //通过id查字典数据
        var checkDic = function (id) {
            return options.own.dic[id];
        };

        //通过选中节点查字典数据
        var dicData = function (badge) {
            return options.own.dic[getId(badge)];
        };

        //创建时间轴框架
        var getTimeLine = function () {
            var div = document.createElement("div");
            div.className = "vertical-timeline-sm vertical-container light-timeline center-orientation";
            return div;
        };

        //创建countLoading
        var countLoading = function () {
            return '<div class="ibox ">' +
                '<div class="ibox-content" style="border: 0;padding: 0;">' +
                '<div class="spiner-example" style="padding-top: 0;height: auto;">' +
                '<div class="sk-spinner sk-spinner-fading-circle curLoading" ' +
                'style="width: 32px;height: 32px;position: inherit;">' +
                '<div class="sk-circle1 sk-circle"></div>' +
                '<div class="sk-circle2 sk-circle"></div>' +
                '<div class="sk-circle3 sk-circle"></div>' +
                '<div class="sk-circle4 sk-circle"></div>' +
                '<div class="sk-circle5 sk-circle"></div>' +
                '<div class="sk-circle6 sk-circle"></div>' +
                '<div class="sk-circle7 sk-circle"></div>' +
                '<div class="sk-circle8 sk-circle"></div>' +
                '<div class="sk-circle9 sk-circle"></div>' +
                '<div class="sk-circle10 sk-circle"></div>' +
                '<div class="sk-circle11 sk-circle"></div>' +
                '<div class="sk-circle12 sk-circle"></div>' +
                '</div></div></div></div>';
        };

        //创建节点模块
        var createBlock = function (obj) {
            var div = document.createElement('div');
            if (typeof obj.id != 'undefined') {
                div.id = obj.id;
            }
            if (typeof obj.selectAble == 'undefined') {
                obj.selectAble = true;
            }
            div.className = plugin.options.blockClass;

            // divBadge
            var divBadge = document.createElement('div');
            divBadge.className = plugin.options.badgeClass + " " + obj.badgeClass;
            divBadge.id = obj.id;
            var iIcon = document.createElement('i');
            iIcon.className = plugin.options.iClass + obj.iClass;
            divBadge.appendChild(iIcon);
            div.appendChild(divBadge);

            if (typeof obj.text == 'undefined') {
                obj.text = "";
            }
            var divBody = document.createElement('div');
            divBody.className = plugin.options.box;
            if (obj.isReadOnly) {
                divBody.className = "vertical-timeline-content-display";
            }
            else {
                if (obj.childrenItem != null && obj.childrenItem.length > 0) {
                    divBody.className += " " + plugin.options.parentBox;
                }
                if (obj.parentId) {
                    divBody.className += " " + plugin.options.childBox;
                }
            }
            divBody.innerHTML = obj.text;
            var preTxt = document.createElement('span');
            preTxt.className = plugin.options.boxSpan + ' spanCount';
            //判断span里的显示状态
            if (typeof obj.count != 'undefined') {
                if (obj.count < 0 && typeof obj.count == 'number') {
                    preTxt.innerHTML = countLoading();
                } else {
                    preTxt.innerHTML = obj.count;
                    $(preTxt).css("marginTop", "15px");
                }
            }

            if (obj.count == "" && obj.count != 0) {
                preTxt.innerHTML = "";
            }

            divBody.appendChild(preTxt);
            div.appendChild(divBody);
            return div;
        };

        //刷新列表顺序
        var refreshItemIndex = function (list) {
            for (var i = 0; i < list.length; i++) {
                list[i].index = i;
            }
        };

        /**
         * 选中badge
         * @param badge
         * @param obj
         */
        var selectBlockBadge = function (badge, obj) {
            if (badge.hasClass(options.badgeSel) || !obj.selectAble) {
                return;
            }
            var optLi = getSelectedBlock();
            if (optLi) {
                var selBadge = getBadge(optLi);
                selBadge.removeClass(options.badgeSel);
                optLi.find("#xxx").remove();
            }
            var liObj = getSelectedData();
            if (liObj) {
                liObj.selected = false;
            }

            $(badge).addClass(options.badgeSel);
            if (obj) {
                obj.selected = true;
            }

            plugin.options.own.selBlock = $(badge).parent();
            $(badge).append('<span class="badge badge-warning pull-right" id="xxx">x</span>');

            //绑定xxx删除事件
            var delBtn = $("#xxx");
            delBtn.off().on("click", function () {
                plugin.removeSelectItem();
            });

            //如果选中为第一个节点则隐藏xxx
            if (obj.id == "parentId") {
                delBtn.remove();
            }
            plugin.options.own.selData = obj;
        };

        //绑定双击事件
        var bindDblclick = function (obj) {
            var dataObj = dicData(obj);
            var curParent = $("#" + dataObj.id);
            var curBody = curParent.find("." + options.box);
            if (dataObj.childrenItem == null) {
                curBody.empty();
                curBody.toggleClass(options.parentBox);
                var childNode = $(getTimeLine()).appendTo(curBody);
                var copyObj = clone(dataObj);
                copyObj.index = 0;
                copyObj.id = obj.id + "_copyItem";
                copyObj.parentId = dataObj.id;
                copyObj.selected = false;
                dataObj.childFirst = 'childFirst';
                dataObj.text = "";
                var childObj = createBlock(copyObj);
                var cNode = $(childObj).appendTo(childNode);
                var childBadge = getBadge(cNode);
                //为父元素添加childrenItem:[{数据}]
                dataObj.childrenItem = [copyObj];
                options.own.dic[copyObj.id] = copyObj;
                //更新子元素排序
                refreshItemIndex(dataObj.childrenItem);
                //选中新增的元素
                selectBlockBadge(childBadge, copyObj);
                //绑定单击事件并为点击元素添加选中样式
                childBadge.bind('click', function () {
                    selectBlockBadge($(this), dicData(this));
                });
            }
            return false;
        };

        //获取选中节点id
        var getBadgeId = function (block) {
            return block.attr("id");
        };

        //获取选中节点
        var getBadge = function (block) {
            return block.find("#" + getBadgeId(block));
        };
        //endregion

        //region 对外方法

        //获取选中节点数据
        plugin.getSelectedData = getSelectedData;
        plugin.getSelectedId = getSelectedId;
        plugin.getFatherId = getFatherId;

        //引入loading
        var addCountLoading = function (obj) {
            $("#" + obj.id).find(".vertical-date").html(countLoading());
        };

        //设置当前结点后count为-1
        var setNextAllCount = function (type, node, index) {
            switch (type) {

                //选中节点为子节点
                case "child":
                    var chid = node.childrenItem;
                    if (node.childrenItem.length > index) {
                        var curChid = chid[index].index;
                        for (var j = curChid; j < chid.length; j++) {
                            chid[j].count = -1;
                            addCountLoading(chid[j]);
                        }
                        var curList = options.own.list;
                        var curNode = node.index + 1;
                        for (var k = curNode; k < curList.length - 1; k++) {
                            var curChild = curList[k].childrenItem;
                            if (hasChildren(curList[k])) {
                                curList[k].count = -1;
                                for (var l = 0; l < curChild.length; l++) {
                                    addCountLoading(curChild[l]);
                                }
                            } else {
                                curList[k].count = -1;
                                addCountLoading(curList[k]);
                            }
                        }
                    }
                    break;

                //选中节点为父节点
                case "father":
                    var curList = options.own.list;
                    // parentId不刷新
                    if (index == 0) {
                        index = 1;
                    }
                    for (var k = index; k < curList.length - 1; k++) {
                        var curChild = curList[k].childrenItem;
                        if (hasChildren(curList[k])) {
                            curList[k].count = -1;
                            for (var l = 0; l < curChild.length; l++) {
                                curChild[l].count = -1;
                                addCountLoading(curChild[l]);
                            }
                        } else {
                            curList[k].count = -1;
                            addCountLoading(curList[k]);
                        }
                    }
                    break;
            }
        };

        //添加节点 obj为节点数据
        plugin.addBlock = function (obj) {

            //防止加入重复数据
            if (options.own.dic[obj.id] != null) {
                console.info(obj.id + "已存在");
                return;
            }
            var index = 0;
            var optLi = getSelectedBlock();
            var node = null;
            if (optLi && optLi.length > 0) {
                //获取选中节点数据
                var optLiData = getSelectedData();
                if (optLiData) {
                    index = optLiData.index;
                    //子元素中选中节点与添加节点在同一个节点下
                    obj.parentId = optLiData.parentId;
                }
                //在选中节点后面追加节点
                node = $(createBlock(obj)).insertAfter(optLi);
            }
            else {
                //如果没有选中节点就加在根目录下
                node = $(createBlock(obj)).appendTo(plugin);
            }

            var badge = getBadge(node);
            //绑定单击事件
            badge.bind('click', function () {
                selectBlockBadge($(this), dicData(this));
            });

            // 数据处理
            if (obj.parentId) {
                //如果当前节点为子节点为父节点添加childrenItem:[{数据},{数据}]
                var parentItem = checkDic(obj.parentId);
                if (!$.isArray(parentItem.childrenItem)) {
                    parentItem.childrenItem = [];
                }
                obj.index = index;
                parentItem.childrenItem.splice(index + 1, 0, obj);
                refreshItemIndex(parentItem.childrenItem);
                //此后结点count为-1
                setNextAllCount("child", parentItem, index);

            }
            else {
                //如果当前节点为父节点直接在选中节点后面添加元素{{数据},{数据}}
                obj.index = index;
                options.own.list.splice(index + 1, 0, obj);
                refreshItemIndex(options.own.list);
                if (!obj.isReadOnly) {
                    //绑定双击事件
                    badge.bind('dblclick', function (e) {
                        bindDblclick(this);
                        e.stopPropagation();
                    });
                    badge.bind("selectstart", function () {
                        return false;
                    });
                }
                //此后结点count为-1
                setNextAllCount("father", obj, index);
            }

            //把添加的数据存入字典
            options.own.dic[obj.id] = obj;
            //选中添加的元素
            selectBlockBadge(badge, obj);

            //获取count
            plugin.getCount();
        };

        //加节点接口
        plugin.addNode = function (obj, successFunc) {
            var start = (new Date()).getTime();
            SMARTGROUP.addSmartGroupNode(obj, function () {
                var that = this;
                if (that.code == 1) {
                    successFunc.call(that.data);
                    console.log("addNode.time=" + ((new Date()).getTime() - start));
                }
                else {
                    swal("", that.message, "error")
                }
            });
        };


        //删除单个节点
        var delNodeData = function (id) {
            var selectData = getSelectedData();
            //删除完元素下一个可能要选中的元素
            var maySelectObj = null;

            //选中子节点
            var parentId = checkDic(id).parentId;

            if (parentId) {
                //可能选中元素的索引号
                var maySelectIndex = 0;
                if (selectData.index > 0) {
                    maySelectIndex = selectData.index - 1;
                }
                var fatherNode = checkDic(parentId);
                fatherNode.childrenItem.splice(selectData.index, 1);
                refreshItemIndex(fatherNode.childrenItem);
                maySelectObj = fatherNode.childrenItem[maySelectIndex];
                //此后结点count为-1
                setNextAllCount("child", fatherNode, selectData.index);
            }
            //选中父节点
            else {
                var startIndex = 0;
                //选中第一个节点
                if (checkDic(id).childrenItem) {
                    startIndex = checkDic(id).index;
                    options.own.list.splice(checkDic(id).index, 1);
                    //删除节点
                    $("#" + id).filter(".vertical-timeline-block").remove();
                } else {
                    options.own.list.splice(selectData.index, 1);
                    startIndex = selectData.index;
                }
                maySelectObj = options.own.list[startIndex - 1];
                refreshItemIndex(options.own.list);
                //此后结点count为-1
                setNextAllCount("father", selectData, startIndex);
            }

            //删除可能的父节点数据
            options.own.dic[getSelectedId()] = null;
            //删除字典里的数据
            options.own.dic[selectData.id] = null;

            //删除节点
            getSelectedBlock().remove();

            if (maySelectObj) {
                var badge = getBadge($("#" + maySelectObj.id));
                //选中添加的元素
                selectBlockBadge(badge, maySelectObj);
            }

            //获取count
            plugin.getCount();

        };

        //删除单个节点接口
        var del = function (key) {
            swal(
                {
                    title: TxtContent.isDel,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: TxtContent.confirm,
                    cancelButtonText: TxtContent.cancel
                }, function () {
                    SMARTGROUP.delSmartGroupNode({"data": key}, function () {
                        delNodeData(key);
                    });
                }
            );

        };

        //删除多个节点
        var delNode = function (key, title, text, list) {
            swal(
                {
                    title: title,
                    text: text,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: TxtContent.confirm,
                    cancelButtonText:  TxtContent.cancel
                }, function () {
                    //先删除子节点
                    for (var i = list.length - 1; i > 0; i--) {
                        var keyId = getNodeId(list[i]);
                        //调用删除接口只删除数据
                        SMARTGROUP.delSmartGroupNode({"data": keyId}, function () {
                            var parentId = checkDic(keyId).parentId;
                            var fatherNode = checkDic(parentId);
                            fatherNode.childrenItem.splice(checkDic(keyId).index, 1);
                            refreshItemIndex(fatherNode.childrenItem);
                            $("#" + keyId).filter(".vertical-timeline-block").remove();
                        });
                    }
                    SMARTGROUP.delSmartGroupNode({"data": getNodeId(list[0])}, function () {
                        delNodeData(key);
                    });
                }
            );
        };

        //删除节点类型
        plugin.removeSelectItem = function () {
            if (XREWIN.loading) {
                return false;
            }
            if (getSelectedData().id && !getSelectedData().isReadOnly) {
                var curNode = getSelectedData();
                //删除节点为父节点并且有子节点
                if (hasChildren(curNode)) {
                    delNode(getNodeId(curNode), TxtContent.errmes1 ,TxtContent.errmes3, curNode.childrenItem);
                }
                //删除节点为第一个子节点
                else if (isFirstChild(curNode)) {
                    var parentNode = checkDic(getNodeId(curNode));
                    var childNode = parentNode.childrenItem;
                    if (childNode.length <= 1) {
                        del(getNodeId(curNode));
                    } else {
                        delNode(getNodeId(parentNode), TxtContent.errmes2,TxtContent.errmes3, childNode);
                    }
                }
                //仅仅删除单个节点
                else {
                    del(getNodeId(curNode));
                }
            }
        };


        //更新数据
        plugin.updateSmartgroupData = function () {
            XREWIN.showPageLoading();
            SMARTGROUP.updateSmartGroup({
                "content": getBlockList(),
                "key": XREWIN.getUrlParam("key")
            });
        };

        //清除
        plugin.clearCookie = function () {
            //清除选中节点和数据
            if (plugin.options.own.selData) {
                plugin.options.own.selData.selected = false;
            }
            plugin.options.own.selBlock = null;
            plugin.options.own.selData = null;
            //清空内容
            plugin.empty();
            //重置私有属性
            plugin.options.own = {
                index: 0,
                dic: {},
                list: []
            };
            if (!plugin.hasClass("dark-timeline")) {
                plugin.addClass("vertical-container dark-timeline center-orientation");
            }
            plugin.addBlock(options.firstObj);
            plugin.addBlock(options.lastObj);
        };
        //endregion

        //初始化
        init();

        return plugin;
    };
})(jQuery, window, document);