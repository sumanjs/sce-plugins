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
        return 'gnarnia (java testng)';
    };
    CodeGenerator.prototype.getStyledGeneratedCode = function () {
        return this.styledCode;
    };
    CodeGenerator.prototype.onComplete = function () {
    };
    CodeGenerator.prototype.onNextEvent = function (ev, x) {
        x.updateCode();
    };
    CodeGenerator.pluginName = 'java-test-ng';
    return CodeGenerator;
}());
exports.CodeGenerator = CodeGenerator;
