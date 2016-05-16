/**
 * Created by HZL on 2015/12/8.
 */
(function ($, window, document, undefined) {

    //定义Modal的构造函数
    var Modal = function (opt) {
        var that = this;

        opt.id = opt.id || Guid();
        //默认值
        that.defaults = {
            //字典
            sms_btn_dict: {},
            elements_dict: {},
            title: TxtContent.modal.title,
            elements: [],
            autoDestroy: false,
            submitBtn: TxtContent.modal.submitBtn,
            cancelBtn: TxtContent.modal.cancelBtn,
            valueNames: [],
            buttons: []
        };

        //扩展默认值
        that.options = $.extend({}, that.defaults, opt);
        return that.init();
    };

    //定义Modal的方法
    Modal.prototype = {

        getOption: function (key) {
            if (key in this.options) {
                return this.options[key];
            }
            return null;
        },

        getId: function () {
            return this.options.id;
        },

        getElement: function (name) {
            if (this.options.elements_dict) {
                return this.options.elements_dict[name];
            }
            return {};
        },

        //触发显示modal
        show: function () {
            this.$modal.modal("show");
        },

        /**
         * 隐藏modal
         */
        hide: function () {
            this.$modal.modal("hide");
        },

        //清空内容
        clear: function () {
            var that = this;
            $.each(that.options.elements, function (i, element) {
                that.setValue(element.name, "");
                that.toggle(element.name, false)
            });
        },

        /**
         * 返回到默认
         */
        refresh: function () {
            var that = this;
            $.each(that.options.elements, function (i, element) {
                that.setValue(element.name, element.defaultValue);
                that.toggle(element.name, element.disabled != "disabled")
            });
        },

        /**
         * 设置值
         * @param name
         * @param value
         */
        setValue: function (name, value) {
            if (value == null || typeof value == "undefined") {
                value = "";
            }
            var that = this;
            var element = that.getElement(name);
            if (element) {
                if (typeof element.setValue == 'function') {
                    element.setValue(element.$element, value);
                }
                else {
                    var values = {};
                    element.type = element.type || "";
                    switch (element.type) {
                        case "radio":
                        case "checkbox":
                            values = value.split(',');
                            var label = element.$element.find("[data-name=" + name + "]");
                            label.find('input[type=' + element.type + ']').prop("checked", false);
                            $.each(values, function (i, value) {
                                if (value) {
                                    label.find('[value=' + value + ']').prop("checked", true);
                                }
                            });
                            break;
                        case "checkbox-select":
                            values = value;
                            for (var key in values) {
                                var sel = $("[name=" + key + "]", element.$element[0]).last();
                                if (values.hasOwnProperty(key)) {
                                    sel.val(values[key]);
                                }
                                var checkBox = sel.parent().siblings("label").find('input[type=checkbox]');
                                checkBox.prop("checked", true);
                                checkBox.change();
                            }
                            break;
                        case "radio-date":
                            element.$element.find('[name="radio_start"],[name="radio_end"]').prop("disabled", true);
                            var radio = $('[data-type=' + value[0] + ']', element.$element[0]);
                            radio.find(":radio").prop("checked", true).siblings("nav")
                                .find('[name="radio_start"],[name="radio_end"]').prop("disabled", false);
                            radio.find('[name="radio_start"]').val(value[1]);
                            radio.find('[name="radio_end"]').val(value[2]);
                            break;
                        case "select":
                            var $select = element.$element.find("[name=" + name + "]");
                            $select.select2('val', value);
                            $select.trigger("input");
                            break;
                        case "hidden":
                            element.$element.val(value);
                            break;
                        case "":
                            break;
                        default:
                            element.$element.find("[name=" + name + "]").val(value).trigger("input");
                            break;
                    }
                }
            }
        },

        /**
         * 取得值
         * @param name
         * @returns {*}
         */
        getValue: function (name) {
            var that = this;
            var element = that.getElement(name);
            if (element) {
                if (typeof element.getValue == 'function') {
                    return element.getValue(element.$element);
                }
                else {
                    var returnValue = "";
                    element.type = element.type || "";
                    var values = [];
                    switch (element.type) {
                        case "radio":
                        case "checkbox":
                            element.$element.find("[data-name=" + name + "]").each(function () {
                                $(this).find("input[type=" + element.type + "]").each(function () {
                                    var chk = $(this);
                                    if (chk.is(":checked")) {
                                        values.push($(this).val());
                                    }
                                });
                            });
                            returnValue = values.join();
                            break;
                        case "checkbox-select":
                            values = {};
                            element.$element.find("[data-name=" + name + "]").each(function () {
                                var chk = $(this).find("input[type=checkbox]");
                                if (chk.is(":checked")) {
                                    var select = $(this).parent().find("select,input").last();
                                    values[select.attr("name")] = select.val();
                                }
                            });
                            returnValue = values;
                            break;
                        case "radio-date":
                            var dateList = [];
                            var radioChecked = $('[data-type="radio-date"]:checked', element.$element[0]).parent();
                            dateList.push(radioChecked.data("type"));
                            dateList.push(radioChecked.find('[name="radio_start"]').val());
                            dateList.push(radioChecked.find('[name="radio_end"]').val());
                            returnValue = dateList;
                            break;
                        case "hidden":
                            returnValue = element.$element.val();
                            break;
                        default:
                            returnValue = element.$element.find("[name=" + name + "]").val();
                            break;
                    }
                    return returnValue == null ? "" : returnValue;
                }
            }
        },

        refreshValue: function (name, data) {
            var that = this;
            var value = that.getValue(name);
            var element = that.getElement(name);
            switch (element.type) {
                case "select":
                    if ($.isArray(data)) {
                        element.selectOptions.optionData = data;
                    }
                    if (element.selectOptions.url || $.isArray(element.selectOptions.optionData)) {
                        that.createSelectOptions(element.selectOptions, element.$element.find("[name=" + name + "]"));
                    }
                    break;
                default:
                    break;
            }
            that.setValue(name, value);
        },

        getValues: function () {
            var that = this;
            var returnValues = {};
            var valueNames = that.options.valueNames;
            if (valueNames.length > 0) {
                for (var i = 0; i < valueNames.length; i++) {
                    returnValues[valueNames[i]] = that.getValue(valueNames[i]);
                }
            }
            return returnValues;
        },

        /**
         * 启用/禁用控件
         * @param name
         * @param flag
         */
        toggle: function (name, flag) {
            var that = this;
            var element = that.getElement(name);

            if (element) {
                if (typeof element.setValue == 'function') {
                    if (toggle) {
                        element.enable(element.$element);
                    }
                    else {
                        element.disable(element.$element);
                    }
                }
                else {
                    switch (element.type) {
                        case "checkbox":
                            element.$element.find("[data-name=" + name + "]").each(function () {
                                $(this).find("input[type=checkbox]").each(function () {
                                    if (flag) {
                                        $(this).removeAttr("disabled");
                                    }
                                    else {
                                        $(this).attr("disabled", "disabled");
                                    }

                                });
                            });
                            break;
                        default:
                            var $element = element.$element.find("[name=" + name + "]");
                            if (flag) {
                                $element.removeAttr("disabled");
                                if ($element.attr("readonly")) {
                                    $element.removeAttr("readonly");
                                }
                            }
                            else {
                                $element.attr("disabled", "disabled");
                            }
                            break;
                    }
                }
            }
        },

        //启用控件
        enable: function (name) {
            this.toggle(name, true);
        },

        //禁用控件
        disable: function (name) {
            this.toggle(name, false);
        },

        //释放对象
        destroy: function () {
            var that = this;
            if (that.options) {
                that.hide();
                that.$modal.remove();
                window["modal_" + that.getId()] = {};
                that.options = {};
            }
        },

        //生成modal实体
        init: function () {
            var that = this;
            //判断页面中是否有创建好的modal
            var curModal = $("body").find("#modal_" + that.getId()).length;
            if (curModal == 0) {
                //组建modal
                that.buildModal();
            }
            else {
                that.loadModal();
            }

            //关闭按钮清空功能
            that.$form = $("#form_" + that.getId());
            that.$modal = $("#modal_" + that.getId());
            that.$modal.on("hidden.bs.modal", function () {
                if (that.options.autoDestroy) {
                    that.destroy();
                }
                else if (that.options.clear) {
                    that.$form.find("div[contenteditable=true]").html('');
                    that.refresh();
                    that.$form.bootstrapValidator('resetForm', true);
                }
            });
            that.refresh();
            return that;
        },

        //加载modal
        loadModal: function () {
            var that = this;
            that.options = window["modal_" + that.getId()];
        },

        //组建modal
        buildModal: function () {
            var that = this;
            //创建modal框架
            var modalWrap = that.modalWrap();
            var $modalWrap = $(modalWrap);
            var modalBox = $modalWrap.find(".modal-content");

            //添加标题
            var modalHeader = that.modalHeader();
            modalBox.append(modalHeader);

            //创建modalBody
            var modalBody = that.modalBody();
            var modalConBox = $(modalBody).appendTo(modalBox);

            //创建modalForm
            var modalForm = that.modalForm();
            var modalFormBox = $(modalForm).appendTo(modalConBox.find(".clearfix"));

            //创建modalFormFieldset
            var modalFormFieldset = that.modalFormFieldset();
            modalFormBox.append(modalFormFieldset);

            //创建modalFormBtn
            var modalFormBtn = that.modalFormBtn();
            modalFormBox.append(modalFormBtn);

            //显示modal
            $("body").append($modalWrap);

            //绑定提交方法
            var $form = $('#form_' + that.getId());
            $form.find("button:submit").off().on("click", function () {
                //获取sms内容
                that.getSmsValHidden();
                $form.bootstrapValidator(
                    that.formSubmit()
                ).one('success.form.bv', function (e) {
                    e.preventDefault();
                    try {
                        that.options.submitBindFunc.call(that, that.$form, new FormData(that.$form[0]));
                        that.$form.bootstrapValidator('resetForm', true);
                        that.hide();
                    }
                    catch (err) {
                        console.error(err.message);
                    }
                });
            });

            $form.find("button[data-index]").on("click", function () {
                var index = parseInt($(this).data('index'));
                var buttons = that.getOption("buttons");
                if (buttons.length > index && typeof buttons[index].click == "function") {
                    buttons[index].click.call(that);
                }
            });

            window["modal_" + that.getId()] = that.options;
        },

        //创建modal框架方法
        modalWrap: function () {
            var that = this;
            var wrap = '<div class="modal" id="modal_' + that.getId() + '" role="dialog" ' +
                'aria-hidden="true">';
            wrap += '<div class="modal-dialog">';
            wrap += '<div class="modal-content animated fadeInDown">';
            wrap += '</div></div></div>';
            return wrap;
        },

        //创建modalHeader方法
        modalHeader: function () {
            var that = this;
            var header = '<div class="modal-header">';
            header += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">' +
                '&times;</span><span class="sr-only">Close</span></button>';
            header += '<h4 class="modal-title">' + that.options.title + '</h4>';
            header += '</div>';
            return header;
        },

        //创建modalBody
        modalBody: function () {
            var body = '<div class="modal-body"><div class="clearfix">';
            body += '</div></div>';
            return body;
        },

        //创建modalForm
        modalForm: function () {
            var that = this;
            var form = '<form id="form_' + that.getId() + '" method="post" onsubmit="return false;" ' +
                ' enctype="multipart/form-data">';
            form += '</form>';
            return form;
        },

        //创建modalFormBtn
        modalFormBtn: function () {
            var that = this;
            var buttons = that.getOption("buttons");
            var btns = [];
            if (buttons) {
                $.each(buttons, function (i) {
                    btns.push('<button type="button" data-index="' + i + '" class="btn btn-success pull-left" ' +
                        'style="margin-left: 10px;">' + this.text + '</button>');
                });
            }
            btns.push('<button type="button" class="btn btn-white pull-right" data-dismiss="modal" ' +
                'style="margin-left: 10px;">' + that.getOption("cancelBtn") + '</button>');
            btns.push('<button type="submit" id="subForm" class="btn btn-primary pull-right">' +
                that.getOption("submitBtn") + '</button>');
            return btns.join('');
        },

        //创建modalFormFieldset
        modalFormFieldset: function () {
            var that = this;
            var eleList = that.options.elements;
            $.each(eleList, function (i, n) {
                n.name = n.name || Guid();
                n.labelName = n.labelName || "";
                that.options.elements_dict[n.name] = n;
            });
            var fieldset = $('<fieldset></fieldset>');
            for (var j = 0; j < eleList.length; j++) {
                var $inputBox;
                var element = eleList[j];
                switch (element.type) {
                    case "radio":
                    case "checkbox":
                        $inputBox = $('<div class="form-control"></div>');
                        var checkOptions = element['checkOptions'];
                        if (!$.isArray(checkOptions)) {
                            that.callPort(checkOptions, $inputBox, that.joinCheckedData, element['name']);
                        } else {
                            var checkboxName = element['name'];
                            if (checkOptions.length > 1 && element.type == "checkbox") {
                                checkboxName += '[]';
                            }
                            for (var nc = 0; nc < checkOptions.length; nc++) {
                                var op = '<label class="checkbox-inline" data-name="' + element['name'] + '" >' +
                                    '<input type="' + element.type + '" name="' + checkboxName + '" ' +
                                    'value="' + checkOptions[nc]["value"] + '" />' +
                                    checkOptions[nc]["text"] + '</label>';
                                $inputBox.append(op);
                            }
                        }
                        if (element['display']) {
                            var label = $inputBox.find("label");
                            label.css({
                                "display": element['display'], "margin-left": 0
                            });
                            $inputBox.css({"height": "auto", "overflow": " auto"});
                            if (label.length > 7) {
                                $inputBox.height(200);
                            }
                        }

                        break;
                    case "checkbox-select":
                        $inputBox = $('<div class="form-control" style="height: auto;padding-top: 13px;"></div>');
                        var chkSelects = element['checkOptions'];
                        if (!$.isArray(chkSelects)) {
                            if (chkSelects.code == 1) {
                                chkSelects = chkSelects.data;
                            }
                            else {
                                chkSelects = [];
                                $inputBox.append('生成对象失败，请联系管理员！')
                            }
                        }
                        $.each(chkSelects, function (i, option) {
                            var label = $('<label style="float: left;" class="checkbox-inline checkbox-label" data-name="' + element['name'] + '" ></label>');
                            var chk = $('<input type="checkbox" style="height: 27px;">');
                            var wrap = $('<div style="margin-left: 65px;"></div>');
                            var selWrap = '';
                            var select = that.createSelectWrap(option, selWrap);
                            var selectBox = wrap.append(select);
                            label.append(chk);
                            label.append(option["text"]);
                            $inputBox.append($("<div class='check_select'></div>").append(label, selectBox));
                            chk.on("change", function () {
                                if (!$(this).is(":checked")) {
                                    select.attr("disabled", "disabled");
                                }
                                else {
                                    select.removeAttr("disabled");
                                }
                            });
                            chk.change();
                        });
                        break;
                    case "select":
                        $inputBox = that.createSelectWrap(element);
                        break;
                    case "textarea":
                        $inputBox = $('<textarea name="' + element['name'] + '" class="form-control" style="max-width: 538px;"></textarea>');
                        break;
                    case "smsEdit":
                        var smsText = element['smsContent'];
                        var inputSMS = '<input id="input-sms_' + that.getId() + '" name="' + element['name'] + '" type="hidden">';
                        var editarea = $('<div id="editArea_' + that.getId() + '" contenteditable="true" style="' +
                            'border: 1px solid #abcdef;min-height: 50px;padding: 5px;"></div>');
                        var content_box = $('<div id="contentBox" style="border: 1px solid #e5e6e7;' +
                            'border-top: none;padding: 10px 10px 5px;;"></div>');
                        var val = smsText['data'];
                        var smsTextName = smsText['textName'];
                        var smsValueName = smsText['valueName'];

                        for (var i = 0; i < val.length; i++) {
                            //存入字典
                            that.options.sms_btn_dict[val[i][smsValueName]] = val[i][smsTextName];
                            var btn = '';
                            btn += '<button value="' + val[i][smsValueName] + '" class="btn btn-info btn-outline readbtns"' +
                                ' data-toggle="button" type="button" style="margin: 0 5px 5px 0;">' + val[i][smsTextName] + '</button>';
                            content_box.append($(btn));
                        }
                        var sms_txt = smsText["smsTxt"];
                        if (sms_txt) {
                            //解析短信内容
                            editarea.append(that.parseSmsContent(sms_txt));
                        }
                        $inputBox = $('<div style="position: relative;"></div>').append('<div id="personSet">' +
                            '<a href="javascript:void(0)" type="submit" style="margin-right: 5px;" id="setSmsPersonality">' + TxtContent.modal.smsPersonality + '</a>' +
                            '<a href="javascript:void(0)" id="cancelSmsPersonality">' + TxtContent.modal.cancelSmsPersonality + '</a></div>',
                            editarea, content_box, inputSMS);
                        $inputBox.find(".readbtns").each(function () {
                            var tempArea = editarea;
                            $(this).on("click", function () {
                                    var readbtns = $(this);
                                    readbtns.siblings("button").removeClass("active");
                                    var $em = $('<mark data-id="' + readbtns.val() + '" class="txt" contenteditable="false">' +
                                        '$$' + readbtns.text() + '$$</mark><span style="margin-right: 2px;"></span>');
                                    if (getSelectTxt()) {
                                        var emTxt = tempArea[0].innerHTML.replace(getSelectTxt(), $em[0].outerHTML);
                                        tempArea.html(emTxt);
                                    } else {
                                        //在光标位置插入内容
                                        var element = document.getSelection().baseNode.parentElement;
                                        if (element.tagName != 'NAV') {
                                            tempArea.focus();
                                            XREWIN.insertHtmlAtCaret($em[0].outerHTML);
                                        }
                                    }
                                }
                            );
                        });

                        //设置个性化
                        $inputBox.find("#setSmsPersonality").on("click", function () {
                            settingSmsPersonality(that.getId());
                        });

                        //取消个性化
                        $inputBox.find("#cancelSmsPersonality").on("click", function () {
                            //取消个性化
                            var stateVal = $("#form_" + that.getId()).find('[name="smsState"]').val();
                            cancelSmsPersonality(stateVal, that.getId());
                        });
                        break;
                    case "radio-date":
                        var radioList = element["radioList"];
                        $inputBox = $("<div data-name='" + element["name"] + "'></div>");
                        for (var i = 0; i < radioList.length; i++) {
                            var radioType = radioList[i];
                            var radioDateWrap = $("<div data-type='" + radioType + "' style='margin-bottom: 5px;'></div>");
                            var radioWrap = "";
                            switch (radioType) {
                                case 1:
                                    radioWrap = '<input type="radio" data-type="radio-date" name="' + element["name"] + '"' +
                                        'style="float: left;margin: 10px 10px 10px 0;">' +
                                        '<nav class="input-daterange input-group">' +
                                        '<span class="input-group-addon">' + TxtContent.modal.wait + '</span>' +
                                        '<input type="text" class="input-sm form-control" name="radio_start">' +
                                        '<span class="input-group-addon">' + TxtContent.modal.day + '</span>' +
                                        '<input type="text" class="input-sm form-control" name="radio_end">' +
                                        '<span class="input-group-addon">' + TxtContent.modal.hourLater + '</span>' +
                                        '</nav>';
                                    radioDateWrap.append(radioWrap);
                                    break;
                                case 2:
                                    radioWrap = '<input type="radio" data-type="radio-date" name="' + element["name"] + '"' +
                                        'style="float: left;margin: 10px 10px 10px 0;"/>' +
                                        '<nav class="input-daterange input-group">' +
                                        '<span class="input-group-addon">' + TxtContent.modal.wait + '</span>' +
                                        '<input type="text" class="input-sm form-control" name="radio_start">' +
                                        '<span class="input-group-addon">' + TxtContent.modal.dayLater + '</span>' +
                                        '<input type="text" class="input-sm form-control" name="radio_end">' +
                                        '<span class="input-group-addon">' + TxtContent.modal.hour + '</span>' +
                                        '</nav>';
                                    radioDateWrap.append(radioWrap);
                                    break;
                                case 3:
                                    radioWrap = '<input type="radio" data-type="radio-date" name="' + element["name"] + '"' +
                                        'style="float: left;margin: 10px 10px 10px 0;"/>' +
                                        '<nav class="input-daterange input-group">' +
                                        '<span class="input-group-addon">' + TxtContent.modal.wait + '</span>' +
                                        '<input type="date" class="input-sm form-control" name="radio_start">' +
                                        '<span class="input-group-addon">-</span>' +
                                        '<input type="time" class="input-sm form-control" name="radio_end">' +
                                        '<span class="input-group-addon">' + TxtContent.modal.end + '</span>' +
                                        '</nav>';
                                    radioDateWrap.append(radioWrap);
                                    break;
                                case 4:
                                    var txt;
                                    if ($(".wait-date-text", $inputBox[0]).length == 0) {
                                        txt = '<div class="wait-date-text" style="font-weight: bold;margin: 10px 0;">' +
                                            TxtContent.modal.timeBucket + '</div>';
                                    } else {
                                        txt = '';
                                    }
                                    radioWrap = txt + '<input type="radio" data-type="radio-date" name="' + element["name"] + '"' +
                                        'style="float: left;margin: 10px 10px 10px 0;"/>' +
                                        '<nav class="input-daterange input-group">' +
                                        '<span class="input-group-addon">' + TxtContent.modal.curDay + '</span>' +
                                        '<input type="time" class="input-sm form-control" name="radio_start">' +
                                        '<span class="input-group-addon">-</span>' +
                                        '<input type="time" class="input-sm form-control" name="radio_end">' +
                                        '<span class="input-group-addon">' + TxtContent.modal.exe + '</span>' +
                                        '</nav>';
                                    radioDateWrap.append(radioWrap);
                                    break;
                            }
                            $inputBox.append(radioDateWrap);

                            $inputBox.find('[data-type="radio-date"]').each(function () {
                                var radio = $(this);
                                radio.on("change", function () {
                                    var inputDate = $(this).siblings("nav")
                                        .find('[name="radio_start"],[name="radio_end"]');
                                    if ($(this).is(":checked")) {
                                        that.getElement($(this).attr("name")).$element.find('[name="radio_start"],[name="radio_end"]').prop("disabled", true);
                                        inputDate.removeAttr("disabled");
                                    }
                                });
                                radio.change();
                            });
                        }
                        var content = element["prompt"] || TxtContent.modal.prompt;
                        $inputBox.append('<p style="color: red;text-align: center;font-weight: bold;margin: 10px 0;">' +
                            content + '</p>');
                        break;
                    case "label":
                        $inputBox = "";
                        break;
                    case "report":
                        $inputBox = "<em name=" + element['name'] + "></em>";
                        break;
                    default:
                        $inputBox = that.createInput(element);
                        break;
                }

                if (element.type != "hidden") {
                    var formGroup = $('<div class="form-group" id="g_' + j + '_' + that.getId() + '"></div>');
                    if (element.labelName) {
                        formGroup.append('<label>' + element.labelName + '</label>');
                    }
                    formGroup.append($inputBox);
                    if (element["change"] && typeof element["change"] == "function") {
                        var changeFunction = element["change"];
                        formGroup.find("select,input").on("change.form", function () {
                            changeFunction.call(this, that);
                        });
                    }
                    if (element["keyup"] && typeof element["keyup"] == "function") {
                        formGroup.find("input").on("keyup", element["keyup"])
                    }
                    element.$element = formGroup;
                }
                else {
                    element.$element = $inputBox;
                }
                fieldset.append(element.$element);
                if (element.type == "select") {
                    var select2 = {
                        placeholder: "-请选择-",
                        multiple: element.selectOptions.multiple,
                        optionData: element.selectOptions.optionData,
                        templateResult: element.selectOptions.templateResult
                    };
                    if (select2.multiple && !select2.optionData) {
                        var optionFirst = element.$element.find("option:first");
                        if ($(':contains("选择")', optionFirst).length > 0) {
                            optionFirst.remove();
                        }
                    }
                    $inputBox.select2(select2);
                }
            }

            return fieldset;
        },

        //创建input
        createInput: function (element) {
            return $('<input type="' + element.type + '" name="' + element['name'] + '"' +
                'placeholder="' + element['labelName'] + '" class="form-control" />');
        },

        //创建selectWrap
        createSelectWrap: function (element) {
            var that = this;
            var selectOptions = element['selectOptions'];
            var $inputBox = $('<select name="' + element['name'] + '" class="form-control modal-select2"></select>');
            if (element.multiple) {
                $inputBox.attr('multiple', 'multiple');
            }
            that.createSelectOptions(selectOptions, $inputBox);
            return $inputBox;
        },


        //创建selectOption
        createSelectOptions: function (selectOptions, selectBox) {
            var that = this;
            selectBox.empty();
            var defaultValue = selectOptions && typeof selectOptions.defaultValue != "undefined" ? selectOptions.defaultValue : "";
            if (!selectOptions.multiple) {
                selectBox.append('<option value="' + defaultValue + '">' +
                    (defaultValue || defaultValue == "0" ? "默认值" : "-请选择 -") + '</option>');
            }
            if ($.isArray(selectOptions) || $.isArray(selectOptions.optionData)) {
                that.addOption(selectOptions.optionData ? selectOptions.optionData : selectOptions, selectBox);
            } else if (selectOptions) {
                that.callPort(selectOptions, selectBox, that.joinOptionsData);
            }
        },

        //调用接口获取数据
        callPort: function (selectOptions, selectBox, successFunc, name) {
            if (typeof selectOptions == "string") {
                selectOptions = {url: selectOptions}
            }
            if (selectOptions.url) {
                var valueName = selectOptions['valueName'] || "value";
                var textName = selectOptions['textName'] || "text";
                $.ajax({
                    url: selectOptions.url,
                    type: "GET",
                    dataType: "json",
                    async: false,
                    cache: false,
                    success: function (data) {
                        if (!$.isArray(data)) {
                            if (data.code == 1) {
                                data = data.data;
                            }
                            else {
                                swal(TxtContent.modal.err, TxtContent.modal.errMsg, "error");
                                data = [];
                            }
                        }
                        if (typeof successFunc == "function") {
                            successFunc(data, selectBox, valueName, textName, name);
                        }
                    }
                });
            }
        },


        //拼接获取的options数据
        joinOptionsData: function (data, curBox, valueName, textName) {
            for (var i = 0; i < data.length; i++) {
                var value = data[i][valueName] || data[i];
                var text = data[i][textName] || data[i];
                var option = $('<option value="' + value + '">' + text + '</option>');
                option.data("elementData", data[i]);
                curBox.append(option);
            }
        },

        //拼接//拼接获取的checked数据
        joinCheckedData: function (data, curBox, valueName, textName, elementName) {
            var inputName = elementName;
            if (data.length > 0) {
                inputName += '[]';
            }
            for (var i = 0; i < data.length; i++) {
                var value = data[i][valueName] || data[i];
                var text = data[i][textName] || data[i];
                curBox.append('<label data-name="' + elementName + '" class="checkbox-inline">' +
                    '<input name="' +
                    inputName + '" type="checkbox" value="' + value + '" index="' + i + '">' + text + '</label>');
            }
        },

        //添加option方法
        addOption: function (obj, $box) {
            var selectOptions = obj;
            for (var i = 0; i < selectOptions.length; i++) {
                var op = '';
                op += '<option value="' + selectOptions[i]['value'] + '">' +
                    selectOptions[i]['text'] + '</option>';
                $box.append(op);
            }
        },

        //表单提交
        formSubmit: function () {
            var that = this;
            return {
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: that.validator()
            }
        },

        resetForm: function (clear) {
            var that = this;
            if (that.$form) {
                that.$form.bootstrapValidator('resetForm', clear);
            }
        },

        //表单验证
        validator: function () {
            var fields = {};
            var that = this;
            var formList = that.options.elements;
            for (var k = 0; k < formList.length; k++) {
                var val_type = formList[k]['type'];
                if (val_type == "hidden") {
                    continue;
                }
                var validators = formList[k]['validators'] || {};
                var name = formList[k]['name'];
                var labelName = formList[k]['labelName'];
                if (formList[k]['require']) {
                    validators["notEmpty"] = {
                        message: "" + labelName + TxtContent.modal.noNull
                    }
                }

                fields[name] = (function (type) {
                    switch (type) {
                        case "password":
                            validators["stringLength"] = {
                                min: 8,
                                message: TxtContent.modal.pwd
                            };
                            break;
                        case "date":
                        case "datetime":
                        case "datetime-local":
                            break;
                        case "number":
                            validators["numeric"] = {
                                message: TxtContent.modal.num
                            };
                            break;
                        case "email":
                            validators["emailAddress"] = {
                                message: TxtContent.modal.email
                            };
                            break;
                        case "select":
                            break;
                    }
                    return {"validators": validators};
                })(val_type);

            }
            return fields;
        },


        //编辑modal内容
        editContent: function (ediContent) {
            var that = this;
            var ediCon = ediContent;
            for (var key in ediCon) {
                if (ediCon.hasOwnProperty(key)) {
                    var value = ediCon[key];
                    if (value || value == "") {
                        if (!$.isArray(value) && typeof value == "object" && !(value instanceof Date)) {
                            if (value["disabled"]) {
                                that.disable(key);
                            }
                            that.setValue(key, value["value"]);
                        } else {
                            that.setValue(key, value);
                        }
                    }
                }
            }
        },

        //提交时把短信内容赋值到隐藏字段里
        getSmsValHidden: function () {
            var that = this;
            var $editArea = that.$form.find("#editArea_" + that.getId());
            var defaultEditVal = $editArea.html();
            $editArea.find("mark").each(function () {
                var that = $(this);
                var textName = that.data("id");
                that.text('$$data.' + textName + '$$');
            });
            that.$form.find("#input-sms_" + that.getId()).val($editArea.text());
            $editArea.html(defaultEditVal);
        },

        //解析短信内容
        parseSmsContent: function (sms_txt) {
            var that = this;
            var str = sms_txt;
            var matchStr = str.match(/\$\$data.\w+\$\$/g);
            for (var i = 0; i < matchStr.length; i++) {
                var mts = matchStr[i];
                var name = mts.substring(7, mts.length - 2);
                var val = '<mark data-id="' + name + '" class="txt" contenteditable="false">'
                    + "$$$" + that.options.sms_btn_dict[name] + "$$$" + '</mark>';
                str = str.replace(mts, val);
            }
            return str;
        }
    }
    ;

    /**
     * 弹窗插件外部接口
     * 在插件中使用Modal对象
     *
     * 触发元素的属性 id
     * 编辑元素的属性 data-id
     * @param options 为JSON对象
     *
     * 传入参数包含的对象属性如下
     * id 如果触发元素没有id则需要传入id
     * title 弹窗标题
     *
     * elements:[{
     * require notNull (该字段为验证输入内容 根据需求添加该字段)
     * disabled disabled (可选 该字段不能编辑)
     * labelName label的名称
     * type 可传入的值{input的各种type类型 select textarea smsEdit}
     * selectOptions select的option [{value:***,text:***},...,{value:***,text:***}]  (如果type值为select才有该参数)
     * smsContent 短信文本
     * name (input || select || textarea的name )
     * defaultValue (可选)
     * }]
     *
     * 编辑已存在的modal    disabled 不可编辑的内容
     * {
     * editContent:[
     * {name:****,defaultValue:****,disabled:disabled},
     * .....,
     * {name:defaultValue}
     * ]
     * }
     *
     * cancelBtn 关闭的弹窗按钮的名称 (可选)
     * submitBtn 表单提交的名称  (可选)
     *
     * submitBindFunc function () { 函数体 }提交后绑定的方法
     * clear true (可选 关闭时modal是否清空内容)
     *
     * @returns {jQuery}
     */
    $.fn.popup = function (options) {

        var plugin = this;
        var emptyFunc = function () {
        };

        //获取对象的id
        options.id = options.id || plugin.data("id") || plugin.attr("id");

        options.submitBindFunc = options.submitBindFunc || emptyFunc;
        //创建Modal实体对象
        var modal = new Modal(options);
        //弹出modal
        plugin.on("click", function () {

            //显示弹框
            modal.show();
            //编辑弹窗
            if (options && options.editContent) {
                //编辑modal的内容
                modal.editContent(options.editContent);
            }

        });

        plugin.editContent = function (content) {
            return modal.editContent(content)
        };

        plugin.modal = modal;

        //支持链式调用
        return plugin;
    };

    if (!window.FormModal) {
        window.FormModal = Modal;
    }
})(jQuery, window, document);
