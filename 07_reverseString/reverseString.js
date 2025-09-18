const reverseString = function(str) {
    let ans = '';
    for (let i = str.length; i >= 0; i--) {
        ans += str.charAt(i);
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
