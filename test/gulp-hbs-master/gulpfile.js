var gulp                = require('gulp');
//var styleguide        = require('sc5-styleguide');
var sass                = require('gulp-sass');
var del                 = require('del');
var browserSync         = require('browser-sync').create();
var handlebars          = require('gulp-compile-handlebars');
//var nunjucksRender    = require('gulp-nunjucks-render');
//var mustache            = require('gulp-mustache-plus');
var uglify              = require('gulp-uglify');
var data                = require('gulp-data');
var gutil               = require('gulp-util');
var rename              = require("gulp-rename");
var fs                  = require('fs');

var src = {
    scss: 'src/sass/**/*.scss',
    css:  'src/css',
    html: 'src/*.html'
};

var dist = {
    scss:       'dist/sass/**/*.scss',
    css:        'dist/css',
    scripts:    'dist/js',
    html:       'dist/*.html'
};

//sc5-styleguide - output
var outputPath = 'output';

gulp.task('serve', function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch(['./src/js/*.js'], ['scripts']);
    gulp.watch(['./src/sass/**/*.scss'], ['sass']);
    gulp.watch('./**/*.hbs', ['templates']);

});


gulp.task('clean:dist', function () {
  return del([
    'dist/**/*'
  ]);
});

gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass())
        .pipe(gulp.dest(dist.css))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        //.pipe(concat('main.js'))
        //.pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(dist.scripts))
        .pipe(browserSync.stream());
});

gulp.task('templates', function () {

    var templateData = JSON.parse(fs.readFileSync('./src/data/sitedata.json')),

	options = {
		ignorePartials: true,
		batch : ['./src/partials'],
		helpers : {
			capitals : function(str) {
				return str.toUpperCase();
			}
		}
	};
	return gulp.src('src/*.hbs')
            .pipe(handlebars(templateData, options))
        .pipe(rename({
            extname: ".html"
          }))
		.pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

// Default task
gulp.task('default', ['clean:dist', 'scripts', 'templates', 'sass', 'serve'], function() {});
