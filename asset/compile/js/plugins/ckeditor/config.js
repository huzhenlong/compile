/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {

    //去除图片描述
    config.image_previewText = ' ';

    //添加的插件
    config.extraPlugins = 'individuation,individuation_cancel,insertVariable';

    //额外添加的元素
    config.allowedContent = true;
    config.extraAllowedContent = 'nav[src,title](specific)';

    //工具栏内容
        config.toolbarGroups = [
        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
        { name: 'forms', groups: [ 'forms' ] },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
        { name: 'links', groups: [ 'links' ] },
        '/',
        { name: 'insert', groups: [ 'insert' ] },
        { name: 'styles', groups: [ 'styles' ] },
        { name: 'colors', groups: [ 'colors' ] },
        { name: 'tools', groups: [ 'tools' ] },
        { name: 'others', groups: [ 'others' ] },
        { name: 'about', groups: [ 'variable' ,'about'] }
    ];

    config.removeButtons = 'Source,Save,NewPage,Preview,Print,Templates,Cut,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Subscript,Superscript,RemoveFormat,NumberedList,BulletedList,Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Anchor,Flash,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,TextColor,BGColor,Maximize,ShowBlocks,About';

};
