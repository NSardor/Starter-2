const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();

// include 
const url = require("./config/url.js")

//include tasks
// const html = require("./tasks/html.js")
const clear = require("./tasks/clear.js")
const pug = require("./tasks/pug.js")
const scss = require("./tasks/scss.js")

const watching = () =>{
  watch(url.pug.watch, pug).on('change', browserSync.reload);
  watch(url.scss.watch, scss).on('change', browserSync.reload);
}

const server = () =>{
  browserSync.init({
    server:{
      baseDir: url.pro
    }
  })
}


exports.pug = pug;
exports.watch = watching;
exports.server = server;
exports.clear = clear;
exports.scss = scss;

exports.start = series(
  clear,
  parallel(pug, scss),
  parallel(watching, server)
)