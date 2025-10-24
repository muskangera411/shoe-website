const puma={
    puma1: {
        name:"Puma RS-X",
        description: "Bold retro sneakers",
        price: 7999,
        oldPrice: 9499,
        discount: "16% OFF",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/307818/01/fnd/IND/fmt/png/Scuderia-Ferrari-RS-X-Sneakers"   
      },
      puma2: {
        name:"Puma Future Rider",
        description: "Everyday street style",
        price: 6499,
        oldPrice: 7999,
        discount: "19% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsqC_mdpO9Q8xGgWBGgeZQUwXVKA6dfq2gw&s"   
      },
      puma3: {
        name:"Puma Smash v2",
        description: "Classic tennis sneakers",
        price: 3499,
        oldPrice: 4499,
        discount: "22% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-IByQ1ib0mji7-4SHmnxWdRpMLFbdVFvBTw&s"   
      },
      puma4: {
        name:"Puma Carina",
        description: "Chunky casual shoes",
        price: 4499,
        oldPrice: 5999,
        discount: "25% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3CLvKQBKENGeCeVp6pfoREQ2yeZ7fQDYzQ&s"   
      },
      puma5: {
        name:"Puma Suede Classic",
        description: "Iconic sued design",
        price: 5999,
        oldPrice: 7499,
        discount: "20% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrN1UVrtkGPe-7LK6YjM_CYr0MxxOFwZQCwQ&s"   
      },
      puma6: {
        name:"Puma Ferrari Drift Cat",
        description: "Motorsport-inspired",
        price: 8499,
        oldPrice: 9999,
        discount: "15% OFF",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/306864/04/sv01/fnd/IND/fmt/png/Ferrari-Drift-Cat-Delta-Sneakers"   
      },
      puma7: {
        name:"Puma Ignite",
        description: "Running performance shoes",
        price: 6999,
        oldPrice: 8499,
        discount: "18% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFwSdeQ7IryHooKxJrcGTmoFG9jed6RAXIBQ&s"   
      },
      puma8: {
        name:"Puma Enzo",
        description: "Stylish training shoes",
        price: 5499,
        oldPrice: 6999,
        discount: "21% OFF",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377875/03/sv01/fnd/IND/fmt/png/SOFTRIDE-Enzo-Evo-Slip-On-Running-Shoes"   
      },
      puma9: {
        name:"Puma LQDCell",
        description: "High cushioning comfort",
        price: 7299,
        oldPrice: 8999,
        discount: "19% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZ80qn3C93E5cjveBySTLnStzOaktpyy3YQ&s"   
      },
      puma10: {
        name:"Puma Rebound",
        description: "Basketball-inspired sneakers",
        price: 6199,
        oldPrice: 7499,
        discount: "17% OFF",
        image: "https://images-static.nykaa.com/media/catalog/product/a/3/a3fabc9PUMAX00385543_7.jpg?tr=w-500"   
      },
      puma11: {
        name:"Puma X-Ray",
        description: "Chunky retro style",
        price: 5799,
        oldPrice: 7299,
        discount: "21% OFF",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/394651/01/sv01/fnd/IND/fmt/png/PUMA-X-Ray-Slimmic-Metallic-Women's-Sneakers"   
      },
      puma12: {
        name:"Puma Electrify Nitro",
        description: "Next-gen running shoes",
        price: 9299,
        oldPrice: 11499,
        discount: "19% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAoY1IcCI5sSGn8HDSzBYedyHL6UuEV2Hlhw&s"   
      },
}
window.puma = puma;

function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`;


  
}
