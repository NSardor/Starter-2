const srcUrl = "./app";
const destUrl = "./dist";


module.exports = {
  pro: destUrl,

  html: {
    src: srcUrl + "/html/*.html",
    watch: srcUrl + "/html/**/*.html",
    dest: destUrl
  },

  pug: {
    src: srcUrl + "/pug/*.pug",
    watch: srcUrl + "/pug/**/*.pug",
    dest: destUrl
  },

  css: {
    src: srcUrl + "/css/*.css",
    watch: srcUrl + "/css/**/*.css",
    dest: destUrl + "/css"
  },

  scss: {
    src: srcUrl + "/scss/*.{scss,sass}",
    watch: srcUrl + "/scss/**/*.{scss,sass}",
    dest: destUrl + "/css"
  },
}