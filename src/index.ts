import * as yaml_parse from 'js-yaml';
import * as fs from 'fs';

interface FormDef {
  meta : {
    action : string,
    target : string,
    method : string 
  },
  body : [{
    element : {
      tag : string,
      type : string,
      name : string,
      label : boolean,
    }
  }]
}

function convert(file : yaml_parse.DocumentLoadResult) : FormDef {
  return JSON.parse(JSON.stringify(file));
}

function makeForm(form_def : FormDef) : void {
  let html = `<form action="${form_def.meta.action}" target="${form_def.meta.target}" method="${form_def.meta.method}">\n`;
  for (let element of form_def.body) {
    if(element.element.label) {
      html += `\t<label for="${element.element.name}">${element.element.name}</label>\n`;
    }
    html += `\t<${element.element.tag} type="${element.element.type}" name="${element.element.name}">\n`;
  }
  html += `</form>\n`;
  fs.writeFileSync('basic-form.html', html, {
    encoding: 'utf-8'
  });
}

try {
  const file = yaml_parse.safeLoad(fs.readFileSync('./basic-form.yaml', 'utf-8'));
  const form_def = convert(file);
  makeForm(form_def);
} catch(error) {
  console.error(error);
}
