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
