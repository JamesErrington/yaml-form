import { makeAttributeString } from './html';
import { schemas } from './utils';

function makeInputTagBootstrap(definition : ITextInput) : string {
  let html = '<div class="form-group">\n';
  if(definition.label && definition.id) {
    html += `\t<label for="${definition.id}">${definition.label}</label>\n`;
  } else if(definition.label) {
    throw new Error(`<input> must have attribute 'id' to add <label>`);
  }
  html += `\t<input class="form-control"${makeAttributeString(schemas.textInputSchema(), definition)}>\n</div>`;
  return html;
}

function makeChoiceGroupBootstrap(definition : IChoiceGroup) : string {
  let html = definition.id ? `<div id="${definition.id}">\n` : '<div>\n';
  for(const choice of definition.choices) {
    html += '\t<div class="form-check">\n'
    html += `\t\t<input class="form-check-input" id="${choice.id}" name="${definition.name}" type="${definition.type}" value="${choice.value}">\n`;
    html += `\t\t<label class="form-check-label" for="${choice.id}">${choice.label}</label><br />\n`;
    html += '\t</div>\n';
  }
  html += `</div>`;

  console.log(html);
  return html;
}

export { makeChoiceGroupBootstrap, makeInputTagBootstrap };