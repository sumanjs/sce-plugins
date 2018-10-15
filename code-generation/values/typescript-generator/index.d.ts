import { SceEvent, SceMain } from "sce-plugin-typings";
export declare class SCEPlugin implements SceMain {
    static pluginType: string;
    static pluginName: string;
    private events;
    private typescriptGenerator;
    constructor();
    getRawGeneratedCode(): string;
    getStyledGeneratedCode(): string;
    setEvents(events: SceEvent[]): void;
}
