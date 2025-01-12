const checkPalindrome  = (string) => {
    const checkFirst = string.toLowerCase().split(" ").join("");
    const checkAnother = checkFirst.split("").reverse().join("");

    return checkFirst === checkAnother;
}

const result = checkPalindrome("madam");
console.log(result);
console.log(checkPalindrome("a man a plan a canal panama"));
console.log(checkPalindrome("ma dam"))
console.log(checkPalindrome("hello"))



function isPalindrome (num) {
    const number = num.toString();
    const reverse = number.split("").reverse().join("");

    return number === reverse;
}

console.log(isPalindrome("258"))
console.log(isPalindrome("121"));




