import {SceEvent, SceMain, Updateable, SCECodeGenType} from "sce-plugin-typings";

// generators
import * as javajunit from './values/java-junit';
import * as javatestng from './values/java-test-ng';
import * as nodejsmocha from './values/nodejs-mocha';
import * as nodejssuman from './values/nodejs-suman';


export const plugins: Array<SCECodeGenType> = [
  
  javajunit.SCEPlugin,
  javatestng.SCEPlugin,
  nodejsmocha.SCEPlugin,
  nodejssuman.SCEPlugin

];