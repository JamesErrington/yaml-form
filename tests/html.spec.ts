import { expect } from 'chai';
import 'mocha';
import { makeMeta } from '../src/html';

const metaSchema = ['accept_charset', 'action', 'autocomplete', 'enctype', 'method', 'name', 'novalidate', 'target'];

describe('Make full meta string', () => {
  it('should return a full html attribute string for the form element', () => {
    const definition = {
      accept_charset: 'utf-8',
      action: 'action.php',
      autocomplete: 'on',
      enctype: 'application/x-www-form-urlencoded',
      method: 'get',
      name: 'form',
      novalidate: 'false',
      target: '_self'
    };
    const result = makeMeta(metaSchema, definition);
    const expected = ' accept-charset="utf-8" action="action.php" autocomplete="on" ' +
      'enctype="application/x-www-form-urlencoded" method="get" name="form" novalidate="false" target="_self"';

    expect(result).is.equal(expected);
  });
});

describe('Make selected meta string', () => {
  it('should return a html attribute string for the given non-null attributes', () => {
    const definition = {
      accept_charset: '',
      action: 'action.php',
      autocomplete: '',
      enctype: '',
      method: 'get',
      name: 'form',
      novalidate: 'false'
      // target: '_self'
    };
    const result = makeMeta(metaSchema, definition);
    const expected = ' action="action.php" method="get" name="form" novalidate="false"';
    expect(result).is.equal(expected);
  });
});

describe('Throw error on missing required attribute', () => {
  it('should throw an error if a required attribute is not in the definition', () => {
    const definition = {
      action: 'action.php',
      method: '',
      name: 'form'
    };
    const config = {
      required: {
        form: ['action', 'method']
      }
    };
    expect(() => makeMeta(metaSchema, definition, config)).to.throw('Undefined required attribute \'method\'');
  });
});
