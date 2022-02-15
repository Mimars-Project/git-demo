function isPalindrome(inputStr1) {
    if(inputStr !== null) {
        return inputStr === inputStr.split('').reverse().join('');
    }
    return false;
}

module.exports = isPalindrome;
