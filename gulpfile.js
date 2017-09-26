var browserify = require('browserify');
var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');


var bundler = browserify({
    entries: ['./offline.js'],
    standalone: 'nvOffline',
    debug: true,
});

gulp.task('module', function() {
        return bundler
            .bundle()
            .pipe(source('offline.js'))
            .pipe(buffer())
            .pipe(uglify({
                compress: false,
            }))
            .pipe(gulp.dest('./dist/'));
});