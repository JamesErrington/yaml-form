import * as yaml_parse from 'js-yaml';
import * as fs from 'fs';

interface FormSchema {
  form : {
    form_meta : string[]
  }
}

interface Config {
  required : {
    form : {
      [action : string] : boolean,
      method : boolean
    }
  }
}

interface FormMeta {
  [accept_charset : string] : string,
  action : string,
  autocomplete : string,
  enctype : string,
  method : string,
  name : string,
  novalidate : string,
  target : string
}

interface FormDef {
  form : {
    form_meta: FormMeta
  }
}

function getSchema(path : string) : FormSchema {
  const file = yaml_parse.safeLoad(fs.readFileSync(path, 'utf-8'));
  return convertToSchema(file);
}

function getConfig(path : string) : Config {
  const file = yaml_parse.safeLoad(fs.readFileSync(path, 'utf-8'));
  return convertToConfig(file);
}

function getFormDef(path : string) : FormDef {
  const file = yaml_parse.safeLoad(fs.readFileSync(path, 'utf-8'));
  return convertToFormDef(file);
}

function convertToFormDef(file : yaml_parse.DocumentLoadResult) : FormDef {
  return JSON.parse(JSON.stringify(file));
}

function convertToConfig(file : yaml_parse.DocumentLoadResult) : Config {
  return JSON.parse(JSON.stringify(file));
}

function convertToSchema(file : yaml_parse.DocumentLoadResult) : FormSchema {
  return JSON.parse(JSON.stringify(file));
}

function writeHTML(html : string) : void {
  fs.writeFileSync('basic-form.html', html, {
    encoding: 'utf-8'
  });
}

function makeMeta(meta_schema : string[], meta_def : FormMeta) : string {
  let string = '';
  for(let attribute of meta_schema) {
    const value = meta_def[attribute];
    if(value) {
      string += ` ${attribute.replace('_', '-')}="${value}"`;
    } else if(config.required.form[attribute]) {
      console.error(`Undefined required attribute '${attribute}'`);
    }
  }
  return string;
}

function makeForm(form_def : FormDef) : void {
  const metaString = makeMeta(schema.form.form_meta, form_def.form.form_meta);
  let html = `<form${metaString}>\n\n</form>`;
  writeHTML(html);
}

const schema = getSchema('formschema.yaml');

const config = getConfig('./yamlform.config.yaml');

const formDef = getFormDef('./basic-form.yaml');

makeForm(formDef);
