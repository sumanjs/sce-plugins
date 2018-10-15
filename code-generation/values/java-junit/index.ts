import { SceEvent, SceMain } from "sce-plugin-typings";

export class SCEPlugin implements SceMain {
  public static pluginType = "code-generator";
  public static pluginName = "java-junit";

  constructor() {}

  initialize() {
  }

  getRawGeneratedCode() {
    // return this.codeTreeRoot.generate();
    // // return this.rawCode;
    return "parachute (java junit)";
  }

  getStyledGeneratedCode() {
    return this.getRawGeneratedCode();
  }

  setEvents(ev: SceEvent[]) {}
}
