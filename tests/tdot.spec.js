describe('tdot', function() {
  var tdot,
      TEST_KEY = '166a657e37104b7e89bd710cf13929b1';

  beforeEach(function() {
    // we always want a fresh tdot
    delete require.cache[require.resolve('../tdot.js')];
    tdot = require('../tdot.js');
  });


  describe('setKey', function() {

    it('should require a key', function() {
      var keyResponse = tdot.setKey();
      expect(keyResponse).toBe('You did not enter a correct value');
    });

    it('should return key as a string', function() {
      var numkey = 42;
      var keyResponse = tdot.setKey(numkey);
      expect(keyResponse).toBe('42');
    });
  });

  describe('getKey', function() {

    it('should return undefined for no key', function() {
      expect(tdot.getKey()).toBe(undefined);
    });

    it('should return the key that has been set', function() {
      tdot.setKey(TEST_KEY);
      expect(tdot.getKey()).toBe(TEST_KEY);
    });

  });
  
});
