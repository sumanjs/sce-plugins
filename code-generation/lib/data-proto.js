"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("util");
var directions = ["left", "middle", "right"];
var runtime_1 = require("handlebars/runtime");
exports.proto = {
    getParent: function () {
        return this.parent;
    },
    generate: function () {
        return [this.left, this.middle, this.right]
            .map(function (v) {
            if (!v) {
                return "";
            }
            if (typeof v === "string") {
                return v;
            }
            return v.generate();
        })
            .join("\n");
    },
    log: function (indent) {
        var _this = this;
        indent = indent || 0;
        var ws = new Array(indent + 1).join(" ");
        directions.forEach(function (v) {
            var val = _this[v];
            if (typeof val === "string") {
                console.log(ws, "/* " + v + " */", val);
            }
            else if (val) {
                console.log();
                val.log((indent += 2));
            }
        });
    },
    setLeftMost: function (v) {
        var _a = this.getLeftMostNonStringNode(), z = _a.z, name = _a.name;
        if (!name) {
            name = z.getLeftMost();
        }
        z[name] = Object.create(exports.proto);
        z[name].padded = true;
        z[name].parent = z;
        z[name]["middle"] = v;
        v.parent = z[name];
        v.parent = z;
        return v;
    },
    setRightMost: function (v) {
        var _a = this.getRightMostNonStringNode(), z = _a.z, name = _a.name;
        if (!name) {
            name = z.getRightMost();
        }
        z[name] = Object.create(exports.proto);
        z[name].parent = z;
        z[name].padded = true;
        z[name]["middle"] = v;
        z[name]["middle"].parent = z[name];
        v.parent = z;
        return v;
    },
    getRightMostNonStringNode: function () {
        if (!this.right) {
            return {
                name: "right",
                z: this,
            };
        }
        if (this.right.padded) {
            return this.right.getRightMostNonStringNode();
        }
        if (!this.middle) {
            return {
                name: "middle",
                z: this,
            };
        }
        if (this.middle.padded) {
            return this.middle.getRightMostNonStringNode();
        }
        if (!this.left) {
            return {
                name: "left",
                z: this,
            };
        }
        if (this.left.padded) {
            return this.left.getRightMostNonStringNode();
        }
        if (this.root) {
            throw new Error("all items are strings on root");
        }
        return this.parent.getRightMostNonStringNode();
    },
    getLeftMostNonStringNode: function () {
        if (!this.left) {
            return {
                name: "left",
                z: this,
            };
        }
        if (this.left.padded) {
            return this.left.getLeftMostNonStringNode();
        }
        if (!this.middle) {
            return {
                name: "middle",
                z: this,
            };
        }
        if (this.middle.padded) {
            return this.middle.getLeftMostNonStringNode();
        }
        if (!this.right) {
            return {
                name: "right",
                z: this,
            };
        }
        if (this.right.padded) {
            return this.right.getLeftMostNonStringNode();
        }
        if (this.root) {
            throw new Error("all items are strings on root");
        }
        return this.parent.getLeftMostNonStringNode();
    },
    getRightMostWithMarker: function () {
        var _this = this;
        directions.reduce((function (a, b) {
            if (_this[b] && _this[b].simpleMarker)
                a++;
            if (a > 1)
                throw new Error("more than one simpleMarker.");
            return a;
        }), 0);
        if (this.right && this.right.simpleMarker) {
            return this.right;
        }
        if (this.middle && this.middle.simpleMarker) {
            return this.middle;
        }
        if (this.left && this.left.simpleMarker) {
            return this.left;
        }
        console.error("no marker:", util.inspect(this));
        throw new Error("no marker");
    },
    getLeftMostWithMarker: function () {
        var _this = this;
        directions.reduce((function (a, b) {
            if (_this[b] && _this[b].simpleMarker)
                a++;
            if (a > 1)
                throw new Error("more than one simpleMarker.");
            return a;
        }), 0);
        if (this.left && this.left.simpleMarker) {
            return this.left;
        }
        if (this.middle && this.middle.simpleMarker) {
            return this.middle;
        }
        if (this.right && this.right.simpleMarker) {
            return this.right;
        }
        console.error("no marker:", util.inspect(this));
        throw new Error("no marker");
    },
    getLeftMost: function () {
        if (!this.left) {
            return "left";
        }
        if (!this.middle) {
            return "middle";
        }
        if (!this.right) {
            return "right";
        }
        return this.parent.getLeftMost();
    },
    getRightMost: function () {
        if (!this.right) {
            return "right";
        }
        if (!this.middle) {
            return "middle";
        }
        if (!this.left) {
            return "left";
        }
        return this.parent.getRightMost();
    },
    clearAllMarkers: function () {
        var _this = this;
        directions.forEach(function (v) {
            if (_this[v] && typeof _this[v] !== "string") {
                delete _this[v].simpleMarker;
                _this[v].clearAllMarkers();
            }
        });
    },
    exitRightFromSumanHook: function (downOrUp, prevWasHook) {
        if (downOrUp === "up") {
            this.simpleMarker = true;
        }
        if (!downOrUp) {
            throw new Error("must be either up or down.");
        }
        if (downOrUp === "up" && prevWasHook) {
            return this;
        }
        if (this.root === true) {
            var lm = this.getRightMostWithMarker();
            return lm.exitRightFromSumanHook("down");
        }
        if (this["suman.hook"] && downOrUp === "up") {
            return this.parent.exitRightFromSumanHook("up", true);
        }
        if (this["suman.hook"] && downOrUp === "down") {
            return this.parent.padded ? this.parent.parent : this.parent;
        }
        if (!this["suman.hook"] && downOrUp === "up") {
            return this.parent.exitRightFromSumanHook("up");
        }
        if (downOrUp === "down" && !this["suman.hook"]) {
            var node = this.getRightMostWithMarker();
            if (node.newNode) {
                throw new Error("no new nodes.");
            }
            return node.exitRightFromSumanHook("down");
        }
        throw new Error("unhandled cased.");
    },
    exitRightFromSumanBlock: function (downOrUp, prevWasHook) {
        if (downOrUp === "up") {
            this.simpleMarker = true;
        }
        if (!downOrUp) {
            throw new Error("must be either up or down.");
        }
        if (downOrUp === "up" && prevWasHook) {
            return this;
        }
        if (this.root === true) {
            var lm = this.getRightMostWithMarker();
            return lm.exitRightFromSumanBlock("down");
        }
        if (this["suman.block"] && downOrUp === "up") {
            return this.parent.exitRightFromSumanBlock("up", true);
        }
        if (this["suman.block"] && downOrUp === "down") {
            return this.parent.padded ? this.parent.parent : this.parent;
        }
        if (!this["suman.block"] && downOrUp === "up") {
            return this.parent.exitRightFromSumanBlock("up");
        }
        if (downOrUp === "down" && !this["suman.block"]) {
            var node = this.getRightMostWithMarker();
            if (node.newNode) {
                throw new Error("no new nodes.");
            }
            return node.exitRightFromSumanBlock("down");
        }
        throw new Error("unhandled cased.");
    },
    exitLeftFromSumanHook: function (downOrUp) {
        if (downOrUp === "up") {
            this.simpleMarker = true;
        }
        if (!downOrUp) {
            throw new Error("must be either up or down.");
        }
        if (this.root === true) {
            var lm = this.getLeftMostWithMarker();
            return lm.exitLeftFromSumanHook("down");
        }
        if (this["suman.hook"] && downOrUp === "up") {
            return this.parent.exitLeftFromSumanHook("up");
        }
        if (this["suman.hook"] && downOrUp === "down") {
            return this.parent.padded ? this.parent.parent : this.parent;
        }
        if (downOrUp === "up" && !this["suman.hook"]) {
            return this.parent.exitLeftFromSumanHook("up");
        }
        if (downOrUp === "down" && !this["suman.hook"]) {
            var node = this.getLeftMostWithMarker();
            if (node.newNode) {
                throw new Error("no new nodes.");
            }
            return node.exitLeftFromSumanHook("down");
        }
        throw new Error("unhandled cased.");
    },
    exitLeftFromSumanBlock: function (downOrUp) {
        if (downOrUp === "up") {
            this.simpleMarker = true;
        }
        if (!downOrUp) {
            throw new Error("must be either up or down.");
        }
        if (this.root === true) {
            var lm = this.getLeftMostWithMarker();
            return lm.exitLeftFromSumanBlock("down");
        }
        if (this["suman.block"] && downOrUp === "up") {
            return this.parent.exitLeftFromSumanBlock("up");
        }
        if (this["suman.block"] && downOrUp === "down") {
            return this.parent.padded ? this.parent.parent : this.parent;
        }
        if (downOrUp === "up" && !this["suman.block"]) {
            return this.parent.exitLeftFromSumanBlock("up");
        }
        if (downOrUp === "down" && !this["suman.block"]) {
            var node = this.getLeftMostWithMarker();
            if (node.newNode) {
                throw new Error("no new nodes.");
            }
            return node.exitLeftFromSumanBlock("down");
        }
        throw new Error("unhandled cased.");
    },
    copy: function () {
        var v = JSON.parse(JSON.stringify(this));
        return Object.setPrototypeOf(v, exports.proto);
    },
    render: function (data) {
        var _this = this;
        directions.forEach(function (v) {
            if (typeof _this[v] === "string") {
                _this[v] = runtime_1.compile(_this[v])(data);
            }
        });
        return this;
    },
};
