(function () {

    //添加的插件
    CKEDITOR.plugins.add('individuation', {

        //按钮图标
        icons: 'individuation',

        //region 初始化插件
        //初始化
        init: function (editor) {
            //添加弹窗
            editor.addCommand('individuation', new CKEDITOR.dialogCommand('individuationDialog'));
            //添加按钮
            editor.ui.addButton('individuation', {
                //按钮说明
                label: TxtContent.ckeitor.label,
                //执行插件
                command: 'individuation',
                //按钮位置
                toolbar: 'about,0'
            });

            //弹窗路径
            CKEDITOR.dialog.add('individuationDialog', this.path + 'dialogs/individuation.js');

            editor.on("instanceReady", function () {

                //按钮功能的开启与失效
                this.element.on("mouseup", function () {
                    var command = editor.getCommand("individuation");
                    var selection = editor.getSelection();
                    var selTxt = selection.getSelectedText();
                    var element = selection.getStartElement();

                    if (element) {
                        if (element.getName() == "img"
                            || (element.getName() == "a" && selTxt)
                            || (element.getName() == "nav" && element.hasClass("specific"))
                            || (selTxt != "" && element.getName() != "em" )
                            || (element.getName() == "a" && element.getParent().getName() == "nav")
                            || $(element.$).data("nav")) {
                            command.enable();
                        } else {
                            command.disable();
                        }
                    } else {
                        command.disable();
                    }
                });
            });
        }
        //endregion
    });

})();