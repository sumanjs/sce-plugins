"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SCEPlugin = (function() {
  function SCEPlugin() {
    this.rawCode = "";
    this.styledCode = "";
  }
  SCEPlugin.prototype.initialize = function() {};
  SCEPlugin.prototype.getRawGeneratedCode = function() {
    return "gnarnia (java testng)";
  };
  SCEPlugin.prototype.getStyledGeneratedCode = function() {
    return this.styledCode;
  };
  SCEPlugin.prototype.setEvents = function(events) {
    for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
      var event = events_1[_i];
    }
  };
  SCEPlugin.pluginType = "code-generator";
  SCEPlugin.pluginName = "java-test-ng";
  return SCEPlugin;
})();
exports.SCEPlugin = SCEPlugin;
