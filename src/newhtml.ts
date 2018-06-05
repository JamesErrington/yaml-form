export function makeForm(defintion : IForm) : string {
  let html = makeFormTag(defintion.form_meta);

  for(const element of defintion.body) {
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
    }
  }

  html += '</form>\n';
  return html;
}

export function makeFormTag(definition : IFormMeta) : string {
  const html = `<form id="${definition.id}" class="${definition.class}" action="${definition.action}"` +
   ` method="${definition.method}" target="${definition.target}">\n`;

  return html;
}

export function makeTextInput(definition : ITextInput) : string {
  let html = `\t<label for="${definition.id}">${definition.label}</label>\n`;
  html += `\t<input type="text" id="${definition.id}" class="${definition.class}" name="${definition.name}">\n`;

  return html;
}

export function makePasswordInput(definition : IPasswordInput) : string {
  let html = `\t<label for="${definition.id}">${definition.label}</label>\n`;
  html += `\t<input type="password" id="${definition.id}" class="${definition.class}" name="${definition.name}">\n`;

  return html;
}

export function makeEmailInput(definition : IEmailInput) : string {
  let html = `\t<label for="${definition.id}">${definition.label}</label>\n`;
  html += `\t<input type="email" id="${definition.id}" class="${definition.class}" name="${definition.name}">\n`;

  return html;
}

export function makeDateInput(definition : IDateInput) : string {
  let html = `\t<label for="${definition.id}">${definition.label}</label>\n`;
  html += `\t<input type="date" id="${definition.id}" class="${definition.class}" name="${definition.name}">\n`;

  return html;
}
