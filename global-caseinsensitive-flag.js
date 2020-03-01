// g global flag, it matches all occurances
// i.e it should be tested against all possible matches in a string
// i.e dont return just after first match


// i insensitive flag : case insensitive

var myRe = /ninja/;
var value = myRe.test('ninja');
console.log(value)


var myRe = /Ninja/;
var value = myRe.test('ninja ninja');
console.log(value)


var myRe = /Ninja/g;
var value = myRe.test('inja Ninja Ninja');
console.log(value)


var myRe = /ninja/gi;
var value = myRe.exec('ninja Ninja Ninja');
console.log(value)


var myRe = /Ninja/g;
var value = myRe.test('ninja Ninja Ninja');
console.log(value)



