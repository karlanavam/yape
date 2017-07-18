//Declarar dependencias
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const sass = require('gulp-sass');

//Definir y declarar rutas
const rutas = {
    rutaJS: 'src/assets/js/*.js',
    rutaSCSS: 'src/assets/scss/*.scss',
    rutaHTML: 'index.html',
    rutaPantallaDos: 'pantalla-dos.html'
};

//Prepara nuestros archivos de desarrollo y los copia a public
gulp.task('prepararHTML', function() {
    gulp.src(rutas.rutaHTML)
    .pipe(gulp.dest('public/'))
});

gulp.task('prepararJS', function(){
    return gulp.src(rutas.rutaJS)
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('public/js'))
});

gulp.task('prepararCSS', function(){
    /*return: asíncrono*/ gulp.src(rutas.rutaSCSS)
    .pipe(sass({outputStyle: 'compressed'})
    .on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
});