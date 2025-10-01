const fibonacci = function (n) {
  if (n == 0) {
    return 0;
  } else if (n < 0) {
    return "OOPS";
  }
  let one = 1;
  let two = 1;
  n -= 2;
  for (; n > 0; n--) {
    let temp = one;
    one = two;
    two = temp + two;
  }
  return two;
};

// Do not edit below this line
module.exports = fibonacci;
