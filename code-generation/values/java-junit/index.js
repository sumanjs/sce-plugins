"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SCEPlugin = (function () {
    function SCEPlugin() {
    }
    SCEPlugin.prototype.initialize = function () {
    };
    SCEPlugin.prototype.getRawGeneratedCode = function () {
        return "parachute (java junit)";
    };
    SCEPlugin.prototype.getStyledGeneratedCode = function () {
        return this.getRawGeneratedCode();
    };
    SCEPlugin.prototype.setEvents = function (ev) { };
    SCEPlugin.pluginType = "code-generator";
    SCEPlugin.pluginName = "java-junit";
    return SCEPlugin;
}());
exports.SCEPlugin = SCEPlugin;
