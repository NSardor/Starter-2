const {src, dest,} = require("gulp");
const url = require("../config/url");
const gulpSize = require("gulp-size");
const gulpPug = require("gulp-pug");

const pug = () =>{
  return src(url.pug.src)
  .pipe(gulpSize({
    title: "Before size: "
  }))
  .pipe(gulpPug({
    pretty: true,
    data: {
      baza: require("../bd/slider.json")
    }
  }))
  .pipe(gulpSize({
    title: "After size: "
  }))
  .pipe(dest(url.pug.dest))
}

module.exports = pug;