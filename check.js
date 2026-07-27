const fs = require('fs');
const h = fs.readFileSync('C:/Users/pc/Downloads/Portfolio/index.html', 'utf8');
const m = h.match(/<script>([\s\S]*?)<\/script>/g);
if (m) m.forEach(function(s, i) {
  var code = s.replace(/<\/?script[^>]*>/g, '');
  try { new Function(code); } catch(e) { console.log('Script ' + i + ': ' + e.message); }
});
