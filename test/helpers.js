const chai = require("chai");
global.expect = chai.expect;
const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
require("jsdom-global")();

const url = "http://localhost";
const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, "..", "index.js"),
  {
    presets: ["@babel/env"],
  }
);

const src = babelResult.code;

document.documentElement.innerHTML = html;
eval(src);

// Import functions from index.js
const { writeCards, countDown } = require("../index.js");

// Attach functions to the global scope
global.writeCards = writeCards;
global.countDown = countDown;
