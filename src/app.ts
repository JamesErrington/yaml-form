import * as fs from 'fs';
import * as yamlParse from 'js-yaml';
import { makeForm } from './html';

function writeHTML(html : string) : void {
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

  writeHTML(form);
}

export {writeForm};

/*
interface IFormSchema {
  form : {
    form_meta : string[]
  };
}

interface IConfig {
  required : {
    form : {
      [action : string] : boolean
      method : boolean
    };
  };
}

interface IFormMeta {
  [accept_charset : string] : string
  action : string
  autocomplete : string
  enctype : string
  method : string
  name : string
  novalidate : string
  target : string
}

interface IFormDef {
  form : {
    form_meta: IFormMeta;
  };
}

function getSchema(path : string) : IFormSchema {
  const file = yamlParse.safeLoad(fs.readFileSync(path, 'utf-8'));
  return convertToSchema(file);
}

function getConfig(path : string) : IConfig {
  const file = yamlParse.safeLoad(fs.readFileSync(path, 'utf-8'));
  return convertToConfig(file);
}





function convertToConfig(file : yamlParse.DocumentLoadResult) : IConfig {
  return JSON.parse(JSON.stringify(file));
}

function convertToSchema(file : yamlParse.DocumentLoadResult) : IFormSchema {
  return JSON.parse(JSON.stringify(file));
}



function makeMeta(meta_schema : string[], meta_def : IFormMeta) : string {
  let string = '';
  for(const attribute of meta_schema) {
    const value = meta_def[attribute];
    if(value) {
      string += ` ${attribute.replace('_', '-')}="${value}"`;
    } else if(config.required.form[attribute]) {
      console.error(`Undefined required attribute '${attribute}'`);
    }
  }
  return string;
}

function makeForm(form_def : IFormDef) : void {
  const metaString = makeMeta(schema.form.form_meta, form_def.form.form_meta);
  const html = `<form${metaString}>\n\n</form>`;
  console.log(html);
  writeHTML(html);
}

const schema = getSchema('./schema/formschema.yaml');

const config = getConfig('./yamlform.config.yaml');


*/
