import chalk, { ChalkInstance, Color } from 'chalk'

declare type VerbosityMap = {
    [key: string]: number
}

declare type ColorMap = {
    [key: string]: ChalkInstance|Color
}

class Logger {
    verboseness: VerbosityMap = {}
    colors: ColorMap = {}

    verbose(module: string, verboseness: number, message: string, ...extras: any[]) {
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

    setVerboseness(module: string, verboseness: number) {
        this.verboseness[module] = verboseness
    }

    setColor(module: string, color: ChalkInstance|Color) {
        this.colors[module] = color
    }
}

export default new Logger()
