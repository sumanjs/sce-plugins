import { SceEvent, SceMain } from "sce-plugin-typings";
export declare class SCEPlugin implements SceMain {
  private rawCode;
  private styledCode;
  static pluginType: string;
  static pluginName: string;
  code: any;
  constructor();
  initialize(): void;
  getRawGeneratedCode(): string;
  getStyledGeneratedCode(): string;
  onComplete(): void;
  onNextEvent(ev: SceEvent): void;
  setEvents(events: SceEvent[]): void;
}
