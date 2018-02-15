'use strict';

import * as util from 'util';
const directions = ['left', 'middle', 'right'];
import * as Handlebars from 'handlebars';
import {ICopyable} from "./data";

///////////////////////////////////////////////////////

export const proto = {

  getParent() {
    return this.parent;
  },

  generate() {
    return [this.left, this.middle, this.right].map(function (v) {
      if (!v) {
        return '';
      }
      if (typeof v === 'string') {
        return v;
      }
      return v.generate();
    })
    .join('\n');
  },

  log(indent? : number) {
    // this is for debugging - log the entire tree by calling top.log()
    indent = indent || 0;
    let ws = new Array(indent + 1).join(' '); //whitespace
    directions.forEach(v => {
      const val = this[v];
      if (typeof val === 'string') {
        console.log(ws, `/* ${v} */`, val);
      }
      else if (val) {
        console.log();
        val.log(indent += 2);
      }
    });
  },

  setLeftMost(v :any) {

    let {z, name} = this.getLeftMostNonStringNode();

    if (!name) {
      name = z.getLeftMost();
    }

    z[name] = Object.create(proto);
    z[name].padded = true;
    z[name].parent = z;
    z[name]['middle'] = v;
    v.parent = z[name];
    v.parent = z;

    return v;
  },

  setRightMost(v: any) {

    let {z, name} = this.getRightMostNonStringNode();

    if (!name) {
      name = z.getRightMost();
    }

    z[name] = Object.create(proto);
    z[name].parent = z;
    z[name].padded = true;
    z[name]['middle'] = v;
    z[name]['middle'].parent = z[name];
    v.parent = z;

    return v;

  },

  getRightMostNonStringNode() {

    if (!this.right) {
      return {
        name: 'right',
        z: this
      };
    }

    if (this.right.padded) {
      return this.right.getRightMostNonStringNode();
    }

    if (!this.middle) {
      return {
        name: 'middle',
        z: this
      };
    }

    if (this.middle.padded) {
      return this.middle.getRightMostNonStringNode();
    }

    if (!this.left) {
      return {
        name: 'left',
        z: this
      };
    }

    if (this.left.padded) {
      return this.left.getRightMostNonStringNode();
    }

    if (this.root) {
      throw new Error('all items are strings on root')
    }

    return this.parent.getRightMostNonStringNode();

  },

  getLeftMostNonStringNode() {

    if (!this.left) {
      return {
        name: 'left',
        z: this
      };
    }

    if (this.left.padded) {
      return this.left.getLeftMostNonStringNode();
    }

    if (!this.middle) {
      return {
        name: 'middle',
        z: this
      };
    }

    if (this.middle.padded) {
      return this.middle.getLeftMostNonStringNode();
    }

    if (!this.right) {
      return {
        name: 'right',
        z: this
      };
    }

    if (this.right.padded) {
      return this.right.getLeftMostNonStringNode();
    }

    if (this.root) {
      throw new Error('all items are strings on root')
    }

    return this.parent.getLeftMostNonStringNode();

  },

  getRightMostWithMarker() {

    directions.reduce(((a: any, b: any) => {
        if (this[b] && this[b].simpleMarker) a++;
        if (a > 1) throw new Error('more than one simpleMarker.');
        return a;
      }) as any,
      0);

    if (this.right && this.right.simpleMarker) {
      return this.right;
    }

    if (this.middle && this.middle.simpleMarker) {
      return this.middle;
    }

    if (this.left && this.left.simpleMarker) {
      return this.left;
    }

    // let el = [this.right, this.middle, this.left].find(function (v) {
    //   return v && typeof v !== 'string' && v.padded;
    // });
    //
    // if (!el) {
    //   el = [this.right, this.middle, this.left].find(function (v) {
    //     return v && typeof v !== 'string';
    //   });
    // }
    //
    // if (el) {
    //   return el;
    // }

    // return this.parent || this; //
    //
    console.error('no marker:', util.inspect(this));
    throw new Error('no marker');
  },

  getLeftMostWithMarker() {

    directions.reduce(((a: any, b: any) => {
        if (this[b] && this[b].simpleMarker) a++;
        if (a > 1) throw new Error('more than one simpleMarker.');
        return a;
      }) as any,
      0);

    if (this.left && this.left.simpleMarker) {
      return this.left;
    }
    if (this.middle && this.middle.simpleMarker) {
      return this.middle;
    }
    if (this.right && this.right.simpleMarker) {
      return this.right;
    }

    // let el = [this.left, this.middle, this.right].find(function (v) {
    //   return v && typeof v !== 'string' && v.padded;
    // });
    //
    // if (!el) {
    //   el = [this.left, this.middle, this.right].find(function (v) {
    //     return v && typeof v !== 'string';
    //   });
    // }
    //
    // if (el) {
    //   return el;
    // }

    // return this.parent || this;

    console.error('no marker:', util.inspect(this));
    throw new Error('no marker');
  },

  getLeftMost() {

    if (!this.left) {
      return 'left';
    }

    if (!this.middle) {
      return 'middle';
    }

    if (!this.right) {
      return 'right';
    }

    return this.parent.getLeftMost();
  },

  getRightMost() {

    if (!this.right) {
      return 'right';
    }

    if (!this.middle) {
      return 'middle';
    }

    if (!this.left) {
      return 'left';
    }

    return this.parent.getRightMost();
  },

  clearAllMarkers() {
    directions.forEach(v => {
      if (this[v] && typeof this[v] !== 'string') {
        delete this[v].simpleMarker;
        this[v].clearAllMarkers();
      }
    });
  },

  exitRightFromSumanHook(downOrUp: string, prevWasHook: boolean) {

    if (downOrUp === 'up') {
      this.simpleMarker = true;
    }

    if (!downOrUp) {
      throw new Error('must be either up or down.')
    }

    if(downOrUp === 'up' && prevWasHook){
      return this;
    }

    if (this.root === true) {
      let lm = this.getRightMostWithMarker();
      return lm.exitRightFromSumanHook('down')
    }

    if (this['suman.hook'] && downOrUp === 'up') {
      return this.parent.exitRightFromSumanHook('up', true);
    }

    if (this['suman.hook'] && downOrUp === 'down') {
      // we are done traversing down
      return this.parent.padded ? this.parent.parent : this.parent;
    }

    if (!this['suman.hook'] && downOrUp === 'up') {
      return this.parent.exitRightFromSumanHook('up');
    }

    if (downOrUp === 'down' && !this['suman.hook']) {
      let node = this.getRightMostWithMarker();
      if (node.newNode) {
        throw new Error('no new nodes.');
      }
      return node.exitRightFromSumanHook('down');
    }

    throw new Error('unhandled cased.');
  },

  exitRightFromSumanBlock(downOrUp: string, prevWasHook: boolean) {

    if (downOrUp === 'up') {
      this.simpleMarker = true;
    }

    if (!downOrUp) {
      throw new Error('must be either up or down.')
    }

    if(downOrUp === 'up' && prevWasHook){
      return this;
    }

    if (this.root === true) {
      let lm = this.getRightMostWithMarker();
      return lm.exitRightFromSumanBlock('down')
    }

    if (this['suman.block'] && downOrUp === 'up') {
      return this.parent.exitRightFromSumanBlock('up', true);
    }

    if (this['suman.block'] && downOrUp === 'down') {
      // we are done traversing down
      return this.parent.padded ? this.parent.parent : this.parent;
    }

    if (!this['suman.block'] && downOrUp === 'up' ) {
      return this.parent.exitRightFromSumanBlock('up');
    }

    if (downOrUp === 'down' && !this['suman.block']) {
      let node = this.getRightMostWithMarker();
      if (node.newNode) {
        throw new Error('no new nodes.');
      }
      return node.exitRightFromSumanBlock('down');
    }

    throw new Error('unhandled cased.');
  },

  exitLeftFromSumanHook(downOrUp: string) {

    if (downOrUp === 'up') {
      this.simpleMarker = true;
    }

    if (!downOrUp) {
      throw new Error('must be either up or down.')
    }

    if (this.root === true) {
      let lm = this.getLeftMostWithMarker();
      return lm.exitLeftFromSumanHook('down')
    }

    if (this['suman.hook'] && downOrUp === 'up') {
      return this.parent.exitLeftFromSumanHook('up');
    }

    if (this['suman.hook'] && downOrUp === 'down') {
      // we are done traversing down
      // top.clearAllMarkers();
      return this.parent.padded ? this.parent.parent : this.parent;
    }

    if (downOrUp === 'up' && !this['suman.hook']) {
      return this.parent.exitLeftFromSumanHook('up');
    }

    if (downOrUp === 'down' && !this['suman.hook']) {
      let node = this.getLeftMostWithMarker();
      if (node.newNode) {
        throw new Error('no new nodes.');
      }
      return node.exitLeftFromSumanHook('down');
    }

    throw new Error('unhandled cased.');
  },

  exitLeftFromSumanBlock(downOrUp: string) {

    if (downOrUp === 'up') {
      this.simpleMarker = true;
    }

    if (!downOrUp) {
      throw new Error('must be either up or down.')
    }

    if (this.root === true) {
      let lm = this.getLeftMostWithMarker();
      return lm.exitLeftFromSumanBlock('down')
    }

    if (this['suman.block'] && downOrUp === 'up') {
      return this.parent.exitLeftFromSumanBlock('up');
    }

    if (this['suman.block'] && downOrUp === 'down') {
      // we are done traversing down
      return this.parent.padded ? this.parent.parent : this.parent;
    }

    if (downOrUp === 'up' && !this['suman.block']) {
      return this.parent.exitLeftFromSumanBlock('up');
    }

    if (downOrUp === 'down' && !this['suman.block']) {
      let node = this.getLeftMostWithMarker();
      if (node.newNode) {
        throw new Error('no new nodes.');
      }
      return node.exitLeftFromSumanBlock('down');
    }

    throw new Error('unhandled cased.');
  },

  copy() {
    const v = JSON.parse(JSON.stringify(this));
    return Object.setPrototypeOf(v, proto);
  },

  render(data: string) {
    directions.forEach(v => {
      if (typeof this[v] === 'string') {
        this[v] = Handlebars.compile(this[v])(data)
      }
    });

    return this;
  }

};
