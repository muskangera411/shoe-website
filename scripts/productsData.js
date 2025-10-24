const products = {
      
      boots1: {
        name: "Classic Black Ankle Boots",
        description: "Minimalist leather look, perfect for any outfit.",
        price: 2799,
        oldPrice: 3799,
        discount: "26% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6duTBXKnuHSzvmVi3ki1R94NH1VoN0M5VQ&s"
      },

      boots2: {
        name: "Chunky Lace-up Boots",
        description: "Streetwear inspired chunky sole, edgy design.",
        price: 3299,
        oldPrice: 4399,
        discount: "25% OFF",
        image: "https://images-cdn.ubuy.co.in/6456104074093d596e337223-women-039-s-chunky-heel-platform-lace.jpg"
      },
      
      boots3: {
        name: "Beige Suede Boots",
        description: "A Perfect choice for winter outfits.",
        price: 3499,
        oldPrice: 4799,
        discount: "27% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxFGmfmNq6DWwMn7nEGRw66Uis8TWrqi3Pw&s" 
    
      },

      boots4: {
        name: "Brown Leather Boots",
        description: "Classic Brown Finish",
        price: 4299,
        oldPrice: 5999,
        discount: "28% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiT2Lpu-PlxyiINOANoRWRJQkOzeGIwHGy_g&s" 
      },

      boots5: {
        name: "Knee High Black Boots",
        description: "Sleek tall boots for chic look",
        price: 4999,
        oldPrice: 6599,
        discount: "24% OFF",
        image: "https://jmlooks.com/cdn/shop/products/5-long-lth-black-jm-looks-black-original-imagvbnmbuhejqvj.jpg?v=1752155783" 
      },

      boots6: {
        name: "Combat Military Boots",
        description: "Edgy and bold style",
        price: 3899,
        oldPrice: 5099,
        discount: "23% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYTbDNvbcwkamZuV5W4tos9F3DgC9QSJgXA&s"   
      },

      boots7: {
        name: "Black Pointed Toe Boots",
        description: "Elegant sharp design ",
        price: 3099,
        oldPrice: 4399,
        discount: "30% OFF",
        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/25031884/2023/9/18/9b257dc3-923f-405c-a261-ed2790e22f8b1695010882965SHUZTOUCHWomenPointed-ToeBlock-HeeledZip-UpBoots7.jpg"   
      },

      boots8: {
        name: "Grey Lace-Up Boots",
        description: "Neutral tone, versatile use",
        price: 2899,
        oldPrice: 3999,
        discount: "27% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAV1j5P-w3x17b_4bvm_4l3faH1_JD1L37WQ&s"   
      },

      boots9: {
        name: "White Fashion Boots",
        description: "Trendy white for bold looks",
        price: 3499,
        oldPrice: 4799,
        discount: "27% OFF",
        image: "https://m.media-amazon.com/images/I/61JE8RMjs8L._UY300_.jpg"   
      },

      boots10: {
        name: "Tan Riding Boots",
        description: "Equestrian inspired design",
        price: 4399,
        oldPrice: 5799,
        discount: "24% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzthGJONXleUxJtVMVJTUMUFW6BRb2KTIXLQ&s"   
      },

      boots11: {
        name: "Olive Green Boots",
        description: "Outdoor trekking look",
        price: 3799,
        oldPrice: 4899,
        discount: "22% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8eFpkZeliX-sLd_Pg7X529iZpK6SuprxtQ&s"   
      },

      boots12: {
        name: "Platform Heel Boots",
        description: "High sole statement style",
        price: 4799,
        oldPrice: 6299,
        discount: "24% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3aYYedQ3cVQY7VEaIrarpT1hRoLOeLIA4g&s"   
      },

      boots13: {
        name:"Studded Black Boots",
        description: "Punk inspired edgy style",
        price: 3999,
        oldPrice: 5499,
        discount: "27% OFF",
        image: "https://assets.ajio.com/medias/sys_master/root/20241105/hmoa/672a03e4f9b8ef490b02fa16/-473Wx593H-466621758-black-MODEL.jpg"   
      },

      boots14: {
        name:"High Heel Boots",
        description: "Bold and elegant fashion boots",
        price: 4599,
        oldPrice: 6099,
        discount: "25% OFF",
        image: "https://i.pinimg.com/736x/59/61/59/596159d451ae863d8dfdbf8cbb7eee60.jpg"   
      },

      boots15: {
        name:"Maroon Suede Boots",
        description: "Rich suede finish",
        price: 3899,
        oldPrice: 5099,
        discount: "24% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7gOynGIqWN_RkZ89D7XpRmoJfOzIe4_fkw&s"   
      },

      boots16: {
        name:"Denim boots",
        description: "Unique denim texture",
        price: 2999,
        oldPrice: 4199,
        discount: "28% OFF",
        image: "https://images.meesho.com/images/products/422105361/aylai_512.webp?width=512"   
      },

      boots17: {
        name:"Animal Print Boots",
        description: "Leopard patterned statement",
        price: 4099,
        oldPrice: 5599,
        discount: "26% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySeo2bW0xEeZ-WyBKOvlDsPuHc1pxZQrLwA&s"   
      },

      boots18: {
        name:"White High Heel Boots",
        description: "Modern and sleek tall Boots",
        price: 5099,
        oldPrice: 6799,
        discount: "27% OFF",
        image: "https://m.media-amazon.com/images/I/61JE8RMjs8L._UY300_.jpg"   
      },

      boots19: {
        name:"Glossy Patent Boots",
        description: "Shiny & eye-catching style",
        price: 4799,
        oldPrice: 6299,
        discount: "24% OFF",
        image: "https://m.media-amazon.com/images/I/51FJCrfPv6L._SL1000_.jpg"   
      },






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








      casualSneaker1: {
        name:"White Classic Sneaker",
        description: "Everyday Comfort",
        price: 1999,
        oldPrice: 2799,
        discount: "30% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.5N4fcDBtuqGj192BFj-XnQHaE8?pid=Api&P=0&h=180"   
      },

      casualSneaker2: {
        name:"Black Street Sneaker",
        description: "Bold & stylish",
        price: 2299,
        oldPrice: 3299,
        discount: "25% OFF",
        image: "https://tse1.mm.bing.net/th/id/OIP.ZCCuRZ8hDiwV9eb_Sd_oggHaFj?pid=Api&P=0&h=180"   
      },

      casualSneaker3: {
        name:"Grey Sport Sneaker",
        description: "Lightweight design",
        price: 1799,
        oldPrice: 2499,
        discount: "28% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.M23AjqEEBt-1gGhXbsYPogHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker4: {
        name:"Urban Blue Sneaker",
        description: "Trendy vibes",
        price: 2499,
        oldPrice: 3599,
        discount: "31% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.lJ-Mvxoz9CSOZlf0xlkewQHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker5: {
        name:"Canvas Low Top",
        description: "Casual and cool",
        price: 1299,
        oldPrice: 1899,
        discount: "32% OFF",
        image: "https://tse2.mm.bing.net/th/id/OIP.DVnXYFDQ1u9I-AUTb_2JxQHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker6: {
        name:"Sporty Runner",
        description: "Performance wear",
        price: 2099,
        oldPrice: 2899,
        discount: "27% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.2VkaJKvdrxVUewl93i9x5QHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker7: {
        name:"Classic High Top",
        description: "Street style",
        price: 2499,
        oldPrice: 3499,
        discount: "29% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.MHf6ZCAp7iJOWjyZl933WgHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker8: {
        name:"Minimalist White",
        description: "Timeless appeal",
        price: 1899,
        oldPrice: 2599,
        discount: "27% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.Wxwh1MTtsntNUSGIvkvGQAHaEJ?pid=Api&P=0&h=180"   
      },

      casualSneaker9: {
        name:"Chunky Sneaker",
        description: "Bold look",
        price: 2799,
        oldPrice: 3899,
        discount: "28% OFF",
        image: "https://tse2.mm.bing.net/th/id/OIP.Tc39NvkZFYYDGaV-ciOFeQHaFl?pid=Api&P=0&h=180"   
      },

      casualSneaker10: {
        name:"Everyday Grey",
        description: "Simple and versatile",
        price: 1699,
        oldPrice: 2299,
        discount: "26% OFF",
        image: "https://tse1.mm.bing.net/th/id/OIP.dATQhpuKWIWUThdsfLlUIgHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker11: {
        name:"Modern Slip-on",
        description: "Easy to wear",
        price: 1599,
        oldPrice: 2199,
        discount: "27% OFF",
        image: "https://tse2.mm.bing.net/th/id/OIP.k4fVDNHxdF0LV2jn_WXiRAHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker12: {
        name:"Leather Accent Sneaker",
        description: "Premium touch",
        price: 3099,
        oldPrice: 4199,
        discount: "26% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.-ij7iEjJvceG24PoZSqUWAHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker13: {
        name:"Sporty Black ",
        description: "All-round use",
        price: 2299,
        oldPrice: 3199,
        discount: "28% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.pmdtRZwYj0uBpoRJBawRZwHaG2?pid=Api&P=0&h=180"   
      },

      casualSneaker14: {
        name:"Casual Brown Sneaker",
        description: "Smart casual look",
        price: 1799,
        oldPrice: 2499,
        discount: "28% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.mD1s44bUzomukKw3Hh7h6AHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker15: {
        name:"Retro White",
        description: "Vintage vibe",
        price: 2099,
        oldPrice: 2899,
        discount: "27% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.ltwr3c7CfVnfJ3eLcsc4bgHaFs?pid=Api&P=0&h=180"   
      },

      casualSneaker16: {
        name:"White Classic Sneaker",
        description: "Everyday comfort ",
        price: 1999,
        oldPrice: 2799,
        discount: "30% OFF",
        image: "https://tse1.mm.bing.net/th/id/OIP.Wu5oh4RL6FvE0VIX_PR55QHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker17: {
        name:"Steel Grey Sneaker",
        description: "Everyday comfort",
        price: 1999,
        oldPrice: 2799,
        discount: "30% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.2Mnep1VNBeFu8_N_5mjVRQHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker18: {
        name:"Midnight Black Sneaker",
        description: "Bold and Stylish",
        price: 2299,
        oldPrice: 3299,
        discount: "25% OFF",
        image: "https://tse2.mm.bing.net/th/id/OIP.7ElcCQb2FF-MhVqHiAqy2QHaE8?pid=Api&P=0&h=180"   
      },

      casualSneaker19: {
        name:"Storm Runner",
        description: "Lightweight design",
        price: 1799,
        oldPrice: 2499,
        discount: "28% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.mFYmgDam6WEd2uvLoftwpgHaJQ?pid=Api&P=0&h=180"   
      },

      casualSneaker20: {
        name:"Ocean Blue Sneaker",
        description: "Trendy vibes",
        price: 2499,
        oldPrice: 3599,
        discount: "31% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.fs1xdZveDTmKfusTujTWaQHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker21: {
        name:"Classic Canvas Sneaker",
        description: "Casual and cool",
        price: 1299,
        oldPrice: 1899,
        discount: "32% OFF",
        image: "https://tse2.mm.bing.net/th/id/OIP.lfekX0cXxLF8uD25PhMRFQHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker22: {
        name:"Speed Runner",
        description: "Performance wear",
        price: 2099,
        oldPrice: 2899,
        discount: "27% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.0QvrrX1OJic3qIKjE4ow3QHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker23: {
        name:"High Rise Sneaker",
        description: "Street style",
        price: 2499,
        oldPrice: 3499,
        discount: "29% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.QMd_A4voVASNLFK9uxdVhgHaFj?pid=Api&P=0&h=180"   
      },

      casualSneaker24: {
        name:"Snow White Sneaker",
        description: "Timeless appeal",
        price: 1899,
        oldPrice: 2599,
        discount: "27% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.CHDbK5pOhe_xLQW9GJTBJwAAAA?pid=Api&P=0&h=180"   
      },

      casualSneaker25: {
        name:"Bulky Trend Sneaker",
        description: "Bold look",
        price: 2799,
        oldPrice: 3899,
        discount: "28% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.EdUvNnKZ5TGvxDJpoqphUAHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker26: {
        name:"Urban Grey ",
        description: "Simple and versatile",
        price: 1699,
        oldPrice: 2299,
        discount: "26% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.rHPhAIgPIQX2XCyQQyQ5NwHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker27: {
        name:"Slipstream Sneaker",
        description: "Easy to wear",
        price: 1599,
        oldPrice: 2199,
        discount: "27% OFF",
        image: "https://tse2.mm.bing.net/th/id/OIP.jGQYuqey2XUyQfalPfCpBwHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker28: {
        name:"Elite Leather Sneaker",
        description: "Premium Touch",
        price: 3099,
        oldPrice: 4199,
        discount: "26% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.URP9QZTVzCmoU7jMjYWYjgHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker29: {
        name:"Jet Black Sneaker",
        description: "All-round use",
        price: 2299,
        oldPrice: 3199,
        discount: "28% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.PvsGY8PdD76Mf7Vag3H3mQHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker30: {
        name:"Brown Earth Sneaker",
        description: "Smart casual look",
        price: 1799,
        oldPrice: 2499,
        discount: "28% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.WbK4wDQKXfwIRndwm_nqDwHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker31: {
        name:"Retro Classic",
        description: "Vintage vibe",
        price: 2099,
        oldPrice: 2899,
        discount: "27% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.IfChT6kyz-2ShFl7IWw68QhHaGD?pid=Api&P=0&h=180"   
      },

      casualSneaker32: {
        name:"Street Grey",
        description: "Modern edge",
        price: 2299,
        oldPrice: 3099,
        discount: "25% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.ZUhzikEgUhbvWG1P9JdAVgHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker33: {
        name:"Running White",
        description: "Light and flexible",
        price: 1899,
        oldPrice: 2699,
        discount: "30% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.ZqHrXl8x_wWvzvgVIwg2BgHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker34: {
        name:"Everyday Blue",
        description: "Relaxed Design",
        price: 2099,
        oldPrice: 2899,
        discount: "27% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.tbZvPal8TjCG_2tLdGBZoQHaE8?pid=Api&P=0&h=180"   
      },

      casualSneaker35: {
        name:"Sporty Green",
        description: "Training-ready shoes",
        price: 1799,
        oldPrice: 2399,
        discount: "25% OFF",
        image: "https://tse2.mm.bing.net/th/id/OIP.NXc0NiNaTPl2tO_ANjSZ1QHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker36: {
        name:"Urban Red",
        description: "Eye-Catching",
        price: 2299,
        oldPrice: 3199,
        discount: "28% OFF",
        image: "https://tse2.mm.bing.net/th/id/OIP.KeZt_yvRdzewshCQzieIVwHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker37: {
        name:"White Mesh Sneaker",
        description: "Breathable design",
        price: 1699,
        oldPrice: 2399,
        discount: "29% OFF",
        image: "https://tse2.mm.bing.net/th/id/OIP.Lo1yxzZ9Pj2wQ1xg9EpmqQHaHa?pid=Api&P=0&h=180"   
      },

      casualSneaker38: {
        name:"Denim Style Sneaker",
        description: "Unique texture",
        price: 2499,
        oldPrice: 3399,
        discount: "26% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.ZUfqBvBs36loGTbqW8ipbwHaGM?pid=Api&P=0&h=180"   
      },

      casualSneaker39: {
        name:"Slip-on Casual",
        description: "Convenient wear",
        price: 1499,
        oldPrice: 2099,
        discount: "28% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.R7M3UBMBUz3Djpc143ESbQAAAA?pid=Api&P=0&h=180"   
      },










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










      heels1: {
        name:"Blush Pink Stilettos",
        description: "Elegant and modern",
        price: 2499,
        oldPrice: 3499,
        discount: "29% OFF",
        image: "https://images.meesho.com/images/products/530367509/37c41_512.avif?width=512"   
      },

      heels2: {
        name:"Black Evening Heels",
        description: "Perfect for parties",
        price: 2799,
        oldPrice: 3999,
        discount: "30% OFF",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRyEAI35HKeV8FxyKBU7COK4Srh0Zh9IOG_18yZWY6zNODLlR7ptLCi0QtF6vLBKC-aXT5AHPid5rhIgVh7oc51CBMsgFZ82NO8LiQMomeOBWFxCuedlr2THw"   
      },
      heels3: {
        name:"Golden Strap Heels",
        description: "Luxury style",
        price: 3099,
        oldPrice: 4299,
        discount: "28% OFF",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQydQwVO2Vi2RRN6T_XXT8KQPbNlLB3YJg8fB_bJi0IpUM6l5F8zvXrxWMOqcfTNXPH7mQniogeyStiTwW5yZ0DfIA79cJgAQKwpw_fVu8wKtWWSjmF-doU"   
      },
      heels4: {
        name:"Rose Gold Pumps",
        description: "Timeless chic",
        price: 2299,
        oldPrice: 3199,
        discount: "28% OFF",
        image: "https://tse2.mm.bing.net/th/id/OIP._pu-DsCBWyC0VvhvZG0nCwHaHa?pid=Api&P=0&h=180"   
      },
      heels5: {
        name:"Crimson High Heels",
        description: "Bold and Confident",
        price: 2199,
        oldPrice: 3099,
        discount: "29% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.bFfYSu9x2t6htkps4E2L1wHaEJ?pid=Api&P=0&h=180"   
      },
      heels6: {
        name:"Blue Elegant Heels",
        description: "Stylish and unique",
        price: 2599,
        oldPrice: 3699,
        discount: "30% OFF",
        image: "https://tse1.mm.bing.net/th/id/OIP.YO_DyQoFekro247zudfRHgHaHa?pid=Api&P=0&h=180"   
      },
      heels7: {
        name:"Nude Elegant Pumps",
        description: "Everyday elegance",
        price: 1899,
        oldPrice: 2599,
        discount: "27% OFF",
        image: "https://up.yimg.com/ib/th/id/OIP.79GcyRMw_0az-oPN3_4nMgHaHa?pid=Api&rs=1&c=1&qlt=95&w=111&h=111"   
      },
      heels8: {
        name:"Classic Black Heels",
        description: "Must-have piece",
        price: 1999,
        oldPrice: 2799,
        discount: "30% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.VNe5cfACwjGC7Gk8uZWlFAHaEH?pid=Api&P=0&h=180"   
      },
      heels9: {
        name:"Golden Glam Heels",
        description: "Perfect for weddings",
        price: 3499,
        oldPrice: 4599,
        discount: "24% OFF",
        image: "https://tse2.mm.bing.net/th/id/OIP.1jGTllWpYS7X8qLrp02v3gHaHa?pid=Api&P=0&h=180"   
      },
      heels10: {
        name:"Silvery Party Heels",
        description: "Shiny and glamorous",
        price: 2899,
        oldPrice: 3799,
        discount: "24% OFF",
        image: "https://tse4.mm.bing.net/th/id/OIP.9je_tVXkn6rZmihP90Z0lgHaFj?pid=Api&P=0&h=180"   
      },
      heels11: {
        name:"Velvet Maroon Heels",
        description: "Luxury velvel finish",
        price: 2299,
        oldPrice: 3099,
        discount: "25% OFF",
        image: "https://tse3.mm.bing.net/th/id/OIP.qUS8n3cig_vojk8igqx5SgHaHa?pid=Api&P=0&h=180"   
      },
      heels12: {
        name:"Bow Detail Pumps",
        description: "Sweet and stylish",
        price: 1799,
        oldPrice: 2499,
        discount: "28% OFF",
        image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/17680266/2023/2/13/e616e0fc-c6ad-4964-b5aa-d4c3ea7b019c1676289227993-her-by-invictus-Textured-Pumps-with-Bow-Detail-1981676289227-1.jpg"   
      },
      heels13: {
        name:"Glitter Party Heels",
        description: "Sparkle all night ",
        price: 2999,
        oldPrice: 4099,
        discount: "27% OFF",
        image: "https://www-s.mlo.me/upen/v/2018/201811/20181106/201811061432362734804.jpg"   
      },
      heels14: {
        name:"Strappy White Heels",
        description: "Minimalist and chic",
        price: 2199,
        oldPrice: 3099,
        discount: "29% OFF",
        image: "https://i.pinimg.com/originals/30/96/cc/3096cce8b06346e04213db9112cedcfd.jpg"   
      },








      kidsboots1: {
        name:"Brown Leather Boots",
        description: "Classic winter style",
        price: 1499,
        oldPrice: 2099,
        discount: "29% OFF",
        image: "https://m.media-amazon.com/images/I/61xjEE5C2AL._UY1000_.jpg"   
      },
      kidsboots2: {
        name:"Black Ankle Boots",
        description: "Stylish and durable",
        price: 1799,
        oldPrice: 2499,
        discount: "28% OFF",
        image: "https://m.media-amazon.com/images/I/51boou9+pWL._UY1000_.jpg"   
      },
      kidsboots3: {
        name:"Pink Fur Boots",
        description: "Warm and cozy",
        price: 1299,
        oldPrice: 1899,
        discount: "32% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FMV2HoIp8Ww3HW3cBxY0jEfeCSMPJSz-6A&s"   
      },
      kidsboots4: {
        name:"Blue Snow Boots",
        description: "Perfect for winters",
        price: 1699,
        oldPrice: 2299,
        discount: "26% OFF",
        image: "https://images-static.nykaa.com/media/catalog/product/a/f/afc42fbLITAD00000563_7.jpg?tr=w-500"   
      },
      kidsboots5: {
        name:"Cartoon Print Boots",
        description: "Fun and playful",
        price: 1199,
        oldPrice: 1699,
        discount: "29% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8EMLYeDk0i0XRpBC3Yn5N7lI395YKjnvzw&s"   
      },
      kidsboots6: {
        name:"Red Adventure Boots",
        description: "Strong grip sole",
        price: 1399,
        oldPrice: 1999,
        discount: "30% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg47x6vZ2BaKb-SLptoj5KCTDNC6k5foMLsg&s"   
      },
      kidsboots7: {
        name:"Glitter Fashion Boots",
        description: "Party-ready boots",
        price: 1599,
        oldPrice: 2299,
        discount: "30% OFF",
        image: "https://di2ponv0v5otw.cloudfront.net/posts/2025/06/11/6849f306bedd34dad5fc9609/m_6849f32da951058bd2c26b12.jpg"   
      },
      kidsboots8: {
        name:"Grey High Boots",
        description: "Trendy and warm",
        price: 1899,
        oldPrice: 2599,
        discount: "27% OFF",
        image: "https://m.media-amazon.com/images/I/71kuD2G6jfL._UY1000_.jpg"   
      },
      kidsboots9: {
        name:"Brown Adventure Boots",
        description: "Perfect for outdoors",
        price: 1499,
        oldPrice: 2099,
        discount: "29% OFF",
        image: "https://m.media-amazon.com/images/I/71j3anXsqvL._UY1000_.jpg"   
      },
      kidsboots10: {
        name:"Classic Black Boots",
        description: "Everyday Essential",
        price: 1299,
        oldPrice: 1899,
        discount: "32% OFF",
        image: "https://i0.wp.com/stefensshoes.com/wp-content/uploads/2025/01/boot-black-2-scaled.jpg?resize=291%2C291&ssl=1"   
      },








      kidsformals1: {
        name:"Black Leather Formals",
        description: "Classic school wear",
        price: 1399,
        oldPrice: 1899,
        discount: "26% OFF",
        image: "https://www.mumkins.in/cdn/shop/products/boys-shoes-bshoes089-black-1.jpg?v=1756207717&width=1080"   
      },
      kidsformals2: {
        name:"Brown Formal Shoes",
        description: "Stylish and comfy",
        price: 1499,
        oldPrice: 2099,
        discount: "29% OFF",
        image: "https://tiimg.tistatic.com/fp/1/008/186/plain-round-washable-toe-style-lace-closure-formal-kids-leather-shoes-392.jpg"   
      },
      kidsformals3: {
        name:"Buckle Strap Formals",
        description: "Easy slip-on design",
        price: 1299,
        oldPrice: 1799,
        discount: "28% OFF",
        image: "https://diademstore.com/cdn/shop/files/49940_1_5db7abd3-f2b8-4c46-ba54-549c875e0db8.webp?v=1744100355"   
      },
      kidsformals4: {
        name:"Shiny Black Paryy Shoes",
        description: "Perfect for functions",
        price: 1799,
        oldPrice: 2499,
        discount: "28% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTxciAwyvyLsPhbP89p4_ThbdTpoqFagsWA&s"   
      },
      kidsformals5: {
        name:"Tan Oxford Shoes",
        description: "Smart and elegant",
        price: 1699,
        oldPrice: 2299,
        discount: "26% OFF",
        image: "https://m.media-amazon.com/images/I/610juxe9xWL._SL1500_.jpg"   
      },
      kidsformals6: {
        name:"Formal Loafers",
        description: "Slip-on comfort",
        price: 1599,
        oldPrice: 2099,
        discount: "24% OFF",
        image: "https://www.mumkins.in/cdn/shop/products/boys-shoes-bshoes018-black-1.jpg?v=1756207716&width=1080"   
      },
      kidsformals7: {
        name:"Glossy Lace-Up Shoes",
        description: "Classic formal style",
        price: 1299,
        oldPrice: 1899,
        discount: "32% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9HaWwNVDI13JmzuFeFu0VcAKKjuR3nuXDA&s"   
      },
      kidsformals8: {
        name:"Maroon Party Shoes",
        description: "Unique color touch",
        price: 1799,
        oldPrice: 2499,
        discount: "28% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQ1qF0mFMrlrwVSH97sEdsSB3i3RCw6XBNA&s"   
      },
      kidsformals9: {
        name:"Velcro Formal Shoes",
        description: "Easy for kids",
        price: 1099,
        oldPrice: 1599,
        discount: "31% OFF",
        image: "https://m.media-amazon.com/images/I/61PQ0FJMceL._UY1000_.jpg"   
      },
      kidsformals10: {
        name:"White Formal Shoes",
        description: "Fresh and elegant",
        price: 1499,
        oldPrice: 2099,
        discount: "29% OFF",
        image: "https://5.imimg.com/data5/SELLER/Default/2020/9/YE/UT/KA/94147109/kids-boy-white-loafer-shoes-500x500.jpg"   
      },








      kidssandals1: {
        name:"Pinky Bow Sandals",
        description: "Cute and comfy",
        price: 999,
        oldPrice: 1499,
        discount: "33% OFF",
        image: "https://thelittlebunny.in/cdn/shop/files/IMG_4363_bddb3dec-61a9-46a5-8a2a-d8d3edf19907.jpg?v=1717958624"   
      },
      kidssandals2: {
        name:"Blue Adventure Sandals",
        description: "Perfect for playtime",
        price: 1199,
        oldPrice: 1799,
        discount: "33% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgEynUSm8bA90TvpZOiETfFpgs4ZpQXRFtA&s"   
      },
      kidssandals3: {
        name:"Sunny Yellow Sandals",
        description: "Bright and cheerful",
        price: 899,
        oldPrice: 1299,
        discount: "31% OFF",
        image: "https://m.media-amazon.com/images/I/61Bxl4AgUQL._SY575_.jpg"   
      },
      kidssandals4: {
        name:"Sporty Red Sandals",
        description: "Active kids' choice",
        price: 1099,
        oldPrice: 1699,
        discount: "35% OFF",
        image: "https://assets.ajio.com/medias/sys_master/root/20230710/8sVf/64ac21a5a9b42d15c9490271/-473Wx593H-450156691-dkgryred-MODEL.jpg"   
      },
      kidssandals5: {
        name:"Floral Pink Sandals",
        description: "Pretty and lightweight",
        price: 899,
        oldPrice: 1399,
        discount: "36% OFF",
        image: "https://m.media-amazon.com/images/I/61pdcuplSpL._UY1000_.jpg"   
      },
      kidssandals6: {
        name:"Brown Leatherette Sandals",
        description: "Smart casual look",
        price: 1299,
        oldPrice: 1999,
        discount: "35% OFF",
        image: "https://elves.in/cdn/shop/files/106_2048x2048_962b823c-dd02-4cfd-93d7-786ab76c8779_2048x2048.jpg?v=1732894438"   
      },
      kidssandals7: {
        name:"Cartoon Print Sandals",
        description: "Fun and playful",
        price: 799,
        oldPrice: 1199,
        discount: "33% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTjxflbDd2RnmBIxipuzzRwAnJZHwD4Q0ig&s"   
      },
      kidssandals8: {
        name:"Rainbow Strap Sandals",
        description: "Colourful and comfy",
        price: 1099,
        oldPrice: 1699,
        discount: "35% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiO0C5smiCgXlWjfm8F-p75cOQI5CtGgMHvA&s"   
      },
      kidssandals9: {
        name:"Velcro Strap Sandals",
        description: "Easy to wear",
        price: 899,
        oldPrice: 1299,
        discount: "31% OFF",
        image: "https://www.vishalmegamart.com/dw/image/v2/BGHT_PRD/on/demandware.static/-/Sites-vmm-apparel-master-catalog/default/dw2f26a5c9/images/large/1251046242001.jpg?sw=900&sh=900"   
      },
      kidssandals10: {
        name:"Classic Black Sandals",
        description: "All-time favourite",
        price: 999,
        oldPrice: 1499,
        discount: "33% OFF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPLIlA_L48oF-MWFEfOsHJlKpcDwbrDFMZg&s"   
      },

      
    };
