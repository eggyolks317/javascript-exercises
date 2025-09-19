const convertToCelsius = function(num) {
  let ans = ((num) - 32) * (5/9);
  if (Number.isInteger(ans)) {
    return ans;
  }
  return parseFloat(ans.toFixed(1));
};

const convertToFahrenheit = function(num) {
  let ans = (num) * (9/5) + 32;
  if (Number.isInteger(ans)) {
    return ans;
  }
  return parseFloat(ans.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
