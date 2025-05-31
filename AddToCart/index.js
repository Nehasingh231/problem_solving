const productlist = document.querySelector("#product-list");
const cartItems = document.querySelector("#cart-items");

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 3", price: 30 },
];

let cart = [];

// display products list

function showProducts() {
  products.forEach((product) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("product");
    newDiv.innerHTML =`
    <h3>${product.name}</h3>
    <p>pice: ₹${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
`;
productlist.appendChild(newDiv);
  });
}

// add to cart
function addToCart(id) {
    const productList = products.find(product => product.id === id);
    if(productList){
        cart.push(productList);
        alert(`${productList.name} added to cart`);
        updateCart();
    }
}


// update cart
function updateCart() {
  cartItems.innerHTML ='';
  cart.forEach((item, index) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cart-item");
    newDiv.innerText = `${index + 1}. ${item.name} - ₹${item.price}`;
    cartItems.appendChild(newDiv);
  });


const total = cart.reduce((sum, item) => sum + item.price, 0);
document.querySelector("#total").innerText = `Total: ₹${total}`;
}

// checkout
function checkout() {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      alert(`Thanks for shopping! Your total is ₹${total}`);
    }

    showProducts();