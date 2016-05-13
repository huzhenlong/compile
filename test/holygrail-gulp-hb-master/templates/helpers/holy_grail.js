
module.exports.register = function (Handlebars, options)  {

    //
    //  Layout Class Lookup:
    //  - NOTE: Useful for when using overridden layout classes
    //
    Handlebars.registerHelper( 'layout_class', function ( template_class ) {

        var lookup = {
            one_full        : 'one_full',        // Layout One Full
            two_left_1      : 'two_left_1',      // Layout 2 Left Configuration 1
            two_left_2      : 'two_left_2',      // Layout 2 Left Configuration 2
            two_right_1     : 'two_right_1',     // Layout 2 Right Configuration 1
            two_right_2     : 'two_right_2',     // Layout 2 Right Configuration 2
            three_left_1    : 'three_left_1',    // Layout 3 Left Configuration 1
            three_left_2    : 'three_left_2',    // Layout 3 Left Configuration 2
            three_right_1   : 'three_right_1',   // Layout 3 Right Configuration 1
            three_right_2   : 'three_right_2',   // Layout 3 Right Configuration 2
            three_wrapped_1 : 'three_wrapped_1', // Layout 3 Wrapped Configuration 1
            three_wrapped_2 : 'three_wrapped_2'  // Layout 3 Wrapped Configuration 2
        };

        // Grab the correct template class
        if( lookup.hasOwnProperty( template_class ) ) {

            return lookup[ template_class ];
        }

        // Return one_full layout by default
        return 'one_full';
    });

    //
    //  Sidebars:
    //
    Handlebars.registerHelper( 'render_sidebars', function ( template_class, left_partials, right_partials, affix, context ) {

        var both_classes  = [ 'three_right_1', 'three_right_2', 'three_left_1', 'three_left_2', 'three_wrapped_1', 'three_wrapped_2' ];
        var left_classes  = [ 'two_left_1', 'two_left_2' ];
        var right_classes = [ 'two_right_1', 'two_right_2' ];

        left_classes  = left_classes.concat( both_classes );
        right_classes = right_classes.concat( both_classes );

        var html = '';
        var affix_class = affix ? 'class="affix"' : '';

        // Has left sidebar
        if ( left_classes.indexOf( template_class ) !== -1 && left_partials ) {

            html += '<aside id="sidebar_left" ' + affix_class + '><div class="gutter_sidebar">';

            for( var i = 0; i < left_partials.length; i++ ) {

                html += '<div class="segment">' + Handlebars.helpers.partial( left_partials[i], context ) + '</div>';
            }

            html += '</div></aside>';
        }

        // Has right sidebar
        if ( right_classes.indexOf( template_class ) !== -1 && right_partials ) {

            html += '<aside id="sidebar_right" ' + affix_class + '><div class="gutter_sidebar">';

            for( var i = 0; i < right_partials.length; i++ ) {

                html += '<div class="segment">' + Handlebars.helpers.partial( right_partials[i], context ) + '</div>';
            }

            html += '</div></aside>';
        }

        return html;
    });

    //
    //  Breadcrumbs:
    //
    Handlebars.registerHelper( 'crumbs', function ( crumbs_arr, context ) {

        var html = '<ol class="breadcrumb">';

        for(var i = 0; i < crumbs_arr.length; i++) {

            var crumb_arr = crumbs_arr[i].split( '|' );
            var href = ( crumb_arr.length > 1 ) ? crumb_arr[1] : '';
            var text = crumb_arr[0];
            var content = ( href.length ) ? '<a href="' + href +  '">' + text + '</a>' : text;
            var active_class = ( i == ( crumbs_arr.length - 1 ) ) ? ' class="active"' : '';

            html += '<li' + active_class + '>' + content + '</li>';
        }

        html += '</ol>';

        return html;
    });

    //
    //  JS/CSS Assets:
    //
    Handlebars.registerHelper( 'render_assets', function ( asset_type, asset_arr, context ) {


        // Ensure there are assets to load
        if( asset_arr !== undefined ) {

            // Setup appropriate HTML wrapper depending on asset type
            var wrap_start = ( asset_type === 'css' ) ?
                '<link href="' :
                '<script src="';

            var wrap_end = ( asset_type === 'css' ) ?
                '" rel="stylesheet" media="screen">' :
                '"></script>';

            // Fix context for base_url if null (root pages)
            var base_url = ( ! context.file.frontMatter.base_url ) ?
                '' :
                context.file.frontMatter.base_url;

            // HTML output
            var html = '';

            for( var i = 0; i < asset_arr.length; i++ ) {

                // Ensure the asset is not external before adding base_url
                var src = ( /^(f|ht)tps?:\/\//i.test( asset_arr[i] ) ) ?
                    asset_arr[i] :
                    base_url + asset_arr[i];

                html += wrap_start + src + wrap_end + "\n";
            }

            return html;
        }

        return false;
    });
};
