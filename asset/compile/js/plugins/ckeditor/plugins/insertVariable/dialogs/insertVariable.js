/**
 * Created by HZL on 2015/12/15.
 */
(function () {
    //执行弹窗
    CKEDITOR.dialog.add('insertVariableDialog', function (editor) {

            var varText, varVal;
            return {
                //region 弹窗布局
                title: TxtContent.ckeitor.insert,
                resizable: CKEDITOR.DIALOG_RESIZE_BOTH,
                width: 300,
                height: 200,
                //自定义按钮
                buttons: [
                    CKEDITOR.dialog.okButton,
                    CKEDITOR.dialog.cancelButton
                ],
                //内容区域
                contents: [
                    {
                        id: 'condition',
                        label: '',
                        title: '',
                        elements: [
                            {
                                type: 'html',
                                html: '<div id="insertVar"></div>'
                            }
                        ]
                    }
                ],
                //endregion

                //点击ok
                //endregion

                //region 窗口显示时事件
                //窗口显示时执行
                onShow: function () {

                    var btnBox = '<div id="insertVariable"></div>';
                    var buttons = $(btnBox);
                    var list = importMemberColumns;
                    for (var k = 1; k < list.length + 1; k++) {
                        var op = "";
                        var opVal = list[k - 1]['column'];
                        var opTxt = list[k - 1]['name'];

                        op += '<button data-toggle="button" class="btn btn-primary btn-outline" type="button"' +
                            'data-value="' + opVal + '" style="padding: 6px 12px;border: 1px solid #1ab394;' +
                            'border-radius: 3px;margin-left:5px;margin-bottom: 5px;">';
                        op += opTxt;
                        op += '</button>';
                        buttons.append(op);
                        if (k % 5 == 0) {
                            buttons.append('<br>');
                        }
                    }
                    $("#insertVar").parent().html(buttons[0].outerHTML);
                    //绑定按钮事件
                    $("#insertVariable").find("button").on("click", function () {
                        var that = $(this);
                        that.siblings("button").removeClass("active");
                        varText = that.text();
                        varVal = that.data("value");
                    });
                },
                onOk: function () {

                    var selection = editor.getSelection();
                    var selTxt = selection.getSelectedText();

                    var element = selection.getStartElement();
                    if (element.getName() != 'nav' && !element.hasClass("editorImg")) {
                        //标出编辑内容
                        var tempId = "temp_" + (new Date()).getTime();
                        var creSpan = editor.document.createElement('em');
                        creSpan.addClass("variable");
                        creSpan.setAttribute("id", tempId);
                        creSpan.setAttribute("contenteditable", "false");

                        if (element) {
                            if (element.getName() == 'td'
                                || element.getName() == 'p'
                                || element.getName() == 'span'
                                || element.getName() == 'strong'
                                || element.getName() == 'h3'
                                || element.getName() == 'li'
                                || element.getName() == 'div'
                                || element.getName() == 'a') {
                                if (selTxt) {
                                    creSpan.setText('$$$' + varText + '$$$');
                                    var _span = element.getOuterHtml().replace(selTxt, creSpan.getOuterHtml() + "<span>&nbsp;</span>");
                                    element.setHtml(_span);
                                } else {
                                    creSpan.setText('$$' + varText + '$$');
                                    //解决在光标后插入内容
                                    editor.insertHtml(creSpan.getOuterHtml());
                                }
                            }
                            if (element.hasClass("variable")) {
                                if (selTxt) {
                                    creSpan.setText('$$$' + varText + '$$$');
                                    var test = element.getParent().getOuterHtml().replace(selTxt, creSpan.getOuterHtml() + "<span>&nbsp;</span>");
                                    element.getParent().setHtml(test);
                                } else {
                                    return true;
                                }
                            }
                            var _settingSpan = editor.document.getById(tempId);
                            _settingSpan.removeAttribute("id");
                            _settingSpan.setAttribute("data-id", varVal)
                        }
                    }
                }
            };
        }
    );
})();