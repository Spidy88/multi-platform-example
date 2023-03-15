#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const klaw_sync_1 = __importDefault(require("klaw-sync"));
const path_1 = __importDefault(require("path"));
yargs_1.default
    .scriptName('fs-cli')
    .command('clean-ext <path>', 'Clean filenames to not have nested extensions', (y) => {
    return y.demand('path');
}, (args) => {
    console.log('Cleaning path: ', args.path);
    const files = (0, klaw_sync_1.default)(args.path, {
        traverseAll: true,
        filter: (item) => {
            const basename = path_1.default.basename(item.path);
            return basename.includes('.web.') || basename.includes('.native.');
        }
    });
    files.forEach((file) => {
        const parsed = path_1.default.parse(file.path);
        let updatedName = parsed.name.replace(/\.(web|native)/, '');
        const updatedPath = `${parsed.dir}${path_1.default.sep}${updatedName}${parsed.ext}`;
        console.log(`Renaming: ${file.path} --> ${updatedPath}`);
        fs_extra_1.default.copyFileSync(file.path, updatedPath);
    });
})
    .help()
    .argv;
//# sourceMappingURL=index.js.map