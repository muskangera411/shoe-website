document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".add-cart");
  const cartPopup = document.getElementById("cartPopup");

  // Load existing cart or empty array
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Function to save cart
  function saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("in-cart")) return;

      const card = button.closest(".card");
      const name = card.querySelector("h3").textContent;
      const price = card.querySelector(".price").textContent;
      const img = card.querySelector("img").src;

      // Check if product already exists in cart
      const existing = cartItems.find((item) => item.name === name);

      if (!existing) {
        cartItems.push({ name, price, img, quantity: 1 });
        saveCart();
      }

      // Change button UI
      button.classList.add("in-cart");
      button.textContent = "";

      const qtyControl = document.createElement("div");
      qtyControl.classList.add("qty-control");

      const minus = document.createElement("button");
      minus.textContent = "-";
      minus.classList.add("qty-btn");

      const qtyDisplay = document.createElement("span");
      qtyDisplay.textContent = "1";
      qtyDisplay.classList.add("qty-count");

      const plus = document.createElement("button");
      plus.textContent = "+";
      plus.classList.add("qty-btn");

      qtyControl.append(minus, qtyDisplay, plus);
      button.replaceWith(qtyControl);

      // Show popup
      cartPopup.classList.add("show");
      setTimeout(() => cartPopup.classList.remove("show"), 1500);

      // Increment product quantity
      plus.addEventListener("click", () => {
        let count = parseInt(qtyDisplay.textContent);
        qtyDisplay.textContent = count + 1;

        const product = cartItems.find((item) => item.name === name);
        product.quantity = count + 1;
        saveCart();
      });

      // Decrement product quantity
      minus.addEventListener("click", () => {
        let count = parseInt(qtyDisplay.textContent);
        if (count > 1) {
          qtyDisplay.textContent = count - 1;

          const product = cartItems.find((item) => item.name === name);
          product.quantity = count - 1;
          saveCart();
        } else {
          // Remove item if quantity = 0
          cartItems = cartItems.filter((item) => item.name !== name);
          saveCart();

          const newBtn = document.createElement("button");
          newBtn.className = "add-cart";
          newBtn.textContent = "Add to Cart";
          qtyControl.replaceWith(newBtn);

          // Rebind Add to Cart functionality
          newBtn.addEventListener("click", () => {
            location.reload(); // Reload so it reinitializes
          });
        }
      });
    });
  });
});

// Renders the given products object into cards
function renderProducts(filteredProducts) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  Object.entries(filteredProducts).forEach(([id, p]) => {
    const card = `
      <div class="card" onclick="viewProduct('${id}')">
        <img src="${p.image}" alt="${p.name}">
        <div class="card-content">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div>
            <span class="price">₹${p.price}</span>
            <span class="old-price">₹${p.oldPrice}</span>
            <span class="discount">${p.discount}</span>
          </div>
          <div class="actions">
            <button class="add-cart">Add to Cart</button>
            <span class="wishlist">🤍</span>
          </div>
        </div>
      </div>`;
    container.insertAdjacentHTML("beforeend", card);
  });
}

// Automatically detect prefix and render only matching products
window.addEventListener("DOMContentLoaded", () => {
  const url = window.location.href;
  const prefix = url.match(/(\w+)\.html$/)?.[1]?.toLowerCase() || "";
  // e.g. kidsFormals.html → prefix = "kidsformals"

  const filtered = Object.fromEntries(
    Object.entries(products).filter(([key]) => key.startsWith(prefix))
  );

  if (Object.keys(filtered).length > 0) {
    renderProducts(filtered);
  }
});

// === CART FUNCTIONALITY ===
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = productsData[id];

  if (!product) return alert('Product not found!');

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ id, ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart! 🛒`);
}

// === WISHLIST FUNCTIONALITY ===
function addToWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const product = productsData[id];

  if (!product) return alert('Product not found!');

  const already = wishlist.find(item => item.id === id);
  if (already) {
    alert(`${product.name} is already in your wishlist ❤️`);
    return;
  }

  wishlist.push({ id, ...product });
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  alert(`${product.name} added to wishlist ❤️`);
}

// === PRODUCT PAGE REDIRECT ===
function openProductPage(id) {
  localStorage.setItem("selectedProductId", id);
  window.location.href = "product.html"; // you can change this name
}

function viewProduct(id) {
  localStorage.setItem("selectedProductId", id);
  window.location.href = "product.html";
}

























