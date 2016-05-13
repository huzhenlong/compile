/**
 * Created by HZL on 2016/5/4.
 */

module.exports =  (gulp, config, $, args) => {
    gulp.task('develop', ['clean:develop'],  () => {
        return gulp.src(`${config.compile}**/*`)
            .pipe(gulp.dest(config.develop));
    });
};
