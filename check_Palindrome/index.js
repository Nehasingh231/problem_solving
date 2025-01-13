//+++++++++++++++++++++++++++ check palindrome for string
// const checkPalindrome  = (string) => {
//     const checkFirst = string.toLowerCase().split(" ").join("");
//     const checkAnother = checkFirst.split("").reverse().join("");

//     return checkFirst === checkAnother;
// }

// const result = checkPalindrome("madam");
// console.log(result);
// console.log(checkPalindrome("a man a plan a canal panama"));
// console.log(checkPalindrome("ma dam"))
// console.log(checkPalindrome("hello"))


// +++++++++++++++++++++++++++++ check palindrome for number
// function isPalindrome (num) {
//     const number = num.toString();
//     const reverse = number.split("").reverse().join("");

//     return number === reverse;
// }

// console.log(isPalindrome("258"))
// console.log(isPalindrome("121"));

//   ++++++++++++++++++++ another way to check palindrome
// const isCheckPalindrome = (num) => {
//     let number = num;
//     let reverse = 0; 
     
//     while(num > 0) {
//         let digit = num % 10;
//         reverse = reverse * 10 + digit;
//         num = Math.floor( num / 10);
//     }
//     return number === reverse;
// }
// console.log("checking for palindrome", isCheckPalindrome(676))



const inputElm = document.getElementById("input");
const buttonElm = document.getElementById("button");
const resultElm = document.getElementById("result");

buttonElm.addEventListener("click", () => {
     const value = inputElm.value.trim();
     if(value) {
         const check = checkPalindrome(value);
         resultElm.textContent = check ? `${value} is a palindrome` : `${value} is not a palindrome`;
         inputElm.value = ""
     }
})

function checkPalindrome(str) {
    const final = str.toLowerCase();
    return final === final.split("").reverse().join("") ;
}