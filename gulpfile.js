var browserify = require('browserify');
var gulp = require('gulp');


var bundler = browserify({
    entries: ['./offline.js'],
    standalone: 'nvOffile',
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