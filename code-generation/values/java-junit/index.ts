import { SceEvent, SceMain } from 'sce-plugin-typings';
import { values } from './lib/data';

export class SCEPlugin implements SceMain {
  // rawGeneratedCode = '';
  // formattedCode = ' // (no code generated yet)';
  private rawCode = '';
  private styledCode = '';

  public static pluginType = 'code-generator';
  public static pluginName = 'java-junit';

  codeTreeRoot = values.top.copy();
  currentNode = this.codeTreeRoot;
  tempNode: any;
  inHook = false;
  inContextBlock = false;
  ctxCount = 0;
  testCaseCount = 0;

  constructor() {}

  initialize() {
    this.currentNode = this.currentNode.setLeftMost(values.declare.copy());
    this.currentNode = this.currentNode.setLeftMost(values.init.copy());
    this.currentNode = this.currentNode.setLeftMost(values.create.copy());
    this.currentNode = this.currentNode.setLeftMost(values.builder.copy());
    this.currentNode = this.currentNode.setLeftMost(values['driver.create'].copy());
    this.tempNode = this.currentNode.setLeftMost(values['after.always'].copy());
    this.tempNode.setLeftMost(values['driver.quit'].copy());
  }

  getRawGeneratedCode() {
    // return this.codeTreeRoot.generate();
    // // return this.rawCode;
    return 'parachute (java junit)';
  }

  getStyledGeneratedCode() {
    return this.styledCode;
  }

  setEvents(ev: SceEvent[]) {

  }

}
