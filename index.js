module.exports = function decodeHTMLEntities(text) {
  var replacements = [
    ['amp', '&'],
    ['apos', '\''],
    ['lt', '<'],
    ['gt', '>']
  ];

  replacements.forEach(function(replace){
    text = text.replace(new RegExp('&'+replace[0]+';', 'g'), replace[1]);
  });

  return text;
};