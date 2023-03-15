#!/usr/bin/env node

import yargs from 'yargs';
import fs from 'fs-extra';
import klawSync from 'klaw-sync';
import path from 'path';

yargs
    .scriptName('fs-cli')
    .command(
        'clean-ext <path>',
        'Clean filenames to not have nested extensions',
        (y) => {
            return y.demand('path');
        },
        (args) => {
            console.log('Cleaning path: ', args.path);
            const files = klawSync(args.path as string, {
                traverseAll: true,
                filter: (item) => {
                    const basename = path.basename(item.path);
                    return basename.includes('.web.') || basename.includes('.native.');
                }
            });

            files.forEach((file) => {
                const parsed = path.parse(file.path);

                let updatedName = parsed.name.replace(/\.(web|native)/, '');
                const updatedPath = `${parsed.dir}${path.sep}${updatedName}${parsed.ext}`;

                console.log(`Renaming: ${file.path} --> ${updatedPath}`);
                fs.copyFileSync(file.path, updatedPath);
            });
        }
    )
    .help()
    .argv;
