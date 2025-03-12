import { IMenuCategoryDetailsProps } from "../pages/Menu";

const menus: IMenuCategoryDetailsProps[] = [
  {
    id: 1,
    name: "Drinks",
    description: "Refreshing beverages",
    items: [
      {
        id: 101,
        name: "LYCHEETINI",
        description: "Lychee vodka martini",
        price: 12.99,
      },
      {
        id: 102,
        name: "SWEET HEAT",
        description: "Mango chili tequila",
        price: 10.99,
      },
      {
        id: 103,
        name: "CLASSIC MOJITO",
        description: "Mint lime rum",
        price: 9.99,
      },
      {
        id: 104,
        name: "ESPRESSO MARTINI",
        description: "Vodka coffee mix",
        price: 11.99,
      },
      {
        id: 105,
        name: "BLUE LAGOON",
        description: "Vodka blue curacao",
        price: 8.99,
      },
    ],
  },
  {
    id: 2,
    name: "Brunch",
    description: "Morning delights",
    items: [
      {
        id: 201,
        name: "AVOCADO TOAST",
        description: "Sourdough & avocado",
        price: 7.99,
      },
      {
        id: 202,
        name: "PANCAKE STACK",
        description: "Fluffy maple pancakes",
        price: 9.99,
      },
      {
        id: 203,
        name: "EGGS BENEDICT",
        description: "Poached eggs & ham",
        price: 10.99,
      },
      {
        id: 204,
        name: "BREAKFAST BURRITO",
        description: "Eggs, cheese & salsa",
        price: 8.99,
      },
      {
        id: 205,
        name: "FRENCH TOAST",
        description: "Cinnamon vanilla toast",
        price: 9.49,
      },
    ],
  },
  {
    id: 3,
    name: "Food",
    description: "Hearty meals",
    items: [
      {
        id: 301,
        name: "GRILLED SALMON",
        description: "Lemon butter salmon",
        price: 15.99,
      },
      {
        id: 302,
        name: "BBQ RIBS",
        description: "Slow-cooked ribs",
        price: 18.99,
      },
      {
        id: 303,
        name: "VEGAN BOWL",
        description: "Quinoa avocado mix",
        price: 12.99,
      },
      {
        id: 304,
        name: "CHICKEN PARMESAN",
        description: "Crispy chicken & cheese",
        price: 14.99,
      },
      {
        id: 305,
        name: "SPAGHETTI BOLOGNESE",
        description: "Meat sauce pasta",
        price: 13.99,
      },
    ],
  },
];

export default menus;
