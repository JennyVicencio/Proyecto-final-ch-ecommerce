const itemsMock = [
   {
   id: 1,
   name: "Café en grano Colombia Supremo",
   img: "https://ae01.alicdn.com/kf/U14422ae77a0f4e24b82746a4031fefebh/Granos-de-caf-de-soja-y-Groud-granos-de-caf-de-100-250-1000gr-500-arabisi.jpg_.webp",
   price: 24000,
   desc: "Café en grano de origen colombiano con notas de chocolate y caramelo.",
   cat: "Cafe",
   stock: 10
   },
   {
   id: 2,
   name: "Infusor de té de acero inoxidable",
   img: "https://cdn.shopify.com/s/files/1/0156/5877/8688/products/1443_Infusor_20Bhoro_20turquesa_202_1024x1024@2x.jpg",
   price: 32000,
   desc: "Infusor de té de acero inoxidable con cadena y colador fino.",
   cat: "Accesorios",
   stock: 15
   },
   {
   id: 3,
   name: "Té verde orgánico Matcha",
   img: "https://http2.mlstatic.com/D_NQ_NP_729842-MLA46429103206_062021-O.webp",
   price: 6990,
   desc: "Té verde Matcha japonés de alta calidad, ideal para ceremonias de té.",
   cat: "Infusiones",
   stock: 5
   },
   {
   id: 4,
   name: "Cafetera de émbolo French Press",
   img: "https://www.ikea.com/cl/es/images/products/upphetta-cafetera-prensa-francesa-vidrio-acero-inoxidable__0711267_pe728105_s5.jpg?f=xl",
   price: 10990,
   desc: "Cafetera de émbolo de vidrio con filtro de acero inoxidable, capacidad para 8 tazas.",
   cat: "Accesorios",
   stock: 8
   },
   {
   id: 5,
   name: "Infusión de frutos del bosque",
   img: "https://www.bebe-te.com/wp-content/uploads/2017/07/frutasbosque1.jpg",
   price: 12990,
   desc: "Infusión de frutos del bosque con aroma y sabor intensos.",
   cat: "Infusiones",
   stock: 15
   },
   {
   id: 6,
   name: "Molinillo de café manual",
   img: "https://http2.mlstatic.com/D_NQ_NP_2X_701698-MLC42310864495_062020-F.webp",
   price: 40000,
   desc: "Perfecto para los más exigentes del café de especialidad.",
   cat: "Accesorios",
   stock: 3
   },
   {
   id: 7,
   name: "Café Premium Colombia",
   img: "https://5sento.com/wp-content/uploads/2022/06/b-5sento-cafe-premium.jpg",
   price: 24000,
   desc: "Café de origen colombiano de calidad premium.",
   cat: "Cafe",
   stock: 4
   },
]

// recibe una lista de items desde un arreglo de objetos falso
export const getItems = () => {
   return new Promise((resolve) => {
      setTimeout (() => {
         resolve(itemsMock)
      }, 500);
   })
};
