var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssNano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache');


// gulp.task('sass', function() {
// 	return gulp.src('app/sass/*.sass')
// 	.pipe(sass())
// 	.pipe(gulp.dest('app/sass'))
// 	.pipe(browserSync.reload({stream: true}))
// })

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	})
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery-3.2.1.min.js',
		'app/libs/bootstrap.min.js',
		'app/libs/popper.min.js'])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
})

gulp.task('css-libs', function() {
	return gulp.src('app/css/verblyadi.css')
	.pipe(cssNano())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('app/css'))
})

gulp.task('clean', function() {
	return del.sync('dist');
})

gulp.task('clear', function() {
	return cache.clearAll();
})

gulp.task('img', function() {
	return gulp.src(['app/img/**/*','!app/img/*.ico'])
	.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			une: [pngquant()]
		})))
	.pipe(gulp.dest('dist/img'))
})

gulp.task('watch',['browser-sync', 'css-libs' ,'scripts'] ,function() {
	// gulp.watch('app/sass/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/css/*.css', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
})

gulp.task('build',['clean','img','scripts'] ,function() {
	var buildCss = gulp.src(['app/css/verblyadi.min.css', 'app/css/bootstrap.min.css'])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
})