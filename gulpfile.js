var browserify = require('browserify');
var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');


var bundler = browserify({
    entries: ['./offlineNew.js'],
    standalone: 'nvOffline',
    debug: true,
});

gulp.task('build', function() {
        return bundler
            .bundle()
            .pipe(source('offlineNew.js'))
            .pipe(buffer())
            .pipe(uglify({
                compress: false,
            }))
            .pipe(gulp.dest('./dist/'));
});