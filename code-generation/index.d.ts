import { SceMain } from "sce-plugin-typings";
export declare type SCECodeGenTypeContainer = {
    SCEPlugin: SCECodeGenType;
};
export declare type SCECodeGenType = new () => SceMain;
export declare const plugins: Array<SCECodeGenType>;
