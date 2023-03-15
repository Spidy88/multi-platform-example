#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
yargs_1.default
    .scriptName('fs-cli')
    .command('clean-ext <path>', 'Clean filenames to not have nested extensions', (y) => {
    return y.demand('path');
}, (args) => {
    console.log('Cleaning path: ', args.path);
})
    .help()
    .argv;
//# sourceMappingURL=index.js.map