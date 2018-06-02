#!/usr/bin/env node
import program from 'commander';
import { writeForm } from './app';

program
  .arguments('<file>')
  .action((file : string) => {
    writeForm(file);
  })
  .parse(process.argv);
