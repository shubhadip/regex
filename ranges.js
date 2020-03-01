var cs = /[a-zA-Z]/g;
var value = cs.test('eaaaa');
console.log(value)

// [a-z] matches e but aasdad is not matched
var cs = /[a-z]aasdad/g;
var value = cs.test('eaaaa');
console.log(value)


// [a-z] matches e also aasdad is also matched
var cs = /[a-z]aasdad/g;
var value = cs.test('eaasdad');
console.log(value)

// 123123 is matched explicitly if we remove 123123 at the end of string this would return false
var cs = /[a-z|A-Z]123123/g;  // var cs = /[a-zA-Z]/g;
var value = cs.test('eaasdad NNNN BBBB AAAAA123123');
console.log(value)

/* Numbers */

var cs = /[0-9]/g;
var value = cs.test('123123');
console.log(value)

/* unlimited times (+ 1 or more times) */

var cs = /[0-9]+/g;
var value = cs.test('12312144asdasda3');
console.log(value)



/* limited times*/
// this matches as numbers to be of 11 times i.e 0-9 should be on exactly 11 numbers
// match an 11 letter word

var cs = /[0-9]{11}/g;
var value = cs.test('1231asas2144111');
console.log('doesnt have 11 digited number',value)

// this is true as it matched 11 letter word
var cs = /[0-9]{11}/g;
var value = cs.test('asas21441112345');
console.log('matches 11 digit number',value)


var cs = /[a-z]{11}/g;
var value = cs.test('asasqwertyu1212');
console.log('matches 11 letter word',value)




// this is true as it matched (5,8) letter word i.e  match letter between lengths 5,6,7,8
var cs = /[0-9]{5,8}/g;
var value = cs.test('1234556');
console.log('matches 5 to 8 digit number',value)
