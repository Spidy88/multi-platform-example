#!/usr/bin/env node

import fs from 'fs-extra';
import yargs from 'yargs';

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
            fs.ftruncate
        }
    )
    .help()
    .argv;
