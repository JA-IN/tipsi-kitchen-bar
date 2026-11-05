import { MenuCategory, RestaurantInfo, BanquetHall, GalleryPhoto } from '../types';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Tipsy Kitchen & Bar",
  tagline: "Gastronomic Speakeasy, Banquet & Kitchen",
  address: "Central Hub, SCO 10-11, Khanna, Punjab 141401",
  landmark: "Near KFC, Khanna (PB)",
  phone: "+919041027022",
  phoneDisplay: "90410 27022",
  secondaryPhone: "+918872511711",
  secondaryPhoneDisplay: "88725 11711",
  whatsappNumber: "919041027022",
  instagramUrl: "https://www.instagram.com/tipsy_kitchen_and_bar/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Central+Hub+SCO+10-11+Khanna+Punjab+141401",
  hours: "12:00 PM – 11:00 PM, All Days"
};

export const BANQUET_HALLS: BanquetHall[] = [
  {
    id: "royal-speakeasy-lounge",
    name: "The Royal Speakeasy Lounge",
    tagline: "Private bar, acoustic sound & plush leather lounge booths",
    capacity: "30 – 70 Guests",
    image: "/assets/aistudio/c34aad81-94b9-4978-b42b-ac49c90d3b2d_e1b6f61f.jpg",
    features: [
      "Dedicated cocktail mixologist & bar counter",
      "Private DJ setup & curated acoustic lighting",
      "Customizable small plates & finger food pass-arounds",
      "Cozy VIP sofa booth seating & dance floor"
    ],
    idealFor: ["Birthday Celebrations", "Cocktail Parties", "Bachelorette / Bachelor Nights", "Anniversary Parties"]
  },
  {
    id: "grand-sovereign-banquet",
    name: "Grand Sovereign Banquet Hall",
    tagline: "Opulent banquet venue for regal family milestones & corporate galas",
    capacity: "80 – 250+ Guests",
    image: "/src/assets/images/tipsy_reception_banquet_1793447009148.jpg",
    features: [
      "Regal stage setup with floral backdrop options",
      "Lavish live buffet stations & wood-fired tandoor counters",
      "Full audio-visual projection & microphone podium",
      "Dedicated banquet captain, valet parking & hospitality staff"
    ],
    idealFor: ["Wedding Receptions", "Ring Ceremonies (Roka / Sagai)", "Corporate Conferences", "Grand Family Reunions"]
  }
];

export const CELEBRATION_GALLERY: GalleryPhoto[] = [
  {
    id: "gal-01",
    title: "Birthday & Anniversary Milestones",
    category: "Birthdays",
    image: "/src/assets/images/tipsy_birthday_celebration_1793446986182.jpg",
    caption: "Joyous laughter, artisanal sparkling toasts, and custom cakes in our ambient private lounge."
  },
  {
    id: "gal-02",
    title: "Grand Wedding Reception & Ceremonies",
    category: "Receptions",
    image: "/src/assets/images/tipsy_reception_banquet_1793447009148.jpg",
    caption: "Chandelier-lit luxury banquets crafted with opulent table settings and royal hospitality."
  },
  {
    id: "gal-03",
    title: "Family Feasts & Corporate Dinners",
    category: "Family & Corporate",
    image: "/src/assets/images/tipsy_family_gathering_1793447009908.jpg",
    caption: "Multi-generational family gatherings celebrating over sizzling platters and rich curries."
  },
  {
    id: "gal-04",
    title: "Tipsy Lounge & Cocktail Ambiance",
    category: "Lounge & Bar",
    image: "/assets/aistudio/c34aad81-94b9-4978-b42b-ac49c90d3b2d_e1b6f61f.jpg",
    caption: "Official Tipsy interior: where authentic flavours meet craft spirits and cozy luxury."
  },
  {
    id: "gal-05",
    title: "Japanese Robata Meets Indian Tandoor",
    category: "Culinary Specials",
    image: "/assets/aistudio/589ebc50-4d2b-4459-8aec-d38b5ee11eed_af45566c.jpg",
    caption: "Paneer Tikka live charcoal grill experience, an exclusive Tipsy specialty."
  },
  {
    id: "gal-06",
    title: "Artisanal Bar Bites: Paneer Paapdi",
    category: "Bar Bites",
    image: "/assets/aistudio/04846cab-3e84-4cd5-a50c-63bf9a33fa89_c96bfd38.jpg",
    caption: "Pillowy soft and crunchy paneer paapdi served with fresh mint chutney & onion lachha."
  }
];

// Curated compact food images for dishes
export const DISH_IMAGES: Record<string, string> = {
  // Owner Flagship Dishes
  "ns-00-paneer-paapdi": "/assets/aistudio/04846cab-3e84-4cd5-a50c-63bf9a33fa89_c96bfd38.jpg",
  "ns-00-dan-dan": "/assets/aistudio/64c98488-0485-4227-b86d-62c628d1283e_9f7f8caa.jpg",
  "mv-20-robata-tikka": "/assets/aistudio/589ebc50-4d2b-4459-8aec-d38b5ee11eed_af45566c.jpg",

  // Soups
  "soup-01": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80",
  "soup-02": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80",
  "soup-03": "https://images.unsplash.com/photo-1607528971899-2e7a3eb64f7b?auto=format&fit=crop&w=300&q=80",
  "soup-04": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=300&q=80",
  "soup-05": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=300&q=80",
  "soup-06": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80",
  "soup-07": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=300&q=80",
  "soup-08": "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=300&q=80",
  "soup-09": "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=300&q=80",
  "soup-10": "https://images.unsplash.com/photo-1607528971899-2e7a3eb64f7b?auto=format&fit=crop&w=300&q=80",
  "soup-11": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80",

  // Breads & Salads
  "bs-01": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=300&q=80",
  "bs-02": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80",
  "bs-03": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80",
  "bs-04": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80",
  "bs-05": "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=300&q=80",
  "bs-06": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=300&q=80",
  "bs-07": "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=300&q=80",

  // Indian Breads
  "ib-01": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=300&q=80",
  "ib-02": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80",
  "ib-03": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=300&q=80",
  "ib-04": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80",
  "ib-05": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=300&q=80",
  "ib-06": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80",
  "ib-07": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80",
  "ib-08": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=300&q=80",

  // Rice & Biryani
  "rb-01": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=300&q=80",
  "rb-02": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=300&q=80",
  "rb-03": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80",
  "rb-04": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=300&q=80",

  // Accompaniments
  "ac-01": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80",
  "ac-02": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80",
  "ac-03": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80",
  "ac-04": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=300&q=80",
  "ac-05": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80",
  "ac-06": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80",

  // Mains Veg
  "mv-01": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80",
  "mv-02": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80",
  "mv-03": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80",
  "mv-04": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80",
  "mv-05": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80",
  "mv-06": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80",
  "mv-07": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80",
  "mv-08": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80",
  "mv-09": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80",
  "mv-10": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80",
  "mv-11": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80",
  "mv-12": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80",
  "mv-13": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80",
  "mv-14": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80",
  "mv-15": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80",
  "mv-16": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80",
  "mv-17": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80",
  "mv-18": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80",
  "mv-19": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80",
  "mv-20": "/assets/aistudio/589ebc50-4d2b-4459-8aec-d38b5ee11eed_af45566c.jpg",
  "mv-21": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80",
  "mv-22": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80",
  "mv-23": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80",
  "mv-24": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80",

  // Mains Non-Veg
  "mn-01": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=300&q=80",
  "mn-02": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=300&q=80",
  "mn-03": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=300&q=80",
  "mn-04": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=300&q=80",
  "mn-05": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=300&q=80",
  "mn-06": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=300&q=80",
  "mn-07": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=300&q=80",
  "mn-08": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=300&q=80",
  "mn-09": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=300&q=80",
  "mn-10": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80",
  "mn-11": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80",
  "mn-12": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=300&q=80",
  "mn-13": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=300&q=80",

  // New Snacks
  "ns-01": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=300&q=80",
  "ns-02": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=300&q=80",
  "ns-03": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80",
  "ns-04": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=300&q=80",
  "ns-05": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=300&q=80",
  "ns-06": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80",

  // Platters
  "fp-01": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=300&q=80",
  "fp-02": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80",
  "fp-03": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80",

  // Pizzas
  "pz-01": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=300&q=80",
  "pz-02": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80",
  "pz-03": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
  "pz-04": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80",
  "pz-05": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
  "pz-06": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=300&q=80",

  // Burgers
  "bg-01": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
  "bg-02": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
  "bg-03": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=300&q=80",
  "bg-04": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
  "bg-05": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=300&q=80",

  // Beverages
  "mt-01": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
  "mt-02": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80",
  "mt-03": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80",
  "tc-02": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=300&q=80",
  "tc-09": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=80",
  "ms-05": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80"
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "soups",
    name: "Soups",
    courseNumber: "Course 01",
    subtitle: "Warm & Comforting Broths",
    items: [
      {
        id: "soup-01",
        name: "Any 1x2 (One by Two) Soup",
        description: "Freshly prepared slow-simmered broth in twin bowls. Choose Sweet Corn, Hot & Sour, or Manchow.",
        type: "veg-nonveg",
        image: DISH_IMAGES["soup-01"],
        variants: [
          { label: "Veg", price: 180 },
          { label: "Non-Veg", price: 240 }
        ]
      },
      {
        id: "soup-02",
        name: "Tomato Soup",
        description: "Roasted fresh country tomatoes infused with garlic, bay leaves and cream croutons.",
        type: "veg",
        image: DISH_IMAGES["soup-02"],
        variants: [{ label: "Regular", price: 195 }]
      },
      {
        id: "soup-03",
        name: "Lemon Coriander Soup",
        description: "Zesty clear soup with spring onions, julienne carrots, button mushrooms, lemongrass & fresh coriander leaves.",
        type: "veg-nonveg",
        image: DISH_IMAGES["soup-03"],
        variants: [
          { label: "Veg", price: 160 },
          { label: "Non-Veg", price: 210 }
        ]
      },
      {
        id: "soup-04",
        name: "Vegetable Manchow",
        description: "Popular Indo-Chinese broth with finely diced oriental veggies, garlic, chili, topped with crisp golden fried noodles.",
        type: "veg-nonveg",
        image: DISH_IMAGES["soup-04"],
        variants: [
          { label: "Veg", price: 180 },
          { label: "Non-Veg", price: 240 }
        ]
      },
      {
        id: "soup-05",
        name: "Tomato Dhaniya Ka Shorba",
        description: "Charred fresh vine tomatoes tempered with fresh coriander stems, cumin, garlic, and cracked pepper.",
        type: "veg",
        image: DISH_IMAGES["soup-05"],
        variants: [{ label: "Regular", price: 195 }]
      },
      {
        id: "soup-06",
        name: "Hot & Sour Soup",
        description: "Fiery broth packed with shredded vegetables, bamboo shoots, Chinese herbs, white pepper and dark vinegar.",
        type: "veg-nonveg",
        image: DISH_IMAGES["soup-06"],
        variants: [
          { label: "Veg", price: 140 },
          { label: "Non-Veg", price: 210 }
        ]
      },
      {
        id: "soup-07",
        name: "Sweet Corn Soup",
        description: "Mild and silky golden American sweet corn soup cooked with fresh garden vegetables.",
        type: "veg-nonveg",
        image: DISH_IMAGES["soup-07"],
        variants: [
          { label: "Veg", price: 135 },
          { label: "Non-Veg", price: 195 }
        ]
      },
      {
        id: "soup-08",
        name: "Cream of Mushroom",
        description: "Velvety French-style cream soup infused with sautéed white button mushrooms and thyme.",
        type: "veg",
        image: DISH_IMAGES["soup-08"],
        variants: [{ label: "Regular", price: 220 }]
      },
      {
        id: "soup-09",
        name: "Cream of Veg",
        description: "Silky smooth puréed seasonal vegetables cooked in rich cream, subtle and aromatic.",
        type: "veg",
        image: DISH_IMAGES["soup-09"],
        variants: [{ label: "Regular", price: 220 }]
      },
      {
        id: "soup-10",
        name: "Clear Chicken Soup",
        description: "Fragrant clear chicken bone broth steeped with black peppercorns, ginger root, and pink salt.",
        type: "nonveg",
        image: DISH_IMAGES["soup-10"],
        variants: [{ label: "Regular", price: 280 }],
        badge: "Chef's Choice",
        isSpecial: true
      },
      {
        id: "soup-11",
        name: "Talumin Soup",
        description: "A nourishing hearty bowl of tender egg/wheat noodles with seasonal vegetables and mild soy-scented broth.",
        type: "veg-nonveg",
        image: DISH_IMAGES["soup-11"],
        variants: [
          { label: "Veg", price: 220 },
          { label: "Non-Veg", price: 275 }
        ]
      }
    ]
  },
  {
    id: "breads-salads",
    name: "Breads & Salads",
    courseNumber: "Course 02",
    subtitle: "Artisanal Greens & Oven Toast",
    items: [
      {
        id: "bs-01",
        name: "Caesar Salad",
        description: "Crisp romaine & iceberg lettuce, garlic croutons, aged shaved parmesan, tossed in house Caesar dressing.",
        type: "veg-nonveg",
        image: DISH_IMAGES["bs-01"],
        variants: [
          { label: "Veg", price: 250 },
          { label: "Non-Veg", price: 300 }
        ]
      },
      {
        id: "bs-02",
        name: "Add: Extra Grilled Chicken",
        description: "Succulent herb-marinated grilled chicken breast slices to upgrade your salad.",
        type: "nonveg",
        image: DISH_IMAGES["bs-02"],
        variants: [{ label: "Add-on", price: 65 }]
      },
      {
        id: "bs-03",
        name: "Mediterranean Chickpea Salad",
        description: "Organic white chickpeas, roasted bell peppers, cherry tomatoes, and cucumber in creamy herb dressing.",
        type: "veg",
        image: DISH_IMAGES["bs-03"],
        variants: [{ label: "Regular", price: 200 }]
      },
      {
        id: "bs-04",
        name: "Russian Salad",
        description: "Sweet fruit cocktail, tender green peas, diced carrots, and potatoes folded in chilled mayonnaise cream.",
        type: "veg",
        image: DISH_IMAGES["bs-04"],
        variants: [{ label: "Regular", price: 250 }]
      },
      {
        id: "bs-05",
        name: "Garlic Bread Plain",
        description: "Crispy toasted French baguette brushed with garlic-infused compound herb butter.",
        type: "veg",
        image: DISH_IMAGES["bs-05"],
        variants: [{ label: "Regular", price: 99 }]
      },
      {
        id: "bs-06",
        name: "Cheese Garlic Bread",
        description: "Wood-toasted crusty baguette smothered with generous melted mozzarella and roasted garlic.",
        type: "veg",
        image: DISH_IMAGES["bs-06"],
        variants: [{ label: "Regular", price: 149 }],
        badge: "Popular"
      },
      {
        id: "bs-07",
        name: "Cheese Corn Garlic Bread",
        description: "Toasted garlic bread loaded with sweet American corn kernels, herbs, and bubbly molten mozzarella.",
        type: "veg",
        image: DISH_IMAGES["bs-07"],
        variants: [{ label: "Regular", price: 189 }]
      }
    ]
  },
  {
    id: "indian-breads",
    name: "Indian Breads",
    courseNumber: "Course 03",
    subtitle: "Wood-Fired Tandoor Clay Oven",
    items: [
      {
        id: "ib-01",
        name: "Tandoori Roti",
        description: "Traditional whole wheat bread baked crisp on the clay oven walls.",
        type: "veg",
        image: DISH_IMAGES["ib-01"],
        variants: [
          { label: "Plain", price: 25 },
          { label: "Butter", price: 30 },
          { label: "Missi", price: 40 }
        ]
      },
      {
        id: "ib-02",
        name: "Signature Naan",
        description: "Soft leavened refined flour flatbread, pillowy and freshly pulled.",
        type: "veg",
        image: DISH_IMAGES["ib-02"],
        variants: [
          { label: "Plain", price: 50 },
          { label: "Butter", price: 70 },
          { label: "Garlic", price: 90 }
        ]
      },
      {
        id: "ib-03",
        name: "Parantha",
        description: "Multi-layered flaky bread available in your choice of flavourings.",
        type: "veg",
        image: DISH_IMAGES["ib-03"],
        variants: [
          { label: "Lachha", price: 50 },
          { label: "Ajwaini", price: 50 },
          { label: "Pudina", price: 60 },
          { label: "Mirchi", price: 70 }
        ]
      },
      {
        id: "ib-04",
        name: "Stuffed Naan",
        description: "Leavened bread stuffed with your choice of melted cheese or spiced minced chicken keema.",
        type: "veg-nonveg",
        image: DISH_IMAGES["ib-04"],
        variants: [
          { label: "Cheese", price: 95 },
          { label: "Keema", price: 155 }
        ]
      },
      {
        id: "ib-05",
        name: "Stuffed Kulcha",
        description: "Authentic Punjabi spiced stuffing inside hand-stretched dough, baked till golden.",
        type: "veg",
        image: DISH_IMAGES["ib-05"],
        variants: [
          { label: "Aloo", price: 60 },
          { label: "Onion", price: 60 },
          { label: "Mix", price: 80 },
          { label: "Paneer", price: 90 }
        ]
      },
      {
        id: "ib-06",
        name: "Kashmiri Naan",
        description: "Royal naan stuffed with dry fruits, tutty fruity, grated paneer, and scented with cardamom.",
        type: "veg",
        image: DISH_IMAGES["ib-06"],
        variants: [{ label: "Regular", price: 150 }]
      },
      {
        id: "ib-07",
        name: "Cheese Naan with Gravy",
        description: "Hot tandoori cheese naan cut into fingers served with rich makhani gravy dipping bowl.",
        type: "veg",
        image: DISH_IMAGES["ib-07"],
        variants: [{ label: "Regular", price: 220 }],
        badge: "House Favorite",
        isSpecial: true
      },
      {
        id: "ib-08",
        name: "Keema Naan with Gravy",
        description: "Minced spiced chicken keema stuffed naan served alongside robust meat gravy.",
        type: "nonveg",
        image: DISH_IMAGES["ib-08"],
        variants: [{ label: "Regular", price: 280 }],
        badge: "Special",
        isSpecial: true
      }
    ]
  },
  {
    id: "rice-biryani",
    name: "Rice & Biryani Station",
    courseNumber: "Course 04",
    subtitle: "Dum Pukht & Aromatic Basmati",
    items: [
      {
        id: "rb-01",
        name: "Steamed Rice",
        description: "Long-grain royal basmati rice steamed with fragrant whole cardamom and bay leaves.",
        type: "veg",
        image: DISH_IMAGES["rb-01"],
        variants: [{ label: "Regular", price: 170 }]
      },
      {
        id: "rb-02",
        name: "Pulao",
        description: "Fluffy basmati rice tossed with garden green peas or tempered roasted cumin.",
        type: "veg",
        image: DISH_IMAGES["rb-02"],
        variants: [
          { label: "Vegetable", price: 190 },
          { label: "Jeera", price: 190 }
        ]
      },
      {
        id: "rb-03",
        name: "Vegetable Biryani",
        description: "Layered basmati rice with exotic spiced vegetables, fried mint, saffron milk and kewra aroma, served with raita.",
        type: "veg",
        image: DISH_IMAGES["rb-03"],
        variants: [{ label: "Regular", price: 250 }],
        badge: "Dum Cooked"
      },
      {
        id: "rb-04",
        name: "Murgh Dum Biryani",
        description: "Slow-cooked bone-in tender chicken steeped in yogurt spices, saffron rice, and brown onion strands.",
        type: "nonveg",
        image: DISH_IMAGES["rb-04"],
        variants: [{ label: "Regular", price: 399 }],
        badge: "Iconic",
        isSpecial: true
      }
    ]
  },
  {
    id: "accompaniments",
    name: "Accompaniments",
    courseNumber: "Course 05",
    subtitle: "Raitas, Papads & Table Chutneys",
    items: [
      {
        id: "ac-01",
        name: "Green Salad",
        description: "Slices of fresh garden cucumbers, vine tomatoes, carrots, beetroot and spicy green chili.",
        type: "veg",
        image: DISH_IMAGES["ac-01"],
        variants: [{ label: "Regular", price: 99 }]
      },
      {
        id: "ac-02",
        name: "Roasted Papad",
        description: "Lijjat black pepper papad crisp-roasted over live embers.",
        type: "veg",
        image: DISH_IMAGES["ac-02"],
        variants: [{ label: "Regular", price: 60 }]
      },
      {
        id: "ac-03",
        name: "Masala Papad",
        description: "Crisp fried or roasted papad topped with spicy onion-tomato-coriander salsa and chatpata chaat masala.",
        type: "veg",
        image: DISH_IMAGES["ac-03"],
        variants: [{ label: "Regular", price: 99 }]
      },
      {
        id: "ac-04",
        name: "Artisanal Raita",
        description: "Thick beaten Punjab curd flavored with roasted spices. Choose your favorite infusion.",
        type: "veg",
        image: DISH_IMAGES["ac-04"],
        variants: [
          { label: "Plain", price: 150 },
          { label: "Boondi", price: 160 },
          { label: "Mixed Veg", price: 180 },
          { label: "Zeera Tadka", price: 180 },
          { label: "Pineapple", price: 190 }
        ]
      },
      {
        id: "ac-05",
        name: "Cream Salad",
        description: "Fresh diced seasonal fruits and vegetables tossed in whipped sweetened table cream.",
        type: "veg",
        image: DISH_IMAGES["ac-05"],
        variants: [{ label: "Regular", price: 160 }]
      },
      {
        id: "ac-06",
        name: "Lachha Pyaaz",
        description: "Crispy onion rings spiked with Kashmiri degi mirch, lemon juice, and fresh mint sprigs.",
        type: "veg",
        image: DISH_IMAGES["ac-06"],
        variants: [{ label: "Regular", price: 60 }]
      }
    ]
  },
  {
    id: "mains-veg",
    name: "Indian Mains (Veg)",
    courseNumber: "Course 06",
    subtitle: "Handcrafted Heritage Gravies",
    items: [
      {
        id: "mv-01",
        name: "Dal Makhani",
        description: "Overnight slow-simmered black urad lentils enriched with fresh white butter, cream, and sun-dried kasuri methi.",
        type: "veg",
        image: DISH_IMAGES["mv-01"],
        variants: [{ label: "Regular", price: 290 }],
        badge: "Iconic",
        isSpecial: true
      },
      {
        id: "mv-20",
        name: "Paneer Tikka (Robata & Tandoor)",
        description: "Premium Japanese Robata Grill meets Indian Spices. Char-grilled cottage cheese skewers with bell peppers and mint reduction.",
        type: "veg",
        image: "/assets/aistudio/589ebc50-4d2b-4459-8aec-d38b5ee11eed_af45566c.jpg",
        variants: [{ label: "Regular", price: 390 }],
        badge: "Owner's Special",
        isSpecial: true
      },
      {
        id: "mv-02",
        name: "Paneer Lababdar",
        description: "Tender cottage cheese cubes simmered in luscious tomato, melon seeds, and caramelized onion gravy with grated paneer.",
        type: "veg",
        image: DISH_IMAGES["mv-02"],
        variants: [{ label: "Regular", price: 390 }],
        badge: "Best Seller"
      },
      {
        id: "mv-03",
        name: "Mushroom Do Pyaza / Masala",
        description: "Fresh button mushrooms tossed with double-cooked pearl onions, bell peppers and rustic masala.",
        type: "veg",
        image: DISH_IMAGES["mv-03"],
        variants: [{ label: "Regular", price: 340 }]
      },
      {
        id: "mv-04",
        name: "Shahi Paneer (Punjabi Style)",
        description: "Tangy rich tomato-onion-cashew gravy with soft paneer cubes and warm Punjabi garam masala.",
        type: "veg",
        image: DISH_IMAGES["mv-04"],
        variants: [{ label: "Regular", price: 390 }]
      },
      {
        id: "mv-05",
        name: "Shahi Paneer (Mughlai Style)",
        description: "Royal white cashew-almond nut gravy scented with green cardamom and sweet saffron essence.",
        type: "veg",
        image: DISH_IMAGES["mv-05"],
        variants: [{ label: "Regular", price: 390 }]
      },
      {
        id: "mv-06",
        name: "Mattar Paneer",
        description: "Classic North Indian homestyle preparation of fresh cottage cheese and tender sweet green peas in spiced gravy.",
        type: "veg",
        image: DISH_IMAGES["mv-06"],
        variants: [{ label: "Regular", price: 280 }]
      },
      {
        id: "mv-07",
        name: "Cheese Tomato",
        description: "A Punjab Highway classic: fried paneer blocks enveloped in buttery tangy tomato reduction.",
        type: "veg",
        image: DISH_IMAGES["mv-07"],
        variants: [{ label: "Regular", price: 390 }]
      },
      {
        id: "mv-08",
        name: "Navrattan Korma",
        description: "Nine gemstone vegetables, nuts, raisins, and cottage cheese cooked in creamy mild saffron curry.",
        type: "veg",
        image: DISH_IMAGES["mv-08"],
        variants: [{ label: "Regular", price: 350 }]
      },
      {
        id: "mv-09",
        name: "Chana Masala",
        description: "Amritsari style kabuli chickpeas slow-braised with dried pomegranate seeds, amchur, and whole spices.",
        type: "veg",
        image: DISH_IMAGES["mv-09"],
        variants: [{ label: "Regular", price: 300 }]
      },
      {
        id: "mv-10",
        name: "Gobhi Masala",
        description: "Cauliflower florets and roasted potatoes tossed with ginger juliennes and rustic kadhai spices.",
        type: "veg",
        image: DISH_IMAGES["mv-10"],
        variants: [{ label: "Regular", price: 250 }]
      },
      {
        id: "mv-11",
        name: "Yellow Dal Tadka",
        description: "Arhar lentils tempered with ghee, roasted cumin, hing, minced garlic, and whole dry Kashmiri red chilies.",
        type: "veg",
        image: DISH_IMAGES["mv-11"],
        variants: [{ label: "Regular", price: 270 }]
      },
      {
        id: "mv-12",
        name: "Malai Kofta (Punjabi Style)",
        description: "Crisp cottage cheese and potato dumplings stuffed with raisins, served in spiced onion-tomato gravy.",
        type: "veg",
        image: DISH_IMAGES["mv-12"],
        variants: [{ label: "Regular", price: 390 }]
      },
      {
        id: "mv-13",
        name: "Malai Kofta (Mughlai Style)",
        description: "Melt-in-mouth dumplings bathed in a silky, sweet, and fragrant cashew-cream white curry.",
        type: "veg",
        image: DISH_IMAGES["mv-13"],
        variants: [{ label: "Regular", price: 390 }]
      },
      {
        id: "mv-14",
        name: "Kadhai Paneer",
        description: "Paneer cubes, bell peppers and onions stir-cooked with freshly pounded coriander seeds and dry red chilies.",
        type: "veg",
        image: DISH_IMAGES["mv-14"],
        variants: [{ label: "Regular", price: 390 }]
      },
      {
        id: "mv-15",
        name: "Mushroom Matar",
        description: "Fresh button mushrooms and farm green peas braised in spiced brown onion-tomato masala.",
        type: "veg",
        image: DISH_IMAGES["mv-15"],
        variants: [{ label: "Regular", price: 350 }]
      },
      {
        id: "mv-16",
        name: "Methi Malai Paneer",
        description: "Fragrant fresh fenugreek leaves and tender paneer simmered in velvety white cashew cream sauce.",
        type: "veg",
        image: DISH_IMAGES["mv-16"],
        variants: [{ label: "Regular", price: 380 }]
      },
      {
        id: "mv-17",
        name: "Palak Paneer / Palak Kofta",
        description: "Vibrant emerald spinach purée gently tempered with garlic, cumin, and soft paneer cubes.",
        type: "veg",
        image: DISH_IMAGES["mv-17"],
        variants: [{ label: "Regular", price: 300 }]
      },
      {
        id: "mv-18",
        name: "Vegetable Jalfrezi",
        description: "Crunchy stir-fried English and Indian vegetables tossed in tangy sweet-and-spicy tomato reduction.",
        type: "veg",
        image: DISH_IMAGES["mv-18"],
        variants: [{ label: "Regular", price: 280 }]
      },
      {
        id: "mv-19",
        name: "Mixed Vegetable",
        description: "Melange of beans, carrots, cauliflower, potatoes, and peas simmered in homestyle masala.",
        type: "veg",
        image: DISH_IMAGES["mv-19"],
        variants: [{ label: "Regular", price: 280 }]
      },
      {
        id: "mv-21",
        name: "Corn Palak",
        description: "Juicy golden sweet corn kernels folded into aromatic garlic-spiced baby spinach purée.",
        type: "veg",
        image: DISH_IMAGES["mv-21"],
        variants: [{ label: "Regular", price: 300 }]
      },
      {
        id: "mv-22",
        name: "Kashmiri Dum Aloo",
        description: "Crispy baby potatoes simmered gently in authentic Kashmiri fennel and dry ginger yogurt gravy.",
        type: "veg",
        image: DISH_IMAGES["mv-22"],
        variants: [{ label: "Regular", price: 300 }]
      },
      {
        id: "mv-23",
        name: "Chef Special Shabnam Curry",
        description: "Fresh button mushrooms, tender green peas, and paneer gems steeped in saffron-infused royal gravy.",
        type: "veg",
        image: DISH_IMAGES["mv-23"],
        variants: [{ label: "Regular", price: 390 }],
        badge: "Chef's Special",
        isSpecial: true
      },
      {
        id: "mv-24",
        name: "Dal Tadka Dhaba Style (Black Dal)",
        description: "Rustic roadside dhaba tempered whole black lentils with garlic cloves and smoky desi ghee.",
        type: "veg",
        image: DISH_IMAGES["mv-24"],
        variants: [{ label: "Regular", price: 299 }]
      }
    ]
  },
  {
    id: "mains-nonveg",
    name: "Indian Mains (Non-Veg)",
    courseNumber: "Course 07",
    subtitle: "Half & Full Portions Available",
    items: [
      {
        id: "mn-01",
        name: "Homestyle Chicken Curry",
        description: "Grandmother's Punjabi recipe: slow braised chicken in roasted coriander, ginger slivers, and earthy whole spices.",
        type: "nonveg",
        image: DISH_IMAGES["mn-01"],
        variants: [
          { label: "Half", price: 380 },
          { label: "Full", price: 620 }
        ]
      },
      {
        id: "mn-02",
        name: "Kadhai Chicken",
        description: "Succulent bone-in chicken wok-tossed with thick capsicum, onion dice, and freshly crushed spice blend.",
        type: "nonveg",
        image: DISH_IMAGES["mn-02"],
        variants: [
          { label: "Half", price: 380 },
          { label: "Full", price: 620 }
        ]
      },
      {
        id: "mn-03",
        name: "Murgh Tikka Lababdar",
        description: "Char-grilled boneless chicken tikka morsels folded into rich creamy onion-cashew curry.",
        type: "nonveg",
        image: DISH_IMAGES["mn-03"],
        variants: [
          { label: "Half", price: 390 },
          { label: "Full", price: 640 }
        ],
        badge: "Popular"
      },
      {
        id: "mn-04",
        name: "Rara Chicken",
        description: "Chicken pieces cooked alongside spiced minced meat (keema) in a hearty, robust North Indian gravy.",
        type: "nonveg",
        image: DISH_IMAGES["mn-04"],
        variants: [
          { label: "Half", price: 400 },
          { label: "Full", price: 650 }
        ],
        badge: "Rich & Hearty"
      },
      {
        id: "mn-05",
        name: "Anda Wala Masala Chicken",
        description: "Chicken curry simmered with hard-boiled eggs that absorb the savory depths of roasted spices.",
        type: "nonveg",
        image: DISH_IMAGES["mn-05"],
        variants: [
          { label: "Half", price: 400 },
          { label: "Full", price: 650 }
        ]
      },
      {
        id: "mn-06",
        name: "Homestyle Egg Curry",
        description: "Boiled fried eggs simmered in a spiced onion, tomato, and green chili gravy.",
        type: "nonveg",
        image: DISH_IMAGES["mn-06"],
        variants: [{ label: "Regular", price: 250 }]
      },
      {
        id: "mn-07",
        name: "Butter Chicken",
        description: "Smoked tandoori chicken simmered in satin tomato makhani with sweet butter and crushed kasuri methi.",
        type: "nonveg",
        image: DISH_IMAGES["mn-07"],
        variants: [
          { label: "Half", price: 400 },
          { label: "Full", price: 620 }
        ],
        badge: "House Signature",
        isSpecial: true
      },
      {
        id: "mn-08",
        name: "Chicken Tikka Butter Masala",
        description: "Charcoal roasted chicken tikka cubes steeped in spiced butter sauce with hints of fenugreek.",
        type: "nonveg",
        image: DISH_IMAGES["mn-08"],
        variants: [
          { label: "Half", price: 400 },
          { label: "Full", price: 650 }
        ]
      },
      {
        id: "mn-09",
        name: "Methi Chicken",
        description: "Chicken cooked with pungent fresh fenugreek leaves in a creamy cashew and yogurt gravy.",
        type: "nonveg",
        image: DISH_IMAGES["mn-09"],
        variants: [
          { label: "Half", price: 400 },
          { label: "Full", price: 650 }
        ]
      },
      {
        id: "mn-10",
        name: "Rogan Gosht (On Demand)",
        description: "Prime tender mutton pieces simmered in Kashmiri rattan jot bark, shallots, and fennel extract.",
        type: "nonveg",
        image: DISH_IMAGES["mn-10"],
        variants: [{ label: "Regular", price: 550 }],
        badge: "Lounge Favorite",
        isSpecial: true
      },
      {
        id: "mn-11",
        name: "Homestyle Mutton Curry (On Demand)",
        description: "Slow-braised goat meat in robust brown gravy with crushed coriander seeds and whole cloves.",
        type: "nonveg",
        image: DISH_IMAGES["mn-11"],
        variants: [{ label: "Regular", price: 550 }]
      },
      {
        id: "mn-12",
        name: "Chicken Patiala",
        description: "Royal Patiala specialty: spiced chicken stuffed inside thin omelette roll, served in rich makhani gravy.",
        type: "nonveg",
        image: DISH_IMAGES["mn-12"],
        variants: [
          { label: "Half", price: 400 },
          { label: "Full", price: 650 }
        ],
        badge: "Specialty"
      },
      {
        id: "mn-13",
        name: "Fish Curry",
        description: "Boneless river sole fillets delicately poached in a mustard seed and kokum coastal spiced gravy.",
        type: "nonveg",
        image: DISH_IMAGES["mn-13"],
        variants: [{ label: "Regular", price: 650 }]
      }
    ]
  },
  {
    id: "new-snacks",
    name: "New Snacks Introduced",
    courseNumber: "Course 08",
    subtitle: "Speakeasy Small Bites & Owner's Signatures",
    items: [
      {
        id: "ns-00-paneer-paapdi",
        name: "Paneer Paapdi",
        description: "Pillowy soft and crunchy bits of paneer papdi served with spicy spiced onion lachha and cooling mint dip.",
        type: "veg",
        image: "/assets/aistudio/04846cab-3e84-4cd5-a50c-63bf9a33fa89_c96bfd38.jpg",
        variants: [{ label: "Regular", price: 320 }],
        badge: "Owner's Special",
        isSpecial: true
      },
      {
        id: "ns-00-dan-dan",
        name: "Dan Dan Noodles",
        description: "Sichuan inspired spiced artisanal wheat noodles tossed with chili oil, scallions, and crisp vegetable shards.",
        type: "veg-nonveg",
        image: "/assets/aistudio/64c98488-0485-4227-b86d-62c628d1283e_9f7f8caa.jpg",
        variants: [
          { label: "Veg", price: 280 },
          { label: "Chicken", price: 340 }
        ],
        badge: "Available Now",
        isSpecial: true
      },
      {
        id: "ns-01",
        name: "Jack Potato",
        description: "Stuffed potato loaded with seasoned paneer, bell pepper, herbs, fried crisp till golden.",
        type: "veg",
        image: DISH_IMAGES["ns-01"],
        variants: [{ label: "Regular", price: 299 }]
      },
      {
        id: "ns-02",
        name: "Dahi Ke Sholey",
        description: "Crispy bread rolls stuffed with spiced hung curd, bell peppers, fresh mint, and pomegranate pearls.",
        type: "veg",
        image: DISH_IMAGES["ns-02"],
        variants: [{ label: "Regular", price: 299 }],
        badge: "Popular",
        isSpecial: true
      },
      {
        id: "ns-03",
        name: "Veg Octopus",
        description: "Potato and cottage cheese artisanal noodle curls tossed with bird's eye chili and sweet-tangy sauce.",
        type: "veg",
        image: DISH_IMAGES["ns-03"],
        variants: [{ label: "Regular", price: 299 }]
      },
      {
        id: "ns-04",
        name: "Black Paper Chicken",
        description: "Wok-tossed boneless chicken morsels coated with tellicherry black peppercorns, scallions, and aged soya reduction.",
        type: "nonveg",
        image: DISH_IMAGES["ns-04"],
        variants: [{ label: "Regular", price: 450 }],
        badge: "Fiery Pepper",
        isSpecial: true
      },
      {
        id: "ns-05",
        name: "Steam Chicken Roll",
        description: "Tender chicken keema roll prepared with poaching technique, served with mint dip.",
        type: "nonveg",
        image: DISH_IMAGES["ns-05"],
        variants: [{ label: "Regular", price: 450 }]
      },
      {
        id: "ns-06",
        name: "Magic Chicken Bowl",
        description: "Mauritian style seasoned rice and crisp fried chicken topped with half-fried egg and garlic aioli.",
        type: "nonveg",
        image: DISH_IMAGES["ns-06"],
        variants: [{ label: "Regular", price: 450 }],
        badge: "Chef's Choice",
        isSpecial: true
      }
    ]
  },
  {
    id: "la-mexicana",
    name: "La Mexicana",
    courseNumber: "Course 09",
    subtitle: "Toasted Tortillas & Quesadillas",
    items: [
      {
        id: "lm-01",
        name: "Chipotle Veggie Quesadillas",
        description: "Fire-roasted peppers, sweet onions, corn and smoky chipotle reduction folded in melted cheese tortilla.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 490 }]
      },
      {
        id: "lm-02",
        name: "Mushroom & Cheese Quesadillas",
        description: "Button mushrooms, baby spinach, caramelized onions, and double mozzarella grilled crisp.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 450 }]
      }
    ]
  },
  {
    id: "flavour-platter",
    name: "Flavour on a Platter",
    courseNumber: "Course 10",
    subtitle: "Sharing Banquet Platters (Feast for 3-4)",
    items: [
      {
        id: "fp-01",
        name: "Tipsy Veg Platter",
        description: "Lavish platter with Paneer Tikka, Mushroom Tikka, Veg Seekh Kebab, Malai Soya Chaap, Hara Bhara Kebab, and Dahi Kebab.",
        type: "veg",
        image: DISH_IMAGES["fp-01"],
        variants: [{ label: "Regular", price: 650 }],
        badge: "Feast for 3-4",
        isSpecial: true
      },
      {
        id: "fp-02",
        name: "Tipsy Non-Vegetarian Platter",
        description: "Grand arrangement of Chicken Tikka, Chicken Seekh Kebab, Tandoori Chicken, Murgh Malai Tikka, Fish Tikka, and Banjara Chicken.",
        type: "nonveg",
        image: DISH_IMAGES["fp-02"],
        variants: [{ label: "Regular", price: 790 }],
        badge: "Feast for 3-4",
        isSpecial: true
      },
      {
        id: "fp-03",
        name: "Chinese Platter",
        description: "Assortment of Chilli Paneer, Veg Manchurian, Crispy Spring Rolls, Bullet Kebabs, and Steamed Wantons.",
        type: "veg",
        image: DISH_IMAGES["fp-03"],
        variants: [{ label: "Regular", price: 550 }]
      }
    ]
  },
  {
    id: "loaded-nachos",
    name: "Loaded Nachos",
    courseNumber: "Course 11",
    subtitle: "Corn Tortilla Chips & Salsas",
    items: [
      {
        id: "ln-01",
        name: "Vegetarian Nachos",
        description: "Golden tortilla chips smothered in refried beans, fresh pico de gallo, sour cream, warm cheese sauce & jalapeños.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 460 }]
      },
      {
        id: "ln-02",
        name: "Non-Vegetarian Nachos",
        description: "Crispy corn tortillas topped with smoked pulled chicken, refried beans, chipotle salsa, guacamole & melted cheese.",
        type: "nonveg",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 490 }]
      }
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    courseNumber: "Course 12",
    subtitle: "Hand-Tossed Thin Crust Pizzas",
    items: [
      {
        id: "pz-01",
        name: "Classic Margherita Pizza",
        description: "San Marzano style tomato sauce, molten mozzarella, and fresh basil drizzle.",
        type: "veg",
        image: DISH_IMAGES["pz-01"],
        variants: [{ label: "Regular", price: 380 }]
      },
      {
        id: "pz-02",
        name: "Farmer Pizza",
        description: "Loaded with bell peppers, sweet corn kernels, tender broccoli florets, red onions and mozzarella.",
        type: "veg",
        image: DISH_IMAGES["pz-02"],
        variants: [{ label: "Regular", price: 460 }]
      },
      {
        id: "pz-03",
        name: "Paneer Tikka Pizza",
        description: "Charcoal roasted paneer tikka, spicy marinara, crisp bell peppers, black olives and mozzarella.",
        type: "veg",
        image: DISH_IMAGES["pz-03"],
        variants: [{ label: "Regular", price: 480 }],
        badge: "Chef Choice"
      },
      {
        id: "pz-04",
        name: "Veg Supreme Pizza",
        description: "Tender baby corn, sliced black olives, golden sweet corn, button mushrooms, and broccoli florets.",
        type: "veg",
        image: DISH_IMAGES["pz-04"],
        variants: [{ label: "Regular", price: 490 }]
      },
      {
        id: "pz-05",
        name: "Chicken Tikka Pizza",
        description: "Smoked tandoori chicken tikka, bell peppers, sliced black olives, red onions and generous mozzarella.",
        type: "nonveg",
        image: DISH_IMAGES["pz-05"],
        variants: [{ label: "Regular", price: 495 }],
        badge: "Signature",
        isSpecial: true
      },
      {
        id: "pz-06",
        name: "Kids Special Cheese Pizza",
        description: "Mild tomato coulis, abundant melted mozzarella, sweet corn, and cheesy herb crust.",
        type: "veg",
        image: DISH_IMAGES["pz-06"],
        variants: [{ label: "Regular", price: 350 }]
      }
    ]
  },
  {
    id: "sizzlers",
    name: "Sizzlers",
    courseNumber: "Course 13",
    subtitle: "Cast Iron Sizzling Platters",
    items: [
      {
        id: "sz-01",
        name: "Chargrilled Vegetables with Spinach Rice",
        description: "Assortment of chargrilled zucchini, bell peppers and broccoli served over fragrant spinach butter rice with pesto sauce.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 390 }]
      },
      {
        id: "sz-02",
        name: "Cottage Cheese Steak Sizzler",
        description: "Sizzling paneer steak, herb rice, crisp potato wedges, spicy roasted basil-tomato sauce, and sauteed greens.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 400 }],
        badge: "House Special",
        isSpecial: true
      },
      {
        id: "sz-03",
        name: "Glazed Grilled Chicken Sizzler",
        description: "Sizzling herb-glazed chicken breast, crispy potato wedges, buttered rice, sauteed garden vegetables & pepper jus.",
        type: "nonveg",
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 490 }],
        badge: "Favorite",
        isSpecial: true
      }
    ]
  },
  {
    id: "sides-small-plates",
    name: "Sides & Small Plates",
    courseNumber: "Course 14",
    subtitle: "Bar Bites & Tapas",
    items: [
      {
        id: "sp-01",
        name: "Hummus & Pita",
        description: "Velvety chickpea and tahini dip with extra virgin olive oil and warm tandoor-baked pita bread.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 225 }]
      },
      {
        id: "sp-02",
        name: "Spiced Panko Onion Rings",
        description: "Crunchy Japanese panko breaded Spanish onion rings served with smoky chipotle ranch dip.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1639024471287-035186f55a1c?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 180 }]
      },
      {
        id: "sp-03",
        name: "Spinach & Corn Cigar Rolls",
        description: "Crisp fried phyllo rolls filled with creamed spinach, sweet corn and spicy melted cheese, sweet chili dip.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 320 }]
      },
      {
        id: "sp-04",
        name: "Ande-ka-Fanda (2 Eggs)",
        description: "Classic street-style spiced egg bhurji served with butter toasted pav / buns.",
        type: "nonveg",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 180 }]
      },
      {
        id: "sp-05",
        name: "Fish & Chips",
        description: "Crumb-fried golden sole fish fillets served with homemade caper tartar sauce and salted French fries.",
        type: "nonveg",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 670 }],
        badge: "Classic",
        isSpecial: true
      },
      {
        id: "sp-06",
        name: "Grilled Chicken & Butter Sauce",
        description: "Grilled chicken morsels sautéed in butter with Worcestershire reduction and English vegetables.",
        type: "nonveg",
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 415 }]
      },
      {
        id: "sp-07",
        name: "Sauté Vegetables",
        description: "Fresh English broccoli, mushrooms, baby corn, and zucchini tossed in garlic butter with thyme.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 299 }]
      },
      {
        id: "sp-08",
        name: "Mushroom Duplex",
        description: "Twin mushroom caps stuffed with spinach, herbs and melted cheese, breaded and fried golden.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 300 }]
      }
    ]
  },
  {
    id: "bruschetta-bar",
    name: "Bruschetta Bar",
    courseNumber: "Course 15",
    subtitle: "Crusty Sourdough Baguette Slices",
    items: [
      {
        id: "bb-01",
        name: "Roasted Tomato Bruschetta",
        description: "Slow-roasted plum tomatoes, extra virgin olive oil, fresh basil chiffonade, rock salt, and balsamic glaze.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 400 }]
      },
      {
        id: "bb-02",
        name: "Baked Mushroom & Cheese Bruschetta",
        description: "Sautéed wild mushrooms in velvety bechamel sauce topped with melted parmesan and mozzarella.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 390 }]
      },
      {
        id: "bb-03",
        name: "Chicken & Capers Bruschetta",
        description: "Smoked shredded chicken, Mediterranean capers, crushed garlic oil, and micro herbs.",
        type: "nonveg",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 495 }]
      }
    ]
  },
  {
    id: "grilled-sandwiches",
    name: "Grilled Sandwiches",
    courseNumber: "Course 16",
    subtitle: "Toasted Multigrain & Panini",
    items: [
      {
        id: "gs-01",
        name: "Veggie Grilled Sandwich",
        description: "Bell peppers, zucchini, onions, jalapeños, spicy harissa spread and cheddar in multigrain bread.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 290 }]
      },
      {
        id: "gs-02",
        name: "Veg Bombay Sandwich",
        description: "Mumbai street style: spicy mint chutney, crisp potato slices, cucumber, tomatoes, cheese, chaat masala.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 250 }],
        badge: "Street Classic"
      },
      {
        id: "gs-03",
        name: "Grilled Chicken Sandwich",
        description: "Herb-grilled chicken breast, melted cheddar cheese, caramelized onions and spicy harissa mayo.",
        type: "nonveg",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 299 }]
      },
      {
        id: "gs-04",
        name: "Cottage Cheese Sandwich",
        description: "Marinated cottage cheese steaks with sautéed bell peppers, onions, and garlic herb spread.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 280 }]
      },
      {
        id: "gs-05",
        name: "Chicken Tikka Sandwich",
        description: "Smoked charcoal chicken tikka layered with pickled red onions and creamy tandoori dressing.",
        type: "nonveg",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 390 }]
      }
    ]
  },
  {
    id: "burger",
    name: "Burger",
    courseNumber: "Course 17",
    subtitle: "Brioche Buns & Handcrafted Patties",
    items: [
      {
        id: "bg-01",
        name: "Oldschool Burger",
        description: "Artisanal grilled patty, crisp lettuce, gherkin pickles, melted cheddar cheese, tomato, and house relish.",
        type: "veg-nonveg",
        image: DISH_IMAGES["bg-01"],
        variants: [
          { label: "Veg", price: 150 },
          { label: "Chicken", price: 170 }
        ]
      },
      {
        id: "bg-02",
        name: "Chipotle Chicken Burger",
        description: "Crispy chicken patty, romaine lettuce, yellow cheddar cheese, honey mustard and chipotle sauce.",
        type: "nonveg",
        image: DISH_IMAGES["bg-02"],
        variants: [{ label: "Regular", price: 240 }]
      },
      {
        id: "bg-03",
        name: "The Boss Burger",
        description: "Smoked chicken sausage, pulled chicken, double cheese, lettuce, tomato, barbecue and ranch drizzle.",
        type: "nonveg",
        image: DISH_IMAGES["bg-03"],
        variants: [{ label: "Regular", price: 230 }],
        badge: "Lounge Hit",
        isSpecial: true
      },
      {
        id: "bg-04",
        name: "Grilled Chicken Burger",
        description: "Herb-grilled chicken tikki, fresh coleslaw, chipotle mayonnaise, served with salted french fries.",
        type: "nonveg",
        image: DISH_IMAGES["bg-04"],
        variants: [{ label: "Regular", price: 240 }]
      },
      {
        id: "bg-05",
        name: "Bahubali Burger",
        description: "Monster double veg patty, double melted cheese slice, homemade fiery hot sauce, accompanied with finger chips.",
        type: "veg",
        image: DISH_IMAGES["bg-05"],
        variants: [{ label: "Regular", price: 260 }],
        badge: "Monster Double"
      }
    ]
  },
  {
    id: "tea-coffee",
    name: "Tea & Coffee",
    courseNumber: "Course 18",
    subtitle: "Hot Brews & Artisanal Espresso",
    items: [
      {
        id: "tc-01",
        name: "Classic Chai",
        description: "Strong Indian milk tea brewed with cardamom and ginger.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 60 }]
      },
      {
        id: "tc-02",
        name: "Desi Masala Chai",
        description: "Assam golden leaf tea boiled with crushed ginger roots, green cardamom pods, cloves, and holy basil.",
        type: "veg",
        image: DISH_IMAGES["tc-02"],
        variants: [{ label: "Regular", price: 70 }]
      },
      {
        id: "tc-03",
        name: "Black Tea",
        description: "Pure Darjeeling whole leaf tea, light and aromatic.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 50 }]
      },
      {
        id: "tc-04",
        name: "Green Tea",
        description: "Antioxidant-rich steamed whole green tea leaves with honey and lemon.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 60 }]
      },
      {
        id: "tc-05",
        name: "Black Coffee",
        description: "Rich dark roast Arabica espresso lengthened with hot water.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 70 }]
      },
      {
        id: "tc-06",
        name: "Iced Tea",
        description: "Chilled brewed black tea with choice of Lemon or Peach.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=300&q=80",
        variants: [
          { label: "Lemon", price: 120 },
          { label: "Peach", price: 120 }
        ]
      },
      {
        id: "tc-07",
        name: "Espresso",
        description: "Single shot of intense, full-bodied dark roast Italian espresso with crema.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 80 }]
      },
      {
        id: "tc-08",
        name: "Cappuccino",
        description: "Espresso topped with equal parts steamed milk and thick micro-foam dusted with cinnamon.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 130 }]
      },
      {
        id: "tc-09",
        name: "Cold Coffee with Ice Cream",
        description: "Double shot Arabica espresso churned with chilled whole milk and topped with rich vanilla bean gelato.",
        type: "veg",
        image: DISH_IMAGES["tc-09"],
        variants: [{ label: "Regular", price: 180 }],
        badge: "Barista Blend",
        isSpecial: true
      },
      {
        id: "tc-10",
        name: "Cold Coffee",
        description: "Classic blended iced milk coffee with dark chocolate drizzle.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 160 }]
      }
    ]
  },
  {
    id: "milkshake",
    name: "Milkshake",
    courseNumber: "Course 19",
    subtitle: "Thick Shakes & Dessert Blends",
    items: [
      {
        id: "ms-01",
        name: "Vanilla Shake",
        description: "Creamy Madagascar vanilla bean ice cream churned with full cream milk.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 170 }]
      },
      {
        id: "ms-02",
        name: "Strawberry Shake",
        description: "Natural strawberry purée blended with strawberry ice cream.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 185 }]
      },
      {
        id: "ms-03",
        name: "Peach Shake",
        description: "Juicy sun-ripened peach compote churned into silky milkshake.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 180 }]
      },
      {
        id: "ms-04",
        name: "Mango Shake",
        description: "Alphonso mango pulp blended with rich cream and milk.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 180 }]
      },
      {
        id: "ms-05",
        name: "Oreo Milkshake",
        description: "Crushed dark cocoa biscuits blended with creamy milk, chocolate drizzle, and whipped mascarpone cream.",
        type: "veg",
        image: DISH_IMAGES["ms-05"],
        variants: [{ label: "Regular", price: 190 }],
        badge: "Favorite",
        isSpecial: true
      },
      {
        id: "ms-06",
        name: "Chocolate Shake",
        description: "Dark Belgian cocoa ganache churned into thick chocolate shake.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 190 }]
      },
      {
        id: "ms-07",
        name: "Kit-Kat Shake",
        description: "Crispy wafer chocolate bars blended with creamy chocolate milkshake.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 190 }]
      },
      {
        id: "ms-08",
        name: "Butterscotch Shake",
        description: "Caramelized brown sugar toffee crunch and butterscotch gelato blend.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 190 }]
      }
    ]
  },
  {
    id: "mocktails",
    name: "Mocktails",
    courseNumber: "Course 20",
    subtitle: "Artisanal Sours, Coolers & Spritzers",
    items: [
      {
        id: "mt-01",
        name: "Fresh Lime Soda",
        description: "Freshly squeezed green lemons with sparkling soda. Served Sweet, Salted, or Mixed.",
        type: "veg",
        image: DISH_IMAGES["mt-01"],
        variants: [{ label: "Regular", price: 110 }]
      },
      {
        id: "mt-02",
        name: "Virgin Mojito",
        description: "Crushed mint sprigs, Mexican lime wheels, brown cane sugar, and sparkling club soda over crushed ice.",
        type: "veg",
        image: DISH_IMAGES["mt-02"],
        variants: [{ label: "Regular", price: 150 }],
        badge: "Signature Cooler"
      },
      {
        id: "mt-03",
        name: "Watermelon Mojito",
        description: "Fresh cold-pressed crimson watermelon juice, muddled wild mint, lemon and black salt spritz.",
        type: "veg",
        image: DISH_IMAGES["mt-03"],
        variants: [{ label: "Regular", price: 180 }],
        badge: "Summer Chill",
        isSpecial: true
      },
      {
        id: "mt-04",
        name: "Green Apple Mojito",
        description: "Crisp green apple syrup, crushed mint, lime juice, brown sugar and club soda.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 180 }]
      },
      {
        id: "mt-05",
        name: "Black Rose",
        description: "Spiced concoction of fresh garden mint, rock salt, lemon and chilled cola.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 170 }]
      },
      {
        id: "mt-06",
        name: "Fruit Punch",
        description: "Tropical layers of cranberry juice, pineapple juice, orange juice, condensed milk, and vanilla ice cream.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 199 }],
        badge: "Tropical Delight"
      },
      {
        id: "mt-07",
        name: "Guava Mary",
        description: "Pink guava juice shaken with black salt, red chili rim, Tabasco, and Worcestershire sauce.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 199 }],
        badge: "Spicy Sip"
      },
      {
        id: "mt-08",
        name: "Evolution",
        description: "Refreshing cold watermelon juice infused with crushed mint, lime drops, and Himalayan rock salt.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 220 }]
      },
      {
        id: "mt-09",
        name: "Cinderella",
        description: "Citrus medley of orange juice, pineapple juice, lemon, pomegranate grenadine, and fizzy ginger ale.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 240 }],
        badge: "Mocktail Star",
        isSpecial: true
      },
      {
        id: "mt-10",
        name: "Kala Khatta",
        description: "Nostalgic tangy jamun berry reduction with chaat masala, lemon and sparkling soda.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 199 }]
      }
    ]
  },
  {
    id: "soft-beverages",
    name: "Soft Beverages",
    courseNumber: "Course 21",
    subtitle: "Chilled Sodas, Tonics & Water",
    items: [
      {
        id: "sb-01",
        name: "Aerated Drinks",
        description: "Chilled carbonated soft drinks: Coke, Sprite, Limca, or Fanta.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 50 }]
      },
      {
        id: "sb-02",
        name: "Coldrink Can (330ml)",
        description: "Chilled aluminum can of aerated soft drink.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 80 }]
      },
      {
        id: "sb-03",
        name: "Diet Coke Can",
        description: "Zero sugar chilled Diet Coke can.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 80 }]
      },
      {
        id: "sb-04",
        name: "Packed Fruit Juices",
        description: "Packed 100% real fruit juice (Orange, Apple, or Mango).",
        type: "veg",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 80 }]
      },
      {
        id: "sb-05",
        name: "Red Bull Energy Drink",
        description: "250ml chilled Red Bull can.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 150 }]
      },
      {
        id: "sb-06",
        name: "Ginger Ale",
        description: "Crisp carbonated ginger infused refresher.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 120 }]
      },
      {
        id: "sb-07",
        name: "Schweppes Tonic Water",
        description: "Classic sparkling quinine tonic water.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 110 }]
      },
      {
        id: "sb-08",
        name: "Soda Water (300ml)",
        description: "Effervescent club soda bottle.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 50 }]
      },
      {
        id: "sb-09",
        name: "Soda Water (750ml)",
        description: "Large bottle of chilled club soda.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 70 }]
      },
      {
        id: "sb-10",
        name: "Packaged Mineral Water",
        description: "Chilled packaged purified drinking water.",
        type: "veg",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=300&q=80",
        variants: [{ label: "Regular", price: 65 }]
      }
    ]
  }
];
