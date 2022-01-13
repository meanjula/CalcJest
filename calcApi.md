# Calc Library API

## **sum(a,b)**

Function returns the sum of two numbers, Numbers are passed to the function as parameters.

Returns the sum of given number or

- if parameter is missing, throws an exception :`'parameter missing`
- if parameter are niot number, throws an exception: `'only numbers allowed`

### Test cases

#### sum of parameters

###### Integers

- sum(1,1) return 2
- sum(2,3) return 5
- sum(-2,-4) return -6
- sum (-2, 4) return 2
  a, b, expected
  [2, -4, -2]
  [0, 0, 0]
  [0, 3, 3]
  [3, 0, 3]
  [0, -3, -3]
  [-3, 0, -3]

#### Floats

[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[-3, 2.5, -0.5],
[-2.5, -2.5, -5],
[-2.5, -2.5, 0],
[2.4, -2.5, -0.1]

#### missing parameters

sum()throw an exception `'parameter missing`
sum(1)throw an exception `'parameter missing`
sum('a)throw an exception `'parameter missing`
sum('')throw an exception `'parameter missing`

#### Parameters are not number

- sum('a', 1) throws an exception `'only numbers allowed'`
- sum(1, 'a') throws an exception `'only numbers allowed'`
- sum('a', 'b') throws an exception `'only numbers allowed'`
