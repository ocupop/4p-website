// purgecss.config.js

module.exports = {
  // These are the files that Purgecss will search through
  content: ["./src/_site/**/*.html"],

  // These are the stylesheets that will be subjected to the purge
  css: ["./src/_site/css/style.css"]
};
