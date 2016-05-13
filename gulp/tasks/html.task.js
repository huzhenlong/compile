/**
 * Created by HZL on 2016/5/4.
 */
import data from 'gulp-data';
import json from '../../views/siteData.json';

module.exports = (gulp, config, $, args) => {

    gulp.task('html', ['clean:html'], () => {

        const options = {
            batch: ['./views/partials'],
            helpers: {}
        };

        return gulp.src([
                './views/**/*.hbs',
                '!./views/partials/**/*'
            ])
            .pipe(data(() =>json))
            .pipe($.compileHandlebars(data, options))
            .pipe($.rename(function (path) {
                path.extname = '.html';
            }))
            .pipe(gulp.dest(config.compile));
    });
};