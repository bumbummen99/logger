import chalk from 'chalk';
class Logger {
    constructor() {
        this.verboseness = {};
        this.colors = {};
    }
    verbose(module, verboseness, message, ...extras) {
        let colorFunction = chalk.white;
        if (module in this.colors) {
            if (typeof this.colors[module] === 'string' && this.colors[module] in chalk) {
                colorFunction = chalk[this.colors[module]];
            }
            else if (typeof this.colors[module] === 'function') {
                colorFunction = this.colors[module];
            }
        }
        if ((this.verboseness[module] || 1) >= verboseness) {
            console.log(`[${colorFunction(module)}][${verboseness}] ${message}`, ...extras);
        }
    }
    setVerboseness(module, verboseness) {
        this.verboseness[module] = verboseness;
    }
    setColor(module, color) {
        this.colors[module] = color;
    }
}
export default new Logger();
//# sourceMappingURL=index.js.map