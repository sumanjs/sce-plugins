import { SceEvent, SceMain, Updateable } from 'sce-plugin-typings';
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
  onComplete(x: Updateable): void;
  onNextEvent(ev: SceEvent, x: Updateable): void;
}
