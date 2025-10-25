const sandals={
    sandals1: {
        name:"Beige Summer Sandals",
        description: "Light and breezy comfort",
        price: 1499,
        oldPrice: 2199,
        discount: "32% OFF",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSm8UEDK4ipgVjEexVzhK4MvIZFIkUwWmp8trV211JLTKlb0jNW5_byQs4F-nCct0WFzLI4m40N996ZoddCCJ09z1iHxyFdC12inFzPSA5eolEOi9vLJ94Fpmo"   
      },
      sandals2: {
        name:"white Strap Sandals",
        description: "Perfect for beach walks",
        price: 1299,
        oldPrice: 1999,
        discount: "35% OFF",
        image: "https://m.media-amazon.com/images/I/71w6cfhT0gL._UY1000_.jpg"   
      },
      sandals3: {
        name:"Brown Leather Sandals",
        description: "Classic everyday wear",
        price: 1899,
        oldPrice: 2499,
        discount: "24% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0F_ryCQThppqo_7NZZWB2OO_mD4UNcXX8Q&s"   
      },
      sandals4: {
        name:"Floral Print Sandals",
        description: "Trendy summer vibe",
        price: 1699,
        oldPrice: 2399,
        discount: "29% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpZoAukhZVpRUtmZ1lEKjjTsENhyT4KrtAA&s"   
      },
      sandals5: {
        name:"Casual Black Sandals",
        description: "Simple and comfy",
        price: 1299,
        oldPrice: 1799,
        discount: "28% OFF",
        image: "https://admin.mochishoes.com/product/33-631/660/33-631LA11.jpg"   
      },
      sandals6: {
        name:"Blue Strappy Sandals",
        description: "Playful beachwear",
        price: 1599,
        oldPrice: 2199,
        discount: "27% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfBPiypkp3v0aC4f0IBpKLIx0Xwi9DXjAuQ&s"   
      },
      sandals7: {
        name:"Nude Flat Sandals",
        description: "Everyday elegance",
        price: 1199,
        oldPrice: 1699,
        discount: "29% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUVVkE8FWMnVXmdcq_Zv203u9MRAKzxR78Q&s"   
      },
      sandals8: {
        name:"Classic Tan Sandals",
        description: "Durable leather",
        price: 1499,
        oldPrice: 2199,
        discount: "32% OFF",
        image: "https://eridani.in/cdn/shop/articles/Clary-Heels-3291-Beige-1_aad4fed9-281f-4e3f-9a8f-35d8f618abc3.jpg?v=1753722557&width=2048"   
      },
      sandals9: {
        name:"Golden Flat Sandals",
        description: "Perfect festive look",
        price: 1899,
        oldPrice: 2599,
        discount: "27% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcajCocJtIN3odn3ND8e7rchtptgrdVj23jQ&s"   
      },
      sandals10: {
        name:"Silver Shiny Sandals",
        description: "Glamorous evening wear",
        price: 1999,
        oldPrice: 2899,
        discount: "31% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgNEQevVm5b5xDviAaT9LLqNbV7yrqpUYkg&s"   
      },
      sandals11: {
        name:"Pink Cute Sandals",
        description: "Sweet and playful",
        price: 1299,
        oldPrice: 1899,
        discount: "31% OFF",
        image: "https://m.media-amazon.com/images/I/61PFT62MzCL._UY1000_.jpg"   
      },
      sandals12: {
        name:"Strappy White Sandals",
        description: "Minimalist and chic",
        price: 1499,
        oldPrice: 2099,
        discount: "29% OFF",
        image: "https://assets.ajio.com/medias/sys_master/root/20230629/88zR/649ceecceebac147fc36376f/-473Wx593H-466075696-white-MODEL.jpg"   
      },
}
window.sandals = sandals;

function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`;


  
}
