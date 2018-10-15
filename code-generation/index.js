"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var javajunit = require("./values/java-junit");
var javatestng = require("./values/java-test-ng");
var nodejsmocha = require("./values/nodejs-mocha");
var nodejssuman = require("./values/nodejs-suman");
var typescriptSelenium = require("./values/typescript-generator");
var json = require("./values/json");
exports.plugins = [
    javajunit.SCEPlugin,
    javatestng.SCEPlugin,
    nodejsmocha.SCEPlugin,
    nodejssuman.SCEPlugin,
    typescriptSelenium.SCEPlugin,
    json.SCEPlugin,
];
