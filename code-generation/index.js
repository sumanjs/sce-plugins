"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = require("./interfaces");
exports.SceMain = interfaces_1.SceMain;
var javajunit = require("./values/java-junit");
var javatestng = require("./values/java-test-ng");
var nodejsmocha = require("./values/nodejs-mocha");
var nodejssuman = require("./values/nodejs-suman");
exports.plugins = [
    javajunit.CodeGenerator,
    javatestng.CodeGenerator,
    nodejsmocha.CodeGenerator,
    nodejssuman.CodeGenerator
];
