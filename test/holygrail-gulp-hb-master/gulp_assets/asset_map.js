module.exports = function( config ) {

    return {

        //
        //  Holy Grail
        //
        hg_sass: {
            src  : config.bower_components + '/holygrail/sass/**/*.scss',
            dest : config.sass_vendor + '/holygrail'
        },

        hg_js: {
            src  : config.bower_components + '/holygrail/js/*.js',
            dest : config.js_vendor + '/holygrail'
        },

        hg_img: {
            src  : config.bower_components + '/holygrail/img/*',
            dest : config.img_vendor + '/holygrail'
        },


        // NOTE: Move normalize SASS vendor directory
        normalize: {
            src : { '_normalize.scss' : config.bower_components + '/normalize-css/normalize.css' },
            dest : config.sass_vendor
        },

        modernizr: {
            src  : config.bower_components + '/modernizr/modernizr.js',
            dest : config.js_vendor + '/modernizr'
        },

        respond: {
            src  : {
                'respond.js'     : config.bower_components + '/respond/dest/respond.src.js',
                'respond.min.js' : config.bower_components + '/respond/dest/respond.min.js'
            },
            dest : config.js_vendor + '/respond'
        },

    	bourbon: {
    		src : config.bower_components + '/bourbon/app/assets/stylesheets/**',
    		dest : config.sass_vendor + '/bourbon'
    	},

    	// neat: {
    	// 	src : config.bower_components + '/neat/app/assets/stylesheets/**',
    	// 	dest : config.sass_vendor + '/neat'
    	// },

        // jQuery + jQuery Plugins:

        jquery: {
            src  : config.bower_components + '/jquery/dist/jquery.*',
            dest : config.js_vendor + '/jquery'
        },

        jquery_detect_swipe: {
            src  : config.bower_components + '/jquery-detect-swipe/jquery.detect_swipe.js',
            dest : config.js_vendor
        },

        // Open Sans

        open_sans_fonts: {
            src  : config.bower_components + '/open-sans-fontface/fonts/**',
            dest : config.font_vendor + '/open_sans'
        },

        open_sans_sass: {
            src  : config.bower_components + '/open-sans-fontface/sass/_*.scss',
            dest : config.sass_vendor + '/open_sans'
        },

        // Gridle

        gridle_sass: {
            src  : config.bower_components + '/gridle/sass/gridle/**',
            dest : config.sass_vendor + '/gridle'
        },

        gridle_js: {
            src  : config.bower_components + '/gridle/js/gridle*',
            dest : config.js_vendor + '/gridle'
        },

        // Prism

        prism_css: {
            src  : config.bower_components + '/prism/themes/prism.css',
            dest : config.css_vendor
        },

        prism_js: {
            src  : config.bower_components + '/prism/prism.js',
            dest : config.js_vendor + '/prism'
        },

        prism_js_sass: {
            src  : config.bower_components + '/prism/components/prism-scss.js',
            dest : config.js_vendor + '/prism'
        },

        prism_js_handlebars: {
            src  : config.bower_components + '/prism/components/prism-handlebars.js',
            dest : config.js_vendor + '/prism'
        },

        // Font Awesome

        font_awesome_fonts: {
            src  : config.bower_components + '/font-awesome/fonts/*',
            dest : config.font_vendor + '/font_awesome'
        },

        font_awesome_sass: {
            src  : config.bower_components + '/font-awesome/scss/_*.scss',
            dest : config.sass_vendor + '/font_awesome'
        }
    };
}