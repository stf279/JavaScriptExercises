'use strict';

const pallyCheck = function(text) {
  const input = text.toLowerCase().replace(/\s/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  const result = text.split('').reverse().join('').replace(/\s/g, '')
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  console.log(input);
  console.log(result);
  console.log(input === result);

};

pallyCheck('wow');
pallyCheck('was it a car or a cat i saw');
pallyCheck('level');
pallyCheck('This is a palindrome!');
pallyCheck('is this a pallindrome?');




