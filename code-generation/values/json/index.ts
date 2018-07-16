import { SceEvent, SceMain } from "sce-plugin-typings";
import { values } from "./lib/data";

export class SCEPlugin implements SceMain {
  // rawGeneratedCode = '';
  // formattedCode = ' // (no code generated yet)';
  private rawCode = "";
  private styledCode = "";

  public static pluginType = "code-generator";
  public static pluginName = "nodejs-suman";

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
    this.currentNode = this.currentNode.setLeftMost(values["driver.create"].copy());
    this.tempNode = this.currentNode.setLeftMost(values["after.always"].copy());
    this.tempNode.setLeftMost(values["driver.quit"].copy());
  }

  getRawGeneratedCode() {
    return this.codeTreeRoot.generate();
    // return this.rawCode;
  }

  getStyledGeneratedCode() {
    return this.styledCode;
  }

  onNextEvent(m: SceEvent | any) {
    console.log("adding data to generated code...");

    if (this.inHook) {
      this.inHook = false;
      this.currentNode = this.currentNode.exitRightFromSumanHook("up");
      this.codeTreeRoot.clearAllMarkers();
    }

    if (this.inContextBlock) {
      this.inContextBlock = false;
      this.currentNode = this.currentNode.exitRightFromSumanBlock("up");
      this.codeTreeRoot.clearAllMarkers();
    }

    this.currentNode = this.currentNode.setRightMost(values["context"].copy());
    this.inContextBlock = true;

    if (String(m.eventName) === "sumanload") {
      this.currentNode = this.currentNode.setRightMost(values.before.copy().render());
      this.currentNode = this.currentNode.setLeftMost(
        values["driver.get"].copy().render({ driverGetURL: m.location.href })
      );
      this.inHook = true;
    }

    if (String(m.eventName) === "click") {
      this.currentNode = this.currentNode.setRightMost(values.before.copy().render());
      this.currentNode = this.currentNode.setLeftMost(
        values["driver.find.hook"].copy().render({ driverGetURL: m.location.href })
      );
      this.inHook = true;
    }

    if (this.inHook) {
      this.currentNode = this.currentNode.exitRightFromSumanHook("up");
      this.codeTreeRoot.clearAllMarkers();
      this.inHook = false;
    }

    this.currentNode = this.currentNode.setRightMost(values["it"].copy());
    this.currentNode.setLeftMost(values["it.el"].copy());
  }

  setEvents(events: SceEvent[]) {
    for (const event of events) {
      this.onNextEvent(event);
    }
  }
}
