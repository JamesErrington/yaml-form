import { expect } from 'chai';
import 'mocha';
import { makeDateInput, makeEmailInput, makeFormTag, makePasswordInput, makeTextInput, makeForm } from '../src/html';

describe('makeFormTag()', function() {
  describe('Makes the form tag', function() {
    it('should return a string of a form tag', function() {
      const definition : IFormMeta = {
        id: 'form',
        action: './action.php',
        method: 'post',
        target: '_self'
      };
      const result = makeFormTag(definition);
      const expected = '<form id="form" action="./action.php" method="post" target="_self">\n';

      expect(result).to.equal(expected);
    });
  });
});

describe('makeTextInput()', function() {
  describe('Makes a text input', function() {
    it('should return a string of a text input', function() {
      const definition : ITextInput = {
        type: 'text',
        id: 'text-input',
        name: 'text-input',
        label: 'Text:'
      };
      const result = makeTextInput(definition);
      const expected = '\t<label for="text-input">Text:</label>\n' +
        '\t<input type="text" id="text-input" name="text-input">\n';

      expect(result).to.equal(expected);
    });
  });
});

describe('makePasswordInput()', function() {
  describe('Makes a password input', function() {
    it('should return a string of a password input', function() {
      const definition : IPasswordInput = {
        type: 'password',
        id: 'password-input',
        name: 'password-input',
        label: 'Password:'
      };
      const result = makePasswordInput(definition);
      const expected = '\t<label for="password-input">Password:</label>\n' +
        '\t<input type="password" id="password-input" name="password-input">\n';

      expect(result).to.equal(expected);
    });
  });
});

describe('makeEmailInput()', function() {
  describe('Makes a email input', function() {
    it('should return a string of a email input', function() {
      const definition : IEmailInput = {
        type: 'email',
        id: 'email-input',
        name: 'email-input',
        label: 'Email:'
      };
      const result = makeEmailInput(definition);
      const expected = '\t<label for="email-input">Email:</label>\n' +
        '\t<input type="email" id="email-input" name="email-input">\n';

      expect(result).to.equal(expected);
    });
  });
});

describe('makeDateInput()', function() {
  describe('Makes a date input', function() {
    it('should return a string of a date input', function() {
      const definition : IDateInput = {
        type: 'date',
        id: 'date-input',
        name: 'date-input',
        label: 'Date:'
      };
      const result = makeDateInput(definition);
      const expected = '\t<label for="date-input">Date:</label>\n' +
        '\t<input type="date" id="date-input" name="date-input">\n';

      expect(result).to.equal(expected);
    });
  });
});

describe('makeForm()', function() {
  describe('Make a form', function() {
    it('should return a string of the whole form', function() {
      const formDefintion : IFormMeta = {
        id: 'form',
        action: './action.php',
        method: 'post',
        target: '_self'
      };
      const textDefinition : ITextInput = {
        type: 'text',
        id: 'text-input',
        name: 'text-input',
        label: 'Text:'
      };
      const passwordDefinition : IPasswordInput = {
        type: 'password',
        id: 'password-input',       
        name: 'password-input',
        label: 'Password:'
      };
      const emailDefinition : IEmailInput = {
        type: 'email',
        id: 'email-input',
        name: 'email-input',
        label: 'Email:'
      };
      const dateDefinition : IDateInput = {
        type: 'date',
        id: 'date-input',
        name: 'date-input',
        label: 'Date:'
      };
      const definition : IForm = {
        meta: formDefintion,
        body: [
          textDefinition, passwordDefinition, emailDefinition, dateDefinition
        ]
      };
      const result = makeForm(definition);
      const expected = '<form id="form" action="./action.php" method="post" target="_self">\n' +
        '\t<label for="text-input">Text:</label>\n' +
        '\t<input type="text" id="text-input" name="text-input">\n' +
        '\t<label for="password-input">Password:</label>\n' +
        '\t<input type="password" id="password-input" name="password-input">\n' +
        '\t<label for="email-input">Email:</label>\n' +
        '\t<input type="email" id="email-input" name="email-input">\n' +
        '\t<label for="date-input">Date:</label>\n' +
        '\t<input type="date" id="date-input" name="date-input">\n' +
        '\t<input type="submit">\n' +
        '</form>\n';

      expect(result).to.equal(expected);
    });
  });
});
