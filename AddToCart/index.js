const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const totalPriceEl = document.getElementById("total-price");


const products = [
  { id: 1, name: "Shoes", price: 1500 },
  { id: 2, name: "T-Shirt", price: 800 },
  { id: 3, name: "Cap", price: 300 }
];

let cart =[];

function showProducts() {
  productList.innerHTML = products.map(product => `
    <div class="product">
      <strong>${product.name}</strong> - ₹${product.price}
      <button class="btn" onClick="addToCart(${product.id})">Add To Cart</button>
    </div>
  `).join('')
}

// Add Product to cart
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item)
  renderCart();
}

// Remove ptoduct from cart
function removeFromCart(item) {
  cart = cart.filter((_, i) => i !== item);
  renderCart();
}

function renderCart() {
  cartList.innerHTML = cart.map((item, i) =>
  `<div class="cart-item">
   ${item.name} - ₹${item.price}
   <button class="btn delete" onclick="removeFromCart(${i})">Delete</button>
  </div>`
  ).join('');


const total = cart.reduce((acc,item) => acc + item.price, 0);
totalPriceEl.textContent = total;
}
showProducts();
