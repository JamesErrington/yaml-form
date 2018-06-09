import * as fs from 'fs';
import * as yamlParse from 'js-yaml';
import { makeForm } from './html';

function writeHTML(path : string, html : string) : void {
  fs.writeFileSync(path, html, {
    encoding: 'utf-8'
  });
}

function getFormDef(path : string) : IForm {
  const file = yamlParse.safeLoad(fs.readFileSync(path, 'utf-8'));
  return JSON.parse(JSON.stringify(file));
}

export function writeForm(path : string) : void {
  const formDef = getFormDef(path);

  const form = makeForm(formDef);

  writeHTML(path.replace('.yaml', '.html'), form);
}
