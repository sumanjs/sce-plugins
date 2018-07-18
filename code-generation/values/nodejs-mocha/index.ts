import { SceEvent, SceMain } from "sce-plugin-typings";

export class SCEPlugin implements SceMain {
  private rawCode = "";
  private styledCode = "";
  public static pluginType = "code-generator";
  public static pluginName = "nodejs-mocha";
  public code = [] as any;

  constructor() {}

  initialize() {}

  getRawGeneratedCode() {
    // return this.rawCode;

    return "poodles2 (nodejs-mocha) " + this.code.join(" ");
  }

  getStyledGeneratedCode() {
    return this.styledCode;
  }

  onComplete() {
    this.code.push("complete");
  }

  onNextEvent(ev: SceEvent) {
    this.code.push(this.code.length);
  }

  setEvents(events: SceEvent[]) {
    for (const event of events) {
      this.onNextEvent(event);
    }
    this.onComplete();
  }
}
