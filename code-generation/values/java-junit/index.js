"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./lib/data");
var SCEPlugin = (function () {
    function SCEPlugin() {
        this.rawCode = '';
        this.styledCode = '';
        this.codeTreeRoot = data_1.values.top.copy();
        this.currentNode = this.codeTreeRoot;
        this.inHook = false;
        this.inContextBlock = false;
        this.ctxCount = 0;
        this.testCaseCount = 0;
    }
    SCEPlugin.prototype.initialize = function () {
        this.currentNode = this.currentNode.setLeftMost(data_1.values.declare.copy());
        this.currentNode = this.currentNode.setLeftMost(data_1.values.init.copy());
        this.currentNode = this.currentNode.setLeftMost(data_1.values.create.copy());
        this.currentNode = this.currentNode.setLeftMost(data_1.values.builder.copy());
        this.currentNode = this.currentNode.setLeftMost(data_1.values['driver.create'].copy());
        this.tempNode = this.currentNode.setLeftMost(data_1.values['after.always'].copy());
        this.tempNode.setLeftMost(data_1.values['driver.quit'].copy());
    };
    SCEPlugin.prototype.getRawGeneratedCode = function () {
        return 'parachute (java junit)';
    };
    SCEPlugin.prototype.getStyledGeneratedCode = function () {
        return this.styledCode;
    };
    SCEPlugin.prototype.onComplete = function () {
    };
    SCEPlugin.prototype.onNextEvent = function (m, x) {
        x.updateCode();
    };
    SCEPlugin.pluginType = 'code-generator';
    SCEPlugin.pluginName = 'java-junit';
    return SCEPlugin;
}());
exports.SCEPlugin = SCEPlugin;
