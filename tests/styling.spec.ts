import { expect } from 'chai';
import 'mocha';
import { makeInputTagBootstrap } from '../src/styling';

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