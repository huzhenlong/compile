/**
 * Created by HZL on 2016/5/4.
 */
import del from 'del';

module.exports = (gulp, config, $, args) => {
    gulp.task('clean:all', (cb) => {
        del([
            './asset'
        ], cb);
    });

    gulp.task('clean:compile', (cb) => {
        del([
            './asset/compile'
        ], cb);
    });

    gulp.task('clean:develop', (cb) => {
        del([
            './asset/develop'
        ], cb);
    });

    gulp.task('clean:release', (cb) => {
        del([
            './asset/release'
        ], cb);
    });


    gulp.task('clean:html', (cb) => {
        del([
            './asset/compile/*.html'
        ], cb);
    });
};