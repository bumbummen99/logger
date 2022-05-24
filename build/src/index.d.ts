import { ChalkInstance, Color } from 'chalk';
declare type VerbosityMap = {
    [key: string]: number;
};
declare type ColorMap = {
    [key: string]: ChalkInstance | Color;
};
declare class Logger {
    verboseness: VerbosityMap;
    colors: ColorMap;
    verbose(module: string, verboseness: number, message: string, ...extras: any[]): void;
    setVerboseness(module: string, verboseness: number): void;
    setColor(module: string, color: ChalkInstance | Color): void;
}
declare const _default: Logger;
export default _default;
