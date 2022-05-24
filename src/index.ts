import chalk, { ChalkInstance } from 'chalk'

declare type VerbosityMap = {
    [key: string]: number
}

declare type ColorMap = {
    [key: string]: ChalkInstance|string
}

class Logger {
    verboseness: VerbosityMap = {}
    colors: ColorMap = {}

    verbose(module, verboseness, message, ...extras) {
        let colorFunction: ChalkInstance = chalk.white
        if (module in this.colors) {
            if (typeof this.colors[module] === 'string' && this.colors[module] as string in chalk) {
                colorFunction = chalk[this.colors[module] as string]
            } else if (typeof this.colors[module] === 'function') {
                colorFunction = this.colors[module] as ChalkInstance
            }
        }

        if ((this.verboseness[module] || 1) >= verboseness) {
            console.log(`[${colorFunction(module)}][${verboseness}] ${message}`, ...extras)
        }
    }

    setVerboseness(module, verboseness) {
        this.verboseness[module] = verboseness
    }

    setColor(module: string, color: ChalkInstance|string) {
        this.colors[module] = color
    }
}

export default new Logger()
