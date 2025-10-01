const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, value) => (sum += value), 0);
};

const multiply = function (arr) {
  return arr.reduce((product, value) => (product *= value));
};

const power = function (base, exp) {
  let ans = 1;
  for (; exp > 0; exp--) {
    ans *= base;
  }
  return ans;
};

const factorial = function (n) {
  let ans = 1;
  for (; n > 0; n--) {
    ans *= n;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
