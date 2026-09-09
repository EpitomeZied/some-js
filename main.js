const word = require('fs').readFileSync(0, 'utf-8').trim();
let nw = "";
for (let i = word.length-1; i >= 0 ; i--) {
    nw+=word[i];
}
console.log(`${nw}`);