// start end pattern

// 5 or more letter word
var sc = /[a-z]{5}/gi;
var value = sc.test('hellasdao');
console.log('5 or letter word',value)


// exactly 5 letter word : start letters will be returned
var sc = /^[a-z]{5}/gi;
var value = sc.test('helloasdadada');
console.log('returns starting 5 letter ',value)


// exactly 5 letter word : ending letters will be returned
var sc = /[a-z]{5}$/gi;
var value = sc.test('helloasdadadahello');
console.log('ending 5 letters will be matched',value)

// exactly 5 letter word
var sc = /^[a-z]{5}$/gi;
var value = sc.test('hello');
console.log('exactly 5 letter word',value)
