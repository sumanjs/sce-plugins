import { SceEvent, SceMain } from "sce-plugin-typings";
import { TypeScriptGenerator } from "@sce/code-generation";

export class SCEPlugin implements SceMain {
  public static pluginType = "code-generator";
  public static pluginName = "typescript-generator";

  private events: SceEvent[] = [];

  private typescriptGenerator = new TypeScriptGenerator();

  constructor() {}

  getRawGeneratedCode() {
    return this.typescriptGenerator.generate(this.events);

    // return this.rawCode;
  }

  getStyledGeneratedCode() {
    return this.typescriptGenerator.generate(this.events);
  }

  setEvents(events: SceEvent[]) {
    this.events = events;
    this.typescriptGenerator.generate(this.events);
  }
}
