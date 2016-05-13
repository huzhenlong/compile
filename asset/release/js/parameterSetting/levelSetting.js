/**
 * Created by HZL on 2016/3/3.
 */

//获取levelList
var lvData = PLAT.listLevel();

/**
 * 添加等级
 */
//创建等级模块
var createLvModule = function (LvName, LvDesc, key) {
    var wrap = $('<div class="col-lg-3 LvModule" id="' + key + '" data-id="' + key + '"></div>');
    var LvBox = $('<div class="ibox float-e-margins"></div>').appendTo(wrap);
    var LvTitle = $('<div class="ibox-title"><h5 class="level-name">' + LvName + '</h5></div>');
    var LevelDesc = $('<div class="ibox-content"><h1 class="no-margins">896,250</h1>' +
        '<span class="stat-percent font-bold text-danger delLv"><i class="fa fa-trash"></i></span>' +
        '<span class="stat-percent font-bold text-info editorLv"><i class="fa fa-pencil"></i></span>' +
        '<small title="' + LvDesc + '" class="descLv">TxtContent.levelSetting.lvDes</small></div>');
    LvBox.append(LvTitle, LevelDesc);
    $("#LvRow").append(wrap);
    return wrap;
};

//绑定等级模块事件
var bindLvModule = function (lvName, lvDesc, LvKey) {

    //创建等级模块
    var module = createLvModule(lvName, lvDesc, LvKey);

    //编辑等级
    var editorLv = function () {
        var levelName = $(".level-name", module).text();
        var levelDesc = $(".descLv", module).attr("title");
        editorLevelModal.show();
        editorLevelModal.setValue("baseDataValue", levelName);
        editorLevelModal.setValue("desc", levelDesc);
        editorLevelModal.setValue("key", LvKey);
    };

    module.off().on("dblclick", function () {
        editorLv();
    });

    $(".editorLv", module).on("click", function () {
        editorLv();
    });

    //删除等级
    $(".delLv", module).on("click", function () {
        XREWIN.confirmModal('', function () {
            PLAT.delLevel(module.data("id"), function () {
                module.remove();
                $("#configContent").empty();
            });
        });
    });

    //等级配置
    $(".ibox-title", module).off().on("click", function () {
        var LvKey = module.data("id");
        $(".LvModule").removeClass("curSettingLv");
        module.addClass("curSettingLv");
        PLAT.getLevelSetting({"key": LvKey}, function () {
            var LvSettingData = this.data;
            //等级配置能否使用
            var brandConfig = $("#brandConfig");
            if (module.hasClass("curSettingLv")) {
                brandConfig.attr("disabled", false).removeClass("borderColor");
                brandConfig.off().on("click", function () {
                    var brandModal = new FormModal(brandParam());
                    brandModal.refreshValue("brand", PLAT.getBrandListByLevel(LvKey));
                    brandModal.show();
                });
            } else {
                brandConfig.attr("disabled", true).addClass("borderColor");
            }

            //清空配置盒子
            var configBox = $("#configContent");
            configBox.empty();
            //加载等级设置
            if (LvSettingData.length > 0) {
                for (var i = 0; i < LvSettingData.length; i++) {
                    createLvConfig(LvKey, LvSettingData[i]["brandKey"], LvSettingData[i]["brandTxt"], LvSettingData[i]["groupKey"]);
                }
            } else {
                configBox.empty();
            }
            //默认显示第一个
            $('#navLv').find('li:eq(0) a').tab('show');
        });
    });

    return module;
};

//编辑等级modal参数
var editorLevelParam = {
    "id": "editor-Level",
    "title": TxtContent.levelSetting.title,
    "elements": [
        {
            "require": true,
            "labelName": TxtContent.levelSetting.name,
            "type": "text",
            "name": "baseDataValue"
        },
        {
            "labelName": TxtContent.levelSetting.lvDes,
            "type": "textarea",
            "name": "desc"
        },
        {
            "type": "hidden",
            "name": "key"
        }
    ],
    "submitBindFunc": function (form, formData) {
        var editorModal = this;
        var id = editorModal.getValue("key");
        var editorLvName = editorModal.getValue("baseDataValue");
        var editorLvDesc = editorModal.getValue("desc");
        var editorModule = $("#" + id);
        PLAT.updateLevel(formData, function () {
            $(".level-name", editorModule).text(editorLvName);
            $(".descLv", editorModule).attr("title", editorLvDesc);
        });
    },
    "clear": true
};

//编辑等级modal
var editorLevelModal = new FormModal(editorLevelParam);

//增加等级modal参数
var addLevelParam = {
    "id": "add-Level",
    "title": TxtContent.levelSetting.addLv,
    "elements": [
        {
            "require": true,
            "labelName": TxtContent.levelSetting.name,
            "type": "text",
            "name": "baseDataValue"
        },
        {
            "labelName": TxtContent.levelSetting.lvDes,
            "type": "textarea",
            "name": "desc"
        }
    ],
    "submitBindFunc": function (form, formData) {
        var addLvModal = this;
        var lvName = addLvModal.getValue("baseDataValue");
        var lvDesc = addLvModal.getValue("desc");
        if (lvName) {
            PLAT.addLevel(formData, function () {
                var LvKey = this.data;
                bindLvModule(lvName, lvDesc, LvKey);
            });
        }
    },
    "clear": true
};

//添加等级modal
$("#addLevel").popup(addLevelParam);

//加载等级模块
if (lvData && lvData.length > 0) {
    for (var i = 0; i < lvData.length; i++) {
        var module = bindLvModule(lvData[i]["baseDataValue"], lvData[i]["desc"], lvData[i]["key"]);
        /**
         * 默认等级
         * 不能删除
         * 不能编辑
         */
        if (lvData[i]["isDefault"] == 1) {
            $(".delLv", module).remove();
            $(".editorLv", module).remove();
            $(".ibox-title", module).off("click");
        }
    }
}


/**
 * 生成等级配置
 */
var createLvConfig = function (lv_key, brand_key, brandTxt, group_key) {

    var $nav = $("#navLv");
    var $con = $("#navConLv");
    if ($nav.length == 0 && $con.length == 0) {
        //nav
        $nav = $('<ul class="nav nav-tabs" id="navLv"></ul>');
        //content
        $con = $('<div class="tab-content" id="navConLv"></div>');
    }


    //创建tabNav
    var tabNav = $('<li data-brand_key="' + brand_key + '" data-lv_key="' + lv_key + '">' +
        '<span class="badge badge-warning pull-right delNav">x</span>' +
        '<a data-toggle="tab" href="#' + group_key + '">' + brandTxt + '</a></li>').appendTo($nav);
    //创建tabCon
    var tabCon = $('<div id="' + group_key + '" class="tab-pane"><div class="panel-body"></div></div>').appendTo($con);
    //追加到文本流
    $("#configContent").append($nav, $con);
    //删除tabNav
    $(".delNav", tabNav).off().on("click", function (e) {
        var $li = $(this).parent("li");
        var fd = XREWIN.FormData({
            "key": $li.data("lv_key"),
            "brandKeys": $li.data("brand_key")
        });
        PLAT.removeLevelSetting(fd, function () {
            tabNav.remove();
            tabCon.remove();
        });
        e.stopPropagation();
    });

    //tabNav切换
    $("li a", $nav).off().on('shown.bs.tab', function () {
        $(".tab-pane .panel-body",$con).empty();
        var that = $(this);
        var groupKey = that.attr("href");
        new SGTableModal({
            "groupKey": groupKey.replace("#", ""),
            "showForm": "flat",
            "$obj": $(".panel-body", $(groupKey))
        });
    });

    //返回当前tab的a
    return $("a",tabNav);

};

/**
 * 品牌
 */
//品牌modal
var brandParam = function () {
    return {
        "id": "brandParam",
        "title": brandConfig,
        "elements": [
            {
                "require": true,
                "type": "select",
                "name": "brand",
                "labelName": TxtContent.levelSetting.brand,
                "selectOptions": {
                    "multiple": "multiple",
                    "optionData": []
                }
            }
        ],
        "submitBindFunc": function (form, formData) {
            //选择品牌的名称
            var brandTxt = '';
            var selOption = form.find('select[name=brand] option:selected');
            selOption.each(function () {
                brandTxt += $(this).text() + '　';
            });
            formData.append("brandTxt", brandTxt);
            //选择品牌的key
            var brandVal = form.find('select[name=brand]').val();
            var brandKey = '';
            if ($.isArray(brandVal)) {
                brandKey = brandVal.join();
                formData.append("brandKeys", brandKey);
            } else {
                brandKey = brandVal;
                formData.append("brandKeys", brandKey);
            }
            //等级key
            var LvKey = $(".curSettingLv").data("id");
            formData.append("key", LvKey);

            //获取groupKey
            PLAT.getGroupKeyByLevel(formData, function () {

                //groupKey
                var group_key = this.data;

                //生成等级配置
                var $a = createLvConfig(LvKey, brandKey, brandTxt, group_key);
                $a.tab('show');
            });
        },
        "clear": true
    };
};




$("#navMenuBox").menu(subsetMenu);