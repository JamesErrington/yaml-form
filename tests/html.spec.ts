import { expect } from 'chai';
import 'mocha';
import { makeAttributeString, makeForm, makeFormTag, makeInputTag, makeRadioGroup } from '../src/html';

const globalSchema = ['id', 'name', 'class'];
const formMetaSchema = ['accept_charset', 'action', 'autocomplete', 'enctype', 'method', 'novalidate', 'target'];

describe('makeAttributeString()', () => {
  describe('Make full attribute string', () => {
    it('should return a string of attributes as per the given full definition', () => {
      const definition = {
        name: 'form',
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
      const definition = {
        name: 'form',
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
      const definition = {
        name: 'form',
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
      const definition = {
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
  describe('Make html input tag', () => {
    it('should return a string of a html text input with the attributes defined in the given definition', () => {
      const definition = {
        id: 'lowercase',
        type: 'text',
        pattern: '[a-z]*',
        placeholder: 'Lowercase only',
        required: 'yes'
      };
      const result = makeInputTag(definition);
      const expected = '<input id="lowercase" type="text" pattern="[a-z]*" placeholder="Lowercase only" required="yes">\n';

      expect(result).to.equal(expected);
    });
  });

  describe('Make html input tag with label', () => {
    it('should return a string of a html label and text input with the attributes defined in the given definition', () => {
      const definition = {
        id: 'lowercase',
        type: 'text',
        pattern: '[a-z]*',
        placeholder: 'Lowercase only',
        required: 'yes',
        label: 'Type text'
      };
      const result = makeInputTag(definition);
      const expected = '<label for="lowercase">Type text</label>\n' +
        '<input id="lowercase" type="text" pattern="[a-z]*" placeholder="Lowercase only" required="yes">\n';

      expect(result).to.equal(expected);
    });
  });

  describe('No id on input with label', () => {
    it('should throw an error if the input does not have id for the label', () => {
      const definition = {
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

describe('makeRadioGroup()', () => {
  describe('Make a group of radio buttons with labels', () => {
    it('should return a string of a html radio button group with labels as defined oin the given definition', () => {
      const definition = {
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
      };
      const result = makeRadioGroup(definition);
      const expected = '<div id="radio-group">\n\t<input id="option-one" name="options" type="radio" value="one">\n' +
        '\t<label for="option-one">Option 1</label>\n\t<input id="option-two" name="options" type="radio" value="two">\n' +
        '\t<label for="option-two">Option 2</label>\n</div>';

      expect(result).to.equal(expected);
    });
  });
});

describe('makeForm()', () => {
  describe('Make a form', () => {
    it('should return a string of a html form with the given attributes and body', () => {
      const definition = {
        form_meta: {
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
        }]
      };
      const result = makeForm(definition);
      const expected = '<form name="form" action="action.php" method="get" novalidate="false">\n' +
        '\t<input id="lowercase" type="text" pattern="[a-z]*" placeholder="Lowercase only" required="yes">\n' +
        '</form>';

      expect(result).to.equal(expected);
    });
  });
});
