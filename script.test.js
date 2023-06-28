const { assert } = require('chai');
const { search, showSuggestions } = require('./script');

describe('search', () => {
  it('should return an array of matching fruit names', () => {
    const fruit = ['Apple', 'Apricot', 'Banana', 'Cherry', 'Coconut'];
    const input = 'ap';

    const result = search(input, fruit);

    assert.isArray(result);
    assert.include(result, 'Apple');
    assert.include(result, 'Apricot');
    assert.notInclude(result, 'Banana');
    assert.notInclude(result, 'Cherry');
    assert.notInclude(result, 'Coconut');
  });

  it('should be case-insensitive', () => {
    const fruit = ['Apple', 'Apricot', 'Banana', 'Cherry', 'Coconut'];
    const input = 'aPp';

    const result = search(input, fruit);

    assert.isArray(result);
    assert.include(result, 'Apple');
    assert.include(result, 'Apricot');
    assert.notInclude(result, 'Banana');
    assert.notInclude(result, 'Cherry');
    assert.notInclude(result, 'Coconut');
  });

  it('should return an empty array if no matches are found', () => {
    const fruit = ['Apple', 'Apricot', 'Banana', 'Cherry', 'Coconut'];
    const input = 'grape';

    const result = search(input, fruit);

    assert.isArray(result);
    assert.isEmpty(result);
  });
});

describe('showSuggestions', () => {
  it('should display the suggestions in the DOM', () => {
    const results = ['Apple', 'Apricot', 'Banana'];
    const inputVal = 'ap';
    const suggestions = document.createElement('ul');

    showSuggestions(results, inputVal, suggestions);

    assert.strictEqual(suggestions.innerHTML, '<li>Apple</li><li>Apricot</li><li>Banana</li>');
  });

  it('should not display any suggestions if the results array is empty', () => {
    const results = [];
    const inputVal = 'grape';
    const suggestions = document.createElement('ul');

    showSuggestions(results, inputVal, suggestions);

    assert.strictEqual(suggestions.innerHTML, '');
  });
});
