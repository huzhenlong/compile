var stylesheets_root = '';
var main_id = '#main_css';

//
//  Removes a stylesheet by element ID
//
function removeStylesheetByID( ele_id ) {

    $( ele_id ).remove();
}

//
//  Appends a stylesheet to the head
//
function addStylesheet( stylesheet, ele_id ) {

    $( 'head' ).append( '<link href="' + stylesheets_root + stylesheet + '" rel="stylesheet" id="' + ele_id + '" />' );
}

//
//	Setup the Stylesheet Switcher
//
$( window ).on( 'load', function() {

	// Check old stylesheet root and store
	stylesheets_root = $( main_id ).attr( 'href' );
	stylesheets_root = stylesheets_root.slice( 0, stylesheets_root.lastIndexOf( '/' ) ) + '/';

	// Bind click event to layout switcher
	$( '#layout_switcher a' ).on( 'click', function ( e ) {

		e.preventDefault();

		removeStylesheetByID( main_id );

		addStylesheet( stylesheets_root + $( this ).attr( 'href' ), main_id );

		return false;
	});
});
