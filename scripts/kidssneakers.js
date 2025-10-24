const kidssneakers={
    kidssneakers1: {
        name:"Blue Sporty Sneakers",
        description: "Active and comfy",
        price: 1299,
        oldPrice: 1899,
        discount: "32% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUden_srnKeOgysdg3gDuuByfuVwaO3_0qA&s"   
      },
      kidssneakers2: {
        name:"Panda Print Sneakers",
        description: "Cute everyday wear",
        price: 1499,
        oldPrice: 2099,
        discount: "28% OFF",
        image: "https://m.media-amazon.com/images/I/61toWMuBtmL._UY900_.jpg"   
      },
      kidssneakers3: {
        name:"Velcro Red Sneakers",
        description: "Easy wear for kids",
        price: 1099,
        oldPrice: 1599,
        discount: "31% OFF",
        image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/19769946/2022/9/5/1730cd2d-cb58-44ae-93ad-092ae5a1188e1662375444564YKUnisexKidsRedPrintedSneakers1.jpg"   
      },
      kidssneakers4: {
        name:"Unicorn Themed Sneakers",
        description: "Magical and colorful",
        price: 1799,
        oldPrice: 2499,
        discount: "28% OFF",
        image: "https://www.famousfootwear.com/blob/product-images/20000/30/60/7/30607_pair_feed1000.jpg"   
      },
      kidssneakers5: {
        name:"Black and White Sneakers",
        description: "Classic sporty look",
        price: 1399,
        oldPrice: 1999,
        discount: "30% OFF",
        image: "https://m.media-amazon.com/images/I/71Np3EdZPDL._UY1000_.jpg"   
      },
      kidssneakers6: {
        name:"Pink Glitter Sneakers",
        description: "Shiny and playful",
        price: 1699,
        oldPrice: 2399,
        discount: "29% OFF",
        image: "https://i0.wp.com/stefensshoes.com/wp-content/uploads/2024/06/2-copy.jpg?fit=1080%2C1440&ssl=1"   
      },
      kidssneakers7: {
        name:"Green Adventure Sneakers",
        description: "Perfect for playtime",
        price: 1599,
        oldPrice: 2199,
        discount: "27% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0baKo7UPf31ZExepuuq4APB99Pl-1rsv9ig&s"   
      },
      kidssneakers8: {
        name:"Cartoon Print Sneakers",
        description: "Fun and vibrant",
        price: 1299,
        oldPrice: 1899,
        discount: "32% OFF",
        image: "https://www.devilsnangels.in/cdn/shop/files/baby-shoes-in-jaipur.webp?v=1728981600"   
      },
      kidssneakers9: {
        name:"Light-Up Sneakers",
        description: "Flashing LED soles",
        price: 1999,
        oldPrice: 2799,
        discount: "29% OFF",
        image: "https://thelittlebunny.in/cdn/shop/files/WhatsAppImage2024-09-05at11.26.10.jpg?v=1725515814"   
      },
      kidssneakers10: {
        name:"White Everyday Sneakers",
        description: "Comfort and style",
        price: 1199,
        oldPrice: 1799,
        discount: "33% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlDdMSF4L-Bt8XAzV3ilgOzz1zEcvCYy-HA&s"   
      },
}
window.kidssneakers = kidssneakers;

function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`;


  
}