"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var javajunit = require("./values/java-junit");
var javatestng = require("./values/java-test-ng");
var nodejsmocha = require("./values/nodejs-mocha");
var nodejssuman = require("./values/nodejs-suman");
exports.plugins = [
    javajunit.SCEPlugin,
    javatestng.SCEPlugin,
    nodejsmocha.SCEPlugin,
    nodejssuman.SCEPlugin
];
