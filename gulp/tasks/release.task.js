/**
 * Created by HZL on 2016/5/4.
 */
import pngquant from 'imagemin-pngquant';
import runSequence from 'run-sequence';

module.exports = (gulp, config, $, args) => {

    gulp.task('complete', () => {
        gulp.src(`${config.develop}css/**/*`)
            .pipe(gulp.dest(`${config.release}css`));

        gulp.src(`${config.develop}js/**/*`)
            .pipe(gulp.dest(`${config.release}js`));

        gulp.src(`${config.develop}font-awesome/**/*`)
            .pipe(gulp.dest(`${config.release}font-awesome`));

        gulp.src(`${config.develop}fonts/**/*`)
            .pipe(gulp.dest(`${config.release}fonts`));


        gulp.src(`${config.develop}lang/**/*`)
            .pipe(gulp.dest(`${config.release}lang`));

        gulp.src(`${config.develop}localisation/**/*`)
            .pipe(gulp.dest(`${config.release}localisation`));

        gulp.src(`${config.develop}smsTemplate.html`)
            .pipe(gulp.dest(`${config.release}`));


        gulp.src(`${config.develop}img/**`)
            .pipe($.imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()]
            }))
            .pipe(gulp.dest(`${config.release}img`));
    });

    gulp.task('minHtml', ['clean:release'], () => {
        return gulp.src([
                `${config.develop}*.html`,
                `!${config.develop}smsTemplate.html`
            ])
            .pipe($.useref())
            .pipe($.if('*.js', $.uglify()))
            .pipe($.if('*.css', $.minifyCss()))
            .pipe(gulp.dest(config.release));
    });


    gulp.task('jsRev', () => {
        return gulp.src(`${config.release}js/*.js`)
            .pipe($.rev())
            .pipe(gulp.dest(`${config.release}js`))
            .pipe($.rev.manifest())
            .pipe(gulp.dest(`${config.release}rev/js`));
    });

    gulp.task('cssRev', () => {
        return gulp.src(`${config.release}css/*.css`)
            .pipe($.rev())
            .pipe(gulp.dest(`${config.release}css`))
            .pipe($.rev.manifest())
            .pipe(gulp.dest(`${config.release}rev/css`));
    });

    gulp.task('htmlRev', () => {
        return gulp.src([`${config.release}rev/**/*.json`, `${config.release}*.html`])
            .pipe($.revCollector())
            .pipe(gulp.dest(config.release));
    });

    gulp.task('release', ['minHtml'], (done) => {
        runSequence(
            ['jsRev', 'cssRev'],
            ['htmlRev'],
            ['complete'],
            done);
    });


};




/* gulp.task('font-awesome', ['clean:release'], function () {
     return gulp.src(config.develop + 'font-awesome/!**!/!*')
     .pipe($.rev())
     .pipe(gulp.dest(config.release + 'font-awesome'))
     .pipe($.rev.manifest())
     .pipe(gulp.dest(config.release + 'rev/font-awesome'));
     });

     gulp.task('fonts', ['clean:release'], function () {
     return gulp.src(config.develop + 'fonts/!**!/!*')
     .pipe($.rev())
     .pipe(gulp.dest(config.release + 'fonts'))
     .pipe($.rev.manifest())
     .pipe(gulp.dest(config.release + 'rev/fonts'));
     });

     gulp.task('minImg', ['clean:release'], function () {
     return gulp.src(config.develop + 'img/!**')
     .pipe($.imagemin({
     progressive: true,
     svgoPlugins: [{removeViewBox: false}],
     use: [pngquant()]
     }))
     .pipe($.rev())
     .pipe(gulp.dest(config.release + 'img'))
     .pipe($.rev.manifest())
     .pipe(gulp.dest(config.release + 'rev/img'));
     });
     gulp.task('revCollectorCss', function () {
     return gulp.src([config.release + 'rev/!**!/!*.json', config.release + 'css/!*.css'])
     .pipe($.revCollector())
     .pipe(gulp.dest(config.release + 'css'));
     });*/

