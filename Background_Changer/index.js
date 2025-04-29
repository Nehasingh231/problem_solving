const buttons = document.querySelectorAll('.color-btn');
const heading = document.querySelector("h1");

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let selectedColor = this.getAttribute('data-color');
        document.body.style.backgroundColor = selectedColor;
       
        // heading.textContent = `Background Color:${selectedColor.toUpperCase()}`;

        if(selectedColor === "black"){
            heading.style.color = "white";
        }else{ 
            heading.style.color = "black";
        }
        console.log('applied')
    })
}) 