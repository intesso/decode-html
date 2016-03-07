// Store markers outside of the function scope,
// not to recreate them on every call
var entities = {
  'amp': '&',
  'apos': '\'',
  'lt': '<',
  'gt': '>',
  'quot': '"',
  'nbsp': '\xa0'
};
var entityPattern = /&([a-z]+);/ig;

module.exports = function decodeHTMLEntities(text) {
  // A single replace pass with a static RegExp is faster than a loop
  return text.replace(entityPattern, function(match, entity) {
    // `null` will only match `null` or `undefined` on type coercion
    if (entities[entity] != null) {
      return entities[entity];
    }
    // return original string if there is no matching entity (no replace)
    return match;
  });
};
