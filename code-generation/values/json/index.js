"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SCEPlugin = (function () {
    function SCEPlugin() {
        this.events = [];
    }
    SCEPlugin.prototype.getRawGeneratedCode = function () {
        return JSON.stringify(this.events);
    };
    SCEPlugin.prototype.getStyledGeneratedCode = function () {
        return JSON.stringify(this.events, null, "  ");
    };
    SCEPlugin.prototype.setEvents = function (events) {
        this.events = events;
    };
    SCEPlugin.pluginType = "code-generator";
    SCEPlugin.pluginName = "json";
    return SCEPlugin;
}());
exports.SCEPlugin = SCEPlugin;
