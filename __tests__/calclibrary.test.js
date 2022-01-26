"use strict";

const { sum } = require("../calclibrary");

describe("test sum with integer one by one", () => {
  test("test 1+1=2", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("test 2+3=5", () => {
    expect(sum(2, 3)).toBe(5);
  });
  test("test -2+-4=2", () => {
    expect(sum(-2, -4)).toBe(-6);
  });
  test("test -2+4=2", () => {
    expect(sum(-2, 4)).toBe(2);
  });
});
describe("test sum with integers using test.each", () => {
  const testValues = [
    // a,b,expected
    [2, -4, -2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [0, -3, -3],
    [-3, 0, -3],
  ];
  test.each(testValues)("sum(%s,%s)=%s", (a, b, expected) => {
    expect(sum(a, b)).toBe(expected);
  });
});
describe("test sum with floats using test.each", () => {
  const testValues = [
    // a,b,expected
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [-3, 2.5, -0.5],
    [-2.5, -2.5, -5],
    [-2.5, 2.5, 0],
    [2.4, -2.5, -0.1],
  ];
  test.each(testValues)("sum(%s,%s)=%s", (a, b, expected) => {
    expect(sum(a, b)).toBeCloseTo(expected); // for floats toBeCloseTo() method use
  });
});
describe("test missing parameter throw exception", () => {
  test('sum()throws an exception"parameter missing"', () => {
    expect(() => sum()).toThrow("parameter missing");
  });
  const testValues = [
    [null, "parameter missing"],
    [1, "parameter missing"],
    ["a", "parameter missing"],
    ["", "parameter missing"],
  ];
  test.each(testValues)("sum(%s) throws an exception: %s", (a, expected) => {
    expect(() => sum(a)).toThrow(expected);
  });
  const testValues2 = [[null], [1], ["a"], [""]];
  test.each(testValues2)(
    "sum(%s) throws an exception: 'parameter missing'",
    (a) => {
      expect(() => sum(a)).toThrow("parameter missing");
    }
  );
});

describe("test parameter are not numbers with testfun", () => {
  const testValues = [
    ["a", 1],
    [1, "a"],
    ["a", "b"],
    ["", ""],
    ["1", "2"],
  ];
  const testfunction = test.each(testValues);
  testfunction(
    "sum(%s,%s) throws an exception:'only numbers allowed'",
    (a, b) => {
      expect(() => sum(a, b)).toThrow("only numbers allowed");
    }
  );
});
