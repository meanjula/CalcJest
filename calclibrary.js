"use strict";

function sum(a, b) {
  if (a == undefined || b == undefined) {
    throw Error("parameter missing");
  }
  return a + b;
}
module.exports = { sum };
