"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CodeGenerator = (function () {
    function CodeGenerator() {
        this.rawCode = '';
        this.styledCode = '';
    }
    CodeGenerator.prototype.initialize = function () {
    };
    CodeGenerator.prototype.getRawGeneratedCode = function () {
        return this.rawCode;
    };
    CodeGenerator.prototype.getStyledGeneratedCode = function () {
        return this.styledCode;
    };
    CodeGenerator.prototype.onComplete = function () {
    };
    CodeGenerator.prototype.onNextEvent = function (ev) {
    };
    CodeGenerator.pluginName = 'java-test-ng';
    return CodeGenerator;
}());
exports.CodeGenerator = CodeGenerator;
