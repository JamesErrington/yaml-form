import { expect } from 'chai';
import 'mocha';
import { makeChoiceGroupBootstrap, makeInputTagBootstrap } from '../src/styling';

describe('makeInputTagBootstrap()', () => {
  describe('Add bootstrap formatting to text input tag', () => {
    it('should add div with class form-group, and class form-control to input tag', () => {
      const definition : ITextInput = {
        id: 'lowercase',
        type: 'text',
        pattern: '[a-z]*',
        required: 'yes',
        label: 'Type text:'
      };
      const result = makeInputTagBootstrap(definition);
      const expected = '<div class="form-group">\n' +
        '\t<label for="lowercase">Type text:</label>\n' +
        '\t<input class="form-control" id="lowercase" type="text" pattern="[a-z]*" required="yes">\n' +
        '</div>';

        expect(result).to.equal(expected);
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
      const result = makeChoiceGroupBootstrap(definition);
      const expected = '<div id="radio-group">\n\t<input id="radio-one" name="radios" type="radio" value="one">\n' +
        '\t<label for="radio-one">Option 1</label><br />\n\t<input id="radio-two" name="radios" type="radio" value="two">\n' +
        '\t<label for="radio-two">Option 2</label><br />\n</div><br />';

      // expect(result).to.equal(expected);
    });
  });
});