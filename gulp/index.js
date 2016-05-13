/**
 * Created by HZL on 2016/5/4.
 */
import  gulp from 'gulp';
import  gulpConfig from './gulp.config';
import  plugins from 'gulp-load-plugins';
import  yargs from 'yargs';
import  fs from 'fs';

let config = gulpConfig();
let $ = plugins({lazy: true});
let args = yargs.argv;
let taskList = fs.readdirSync('./gulp/tasks/');


taskList.forEach((file) => {
    require('./tasks/' + file)(gulp, config, $, args);
});

gulp.task('default', $.taskListing);






