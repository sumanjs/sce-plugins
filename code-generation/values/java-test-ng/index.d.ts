import { SceEvent, SceMain } from "../../interfaces";
export declare class CodeGenerator implements SceMain {
    private rawCode;
    private styledCode;
    static pluginName: string;
    constructor();
    getRawGeneratedCode(): string;
    getStyledGeneratedCode(): string;
    onComplete(): void;
    onNextEvent(ev: SceEvent): void;
}
