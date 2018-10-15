import { SceEvent, SceMain } from "sce-plugin-typings";

export class SCEPlugin implements SceMain {
  public static pluginType = "code-generator";
  public static pluginName = "json";

  private events: SceEvent[] = [];

  constructor() {}

  getRawGeneratedCode() : string {
    return JSON.stringify(this.events);
  }

  getStyledGeneratedCode() {
    return JSON.stringify(this.events,null,"  ");
  }

  setEvents(events: SceEvent[]) {
    this.events = events;
  }
}
