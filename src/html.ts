export function makeForm(definition : IForm) : string {
  let html = makeFormTag(definition.meta);

  for(const element of definition.body) {
    switch(element.type) {
      case 'text':
        html += makeTextInput(element);
        break;
      case 'password':
        html += makePasswordInput(element);
        break;
      case 'email':
        html += makeEmailInput(element);
        break;
      case 'date':
        html += makeDateInput(element);
        break;
    }
  }

  html += '\t<input type="submit">\n' +
    '</form>\n';
  return html;
}

export function makeFormTag(definition : IFormMeta) : string {
  const html = `<form id="${definition.id}" action="${definition.action}"` +
   ` method="${definition.method}" target="${definition.target}">\n`;

  return html;
}

export function makeTextInput(definition : ITextInput) : string {
  let html = `\t<label for="${definition.id}">${definition.label}</label>\n`;
  html += `\t<input type="text" id="${definition.id}" name="${definition.name}">\n`;

  return html;
}

export function makePasswordInput(definition : IPasswordInput) : string {
  let html = `\t<label for="${definition.id}">${definition.label}</label>\n`;
  html += `\t<input type="password" id="${definition.id}" name="${definition.name}">\n`;

  return html;
}

export function makeEmailInput(definition : IEmailInput) : string {
  let html = `\t<label for="${definition.id}">${definition.label}</label>\n`;
  html += `\t<input type="email" id="${definition.id}" name="${definition.name}">\n`;

  return html;
}

export function makeDateInput(definition : IDateInput) : string {
  let html = `\t<label for="${definition.id}">${definition.label}</label>\n`;
  html += `\t<input type="date" id="${definition.id}" name="${definition.name}">\n`;

  return html;
}
