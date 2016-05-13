(function () {
    var delATag = function (element) {
        var innerHtml = element.getHtml();
        var begin = '<a href="#" class="editorImg" target="_blank">';
        element.setHtml(innerHtml.replace(begin, '').replace('</a>', ''));
    };

    //取消个性化
    CKEDITOR.plugins.add('individuation_cancel', {

        //按钮图标
        icons: 'individuation_cancel',

        //region 初始化
        init: function (editor) {

            //删除标注的区域
            editor.addCommand('individuation_cancel', {
                exec: function (editor) {

                    //region 删除数据
                    var delData = function (spanId) {
                        PERSONALIZE.delIndividuationSetting({"data": spanId}, function () {
                            var updateData = XREWIN.FormData({
                                "html": $("#eArea").html(),
                                "key": XREWIN.getUrlParam("key"),
                                "groupKey": localStorage["group_key"]
                            });
                            PERSONALIZE.updateMailTemplate(updateData);
                        });
                    };
                    //endregion

                    //region 删除标记
                    var element = editor.getSelection().getStartElement();
                    if (element.getName() == 'nav' || element.getName() == 'a') {
                        if (element.hasClass("specific")) {
                            var dsId = element.getAttribute("data-nav");
                            //删除数据
                            delData(dsId);
                            var txtVal = element.getText();
                            var rep = element.getOuterHtml();
                            var result = element.getOuterHtml().replace(rep, txtVal);
                            element.remove();
                            editor.insertHtml(result);
                        } else {
                            var dId = element.getParent().getAttribute("data-nav");
                            //删除数据
                            delData(dId);
                            element.getParent().remove();
                            editor.insertHtml(element.$.innerHTML);
                        }
                    }
                    if (element.hasClass("editorImg") && element.getName() == 'img') {
                        element.removeClass("editorImg");
                        var dId;
                        var parentEl = element.getParent();
                        if (parentEl.getName() == "a") {
                            parentEl = parentEl.getParent();
                            delATag(parentEl);
                        }
                        dId = parentEl.getAttribute("data-nav");
                        //删除数据
                        delData(dId);
                        parentEl.remove();
                        editor.insertHtml(element.getOuterHtml());
                    }
                    //endregion
                }
            });

            //region 添加按钮
            //添加的按钮
            editor.ui.addButton('individuation_cancel', {
                label: TxtContent.ckeitor.cancelPer,
                command: 'individuation_cancel',
                toolbar: 'about'
            });
            //endregion

            //region 按钮的开启与失效
            //按钮的开启与失效
            editor.on("mouseup", function () {
                var command = editor.getCommand("individuation_cancel");
                command.disable();
                var element = editor.getSelection().getStartElement();
                if (element) {
                    if (element.getName() == 'nav') {
                        if (element.hasClass("specific")) {
                            command.enable();
                        }
                    }
                    if (element.hasClass("editorImg")) {
                        command.enable();
                    }
                }
            });
            //endregion
        }
        //endregion
    });
})();