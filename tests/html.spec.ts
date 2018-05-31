import { makeMeta } from '../src/html';
import { expect } from 'chai';
import 'mocha';
import { DEFAULT_ECDH_CURVE } from 'tls';

describe('Make meta string', () => {
  it('should return a html attribute string', () => {
    const schema = ['accept_charset', 'action', 'autocomplete', 'enctype', 'method', 'name', 'novalidate', 'target'];
    const definition = {
      accept_charset: 'utf-8',
      action: 'action.php',
      autocomplete: 'on',
      enctype: 'application/x-www-form-urlencoded',
      method: 'get',
      name: 'form',
      novalidate: 'false',
      target: '_self'
    }
    const result = makeMeta(schema, definition);

    expect(result).is.equal(' accept-charset="utf-8" action="action.php" autocomplete="on" enctype="application/x-www-form-urlencoded" method="get" name="form" novalidate="false" target="_self"')
  })
});
