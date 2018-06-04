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

export { makeInputTagBootstrap };