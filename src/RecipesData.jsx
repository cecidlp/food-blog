const footerRecipes = [
    {
      category: "CAKE",
      articles: [
        {
          title: "Chocolate Butter Mochi Cake",
          text: "Inspired by our travels to Maui, this chocolate butter mochi cake features a chewy brownie topped with peanut butter frosting and a generous amount of rainbow sprinkles. ",
        },
        {
          title: "Orange Blossom Bundt Cake",
          text: "This alluring orange blossom bundt cake is moist and buttery. It is naturally flavored with orange zest and orange blossom water. ",
        },
      ],
    },
    {
      category: "BREAD & ROLLS",
      articles: [
        {
          title: "Cheddar Everything Babka Buns",
          text: "Soft and fluffy Cheddar Everything Babka Buns. These individually portioned muffin buns are loaded with cheddar cheese and everything bagel seasoning mix.",
        },
        {
          title: "Carrot Cake Cinnamon Rolls",
          text: "Carrot cake cinnamon rolls frosted with whipped cream cheese and topped with toasted walnuts. It's the iconic flavors of carrot cake injected into sweet rolls! ",
        },
      ],
    },
    {
      category: "COOKIES",
      articles: [
        {
          title: "Rye Chocolate Chip Cookies",
          text: "These aren’t your average chocolate chip cookies. Brown butter rye chocolate chip cookies are nutty and spiced with touch of coffee, cinnamon, and nutmeg!",
        },
        {
          title: "White Chocolate Earl Grey Cookies",
          text: "Soft and chewy Earl Grey Cookies infused with tea and studded with white chocolate chunks. They’re a sweet treat perfect for afternoon tea and beyond.",
        },
      ],
    },
  ];


  const highlightContent = [
    {
      img: 'https://www.thelittleepicurean.com/wp-content/uploads/2020/11/decorated-holiday-sugar-cookies-2-400x600.jpg',
      title: 'Decorated Holiday Sugar Cookies',
    },
    {
      img: ' https://www.thelittleepicurean.com/wp-content/uploads/2019/10/pumpkin-bourbon-cocktail-1-768x1152.jpg',
      title: 'Pumpkin Bourbon Cocktail',
    },
    {
      img: 'https://www.thelittleepicurean.com/wp-content/uploads/2019/10/baked-pear-puff-pastry-400x600.jpg',
      title: 'Baked Pear Puff Pastry',
    },
    {
      img: 'https://www.thelittleepicurean.com/wp-content/uploads/2019/11/brown-butter-pecan-pie-4-768x1152.jpg',
      title: 'Brown Butter Pecan Pie',
    }
   
  ]

  const dessertBrowser = [
    {
      img: 'https://www.thelittleepicurean.com/wp-content/uploads/2018/02/brioche-loaf-5-600x600.jpg',
      category: 'Breads',
    },
    {
      img:'https://www.thelittleepicurean.com/wp-content/uploads/2020/12/olive-oil-brownies-1-600x600.jpg',
    category: 'Brownies',
  },
  {
    img: 'https://www.thelittleepicurean.com/wp-content/uploads/2020/10/pumpkin-bundt-cake-9-600x600.jpg',
  category: 'Cakes',
},
{
  img: 'https://www.thelittleepicurean.com/wp-content/uploads/2018/12/classic-linzer-cookies-1-600x600.jpg',
category: 'Cookies',
},
{
  img: 'https://images.pexels.com/photos/4099124/pexels-photo-4099124.jpeg?auto=compress&cs=tinysrgb&w=600',
category: 'Cupcakes',
},
{
  img:'https://images.pexels.com/photos/3656118/pexels-photo-3656118.jpeg?auto=compress&cs=tinysrgb&w=600',
category: 'Donuts',
},
{
  img: 'https://images.pexels.com/photos/6606003/pexels-photo-6606003.jpeg?auto=compress&cs=tinysrgb&w=600',
category: 'Pies & Tarts',
},
{
  img: 'https://www.thelittleepicurean.com/wp-content/uploads/2017/02/champorado-filipino-chocolate-rice-porridge-1-600x600.jpg',
category: 'Puddings',
},
{
  img: 'https://www.thelittleepicurean.com/wp-content/uploads/2023/05/savory-cheese-scones-feature-600x600.jpg',
category: 'Scones',
},
  ]

  const holidayFavs = [
    {
      img: 'https://images.pexels.com/photos/5791788/pexels-photo-5791788.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Gingerbread House'
    },
    {
      img: 'https://www.thelittleepicurean.com/wp-content/uploads/2018/12/classic-linzer-cookies-1-768x1152.jpg',
      title: 'Linzer Cookies'
    },
    {
      img: 'https://www.thelittleepicurean.com/wp-content/uploads/2017/12/caramel-pecan-bark-5-400x600.jpg',
      title: 'Caramel Pecan Bark', 
    },
    {
      img: 'https://www.thelittleepicurean.com/wp-content/uploads/2020/12/danish-butter-cookies-1-768x1152.jpg',
      title: 'Danish Butter Cookies'
    },
    {
      img: 'https://www.thelittleepicurean.com/wp-content/uploads/2017/11/pumpkin-cheesecake-doughnuts-400x600.jpg',
      title: 'Pumpkin Cheesecake Doughnuts', 
    },
    {
      img: 'https://www.thelittleepicurean.com/wp-content/uploads/2019/12/sugar-cookies-christmas-trees-1-400x600.jpg',
      title: 'Sugar Cookies Christmas Trees',
    },
    
  ]

  const newPosts = [
    {
      img: 'https://images.pexels.com/photos/3250406/pexels-photo-3250406.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Cookies',
      title: 'Chocolate Chips Cookies',
    },
    {
      img: 'https://images.pexels.com/photos/19212848/pexels-photo-19212848/free-photo-of-bundt-cake-with-icing.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Cakes',
      title: 'Orange Juice Cake',
    },
    {
      img: 'https://images.pexels.com/photos/16041846/pexels-photo-16041846/free-photo-of-photo-of-a-glass-with-tiramisu-and-a-small-bowl-of-coffee-beans.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Cakes',
      title: 'Tiramisu',
    },
  ]

  const argRecipes = [
    {
      img: 'https://www.piesandtacos.com/wp-content/uploads/2020/02/Chocotorta-24.jpg',
      title: 'Chocotorta',
    },
    {
      img: 'https://acdn.mitiendanube.com/stores/536/593/products/marcada111-052809763b34d7a43c16546139792656-1024-1024.webp',
      title: 'Marquise Cake'
    },
    { 
      img: 'https://cuk-it.com/wp-content/uploads/2021/06/medialunas-manteca-ig01.webp',
      title: 'Medialunas'
    },
    {
      img: 'https://yogaofcooking.co/wp-content/uploads/2020/03/chocolate-alfajores-7-693x1024.jpg',
      title: 'Chocolate Alfajores',
    },
    {
      img: "https://luciapaula.com/wp-content/uploads/2021/04/Blog-1970-01-20-014151458.jpg",
      title: 'Rogel Cake'
    },
    {
      img: "https://www.elmundoeats.com/wp-content/uploads/2021/07/Argentine-alfajores-on-a-rack.jpg",
      title: 'Cornstach Alfajores',
    }
  ]

  export {footerRecipes, highlightContent, dessertBrowser, holidayFavs, newPosts, argRecipes}