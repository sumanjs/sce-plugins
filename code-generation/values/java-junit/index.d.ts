import { SceEvent, SceMain } from "sce-plugin-typings";
export declare class SCEPlugin implements SceMain {
    static pluginType: string;
    static pluginName: string;
    constructor();
    initialize(): void;
    getRawGeneratedCode(): string;
    getStyledGeneratedCode(): string;
    setEvents(ev: SceEvent[]): void;
}
