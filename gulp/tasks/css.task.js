/**
 * Created by HZL on 2016/5/4.
 */
module.exports = (gulp, config, $, args) => {

    gulp.task('lintCss', ['clean:release'], () => {
        return gulp.src(`${config.release}css/*.css`)
            .pipe($.csslint())
            .pipe($.csslint.reporter())
            .pipe($.csslint.failReporter());
    });
};