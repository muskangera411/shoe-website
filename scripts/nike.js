const nike={
    nike1: {
        name:"Nike Air Zoom",
        description: "Lightweight comfort with unmatched cushioning.",
        price: 9999,
        oldPrice: 12999,
        discount: "23% OFF",
        image: "https://images.pexels.com/photos/3611797/pexels-photo-3611797.jpeg"   
      },
      nike2: {
        name:"Nike Air Max",
        description: "Iconic design meets modern  innovation",
        price: 11499,
        oldPrice: 14999,
        discount: "25% OFF",
        image: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg"   
      },
      nike3: {
        name:"Nike Revolution",
        description: "Perfect for daily runs and active lifestyle",
        price: 6499,
        oldPrice: 8499,
        discount: "24% OFF",
        image: "https://images.pexels.com/photos/12725051/pexels-photo-12725051.jpegs"   
      },
      nike4: {
        name:"Nike Jordan",
        description: "Legendary style, premium comfort.",
        price: 14499,
        oldPrice: 18499,
        discount: "22% OFF",
        image: "https://images.pexels.com/photos/8764560/pexels-photo-8764560.jpeg"   
      },
      nike5: {
        name:"Nike Blazer Mid",
        description: "Vintage basketball inspired",
        price: 8799,
        oldPrice: 10999,
        discount: "20% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.M23AjqEEBt-1gGhXbsYPogHaHa?pid=Api&P=0&h=180"   
      },
      nike6: {
        name:"Nike Pegasus",
        description: "Trusted for speed and distance",
        price: 10499,
        oldPrice: 134999,
        discount: "22% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.Wxwh1MTtsntNUSGIvkvGQAHaEJ?pid=Api&P=0&h=180"   
      },
      nike7: {
        name:"Nike Dunk Low",
        description: "Street-ready and stylish",
        price: 9499,
        oldPrice: 12499,
        discount: "24% OFF",
        image: "https://tse1.mm.bing.net/th/id/OIP.ZCCuRZ8hDiwV9eb_Sd_oggHaFj?pid=Api&P=0&h=180"   
      },
      nike8: {
        name:"Nike Free Run",
        description: "Minimalist and flexible design.",
        price: 7499,
        oldPrice: 9999,
        discount: "25% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.lJ-Mvxoz9CSOZlf0xlkewQHaHa?pid=Api&P=0&h=180"   
      },
      
}
window.nike = nike;

function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`;


  
}