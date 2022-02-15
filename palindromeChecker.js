function isPalindrome(inputStr2) {
    if(inputStr2 !== null) {
        return inputStr2 === inputStr2.split('').reverse().join('');
    }
    return false;
}

module.exports = isPalindrome;
