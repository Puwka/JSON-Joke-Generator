var gulp = require("gulp"),
sass = require('gulp-sass');

gulp.task('scss', function() {
	return gulp.src('*.scss')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('css'))
});
gulp.task('watch', function() {
	gulp.watch('*scss', ['scss']);
});
gulp.task('default', ['watch'])
