(function () {

    CKEDITOR.plugins.add( 'timestamp', {
        icons: 'timestamp',
        init: function( editor ) {

            CKEDITOR.dialog.add('insertTimestamp', this.path + 'dialogs/insertTimestamp.js');
            editor.addCommand('insertTimestamp', new CKEDITOR.dialogCommand('insertTimestamp'));

            editor.ui.addButton( 'Timestamp', {
                label: 'Insert Timestamp',
                command: 'insertTimestamp',
                toolbar: 'insert'
            });
        }
    });


})();