const adidas={
    adidas1: {
        name:"Adidas Ultraboost 22",
        description: "Performance running shoes",
        price: 13999,
        oldPrice: 15999,
        discount: "12% OFF",
        image: "https://img.tatacliq.com/images/i11/437Wx649H/MP000000012072387_437Wx649H_202306230444241.jpeg"   
      },

      adidas2: {
        name:"Adidas Superstar",
        description: "Classic street sneakers",
        price: 7999,
        oldPrice: 9499,
        discount: "16% OFF",
        image: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/03_originals_ss25_the_original_introduce_plp_the_original_iwp_superstar_d_b7e59d996e.jpg"   
      },

      adidas3: {
        name:"Adidas Stan Smith",
        description: "Minimalist icon ",
        price: 6999,
        oldPrice: 8499,
        discount: "18% OFF",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/0e41fcd121484885ad846dfc70e802cc_9366/Stan_Smith_Shoes_Black_IG1319_01_standard.jpg"   
      },

      adidas4: {
        name:"Adidas NMD_R1",
        description: "Modern streetwear",
        price: 9499,
        oldPrice: 11499,
        discount: "17% OFF",
        image: "https://cdn-images.farfetch-contents.com/14/86/22/44/14862244_24360902_600.jpg"   
      },

      adidas5: {
        name:"Adidas Gazelle",
        description: "Retro revival",
        price: 6499,
        oldPrice: 7999,
        discount: "19% OFF",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/698e41ae0196408eb16aa7fb008046ad_9366/Gazelle_Shoes_Blue_BB5478_01_standard.jpg"   
      },

      adidas6: {
        name:"Adidas Forum Low",
        description: "Basketball-inspired style",
        price: 8299,
        oldPrice: 9999,
        discount: "27% OFF",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/67a5245996f44aa39e00f77af3548817_9366/Forum_Low_CL_Shoes_White_IH7829_01_standard.jpg"   
      },

      adidas7: {
        name:"Adidas Lite Racer",
        description: "Everyday lightweight",
        price: 4999,
        oldPrice: 6299,
        discount: "21% OFF",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/9581fc80d96145abb0e55772410d404d_9366/Lite_Racer_4.0_Shoes_Black_IE6132_01_standard.jpg"   
      },

      adidas8: {
        name:"Adidas ZX 2K Boost",
        description: "Comfort with style",
        price: 10499,
        oldPrice: 12999,
        discount: "19% OFF",
        image: "https://assets.ajio.com/medias/sys_master/root/20220225/VyNg/6218f1d8f997dd03e2f13e79/-473Wx593H-460930605-black-MODEL.jpg"   
      },

      adidas9: {
        name:"Adidas Alphabounce",
        description: "Engineered cushioning",
        price: 7499,
        oldPrice: 8999,
        discount: "17% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYixWsGSRXvNJy_UfV7azRzXte1WnhsWS9Q&s"   
      },

      adidas10: {
        name:"Adidas Terrex",
        description: "Trail running shoes",
        price: 8999,
        oldPrice: 10999,
        discount: "18% OFF",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/c37a52242bf24d3f92204cb7d98b2882_9366/Terrex_AX4_Hiking_Shoes_Green_IG5683_HM1.jpg"   
      },

      adidas11: {
        name:"Adidas Samba",
        description: "Skate-inspired casuals",
        price: 5999,
        oldPrice: 7499,
        discount: "20% OFF",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4c70105150234ac4b948a8bf01187e0c_9366/Samba_OG_Shoes_Black_B75807_01_standard.jpg"   
      },

      adidas12: {
        name:"Adidas Duramo SL",
        description: "Training-ready shoes",
        price: 4499,
        oldPrice: 5999,
        discount: "25% OFF",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/02f4a25a32484a9f931e3db98026e32c_9366/Duramo_SL_Shoes_Black_IE4034_01_standard.jpg"   
      },


}
window.adidas = adidas;

function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`;


  
}
