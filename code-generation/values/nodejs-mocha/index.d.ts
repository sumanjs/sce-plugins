import { SceEvent, SceMain, Updateable } from "../../interfaces";
export declare class CodeGenerator implements SceMain {
    private rawCode;
    private styledCode;
    static pluginName: string;
    code: any;
    constructor();
    initialize(): void;
    getRawGeneratedCode(): string;
    getStyledGeneratedCode(): string;
    onComplete(x: Updateable): void;
    onNextEvent(ev: SceEvent, x: Updateable): void;
}
