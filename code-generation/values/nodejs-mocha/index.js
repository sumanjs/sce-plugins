"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CodeGenerator = (function () {
    function CodeGenerator() {
        this.rawCode = '';
        this.styledCode = '';
        this.code = [];
    }
    CodeGenerator.prototype.initialize = function () {
    };
    CodeGenerator.prototype.getRawGeneratedCode = function () {
        return 'poodles (nodejs-mocha) ' + this.code.join(' ');
    };
    CodeGenerator.prototype.getStyledGeneratedCode = function () {
        return this.styledCode;
    };
    CodeGenerator.prototype.onComplete = function (x) {
        this.code.push('complete');
        x.updateCode();
    };
    CodeGenerator.prototype.onNextEvent = function (ev, x) {
        this.code.push(this.code.length);
        x.updateCode();
    };
    CodeGenerator.pluginName = 'nodejs-mocha';
    return CodeGenerator;
}());
exports.CodeGenerator = CodeGenerator;
