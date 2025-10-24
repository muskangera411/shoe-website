const loafers={
    loafers1: {
        name:"Classic Brown Loafers",
        description: "Timeless slip-ons",
        price: 2799,
        oldPrice: 3699,
        discount: "24% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdsvBI7_6up_nirvhFpvU584cLWO4xWh0VCQ&s"   
      },
      loafers2: {
        name:"Black Leather Loafers",
        description: "Office-ready comfort",
        price: 2999,
        oldPrice: 3999,
        discount: "25% OFF",
        image: "hhttps://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/18484728/2023/11/27/427ac01b-5ca4-4172-9ca2-e6038db1ccf01701075226799-Metro-Men-Black-Textured-Leather-Formal-Loafers-Shoes-691701-6.jpg"   
      },
      loafers3: {
        name:"Tan Suede Loafers",
        description: "Soft and stylish",
        price: 3199,
        oldPrice: 4199,
        discount: "24% OFF",
        image: "hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU40fv4an1BdwEXIWJ-PW7GirVKUl-TAab-Q&s"   
      },
      loafers4: {
        name:"Blue Casual Loafers",
        description: "Weekend essentials",
        price: 2499,
        oldPrice: 3399,
        discount: "27% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSj3UOSEKQEXNedQTR2s9yt1suK4L_wgybZA&s"   
      },
      loafers5: {
        name:"Brown Tassel Loafers",
        description: "Elegant detailing",
        price: 3499,
        oldPrice: 4599,
        discount: "24% OFF",
        image: "https://fausto.in/cdn/shop/products/FST_KI-8809_BROWN_1-2_MOOD_1200x1200.jpg?v=1724853483"   
      },
      loafers6: {
        name:"Black Velvet Loafers",
        description: "Premium party wear",
        price: 3799,
        oldPrice: 4999,
        discount: "24% OFF",
        image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/t/n/q/-original-imagg6hysfgw6ka7.jpeg?q=90&crop=false"   
      },
      loafers7: {
        name:"Grey Casual Slip-Ons",
        description: "Everyday comfort",
        price: 2199,
        oldPrice: 2999,
        discount: "27% OFF",
        image: "https://m.media-amazon.com/images/I/71NbnF3ap8L._AC_UL480_FMwebp_QL65_.jpg"   
      },
      loafers8: {
        name:"Brown Driving Loafers",
        description: "Flexible and lightweight",
        price: 2899,
        oldPrice: 3799,
        discount: "24% OFF",
        image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/15241232/2023/11/27/16b58b06-7cd8-4987-bc07-58cbe7d02f651701069964922-Mochi-Men-Brown-Leather-Loafers-9471701069964851-6.jpg"   
      },
      loafers9: {
        name:"Tan Penny Loafers",
        description: "Classic penny strap",
        price: 3099,
        oldPrice: 4099,
        discount: "24% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5vDu0GTyP2jU9do_0wON5KJX8EPjSUUKHA&s"   
      },
      loafers10: {
        name:"Maroon Designer Loafers",
        description: "Bold and trendy",
        price: 3599,
        oldPrice: 4699,
        discount: "23% OFF",
        image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/14431112/2022/4/5/54478c11-be5a-43d4-be06-466b52eeab201649135824683-House-of-Pataudi-Men-Burgundy-Solid-Handcrafted-Leather-Part-1.jpg"   
      },
}
window.loafers = loafers;

function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`;


  
}