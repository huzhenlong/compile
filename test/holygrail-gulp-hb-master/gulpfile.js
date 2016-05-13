//
//  TODO: Add W3C Validation
//  TODO: Add uglify
//  TODO: Uglify assets for JS
//

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
//  DEPENDENCIES:                                                                     //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////

    // General/utility:
    var gulp     = require( 'gulp' ),
        sequence = require( 'run-sequence' ),
        rename   = require( 'gulp-rename' ),
        util     = require( 'gulp-util' ),
        concat   = require( 'gulp-concat' ),

        // Bower/Assets (3rd-party Front-end Dependency Management):
        bower    = require( 'gulp-bower' ),

        // Assembly (Handlebars -> HTML compilation):
        hb            = require( 'gulp-hb' ),
        front_matter  = require( 'gulp-front-matter' ),
        extname       = require( 'gulp-extname' ),
        prettify      = require( 'gulp-prettify' ),

        // SASS (Syntactically Awesome Stylesheets):
        sass       = require( 'gulp-ruby-sass' ),
        sourcemaps = require( 'gulp-sourcemaps' ),
        css_min    = require( 'gulp-minify-css' ),

        // Validators (to catch large JS/HTML errors):
        js_validate = require( 'gulp-jsvalidate' ),
        hint_html   = require( 'gulp-htmlhint' ),

        // Linters
        lint_scss  = require( 'gulp-scss-lint' ),
        lint_css   = require( 'gulp-csslint' ),
        lint_js    = require( 'gulp-jslint' ),
        lint_html5 = require( 'gulp-html5-lint' ),

        // External JSON-driven config and asset-mapping
        config    = require( './gulp_assets/config.json' ),
        asset_map = require( './gulp_assets/asset_map.js' )( config );


////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
//  BOWER:                                                                            //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////

    // Bower installation
    gulp.task( 'bower_install', function() {

        return bower().pipe( gulp.dest( config.bower_components ) );
    });

    // Bower copy
    // - Looks at asset_map and copies assets to correct locations
    // - Look into better option for asset mapping
    gulp.task( 'bower_copy', function() {

        for( var asset_name in asset_map ) {

            var src  = asset_map[ asset_name ].src;
            var dest = asset_map[ asset_name ].dest;

            util.log( 'Copying ' + asset_name + ' assets from asset mapping.' );

            // If src is object then the key is the destination filename (for renaming files)
            if( typeof src === 'object' ) {

                for( var rename_to in src ) {

                    var src_file = src[ rename_to ];

                    util.log( 'Rename ' + src_file + ' to ' + rename_to );

                    gulp.src( src_file )
                        .pipe( rename( rename_to ) )
                        .pipe( gulp.dest( dest ) );
                }

            } else {

                gulp.src( src ).pipe( gulp.dest( dest ) );
            }
        }
    });

    // Full Bower task
    gulp.task( 'bower', function( callback ) {

        sequence( 'bower_install', 'bower_copy', callback );
    });


////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
//  HANDLEBARS/HTML:                                                                  //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////

    // Assemble (hold on to your butts.)
    gulp.task( 'assemble', function() {

        return gulp
            .src( config.hbs_pages )
            .pipe( front_matter() )
            .pipe( hb({
                data      : config.hbs_data,
                helpers   : config.hbs_helpers,
                partials  : config.hbs_partials
            }))
            .pipe( extname() )
            .pipe( gulp.dest( config.build_dir ) );
    });

    // Prettify HTML
    gulp.task('prettify', function() {

        return gulp.src( config.build_html )
            .pipe( prettify( config.opts_prettify ) )
            .pipe( gulp.dest( config.build_dir ) );
    });


////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
//  SASS/CSS MINIFICATION:                                                            //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////

    // SASS -> CSS compiliation
    gulp.task( 'sass', function () {

        return sass( './sass_build/main.scss', config.opts_sass )
            .pipe( sourcemaps.write( 'maps', {
                includeContent : false,
                sourceRoot     : config.sass_sourcemap_relative_dir
            }))
            .pipe( gulp.dest( config.css_assets ) );
    });

    // SASS -> CSS compiliation
    // - FOR ALL STYLESHEETS INCLUDING ALT LAYOUTS
    gulp.task( 'sass_all', function () {

        return sass( './sass_build/', config.opts_sass )
            .pipe( sourcemaps.write( 'maps', {
                includeContent : false,
                sourceRoot     : config.sass_sourcemap_relative_dir
            }))
            .pipe( gulp.dest( config.css_assets ) );
    });

    // CSS Minification
    gulp.task( 'mincss', function() {

        return gulp.src( [
            config.css_assets + '/**.css',
            '!' + config.css_assets + '/**.min.css'
        ] )
            .pipe( css_min( { compatibility: 'ie8' } ) )
            .pipe( rename( { suffix: '.min' } ) )
            .pipe( sourcemaps.write( 'maps', {
                includeContent : false,
                sourceRoot     : config.sass_sourcemap_relative_dir
            }))
            .pipe( gulp.dest( config.css_assets ) );
    });


////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
//  BUILD/COMPILE:                                                                    //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////

    // Compile the base site assets
    gulp.task( 'compile', function( callback ) {

        sequence( [ 'assemble', 'sass' ], callback );
    });

    // Compile the base site assets (including alt layouts)
    gulp.task( 'compile_all', function( callback ) {

        sequence( [ 'assemble', 'sass_all' ], callback );
    });


    // Post-process compiled assets into their final compiled/optimized forms
    gulp.task( 'post_process', function( callback ) {

        sequence( 'prettify', 'mincss', callback );
    });

    // Run tests on all compiled site assets (SCSS, CSS, HTML, and JS)
    gulp.task( 'tests', function( callback ) {

        sequence(
            'lint_sass',
            'lint_css',
            'lint_js',
            'lint_html5',
            'js_validate',
            'html_hint',
            callback
        );
    });


////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
//  TESTS/LINTERS:                                                                    //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////

    // HTML Hint based validation
    gulp.task( 'html_hint', function () {

        return gulp.src( config.build_html )
            .pipe( hint_html( { htmlhintrc : './gulp_assets/hint_html_config.json' } ) )
            .pipe( hint_html.reporter() );
    });

    // Validate JS assets
    gulp.task( 'js_validate', function() {

        return gulp.src( config.js_files )
            .pipe( js_validate() );
    });

    // Linter for SASS
    gulp.task('lint_sass', function() {

        return gulp.src( [
            config.sass_assets + '/**/*.scss',
            '!' + config.sass_vendor + '/**/*.scss',
        ] )
        .pipe(
            lint_scss({
                reporterOutput : './gulp_assets/lint_scss_report.json',
                config         : './gulp_assets/lint_scss_config.yaml'
            })
        );
    });

    // CSS Linting
    gulp.task( 'lint_css', function() {

        return gulp.src( config.main_css_asset )
          .pipe( lint_css( './gulp_assets/lint_css_config.json' ) )
          .pipe( lint_css.reporter() );
    });


    // JS Linting
    gulp.task( 'lint_js', function () {

        return gulp.src( config.js_site_files )
            .pipe( lint_js({
                node: false,
                errorsOnly: false,
                sloppy: true,
                white: true,
                predef: [ '$', 'window', 'document' ]
            }))
            .on('error', function (e) { console.error( String( e ) ); });
    });

    // HTML5 Linting
    gulp.task( 'lint_html5', function() {

        return gulp.src( config.build_html )
            .pipe( lint_html5() );
    });
