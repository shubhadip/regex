var al= /p|t/gi
var test = al.test('tooo')
console.log('first character is p or t', test)

var al= /(p|t)yre/gi
var test = al.test('tyre')
console.log('word is pyre or tyre', test)


var al= /(pet|toy|crazy ) rabbit/gi
var test = al.test('toy rabbit')
console.log('pet or toy or crazy rabbit with space before rabbit', test)


var al= /(pet|toy|crazy)? rabbit/gi
var test = al.test('test rabbit')
console.log('every thing optional before rabbit', test)


// start with +91 and then 10 digits
var al= /^[+91]{3}[6-9](\d{9})$/gi
var test = al.test('+919876543210')
console.log('test', test)


var al = /^[a-zA-z0-9]{5,8}$/gi
var test = al.test('shubb12')
console.log('test', test)

