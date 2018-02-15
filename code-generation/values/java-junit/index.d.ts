import { SceEvent, SceMain } from "../../interfaces";
export declare class CodeGenerator implements SceMain {
    private rawCode;
    private styledCode;
    static pluginName: string;
    codeTreeRoot: any;
    currentNode: any;
    tempNode: any;
    inHook: boolean;
    inContextBlock: boolean;
    ctxCount: number;
    testCaseCount: number;
    constructor();
    initialize(): void;
    getRawGeneratedCode(): string;
    getStyledGeneratedCode(): string;
    onComplete(): void;
    onNextEvent(m: SceEvent | any): void;
}
