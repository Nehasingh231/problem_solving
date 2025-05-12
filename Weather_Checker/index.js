const weatherElm = document.getElementById("weatherInput");
const messElm = document.getElementById("message");

function checkWeather() {
    const weather = weatherElm.value.trim().toLowerCase();

    switch(weather) {
        case "sunny":
            messElm.innerText = "☀️ It's a sunny day! Enjoy the sunshine!";
            break;
            case "rainy":
                messElm.innerText = " It's a rainy day! Don't forget your umbrella!";
                break;
                case "cloudy":
                    messElm.innerText = "It's a cloudy day! It might rain later.";
                    break;
                    case "snowy":
                        messElm.innerText = "It's a snowy day! Time for some snow fun!";
                        break;
                        default:
                            messElm.innerText = "Please enter a valid weather condition (sunny, rainy, cloudy, snowy).";
    }
    weatherElm.value = ""
    messElm.scrollIntoView({ behavior: "smooth" });
    
}