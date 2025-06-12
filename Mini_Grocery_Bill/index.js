const cart = [
  { name: "Apples", price: 50 },
  { name: "Milk", price: 40 },
  { name: "Banana", price: 20 }
];

function displayCart() {
    const list = document.getElementById('cart-list')
    list.innerHTML ='';

    cart.forEach(item =>{
        const li = document.createElement('li');
        li.textContent = `${item.name} -₹${item.price}`;
        list.appendChild(li);
    })

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total').textContent = total;

}

function addItem(){
  const name = prompt('Enter Item name');
  const price = parseFloat(prompt('Enter Item Price')); //prompt() always returns a string, even if you type a number.so to chnaging string into number we are using parseFloat
  
  if(name && !isNaN(price)) {
    cart.push({name,price});
    displayCart();
  }else{
       alert("Invalid item or price!");
  }
}

function removeLast(){
    cart.pop();
    displayCart();
}