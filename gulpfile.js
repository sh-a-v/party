var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('build', function() {
  return gulp.src('src/app.js')
    .pipe(webpack({
      module: {
        loaders: [
          {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
      },
      output: {
        filename: 'app.build.js'
      }
    }))
    .pipe(gulp.dest('build/'))
});
