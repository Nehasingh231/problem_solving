const hoursElm = document.querySelector(".hours");
const minutesElm = document.querySelector(".minutes");
const secondsElm = document.querySelector(".seconds");
const ampmElm = document.querySelector(".ampm")

// const date = new Date();
// console.log(date);
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit; 
}

function clock () {
    const date = new Date();

    let hour = date.getHours();
    let minute =  date.getMinutes();
    let second = date.getSeconds();

    const ampmText = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;

    hoursElm.innerText = formatTime(hour);
    minutesElm.innerText = formatTime(minute);
    secondsElm.innerText = formatTime(second);
    ampmElm.innerText = ampmText
    requestAnimationFrame(clock);
}
requestAnimationFrame(clock);

const info = {name: "neha singh", "age": 25}
console.log(info)
let userString = JSON.stringify(info)
console.log(userString)


const anotherInfo = '{"name": "Prity", "age": 25, "state": "Bihar"}'
let newString = JSON.parse(anotherInfo)
console.log(newString)



