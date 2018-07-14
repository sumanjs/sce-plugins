'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var SCEPlugin = (function() {
  function SCEPlugin() {
    this.rawCode = '';
    this.styledCode = '';
  }
  SCEPlugin.prototype.initialize = function() {};
  SCEPlugin.prototype.getRawGeneratedCode = function() {
    return 'gnarnia (java testng)';
  };
  SCEPlugin.prototype.getStyledGeneratedCode = function() {
    return this.styledCode;
  };
  SCEPlugin.prototype.onComplete = function() {};
  SCEPlugin.prototype.onNextEvent = function(ev, x) {
    x.updateCode();
  };
  SCEPlugin.pluginType = 'code-generator';
  SCEPlugin.pluginName = 'java-test-ng';
  return SCEPlugin;
})();
exports.SCEPlugin = SCEPlugin;
