"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JavaJUnitGenerator = (function () {
    function JavaJUnitGenerator() {
        this.rawCode = '';
        this.styledCode = '';
    }
    JavaJUnitGenerator.prototype.getRawGeneratedCode = function () {
        return this.rawCode;
    };
    JavaJUnitGenerator.prototype.getStyledGeneratedCode = function () {
        return this.styledCode;
    };
    JavaJUnitGenerator.prototype.onNextEvent = function (ev) {
    };
    return JavaJUnitGenerator;
}());
exports.JavaJUnitGenerator = JavaJUnitGenerator;
