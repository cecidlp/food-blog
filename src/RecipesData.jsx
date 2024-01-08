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

const allRecipes = [
  {
    categories: ["Cookies", "Highlight"],
    img: "https://images.pexels.com/photos/5618032/pexels-photo-5618032.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Decorated Holiday Sugar Cookies",
  },
  {
    categories: ["Cocktails", "Highlight"],
    img: "https://www.thelittleepicurean.com/wp-content/uploads/2019/10/pumpkin-bourbon-cocktail-1-768x1152.jpg",
    title: "Pumpkin Bourbon Cocktail",
    ingredients: ["Pumpkin"]
  },
  {
    categories: ["Highlight", "Holiday", "Pies & Tarts"],
    img: "https://images.pexels.com/photos/5836528/pexels-photo-5836528.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Brown Butter Apple pie",
    ingredients: ["Fruit"]
  },
  {
    categories: ["Highlight", "Holiday", "Cakes"],
    img: "https://images.pexels.com/photos/19288298/pexels-photo-19288298/free-photo-of-mini-pumpkin-bundt-cakes.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Pumpkin Bundt Cake",
    ingredients: ["Pumpkin"]
  },

  {
    categories: ["Cookies", "Holiday"],
    img: "https://images.pexels.com/photos/5791788/pexels-photo-5791788.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Gingerbread House",
    ingredients: ["Ginger"]
  },
  {
    categories: ["Cookies", "Holiday"],
    img: "https://www.thelittleepicurean.com/wp-content/uploads/2018/12/classic-linzer-cookies-1-768x1152.jpg",
    title: "Linzer Cookies",
  },
  {
    categories: ["Holiday"],
    img: "https://www.thelittleepicurean.com/wp-content/uploads/2017/12/caramel-pecan-bark-5-400x600.jpg",
    title: "Caramel Pecan Bark",
    ingredients: ["Nuts", "Caramel"]
  },
  {
    categories: ["Holiday", "Cookies"],
    img: "https://www.browneyedbaker.com/wp-content/uploads/2018/12/Danish-butter-cookies-4-754.jpg",
    title: "Danish Butter Cookies",
  },
  {
    categories: ["Holiday", "Donuts"],
    img: "https://www.anasbakingchronicles.com/wp-content/uploads/2022/07/Bavarian-Cream-Donuts-360x450.jpg",
    title: "Pumpkin Cheesecake Doughnuts",
    ingredients: ["Pumpkin", "Cheese"]
  },
  {
    categories: ["Holiday", "Cookies"],
    img: "https://www.thelittleepicurean.com/wp-content/uploads/2019/12/sugar-cookies-christmas-trees-1-400x600.jpg",
    title: "Sugar Cookies Christmas Trees",
  },
  {
    categories: ["New", "Cookies"],
    img: "https://images.pexels.com/photos/3250406/pexels-photo-3250406.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Chocolate Chips Cookies",
    ingredients: ["Chocolate"]
  },
  {
    categories: ["New", "Cakes"],
    img: "https://images.pexels.com/photos/19212848/pexels-photo-19212848/free-photo-of-bundt-cake-with-icing.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Orange Juice Cake",
    ingredients: ["Fruit"]
  },
  {
    categories: ["New", "Cakes"],
    img: "https://images.pexels.com/photos/16041846/pexels-photo-16041846/free-photo-of-photo-of-a-glass-with-tiramisu-and-a-small-bowl-of-coffee-beans.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Tiramisu",
    ingredients: ["Coffee", "Chocolate"]
  },
  {
    categories: ["Argentine", "Cakes"],
    img: "https://www.piesandtacos.com/wp-content/uploads/2020/02/Chocotorta-24.jpg",
    title: "Chocotorta",
    ingredients: ["Coffee", "Chocolate", "Caramel"]
  },
  {
    categories: ["Argentine", "Cakes"],
    img: "https://acdn.mitiendanube.com/stores/536/593/products/marcada111-052809763b34d7a43c16546139792656-1024-1024.webp",
    title: "Marquise Cake",
    ingredients: ["Chocolate", "Caramel"]
  },
  {
    categories: ["Argentine"],
    img: "https://cuk-it.com/wp-content/uploads/2021/06/medialunas-manteca-ig01.webp",
    title: "Medialunas",
  },
  {
    categories: ["Cookies", "Argentine"],
    img: "https://yogaofcooking.co/wp-content/uploads/2020/03/chocolate-alfajores-7-693x1024.jpg",
    title: "Chocolate Alfajores",
    ingredients: ["Chocolate", "Caramel"]
  },
  {
    categories: ["Argentine", "Cakes"],
    img: "https://luciapaula.com/wp-content/uploads/2021/04/Blog-1970-01-20-014151458.jpg",
    title: "Rogel Cake",
    ingredients: ["Caramel"]
  },
  {
    categories: ["Cookies", "Argentine"],
    img: "https://www.elmundoeats.com/wp-content/uploads/2021/07/Argentine-alfajores-on-a-rack.jpg",
    title: "Cornstach Alfajores",
    ingredients: ["Coconut", "Caramel"]
  },
  {
    categories: ["Favorites", "Cakes"],
    img: "https://images.pexels.com/photos/6133305/pexels-photo-6133305.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Red Velvet Cake",
  },
  {
    categories: ["Favorites"],
    img: "https://images.pexels.com/photos/5710795/pexels-photo-5710795.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Pancakes",
  },
  {
    categories: ["Favorites", "Breads"],
    img: "https://images.pexels.com/photos/6829488/pexels-photo-6829488.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Banana Bread",
    ingredients: ["Fruit"]
  },
  {
    categories: ["Favorites", "Cookies"],
    img: "https://images.pexels.com/photos/6747/food-dessert-sweet-color.jpg?auto=compress&cs=tinysrgb&w=600",
    title: "Macarons",
    ingredients: ["Nuts"]
  },
  {
    categories: ["Favorites", "Pies"],
    img: "https://images.pexels.com/photos/6606003/pexels-photo-6606003.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Lemon Tart",
    ingredients: ["Fruit"]
  },
  {
    categories: ["Favorites", "Cakes"],
    img: "https://images.pexels.com/photos/3851042/pexels-photo-3851042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Chocolate Mousse Cake",
    ingredients: ["Chocolate"]
  },
  {
    categories: ['Cupcakes & Muffins'],
  img: 'https://images.pexels.com/photos/4099124/pexels-photo-4099124.jpeg?auto=compress&cs=tinysrgb&w=600',
  title: 'Blueberry Cupcakes with Lemon Frosting',
  ingredients: ["Fruit"]
},
{
  categories: ['Cupcakes & Muffins'],
img: 'https://images.pexels.com/photos/18286842/pexels-photo-18286842/free-photo-of-cupcakes-topped-with-raspberry-cream-and-fruits-sprinkled-with-cinnamon.jpeg?auto=compress&cs=tinysrgb&w=600',
title: 'Vanilla Cupcakes with Raspberry frosting',
ingredients: ["Fruit"]
},
{
  categories: ['Cupcakes & Muffins'],
img: 'https://images.pexels.com/photos/4109783/pexels-photo-4109783.jpeg?auto=compress&cs=tinysrgb&w=600',
title: 'Strawberry filled Chocolate Cupcakes',
ingredients: ["Chocolate", "Fruit"]
},
{
  categories: ['Cupcakes & Muffins'],
img:'https://images.pexels.com/photos/5446909/pexels-photo-5446909.jpeg?auto=compress&cs=tinysrgb&w=600',
title:'Chocolate Muffins',
ingredients: ["Chocolate"]
},
{
  categories: ['Cupcakes & Muffins'],
img:'https://images.pexels.com/photos/4051608/pexels-photo-4051608.jpeg?auto=compress&cs=tinysrgb&w=600',
title:'Raspberry Muffins',
ingredients: ["Fruit"]
},
{
  categories: ['Cupcakes & Muffins'],
img:'https://sallysbakingaddiction.com/wp-content/uploads/2022/09/salted-caramel-frosting-on-apple-spice-cupcake.jpg',
title:'Apple Cupcakes with Salted Caramel Frosting',
ingredients: ["Fruit"]
},
{
  categories: ['Scones'],
  img: 'https://www.thelittleepicurean.com/wp-content/uploads/2020/09/chocolate-chip-scones-400x600.jpg',
  title: "Chocolate Chip Scones",
  ingredients: ["Chocolate"]
},
{
  categories: ['Scones'],
  img: "https://www.thelittleepicurean.com/wp-content/uploads/2012/04/IMG_1396.jpg",
  title: "Cheddar Cheese Cream Biscuits",
  ingredients: ["Cheese"]
},
{
  categories: ['Scones'],
  img: "https://www.thelittleepicurean.com/wp-content/uploads/2018/04/white-chocolate-strawberry-scones-6-400x600.jpg",
  title: "White Chocolate Strawberry Scones",
  ingredients: ["Chocolate", "Fruit"]
},
{
  categories: ['Scones'],
  img: "https://handletheheat.com/wp-content/uploads/2021/11/scones-recipe-1.png",
  title: "Classic Scones"
},
];

const dessertBrowser = [
  {
    img: "https://www.culinaryhill.com/wp-content/uploads/2021/03/Easy-Pound-Cake-Recipe-Culinary-Hill-HR-04.jpg",
    category: "Breads",
  },
  {
    img: "https://www.thelittleepicurean.com/wp-content/uploads/2020/12/olive-oil-brownies-1-600x600.jpg",
    category: "Brownies",
  },
  {
    img: "https://www.thelittleepicurean.com/wp-content/uploads/2020/10/pumpkin-bundt-cake-9-600x600.jpg",
    category: "Cakes",
  },
  {
    img: "https://images.pexels.com/photos/3250406/pexels-photo-3250406.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Cookies",
  },
  {
    img: "https://images.pexels.com/photos/4099124/pexels-photo-4099124.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Cupcakes & Muffins",
  },
  {
    img: "https://images.pexels.com/photos/3656118/pexels-photo-3656118.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Donuts",
  },
  {
    img: "https://images.pexels.com/photos/6606003/pexels-photo-6606003.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Pies & Tarts",
  },
  {
    img: "https://www.budgetbytes.com/wp-content/uploads/2023/10/Chocolate-Pudding-V3-800x1067.jpg",
    category: "Puddings",
  },
  {
    img: "https://www.thelittleepicurean.com/wp-content/uploads/2023/05/savory-cheese-scones-feature-600x600.jpg",
    category: "Scones",
  },
];

const cakeBrowser = [
  {
    img: "https://olivesnthyme.com/wp-content/uploads/2022/11/Red-Velvet-Bundt-Cake-17.jpg",
    category: "Bundt Cakes",
  },
  {
    img: "https://images.pexels.com/photos/6168429/pexels-photo-6168429.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Cheesecakes",
  },
  {
    img: "https://preppykitchen.com/wp-content/uploads/2021/07/Ice-Cream-Cake-Blog-1.jpg",
    category: "Ice Cream Cakes",
  },
  {
    img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg",
    category: "Layer Cakes",
  },
  {
    img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/06/vanilla-sheet-cake.jpg",
    category: "Sheet Cakes",
  },
  {
    img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/09/best-pumpkin-cake.jpg",
    category: "Single Layer Cakes",
  },
];

const recipeIndex = [
  {
    img: "https://sugarspunrun.com/wp-content/uploads/2020/12/dulce-de-leche-1-of-1-2.jpg",
    category: "Caramel",
  },
  {
    img: "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Chocolate",
  },
  {
    img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/07/slice-of-apple-pie-2.jpg",
    category: "Fruit",
  },
  {
    img: "https://bakeplaysmile.com/wp-content/uploads/2022/06/tiramisu-square.jpg",
    category: "Coffee",
  },
  {
    img: "https://www.joyfueleats.com/wp-content/uploads/2021/12/IMG_1391-768x1024.jpg",
    category: "Nuts",
  },
  {
    img: "https://i0.wp.com/recipesbycarina.com/wp-content/uploads/2021/07/How-to-Make-Cheese-Scones.jpg?ssl=1",
    category: "Cheese"
  },
  {
    img: "https://willowbirdbaking.com/photos/coconutcreampiebars/IMG_5351-3.jpg",
    category: "Coconut",
  },
  {
    img: "https://www.cookingclassy.com/wp-content/uploads/2019/09/pumpkin-roll-01.jpg",
    category: "Pumpkin",
  },
  {
    img: "https://thehappyfoodie.co.uk/wp-content/uploads/2021/10/Ginger-Biscuits-scaled.jpg",
    category: "Ginger",
  },
  {
    img: "https://atsloanestable.com/wp-content/uploads/2020/08/cardamom-cinnamon-rolls15.jpg",
    category: "Cinnamon",
  },
  {
    img: "https://bakingamoment.com/wp-content/uploads/2019/06/IMG_5199-chocolate-peanut-butter-bars.jpg",
    category: "Peanut Butter",
  },
  {
    img: "https://www.janespatisserie.com/wp-content/uploads/2019/03/IMG_4142_1-scaled.jpg",
    category: "Nutella",
  },
]

const getRecipesByCategory = (recipes, category) => {
  return recipes.filter((recipe) => recipe.categories.includes(category));
};

export { allRecipes, dessertBrowser, footerRecipes, cakeBrowser, getRecipesByCategory, recipeIndex };
