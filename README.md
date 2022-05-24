# logger

[![CI](https://github.com/bumbummen99/logger/actions/workflows/CI.yml/badge.svg)](https://github.com/bumbummen99/logger/actions/workflows/CI.yml)

Just a small logger class using chalk.

Based on the [Logger class from SquadJS](https://github.com/Team-Silver-Sphere/SquadJS/blob/master/core/logger.js)

## Installation
You can install logger using the following command
```
npm install @skyraptor/logger
```

## Usage
```
import Logger from '@skyraptor/logger'
import chalk from 'chalk'

// Determine how much to show of a module
Logger.setVerboseness('MyModule', 4)

// Set color for a module using ChalkInstance or string
Logger.setColor('MyModule', chalk.blue)

// Log message to console with verbosity 3
Logger.verbose('MyModule', 3, 'Hello World!')
```

## Thanks
- [Thomas](https://github.com/Thomas-Smyth) for creating SquadJS and the Logger class
