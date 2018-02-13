import {SceMain} from "./interfaces";

// generators
import * as javajunit from './values/java-junit';
import * as javatestng from './values/java-test-ng';
import * as nodejsmocha from './values/nodejs-mocha';
import * as nodejssuman from './values/nodejs-suman';


export const plugins : Array<new() => SceMain>= [
  
  javajunit.CodeGenerator,
  javatestng.CodeGenerator,
  nodejsmocha.CodeGenerator,
  nodejssuman.CodeGenerator

];