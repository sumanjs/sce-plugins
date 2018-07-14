import { proto } from './data-proto';
export declare type Copyable = typeof proto;
export interface ICopyableValue extends Partial<Copyable> {
  root?: boolean;
  left?: string | ICopyableValue;
  middle?: string | ICopyableValue;
  right?: string | ICopyableValue;
  parent?: ICopyableValue;
}
export interface ICopyable {
  [key: string]: ICopyableValue;
}
export declare const values: ICopyable;
