"use strict";

function testall(dataArray) {
  return function (message, callBackFun) {
    for (let row of dataArray) {
      console.log(message);
      callBackFun(...row);
    }
  };
}

const data = [
  [1, 2, 3],
  [4, 5, 6],
];

testall(data)("xyz", (a, b, c) => console.log(a, b, c));

console.log(2 / 0);
console.log(0 / 0);
console.log(-4 / 0 === Number.NEGATIVE_INFINITY);
console.log(2 / 0 === Number.POSITIVE_INFINITY);
