#!/usr/bin/env node
import {writeForm} from './app';
const program = require('commander');

program
  .arguments('<file>')
  .action((file : string) => {
    writeForm(file)
  })
  .parse(process.argv);
