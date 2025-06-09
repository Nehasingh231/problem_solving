const products = [
  { id: 1, name: "Shoes", price: 1500 },
  { id: 2, name: "T-Shirt", price: 800 },
  { id: 3, name: "Cap", price: 300 }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const totalPriceEl = document.getElementById("total-price");

// Render product cards using .map()
function showProducts() {
  productList.innerHTML = products.map(product => `
    <div class="product">
      <strong>${product.name}</strong> - ₹${product.price}
      <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `).join('');
}

// Add product to cart
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  renderCart();
}

// Remove product using .filter()
function removeFromCart(index) {
  cart = cart.filter((_, i) => i !== index);
  renderCart();
}

// Render cart and calculate total using .reduce()
function renderCart() {
  cartList.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      ${item.name} - ₹${item.price}
      <button class="btn delete" onclick="removeFromCart(${index})">Delete</button>
    </div>
  `).join('');

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  totalPriceEl.textContent = total;
}

// Initial call
showProducts();
