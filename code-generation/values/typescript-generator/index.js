"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var code_generation_1 = require("@sce/code-generation");
var SCEPlugin = (function () {
    function SCEPlugin() {
        this.events = [];
        this.typescriptGenerator = new code_generation_1.TypeScriptGenerator();
    }
    SCEPlugin.prototype.getRawGeneratedCode = function () {
        return this.typescriptGenerator.generate(this.events);
    };
    SCEPlugin.prototype.getStyledGeneratedCode = function () {
        return this.typescriptGenerator.generate(this.events);
    };
    SCEPlugin.prototype.setEvents = function (events) {
        this.events = events;
        this.typescriptGenerator.generate(this.events);
    };
    SCEPlugin.pluginType = "code-generator";
    SCEPlugin.pluginName = "typescript-generator";
    return SCEPlugin;
}());
exports.SCEPlugin = SCEPlugin;
