// kidsboots.js

// Product data (for reference, not strictly required by product.html)
const kidsboots = {
  kidsboots1: {
    id: "kidsboots1",
    name: "Brown Leather Boots",
    description: "Classic winter style",
    price: 1499,
    oldPrice: 2099,
    discount: "29% OFF",
    image: "https://m.media-amazon.com/images/I/61xjEE5C2AL._UY1000_.jpg"
  },
  kidsboots2: {
    id: "kidsboots2",
    name: "Black Ankle Boots",
    description: "Stylish and durable",
    price: 1799,
    oldPrice: 2499,
    discount: "28% OFF",
    image: "https://m.media-amazon.com/images/I/51boou9+pWL._UY1000_.jpg"
  },
  kidsboots3: {
    id: "kidsboots3",
    name: "Pink Fur Boots",
    description: "Warm and cozy",
    price: 1299,
    oldPrice: 1899,
    discount: "32% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FMV2HoIp8Ww3HW3cBxY0jEfeCSMPJSz-6A&s"
  },
  kidsboots4: {
    id: "kidsboots4",
    name: "Blue Snow Boots",
    description: "Perfect for winters",
    price: 1699,
    oldPrice: 2299,
    discount: "26% OFF",
    image: "https://images-static.nykaa.com/media/catalog/product/a/f/afc42fbLITAD00000563_7.jpg?tr=w-500"
  },
  kidsboots5: {
    id: "kidsboots5",
    name: "Cartoon Print Boots",
    description: "Fun and playful",
    price: 1199,
    oldPrice: 1699,
    discount: "29% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8EMLYeDk0i0XRpBC3Yn5N7lI395YKjnvzw&s"
  },
  kidsboots6: {
    id: "kidsboots6",
    name: "Red Adventure Boots",
    description: "Strong grip sole",
    price: 1399,
    oldPrice: 1999,
    discount: "30% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg47x6vZ2BaKb-SLptoj5KCTDNC6k5foMLsg&s"
  },
  kidsboots7: {
    id: "kidsboots7",
    name: "Glitter Fashion Boots",
    description: "Party-ready boots",
    price: 1599,
    oldPrice: 2299,
    discount: "30% OFF",
    image: "https://di2ponv0v5otw.cloudfront.net/posts/2025/06/11/6849f306bedd34dad5fc9609/m_6849f32da951058bd2c26b12.jpg"
  },
  kidsboots8: {
    id: "kidsboots8",
    name: "Grey High Boots",
    description: "Trendy and warm",
    price: 1899,
    oldPrice: 2599,
    discount: "27% OFF",
    image: "https://m.media-amazon.com/images/I/71kuD2G6jfL._UY1000_.jpg"
  },
  kidsboots9: {
    id: "kidsboots9",
    name: "Brown Adventure Boots",
    description: "Perfect for outdoors",
    price: 1499,
    oldPrice: 2099,
    discount: "29% OFF",
    image: "https://m.media-amazon.com/images/I/71j3anXsqvL._UY1000_.jpg"
  },
  kidsboots10: {
    id: "kidsboots10",
    name: "Classic Black Boots",
    description: "Everyday Essential",
    price: 1299,
    oldPrice: 1899,
    discount: "32% OFF",
    image: "https://i0.wp.com/stefensshoes.com/wp-content/uploads/2025/01/boot-black-2-scaled.jpg?resize=291%2C291&ssl=1"
  },
};

window.kidsboots = kidsboots;

// Function that your HTML cards already call
function viewProduct(productId) {
  // Save selected product id for product.html
  localStorage.setItem("selectedProduct", productId);

  // Navigate to product page
  window.location.href = "product.html";
}
