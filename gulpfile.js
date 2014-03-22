/**
 * Created by azu on 2014/03/22.
 * LICENSE : MIT
 */
"use strict";
var gulp = require('gulp');
var powerDoctest = require("gulp-power-doctest");
gulp.task('tests', function () {
    gulp.src("src/**/*.js")
        .pipe(powerDoctest());
});

gulp.task('watch', function () {
    gulp.watch("src/**/*.js", ["tests"]);
});
