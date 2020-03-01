// ^ exclude set : matches others expect mentioned with carrot operator
var cs = /[^g]/g;
var value = cs.test('a');
console.log(value)

var cs = /[^g]/g;
var value = cs.test('g');
console.log(value)

var cs = /[^ge]/g;
var value = cs.test('e');
console.log(value)



// this one matches because character set considers one element i.e ge is not ne :p
var cs = /[^ge]/g;
var value = cs.test('ne');
console.log(value)