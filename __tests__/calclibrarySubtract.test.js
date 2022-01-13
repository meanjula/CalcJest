"use strict";

const { subtract } = require("../calclibrary");

describe("test subtract with integer one by one", () => {
  test("test 2-1=1", () => {
    expect(subtract(2, 1)).toBe(1);
  });

  test("test 0-3=-3", () => {
    expect(subtract(0, 3)).toBe(-3);
  });
  test("test -2--4=2", () => {
    expect(subtract(-2, -4)).toBe(2);
  });
  test("test -2-4=-6", () => {
    expect(subtract(-2, 4)).toBe(-6);
  });
  test("test 2--4=6", () => {
    expect(subtract(2, -4)).toBe(6);
  });
});

describe("test subtract with integers using test.each", () => {
  const testValues = [
    // a,b,expected
    [2, 1, 1],
    [0, 0, 0],
    [0, 3, -3],
    [3, 0, 3],
    [-2, -4, 2],
    [2, -5, 7],
  ];
  test.each(testValues)("subtract(%s,%s)=%s", (a, b, expected) => {
    expect(subtract(a, b)).toBe(expected);
  });
});

describe("test sum with floats using test.each", () => {
  const testValues = [
    // a,b,expected
    [10, 11.5, -1.5],
    [-2.5, 3, -5.5],
    [2.5, 2.5, 0],
    [2.4, -2.5, 4.9],
  ];
  test.each(testValues)("subtract(%s,%s)=%s", (a, b, expected) => {
    expect(subtract(a, b)).toBeCloseTo(expected);
  });
});

describe("test missing parameter throw exception", () => {
  test('subtract()throws an exception"parameter missing"', () => {
    expect(() => subtract()).toThrow("parameter missing");
  });
  const testValues = [
    [null, "parameter missing"],
    [1, "parameter missing"],
    ["a", "parameter missing"],
    ["", "parameter missing"],
  ];
  test.each(testValues)(
    "subtract(%s) throws an exception: %s",
    (a, expected) => {
      expect(() => subtract(a)).toThrow(expected);
    }
  );
  const testValues2 = [[null], [1], ["a"], [""]];
  test.each(testValues2)(
    "subtract(%s) throws an exception: 'parameter missing'",
    (a) => {
      expect(() => subtract(a)).toThrow("parameter missing");
    }
  );
});

describe("test parameter are not numbers", () => {
  const testValues = [
    ["a", 1],
    [1, "a"],
    ["a", "b"],
    ["", ""],
    ["1", "2"],
  ];
  test.each(testValues)(
    "subtract(%s,%s) throws an exception:'only numbers allowed'",
    (a, b) => {
      expect(() => subtract(a, b)).toThrow("only numbers allowed");
    }
  );
});
