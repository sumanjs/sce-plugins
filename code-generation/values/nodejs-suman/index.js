"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./lib/data");
var SCEPlugin = (function () {
    function SCEPlugin() {
        this.rawCode = "";
        this.styledCode = "";
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
        this.currentNode = this.currentNode.setLeftMost(data_1.values["driver.create"].copy());
        this.tempNode = this.currentNode.setLeftMost(data_1.values["after.always"].copy());
        this.tempNode.setLeftMost(data_1.values["driver.quit"].copy());
    };
    SCEPlugin.prototype.getRawGeneratedCode = function () {
        return this.codeTreeRoot.generate();
    };
    SCEPlugin.prototype.getStyledGeneratedCode = function () {
        return this.styledCode;
    };
    SCEPlugin.prototype.onNextEvent = function (m) {
        console.log("adding data to generated code...");
        if (this.inHook) {
            this.inHook = false;
            this.currentNode = this.currentNode.exitRightFromSumanHook("up");
            this.codeTreeRoot.clearAllMarkers();
        }
        if (this.inContextBlock) {
            this.inContextBlock = false;
            this.currentNode = this.currentNode.exitRightFromSumanBlock("up");
            this.codeTreeRoot.clearAllMarkers();
        }
        this.currentNode = this.currentNode.setRightMost(data_1.values["context"].copy());
        this.inContextBlock = true;
        if (String(m.eventName) === "sumanload") {
            this.currentNode = this.currentNode.setRightMost(data_1.values.before.copy().render());
            this.currentNode = this.currentNode.setLeftMost(data_1.values["driver.get"].copy().render({ driverGetURL: m.location.href }));
            this.inHook = true;
        }
        if (String(m.eventName) === "click") {
            this.currentNode = this.currentNode.setRightMost(data_1.values.before.copy().render());
            this.currentNode = this.currentNode.setLeftMost(data_1.values["driver.find.hook"].copy().render({ driverGetURL: m.location.href }));
            this.inHook = true;
        }
        if (this.inHook) {
            this.currentNode = this.currentNode.exitRightFromSumanHook("up");
            this.codeTreeRoot.clearAllMarkers();
            this.inHook = false;
        }
        this.currentNode = this.currentNode.setRightMost(data_1.values["it"].copy());
        this.currentNode.setLeftMost(data_1.values["it.el"].copy());
    };
    SCEPlugin.prototype.setEvents = function (events) {
        this.initialize();
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event = events_1[_i];
            this.onNextEvent(event);
        }
    };
    SCEPlugin.pluginType = "code-generator";
    SCEPlugin.pluginName = "nodejs-suman";
    return SCEPlugin;
}());
exports.SCEPlugin = SCEPlugin;
