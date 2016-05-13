/**
 * Created by HZL on 2016/5/4.
 */
import data from 'gulp-data';
import json from '../../views/siteData.json';

module.exports = (gulp, config, $, args) => {

    gulp.task('compileHtml', ['clean:compile'], () => {

        const options = {
            batch: ['./views/partials'],
            helpers: {}
        };

        return gulp.src([
                './views/**/*.hbs',
                '!./views/partials/**/*'
            ])
            .pipe(data(() => json))
            .pipe($.compileHandlebars(data, options))
            .pipe($.rename((path) => {
                path.extname = '.html';
            }))
            .pipe(gulp.dest(config.compile));
    });


    gulp.task('public', ['clean:compile'], () => {
        return gulp.src([
                config.common,
                `!${config.common}**/*.es6`
            ])
            .pipe(gulp.dest(config.compile))

    });


    gulp.task('compile', ['public', 'compileHtml']);

};



