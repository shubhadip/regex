// character-set : match different characters in single position

var cs = /[ng]inja/g;
var value = cs.test('ninja');
console.log(value)

var cs = /[ng]inja/g;
var value = cs.test('ginja');
console.log(value)


// with i flag
var cs = /[ng]inja/gi;
var value = cs.test('Ninja');
console.log(value)


// all nN gG combinations
var cs = /[NngG]inja/g;
var value = cs.test('Ginja');
console.log(value)


/* ---------------- */
// [abc] occupies only one space in a123
var cs = /[abc]/gi;

var value = cs.test('a');
console.log(value)
var value = cs.test('A');
console.log(value)

/* ---------------- */


/* ---------------- */
var cs = /[abc]000/g;
var value = cs.test('a');
console.log(value)
/* ---------------- */




/* ---------------- */

var cs = /[abc]000/g;
var value = cs.test('a000');
console.log(value)
/* ---------------- */








