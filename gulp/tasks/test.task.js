/**
 * Created by HZL on 2016/5/4.
 */

import pngquant from 'imagemin-pngquant';
import data from 'gulp-data';
import json from '../../views/siteData.json';
import del from 'del';
import gulp from 'gulp';
//import browserify from 'gulp-browserify';
import rename from 'gulp-rename';


module.exports = (gulp, config, $, args) => {

    gulp.task('test', () => {
        /*gulp.src(config.common)
         .pipe(gulp.dest(config.compile))*/

        gulp.src(`${config.develop}smsTemplate.html`)
            .pipe(gulp.dest(`${config.release}`));

    });

    gulp.task('watch', () => {
        return gulp.src('src/**/*.js')
            .pipe($.watch('src/**/*.js', {
                verbose: true
            }))
            .pipe($.babel())
            .pipe(gulp.dest('lib'));
    });


    gulp.task('htmlOnlyOne', () => {

        const options = {
            batch: ['./views/partials'],
            helpers: {}
        };

        gulp.src([
                './views/index.hbs',
                '!./views/partials/**/*'
            ])
            .pipe(data(() => json))
            .pipe($.compileHandlebars(data, options))
            .pipe($.rename((path) => {
                path.extname = '.html';
            }))
            .pipe(gulp.dest(config.compile));
    });


    gulp.task('es6', () => {

        /*del([
         './public/js/smartgroup/smart.js'
         ]);*/
        gulp.src('./public/js/smartgroup/smart.js')
            .pipe($.sourcemaps.init())
            .pipe($.babel({
                presets: ['es2015']
            }))
            .pipe($.concat('bundle.js'))
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest('./public/js/smartgroup'));


        gulp.src('./public/js/smartgroup/bundle.js')
            .pipe($.webpack({
                output: {
                    filename: 'bundle.js',
                }
            }))
            .pipe(gulp.dest('./public/js/smartgroup'));
    });


    gulp.task('browser', () => {
        gulp.src('./public/js/smartgroup/smart.es6', {read: false})
            .pipe(browserify({
                transform: ['babelify'],
                extensions: ['.es6']
            }))
            .pipe($.babel({
                presets: ['es2015']
            }))
            .pipe(rename('bundle.js'))
            .pipe(gulp.dest('./public/js/smartgroup'))
    });

    gulp.task('sss', () => {
        /*gulp.src(config.develop + 'fonts/!**!/!*')
         .pipe(gulp.dest(config.release + 'fonts'));*/

        /*gulp.src(config.develop + 'css/!**!/!*')
         .pipe(gulp.dest(config.release + 'css'));*/


        /*gulp.src(config.develop + 'individuation.html')

         .pipe($.useref())
         .pipe($.if('*.js', $.uglify()))
         .pipe($.if('*.css', $.minifyCss()))
         .pipe(gulp.dest(config.release));*/


        /*gulp.src([
         config.develop + '*.html',
         !config.develop + 'smsTemplate.html'
         ])
         .pipe($.useref())
         .pipe($.if('*.js', $.uglify()))
         .pipe($.if('*.css', $.minifyCss()))
         .pipe(gulp.dest(config.release));*/


        const options = {
            batch: ['./views/partials'],
            helpers: {}
        };

        gulp.src([
                './views/parameterSetting.hbs',
                '!./views/partials/**/*'
            ])
            .pipe(data(() => json))
            .pipe($.compileHandlebars(data, options))
            .pipe($.rename((path) => {
                path.extname = '.html';
            }))
            .pipe(gulp.dest(config.compile));

    })


};