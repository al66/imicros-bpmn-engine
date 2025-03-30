/**
 * @license MIT, imicros.de (c) 2025 Andreas Leinen
 */
"use strict";

// default logger class
class Logger {
    constructor() {
        this.level = 0;
        this.name = "default";
    }

    setLevel(level) {
        this.level = level;
    }

    setName(name) {
        this.name = name;
    }

    log() { 
        //console.log(arguments[0] + ": " + arguments[1], arguments.length > 2 ? { ...arguments.slice(2) } : {});
        let attributes = arguments.length > 2 ? Array.from(arguments).slice(2) : null;
        attributes ? console.log(arguments[0] + ": " + arguments[1], ...attributes) : console.log(arguments[0] + ": " + arguments[1], {});
    }
    debug(...args) { this.log("DEBUG",...args); }
    info(...args) { this.log("INFO",...args); }
    warn(...args) { this.log("WARN",...args); }
    error(...args) { this.log("ERROR",...args); }
}

module.exports = {
    Logger
};