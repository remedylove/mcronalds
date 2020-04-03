export const categories = [
    'burgers', 'wraps', 'combo meals', 'beverages', 'desserts & shakes', 'salads', 'snacks & sides'
  ]

export const ingredientsList = [
  'regular bun', 'beef', 'chicken', 'cheese', 'pickles'
];
  
const products = [
  {
    id: 'cheeseburger',
    title: 'Cheeseburger',
    description: "Our simple, classic cheeseburger begins with a 100% pure beef patty seasoned with just a pinch of salt and pepper. It's topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese. It contains no artificial flavors, preservatives or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.",
    calories: 300,
    ingredients: [
      'regular bun',
      'beef',
      'cheese',
      'ketchup',
      'pickles',
      'onion',
      'mustard',
      'grill seasoning'
    ],
    category: 'burgers'
  },
  // {
  //   id: 'chikker',
  //   title: 'Chikker',
  //   description: 'Delts exercise...',
  //   category: 'burgers'
  // },
  {
    id: 'quarter-pounder',
    title: 'Quarter Pounder',
    calories: 510,
    description: "Each Quarter Pounder with Cheese burger features a ¼ lb.* of 100% fresh beef that’s hot, deliciously juicy and cooked when you order. It’s seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty cheese on a sesame seed bun. Our QPC® contains no artificial flavors, preservatives or added colors from artificial sources. **Our pickle contains an artificial preservative, so skip it if you like.",
    ingredients: [
      'quarter pounder bun',
      'beef',
      'cheese',
      'ketchup',
      'pickles',
      'onion',
      'mustard',
      'grill seasoning'
    ],
    category: 'burgers'
  },
  // {
  //   id: 'mcroyal',
  //   title: 'McRoyal',
  //   description: 'Delts exercise...',
  //   category: 'burgers'
  // },
  // {
  //   id: 'mcchicken',
  //   title: 'McChicken',
  //   description: 'The McChicken® is a delightfully crispy chicken sandwich with a crispy chicken fillet topped with mayonnaise, shredded iceberg lettuce, and served on a perfectly toasty bun.',
  //   calories: 400,
  //   category: 'burgers'
  // },
  // {
  //   id: 'double-quarter-pounder',
  //   title: 'Double Pounder',
  //   description: 'Delts exercise...',
  //   category: 'burgers'
  // },
  // {
  //   id: 'double-mcroyal',
  //   title: 'Double McRoyal',
  //   description: 'Delts exercise...',
  //   category: 'burgers'
  // },
  {
    id: 'bigmac',
    title: 'BigMac',
    description: 'Mouthwatering perfection starts with two 100% pure beef patties and Big Mac sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese. Also, try our new Little Mac™ and Double Big Mac.',
    calories: 540,
    ingredients: [
      'bigmac bun',
      'beef',
      'shredded lettuce',
      'bigmac sauce',
      'cheese',
      'pickles',
      'onion',
      'grill seasoning'
    ],
    category: 'burgers'
  },
  // {
  //   id: 'mcwrap-breakfast',
  //   title: 'McWrap Breakfast',
  //   description: 'Delts exercise...',
  //   category: 'wraps'
  // },
  // {
  //   id: 'mcwrap-classic',
  //   title: 'McWrap Classic',
  //   description: 'Biceps exercise...',
  //   category: 'wraps'
  // },
  // {
  //   id: 'mcwrap-bacon',
  //   title: 'McWrap Bacon',
  //   description: 'Back and leg exercise...',
  //   category: 'wraps'
  // },
  // {
  //   id: 'happy-meal',
  //   title: 'HappyMeal',
  //   description: 'Delts exercise...',
  //   category: 'combo meals'
  // },
  {
    id: 'bigmac-combo-meal',
    title: 'BigMac Combo Meal',
    description: 'The one and only McDonald’s Big Mac® Combo Meal. Big Mac Ingredients include a classic sesame hamburger bun, Big Mac Sauce, American cheese and sliced pickles. The Big Mac Combo Meal is served with our World Famous Fries® and your choice of an icy Coca-Cola fountain drink.',
    calories: 1080,
    ingredients: [
      'bigmac bun',
      'beef',
      'shredded lettuce',
      'bigmac sauce',
      'cheese',
      'pickles',
      'onion',
      'grill seasoning'
    ],
    category: 'combo meals'
  },
  // {
  //   'id': 'drink-medium',
  //   title: 'Drink medium',
  //   description: 'Chest exercise...',
  //   category: 'beverages'
  // },
  // {
  //   id: 'nuggets',
  //   title: 'Nuggets',
  //   description: 'Triceps exercise...',
  //   category: 'snacks & sides'
  // },
  // {
  //   id: 'fries',
  //   title: 'Fries',
  //   description: 'Back and biceps exercise...',
  //   category: 'snacks & sides'
  // },
  // {
  //   id: 'ice-cream',
  //   title: 'Ice cream',
  //   description: 'Delts exercise...',
  //   category: 'desserts & shakes'
  // },
  // {
  //   id: 'mcflurry',
  //   title: 'McFlurry',
  //   description: 'Delts exercise...',
  //   category: 'desserts & shakes'
  // },
]

export const detailProduct = products[0];

export default products;