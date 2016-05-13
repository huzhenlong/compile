(function () {

    //添加的插件
    CKEDITOR.plugins.add('insertVariable', {

        //按钮图标
        icons: 'insertVariable',

        //region 初始化插件
        //初始化
        init: function (editor) {
            //添加弹窗
            editor.addCommand('insertVariable', new CKEDITOR.dialogCommand('insertVariableDialog'));
            //添加按钮
            editor.ui.addButton('insertVariable', {
                //按钮说明
                label: TxtContent.ckeitor.insert,
                //执行插件
                command: 'insertVariable',
                //按钮位置
                toolbar: 'variable'
            });

            //弹窗路径
            CKEDITOR.dialog.add('insertVariableDialog', this.path + 'dialogs/insertVariable.js');

            editor.on("instanceReady", function () {
                var command = editor.getCommand("insertVariable");
                command.disable();
                //按钮功能的开启与失效
                this.element.on("mouseup", function () {
                    var selection = editor.getSelection();
                    var element = selection.getStartElement();
                    if (element) {
                        if (element.hasClass("specific") || element.hasClass("variable") || element.hasClass("editorImg")) {
                            command.disable();
                        } else {
                            command.enable();
                        }
                    }
                });
            });
        }
        //endregion
    });

})();