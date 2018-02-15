import { SceEvent, SceMain, Updateable } from "../../interfaces";
export declare class CodeGenerator implements SceMain {
    private rawCode;
    private styledCode;
    static pluginName: string;
    constructor();
    initialize(): void;
    getRawGeneratedCode(): string;
    getStyledGeneratedCode(): string;
    onComplete(): void;
    onNextEvent(ev: SceEvent, x: Updateable): void;
}
