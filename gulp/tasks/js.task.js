/**
 * Created by HZL on 2016/5/4.
 */
import stylish from 'jshint-stylish';

module.exports = (gulp, config, $, args) => {

    gulp.task('lintJs', ['clean:release'], () => {
        return gulp.src(`${config.release}js/*.js`)
            //.pipe(jscs())   //检测JS风格
            .pipe($.jshint({
                "undef": false,
                "unused": false
            }))
            //.pipe(jshint.reporter('default'))  //错误默认提示
            .pipe($.jshint.reporter(stylish))   //高亮提示
            .pipe($.jshint.reporter('fail'));
    });
};