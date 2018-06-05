import { expect } from 'chai';
import 'mocha';
import { makeDateInput, makeEmailInput, makeFormTag, makePasswordInput, makeTextInput } from '../src/newhtml';

describe('makeFormTag()', function() {
  describe('Makes the form tag', function() {
    it('should return a string of a form tag', function() {
      const definition : IFormMeta = {
        id: 'form',
        class: 'form',
        action: './action.php',
        method: 'post',
        target: '_self'
      };
      const result = makeFormTag(definition);
      const expected = '<form id="form" class="form" action="./action.php" method="post" target="_self">\n';

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
        class: 'text-input',
        name: 'text-input',
        label: 'Text:'
      };
      const result = makeTextInput(definition);
      const expected = '\t<label for="text-input">Text:</label>\n' +
        '\t<input type="text" id="text-input" class="text-input" name="text-input">\n';

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
        class: 'password-input',
        name: 'password-input',
        label: 'Password:'
      };
      const result = makePasswordInput(definition);
      const expected = '\t<label for="password-input">Password:</label>\n' +
        '\t<input type="password" id="password-input" class="password-input" name="password-input">\n';

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
        class: 'email-input',
        name: 'email-input',
        label: 'Email:'
      };
      const result = makeEmailInput(definition);
      const expected = '\t<label for="email-input">Email:</label>\n' +
        '\t<input type="email" id="email-input" class="email-input" name="email-input">\n';

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
        class: 'date-input',
        name: 'date-input',
        label: 'Date:'
      };
      const result = makeDateInput(definition);
      const expected = '\t<label for="date-input">Date:</label>\n' +
        '\t<input type="date" id="date-input" class="date-input" name="date-input">\n';

      expect(result).to.equal(expected);
    });
  });
});

/*
import { makeAttributeString, makeChoiceGroup, makeDateInput, makeForm, makeFormTag, makeInputTag, makeSubmitInput } from '../src/html';

const globalSchema = ['id', 'name', 'class'];
const formMetaSchema = ['accept_charset', 'action', 'autocomplete', 'enctype', 'method', 'novalidate', 'target'];

describe('makeAttributeString()', () => {
  describe('Make full attribute string', () => {
    it('should return a string of attributes as per the given full definition', () => {
      const definition : IFormMeta = {
        name: 'form',
        type: 'meta',
        accept_charset: 'utf-8',
        action: 'action.php',
        autocomplete: 'on',
        enctype: 'application/x-www-form-urlencoded',
        method: 'get',
        novalidate: 'false',
        target: '_self'
      };
      const schema = globalSchema.concat(formMetaSchema);
      const result = makeAttributeString(schema, definition);
      const expected = ' name="form" accept-charset="utf-8" action="action.php" autocomplete="on" ' +
        'enctype="application/x-www-form-urlencoded" method="get" novalidate="false" target="_self"';

      expect(result).to.equal(expected);
    });
  });

  describe('Make selected attribute string', () => {
    it('should return a string of attributes as per the given part definition', () => {
      const definition : IFormMeta = {
        name: 'form',
        type: 'meta',
        accept_charset: '',
        action: 'action.php',
        autocomplete: '',
        enctype: '',
        method: 'get',
        novalidate: 'false'
        // target: '_self'
      };
      const schema = globalSchema.concat(formMetaSchema);
      const result = makeAttributeString(schema, definition);
      const expected = ' name="form" action="action.php" method="get" novalidate="false"';

      expect(result).to.equal(expected);
    });
  });

  describe('Throw error on missing required attribute', () => {
    it('should throw an error if a required attribute is not in the given definition', () => {
      const definition : IFormMeta = {
        name: 'form',
        type: 'meta',
        action: 'action.php',
        method: ''
      };
      const schema = globalSchema.concat(formMetaSchema);
      const required =  ['action', 'method'];

      expect(() => makeAttributeString(schema, definition, required)).to.throw(`Undefined required attribute 'method'`);
    });
  });
});

describe('makeFormTag()', () => {
  describe('Make html form tag', () => {
    it('should return a string of a html form with the attributes defined in the given definition', () => {
      const definition : IFormMeta = {
        type: 'meta',
        action: 'action.php',
        method: 'get',
        name: 'form',
        novalidate: 'false'
      };
      const result = makeFormTag(definition);
      const expected = '<form name="form" action="action.php" method="get" novalidate="false">\n';

      expect(result).to.equal(expected);
    });
  });
});

describe('makeInputTag()', () => {
  describe('Make html text input tag', () => {
    it('should return a string of a html text input with the attributes defined in the given definition', () => {
      const definition : ITextInput = {
        id: 'lowercase',
        type: 'text',
        pattern: '[a-z]*',
        placeholder: 'Lowercase only',
        required: 'yes'
      };
      const result = makeInputTag(definition);
      const expected = '<input id="lowercase" type="text" pattern="[a-z]*" placeholder="Lowercase only" required="yes"><br />';

      expect(result).to.equal(expected);
    });
  });

  describe('Make html text input tag with label', () => {
    it('should return a string of a html label and text input with the attributes defined in the given definition', () => {
      const definition : ITextInput = {
        id: 'lowercase',
        type: 'text',
        pattern: '[a-z]*',
        placeholder: 'Lowercase only',
        required: 'yes',
        label: 'Type text'
      };
      const result = makeInputTag(definition);
      const expected = '<label for="lowercase">Type text</label>\n' +
        '<input id="lowercase" type="text" pattern="[a-z]*" placeholder="Lowercase only" required="yes"><br />';

      expect(result).to.equal(expected);
    });
  });

  describe('No id on text input with label', () => {
    it('should throw an error if the input does not have id for the label', () => {
      const definition : ITextInput = {
        type: 'text',
        pattern: '[a-z]*',
        placeholder: 'Lowercase only',
        required: 'yes',
        label: 'Type text'
      };

      expect(() => makeInputTag(definition)).to.throw(`<input> must have attribute 'id' to add <label>`);
    });
  });
});

describe('makeChoiceGroup()', () => {
  describe('Make a group of radio buttons with labels', () => {
    it('should return a string of a html radio button group with labels as defined in the given definition', () => {
      const definition : IChoiceGroup = {
        id: 'radio-group',
        name: 'radios',
        type: 'radio',
        choices: [{
          id: 'radio-one',
          label: 'Option 1',
          value: 'one'
        }, {
          id: 'radio-two',
          label: 'Option 2',
          value: 'two'
        }]
      };
      const result = makeChoiceGroup(definition);
      const expected = '<div id="radio-group">\n\t<input id="radio-one" name="radios" type="radio" value="one">\n' +
        '\t<label for="radio-one">Option 1</label><br />\n\t<input id="radio-two" name="radios" type="radio" value="two">\n' +
        '\t<label for="radio-two">Option 2</label><br />\n</div><br />';

      expect(result).to.equal(expected);
    });
  });

  describe('Make a group of checkboxes with labels', () => {
    it('should return a string of a html checkbox group with labels as defined in the given definition', () => {
      const definition : IChoiceGroup = {
        id: 'checkbox-group',
        name: 'checkboxes',
        type: 'checkbox',
        choices: [{
          id: 'checkbox-one',
          label: 'Option 1',
          value: 'one'
        }, {
          id: 'checkbox-two',
          label: 'Option 2',
          value: 'two'
        }]
      };

      const result = makeChoiceGroup(definition);
      const expected = '<div id="checkbox-group">\n\t<input id="checkbox-one" name="checkboxes" type="checkbox" value="one">\n' +
        '\t<label for="checkbox-one">Option 1</label><br />\n\t<input id="checkbox-two" name="checkboxes" type="checkbox" value="two">\n' +
        '\t<label for="checkbox-two">Option 2</label><br />\n</div><br />';

      expect(result).to.equal(expected);
    });
  });
});

describe('makeDateInput()', () => {
  describe('Make html date input tag', () => {
    it('should return a string of a html date input with the attributes defined in the given definition', () => {
      const definition : IDateInput = {
        id: 'date',
        type: 'date',
        required: 'yes',
        label: 'Select date'
      };
      const result = makeDateInput(definition);
      const expected = '<label for="date">Select date</label>\n<input id="date" type="date" required="yes"><br />';

      expect(result).to.equal(expected);
    });
  });
});

describe('makeSubmitButton()', () => {
  describe('Make html submit input', () => {
    it('should return a string of a html submit input with the attributes defined in the given definition', () => {
      const definition : ISumbitInput = {
        type: 'submit',
        label: 'Submit'
      };
      const result = makeSubmitInput(definition);
      const expected = '<input type="submit" value="Submit">';
    });
  });
});

describe('makeForm()', () => {
  describe('Make a form', () => {
    it('should return a string of a html form with the given attributes and body', () => {
      const definition : IForm = {
        form_meta: {
          type: 'meta',
          action: 'action.php',
          method: 'get',
          name: 'form',
          novalidate: 'false'
        },
        body: [{
          id: 'lowercase',
          type: 'text',
          pattern: '[a-z]*',
          placeholder: 'Lowercase only',
          required: 'yes'
        }, {
          id: 'radio-group',
          name: 'options',
          type: 'radio',
          choices: [{
            id: 'option-one',
            label: 'Option 1',
            value: 'one'
          }, {
            id: 'option-two',
            label: 'Option 2',
            value: 'two'
          }]
        }, {
          type: 'submit',
          label: 'Submit'
        }]
      };
      const result = makeForm(definition);
      const expected = '<form name="form" action="action.php" method="get" novalidate="false">\n' +
        '\t<input id="lowercase" type="text" pattern="[a-z]*" placeholder="Lowercase only" required="yes"><br />\n' +
        '\t<div id="radio-group">\n' +
        '\t\t<input id="option-one" name="options" type="radio" value="one">\n' +
        '\t\t<label for="option-one">Option 1</label><br />\n' +
        '\t\t<input id="option-two" name="options" type="radio" value="two">\n' +
        '\t\t<label for="option-two">Option 2</label><br />\n' +
        '\t</div><br />\n' +
        '\t<input type="submit" value="Submit">\n' +
        '</form>';

      expect(result).to.equal(expected);
    });
  });
});
*/
