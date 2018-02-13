import { SceEvent, SceMain } from "../../interfaces";
export declare class JavaJUnitGenerator implements SceMain {
    rawCode: string;
    styledCode: string;
    constructor();
    getRawGeneratedCode(): string;
    getStyledGeneratedCode(): string;
    onNextEvent(ev: SceEvent): void;
}
