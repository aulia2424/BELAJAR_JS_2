// The return Statement
/*
A function can have an optional return statement. It is used to return a value from the function.

This statement is useful when making calculations that require a result.
When JavaScript reaches a return statement, the function stops executing. 
*/

// function return
function myFunction(a, b) {
  return a * b;
}
var x = myFunction(5, 6);
// return value will end up in x

// contoh 2
function addNumbers(c, d) {
  var e = c + d;
  return e;
}
console.log(addNumbers(40, 2));

// contoh 3
function substrNumbrs(first, second) {
  var result = first - second;
  return result;
}
console.log(substrNumbrs(10, 5));
