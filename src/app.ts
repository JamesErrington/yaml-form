/*
import * as fs from 'fs';
import * as yamlParse from 'js-yaml';
import { makeForm } from './html';

function writeHTML(path : string, html : string) : void {
  fs.writeFileSync('basic-form.html', html, {
    encoding: 'utf-8'
  });
}

function getFormDef(path : string) : IForm {
  const file = yamlParse.safeLoad(fs.readFileSync(path, 'utf-8'));
  return JSON.parse(JSON.stringify(file));
}

function writeForm(path : string) : void {
  const formDef = getFormDef(path);

  const form = makeForm(formDef);

  writeHTML(path.replace('.yaml', '.html'), form);
}

export {writeForm};
*/
