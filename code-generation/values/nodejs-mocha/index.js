"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SCEPlugin = (function() {
  function SCEPlugin() {
    this.rawCode = "";
    this.styledCode = "";
    this.code = [];
  }
  SCEPlugin.prototype.initialize = function() {};
  SCEPlugin.prototype.getRawGeneratedCode = function() {
    return "poodles (nodejs-mocha) " + this.code.join(" ");
  };
  SCEPlugin.prototype.getStyledGeneratedCode = function() {
    return this.styledCode;
  };
  SCEPlugin.prototype.onComplete = function() {
    this.code.push("complete");
  };
  SCEPlugin.prototype.onNextEvent = function(ev) {
    this.code.push(this.code.length);
  };
  SCEPlugin.prototype.setEvents = function(events) {
    for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
      var event = events_1[_i];
      this.onNextEvent(event);
    }
    this.onComplete();
  };
  SCEPlugin.pluginType = "code-generator";
  SCEPlugin.pluginName = "nodejs-mocha";
  return SCEPlugin;
})();
exports.SCEPlugin = SCEPlugin;
