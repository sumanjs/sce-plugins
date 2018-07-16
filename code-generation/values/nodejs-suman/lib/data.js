"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_proto_1 = require("./data-proto");
exports.values = {
  nemo: {
    left: "begin",
    middle: null,
    right: "end",
  },
  top: {
    root: true,
    left: "#!/usr/bin/env node",
    middle: "'use strict';",
    right: null,
  },
  builder: {
    left: "const {Builder, By, Key, until} = require('selenium-webdriver');",
  },
  "driver.create": {
    left: "const driver = new Builder().forBrowser('firefox').build();",
  },
  "driver.get": {
    left: "await driver.get('{{driverGetURL}}');",
  },
  "driver.findElement": {
    left: "await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);",
  },
  "driver.quit": {
    left: "await driver.quit();",
  },
  "driver.wait.until.title": {
    left: "await driver.wait(until.titleIs('webdriver - Google Search'), 1000);",
  },
  declare: {
    left: "const suman = require('suman');",
  },
  init: {
    left: "const {Test} = suman.init(module);",
  },
  create: {
    name: "create",
    left: "Test.create((b, it, context, before, after, beforeEach, afterEach) => {",
    middle: null,
    right: "});",
  },
  "driver.find.hook": {
    left: "const el = h.supply.el = await driver.find(By.id())",
  },
  "driver.find.testCase": {
    left: "const el = t.supply.el = await driver.find(By.id())",
  },
  before: {
    "suman.hook": true,
    left: "before(async h => {",
    middle: null,
    right: "});",
  },
  "after.always": {
    "suman.hook": true,
    left: "after.always(async h => {",
    middle: null,
    right: "});",
  },
  after: {
    "suman.hook": true,
    left: "after(async h => {",
    middle: null,
    right: "});",
  },
  beforeEach: {
    "suman.hook": true,
    left: "beforeEach(async h => {",
    middle: null,
    right: "});",
  },
  afterEach: {
    "suman.hook": true,
    left: "afterEach(async h => {",
    middle: null,
    right: "});",
  },
  it: {
    left: "it(async t => {",
    middle: null,
    right: "});",
  },
  "it.el": {
    left: "const el = t.supply.el;",
  },
  context: {
    "suman.block": true,
    left: "context(b => {",
    middle: null,
    right: "});",
  },
};
Object.keys(exports.values).forEach(function(k) {
  Object.setPrototypeOf(exports.values[k], data_proto_1.proto);
});
