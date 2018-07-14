import { SceEvent, SceMain, Updateable } from 'sce-plugin-typings';
export declare class SCEPlugin implements SceMain {
  private rawCode;
  private styledCode;
  static pluginType: string;
  static pluginName: string;
  constructor();
  initialize(): void;
  getRawGeneratedCode(): string;
  getStyledGeneratedCode(): string;
  onComplete(): void;
  onNextEvent(ev: SceEvent, x: Updateable): void;
}
