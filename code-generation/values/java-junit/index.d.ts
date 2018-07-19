import { SceEvent, SceMain } from "sce-plugin-typings";
export declare class SCEPlugin implements SceMain {
    private rawCode;
    private styledCode;
    static pluginType: string;
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
    setEvents(ev: SceEvent[]): void;
}
