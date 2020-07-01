const { series } = require('gulp');
const connect = require('gulp-connect');

const server = function(done) {
  connect.server({
    name: 'IS-2020',
    root: './',
    port: 8888,
    livereload: true
  });
  done();
};

exports.default = series(server);
