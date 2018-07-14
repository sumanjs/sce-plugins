'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var SCEPlugin = (function() {
  function SCEPlugin() {
    this.rawCode = '';
    this.styledCode = '';
    this.code = [];
  }
  SCEPlugin.prototype.initialize = function() {};
  SCEPlugin.prototype.getRawGeneratedCode = function() {
    return 'poodles (nodejs-mocha) ' + this.code.join(' ');
  };
  SCEPlugin.prototype.getStyledGeneratedCode = function() {
    return this.styledCode;
  };
  SCEPlugin.prototype.onComplete = function(x) {
    this.code.push('complete');
    x.updateCode();
  };
  SCEPlugin.prototype.onNextEvent = function(ev, x) {
    this.code.push(this.code.length);
    x.updateCode();
  };
  SCEPlugin.pluginType = 'code-generator';
  SCEPlugin.pluginName = 'nodejs-mocha';
  return SCEPlugin;
})();
exports.SCEPlugin = SCEPlugin;
