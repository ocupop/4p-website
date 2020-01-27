const gulp = require("gulp");
const suite = require('@cloudcannon/suite');

console.log(gulp)

suite.dev(gulp, {
  "jekyll": {
    "src": "content"
  }
});

