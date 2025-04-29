
// console.log(num.toString());    // "123" (default: decimal)
// console.log(num.toString(10));  // "123" (decimal)
// console.log(num.toString(2));   // "1111011" (binary)
// console.log(num.toString(8));   // "173" (octal)
// console.log(num.toString(16));  // "7b" (hexadecimal)



const color = document.querySelector('#color-code');
const button = document.querySelector('#changeColorBtn');

const randomeColor = () => {
    let hexacode = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log(hexacode);  
    return hexacode;
};

