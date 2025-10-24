document.addEventListener("DOMContentLoaded", () => {
  const wishlistIcons = document.querySelectorAll(".wishlist");
  let wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];

  const saveWishlist = () =>
    localStorage.setItem("wishlistItems", JSON.stringify(wishlist));

  // Toggle wishlist icons
  wishlistIcons.forEach((icon) => {
    const card = icon.closest(".card");
    const name = card.querySelector("h3").textContent;

    if (wishlist.some((item) => item.name === name)) {
      icon.textContent = "❤️";
    }

    icon.addEventListener("click", () => {
      const img = card.querySelector("img").src;
      const price = card.querySelector(".price").textContent;
      const existing = wishlist.find((item) => item.name === name);

      if (existing) {
        wishlist = wishlist.filter((item) => item.name !== name);
        icon.textContent = "🤍";
      } else {
        wishlist.push({ name, price, img });
        icon.textContent = "❤️";
      }
      saveWishlist();
    });
  });

  // Show items on wishlist.html
  const wishlistContainer = document.getElementById("wishlistItems");
  const emptyMsg = document.getElementById("emptyWishlist");

  if (wishlistContainer) {
    if (wishlist.length === 0) {
      emptyMsg.style.display = "block";
    } else {
      emptyMsg.style.display = "none";

      wishlist.forEach((item) => {
        const card = document.createElement("div");
        card.className = "wishlist-card";
        card.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p class="price">${item.price}</p>
          <div class="wishlist-actions">
            <button class="remove-btn">Remove</button>
            <button class="buy-btn">Buy Now</button>
          </div>
        `;
        wishlistContainer.appendChild(card);

        // Remove button
        card.querySelector(".remove-btn").addEventListener("click", () => {
          wishlist = wishlist.filter((i) => i.name !== item.name);
          saveWishlist();
          card.remove();
          if (wishlist.length === 0) emptyMsg.style.display = "block";
        });

        // Buy Now button
        card.querySelector(".buy-btn").addEventListener("click", () => {
          localStorage.setItem("currentProduct", JSON.stringify(item));
          window.location.href = "product.html";
        });
      });
    }
  }
});
