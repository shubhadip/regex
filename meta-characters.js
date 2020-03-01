var cs = /\d/g;
var value = cs.test('21441112345');
console.log('any digits',value)

var cs = /\d{11}/g;
var value = cs.test('ads21441112345');
console.log('with 11 digits',value)

var cs = /\d{11}/g;
var value = cs.test('adsaa441112345');
console.log('failed with 11 digits',value)


var cs = /\w/g;
var value = cs.test('adsaa441112345');
console.log('word',value)

var cs = /\w{11}/g; // since /w stands for 0-9,_,a-z,A-Z hence this return true
var value = cs.test('adsaa441112345');
console.log('word',value)

var cs = /\d{4}\s{1}\w{1}/g; // fails as digit is supposed to be of length: 4
var value = cs.test('111 daa');
console.log('word',value)

