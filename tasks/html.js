const {src, dest,} = require("gulp");
const gulpFileInclude = require("gulp-file-include");
const htmlMin = require("gulp-htmlmin");
const gulpSize = require("gulp-size");

const html = () =>{
  return src("./app/html/*.html")
  .pipe(gulpFileInclude())
  .pipe(gulpSize({
    title: "Before size: "
  }))
  .pipe(htmlMin({
    collapseWhitespace: true
  }))
  .pipe(gulpSize({
    title: "After size: "
  }))
  .pipe(dest("./dist"))
}

module.exports = html;