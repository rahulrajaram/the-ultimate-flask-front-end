const fs = require("fs");
const gulp = require('gulp');
const browserify = require("browserify");

const baseJSXFile = './project/static/scripts/jsx/components/app.js';
const outputJSFile = './project/static/scripts/js/bundle.js';

/*
Task:
    - reads the base JSX file
    - transforms it to JS
    - bundles the base JS file and its dependencies into a single file
    - minifies the JS file
    - writes it to the output JS file

To execute this task, run:

    gulp transform
*/
const transform = function () {
    return browserify(baseJSXFile)
      .transform("babelify", {presets: ["@babel/preset-env", "@babel/preset-react"]})
      .bundle()
      .pipe(require('minify-stream')({ sourceMap: false }))
      .pipe(fs.createWriteStream(outputJSFile));
}
gulp.task('transform', transform);

/*
Task:
    - invokes the 'transform' task
    - continuously `watch`es changes to the *.js in jsx/
*/
gulp.task('default', async function() {
    gulp.watch('./project/static/scripts/jsx/components/*.js', transform);
});
