(function () {
    function HelloWorldDialog(editor) {

        return {
            title: '对谁说Hello',
            minWidth: 300,
            minHeight: 80,
            buttons: [
                CKEDITOR.dialog.okButton,
                CKEDITOR.dialog.cancelButton],
            contents:
                [
                    {
                        id: 'info',
                        label: '名字',
                        title: '名字',
                        elements:
                            [
                                {
                                    id: 'text',
                                    type: 'text',
                                    style: 'width: 50%;',
                                    label: '名字',
                                    'default': '',
                                    required: true,
                                    validate: CKEDITOR.dialog.validate.notEmpty('名字不能为空'),
                                    commit: function (editor) {
                                        var text = 'Hello '+this.getValue();
                                        var element = new CKEDITOR.dom.element('span', editor.document);
                                        element.setText(text);
                                        editor.insertElement(element);
                                    }
                                }
                            ]
                    }
                ],


            onOk: function () {
                this.commitContent(editor);
            },
            resizable: CKEDITOR.DIALOG_RESIZE_HEIGHT
        };
    }


    CKEDITOR.dialog.add('insertTimestamp', function (editor) {
        return HelloWorldDialog(editor);
    });
})();