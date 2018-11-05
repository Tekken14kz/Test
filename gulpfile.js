var gulp      = require('gulp'), // Подключаем Gulp
    less        = require('gulp-less'), //Подключаем Less пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync
    autoprefixer= require('gulp-autoprefixer');
    
gulp.task('less',function(){
    return gulp.src('app/less/*.less')
    .pipe(less())
    .pipe(autoprefixer(['last 15 versions','>1%','ie 8','ie 7'],{cascade:true}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'less'], function() {
    
    gulp.watch('app/less/*.less', ['less']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
    gulp.watch('app/css/media.css', browserSync.reload);
});