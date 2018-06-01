import { schemas } from './utils';

function makeAttributeString(schema : string[], definition : IHTMLElement, required? : string[]) : string {
  let text = '';
  for(const attribute of schema) {
    // @ts-ignore: we are checking for undefined already
    const value = definition[attribute];
    if(value) {
      text += ` ${attribute.replace('_', '-')}="${value}"`;
      continue;
    }
    // If this attribute is required we need to throw an error
    if(required && required.indexOf(attribute) !== -1) {
      throw new Error(`Undefined required attribute '${attribute}'`);
    }
  }
  return text;
}

function makeFormTag(definition : IFormElement) : string {
  const attributes = makeAttributeString(schemas.formMetaSchema(), definition);
  const html = `<form${attributes}>\n`;
  return html;
}

function makeInputTag(definition : ITextInputElement) : string {
  let html = '';
  if(definition.label && definition.id) {
    html += `<label for="${definition.id}">${definition.label}</label>\n`;
  } else if(definition.label) {
    throw new Error(`<input> must have attribute 'id' to add <label>`);
  }
  const attributes = makeAttributeString(schemas.textInputSchema(), definition);
  html += `<input${attributes}>\n`;
  return html;
}

function makeRadioGroup(definition : IRadioGroup) : string {
  let html = definition.id ? `<div id="${definition.id}">\n` : '<div>\n';
  for(const choice of definition.choices) {
    html += `\t<input id="${choice.id}" name="${definition.name}" type="${definition.type}" value="${choice.value}">\n`;
    html += `\t<label for="${choice.id}">${choice.label}</label>\n`;
  }
  html += `</div>`;

  return html;
}

function makeForm(definition : IForm) : string {
  let html = '';
  html += makeFormTag(definition.form_meta);
  for(const element of definition.body) {
    html += `\t${makeInputTag(element)}`;
  }
  html += '</form>';
  return html;
}

export { makeAttributeString, makeFormTag, makeInputTag, makeRadioGroup, makeForm };
