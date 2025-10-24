const formal={
    formal1: {
        name:"Classic Black Oxfords",
        description: "Timeless elegance",
        price: 3499,
        oldPrice: 4799,
        discount: "27% OFF",
        image: "https://cdn.shopify.com/s/files/1/1065/4584/products/22_5559008f-9f6a-4caf-b2bf-108dffc6f1ea.jpg?v=1665571075"   
      },

      formal2: {
        name:"Brown Derby Shoes",
        description: "Sharp and stylish",
        price: 3199,
        oldPrice: 4299,
        discount: "26% OFF",
        image: "https://www.hirolas.com/cdn/shop/files/GV15JA810_9.jpg?v=1753185607"   
      },

      formal3: {
        name:"Tan Leather Formals",
        description: "Premium Finish",
        price: 3799,
        oldPrice: 4999,
        discount: "24% OFF",
        image: "https://imagescdn.louisphilippe.com/img/app/product/3/39620727-19754690.jpg?auto=format&w=390"   
      },

      formal4: {
        name:"Black Patent Leather",
        description: "Shiny and formal",
        price: 3999,
        oldPrice: 5299,
        discount: "25% OFF",
        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/23685138/2023/6/19/b099fb20-34bf-49d5-b5c7-7a823ef7d1431687187822930Menblackformalpetantlaceupsderbyshoes1.jpg"   
      },

      formal5: {
        name:"Monk Strap Shoes",
        description: "Modern sophistication",
        price: 4199,
        oldPrice: 5599,
        discount: "25% OFF",
        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/26438380/2023/12/15/4f466d93-cc5f-4b9f-9983-a960d4ea11851702631345299HouseofPataudiMenBuckledFormalMonkShoes1.jpg"   
      },

      formal6: {
        name:"Brown Loafers",
        description: "Slip-on comfort",
        price: 2999,
        oldPrice: 3999,
        discount: "25% OFF",
        image: "https://www.montecarlo.in/cdn/shop/products/201817FW-2-7_8.jpg?v=1705578378"   
      },

      formal7: {
        name:"Black Brogues",
        description: "Detailed and stylish",
        price: 3599,
        oldPrice: 4799,
        discount: "25% OFF",
        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/12692772/2024/3/26/ba793acb-7ee3-4221-b031-ab31ba63b7dc1711453120530-House-of-Pataudi-Men-Black-Leather-Handcrafted-Formal-Brogue-1.jpg"   
      },

      formal8: {
        name:"Suede Formal Shoes",
        description: "Soft and classy",
        price: 3299,
        oldPrice: 4399,
        discount: "25% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8VzIECMxOVUat6_6O04Sp6LwZjeUOKEaBQ&s"   
      },

      formal9: {
        name:"Tan Lace-Up Formals",
        description: "Office essential",
        price: 2899,
        oldPrice: 3799,
        discount: "24% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3LJNzXL7vb_-8LGsmoOK673cuaB4z2ovfgg&s"   
      },

      formal10: {
        name:"Black Slip-on Formals",
        description: "Convenient amd sleek",
        price: 2499,
        oldPrice: 3399,
        discount: "27% OFF",
        image: "https://hitz.co.in/cdn/shop/files/S_54-BLACK.jpg?v=1755619136"   
      },
}
window.formal= formal;
function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`;
}
