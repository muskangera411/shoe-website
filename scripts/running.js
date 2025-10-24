const running={
    running1: {
        name:"Blue Mesh Running Shoes",
        description: "Lightweight and breathable",
        price: 2499,
        oldPrice: 3499,
        discount: "29% OFF",
        image: "https://m.media-amazon.com/images/I/81tlEuu20AL._UY1000_.jpg"   
      },
      running2: {
        name:"Black Sports Runni9ng Shoes",
        description: "Perfect for daily runs",
        price: 2799,
        oldPrice: 3999,
        discount: "30% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrn7jvafQeKsCCtlWJ56hQKk3RIbBLItVTJg&s"   
      },
      running3: {
        name:"Grey Flexi-Run Shoes",
        description: "Flexible and durable",
        price: 2299,
        oldPrice: 3199,
        discount: "28% OFF",
        image: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000008529295_437Wx649H_202405170746341.jpeg"   
      },
      running4: {
        name:"White Energy Sneakers",
        description: "Minimalist running style",
        price: 2199,
        oldPrice: 3099,
        discount: "29% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApd5_9Hkj5aSxwcYAES0AQv_s0RVK-L4vSg&s"   
      },
      running5: {
        name:"Red Speed Training Shoes",
        description: "High-performance design",
        price: 3099,
        oldPrice: 4299,
        discount: "28% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUtnkhmf9PWFn-qNuiDLTzhTPq3KG53YfaA&s"   
      },
      running6: {
        name:"Green Trailing Running Shoes",
        description: "Built for rough terrains",
        price: 3499,
        oldPrice: 4599,
        discount: "24% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0FT9UaH3OwWjIb6m7Bp8NJCVjTKoznrw8A&s"   
      },
      running7: {
        name:"Orange Active Runners",
        description: "Dynamic and stylish",
        price: 2899,
        oldPrice: 3799,
        discount: "24% OFF",
        image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/35040900/2025/7/3/ebb6aaf8-8426-4aa7-82ed-5f5dc53bcfe21751524892560-HRX-by-Hrithik-Roshan-Men-Textured-Lace-Up-Running-Shoes-736-1.jpg"   
      },
      running8: {
        name:"Grey Cushioned Shoes",
        description: "Soft and supportive",
        price: 2499,
        oldPrice: 3299,
        discount: "24% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKczdi1Dd3NCDaw-e2CJLiJ56FaUC6Vv8_3A&s"   
      },
      running9: {
        name:"Blue Marathon Sneakers",
        description: "Designed for long runs",
        price: 3199,
        oldPrice: 4099,
        discount: "22% OFF",
        image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/f/v/1/-original-imaghxffsrx2uaeq.jpeg?q=90&crop=false"   
      },
      running10: {
        name:"Black Ultra-Boost Runners",
        description: "Maximum energy return",
        price: 3499,
        oldPrice: 4599,
        discount: "24% OFF",
        image: "https://cpimg.tistatic.com/08520884/b/4/Adidas-Ultra-Boost-Sports-Shoes.jpg"   
      },
}
window.running = running;

function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`;


  
}