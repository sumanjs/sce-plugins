import { SceEvent, SceMain } from "sce-plugin-typings";

export class SCEPlugin implements SceMain {
  private rawCode = "";
  private styledCode = "";
  public static pluginType = "code-generator";
  public static pluginName = "java-test-ng";

  constructor() {}

  initialize() {}

  getRawGeneratedCode() {
    // return this.rawCode;
    return "gnarnia (java testng)";
  }

  getStyledGeneratedCode() {
    return this.styledCode;
  }

  setEvents(events: SceEvent[]) {
    for (const event of events) {
      // do something useful with each event here
    }
  }
}
