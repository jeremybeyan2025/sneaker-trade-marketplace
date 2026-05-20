import { SneakerListing } from "./types";

export const featuredListings: SneakerListing[] = [
  {
    id: "aj1-lf-001",
    brand: "Jordan",
    model: "Air Jordan 1 Retro High Lost & Found",
    sku: "DZ5485-612",
    size: "10.5",
    condition: "new",
    askPrice: 429,
    lastSale: 407,
    heatScore: 96,
    imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop",
    seller: "VerifiedSeller_214",
    status: "active"
  },
  {
    id: "yeezy-zebra-001",
    brand: "adidas",
    model: "Yeezy Boost 350 V2 Zebra",
    sku: "CP9654",
    size: "11",
    condition: "new",
    askPrice: 315,
    lastSale: 298,
    heatScore: 89,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    seller: "SoleLocker",
    status: "active"
  },
  {
    id: "dunk-panda-001",
    brand: "Nike",
    model: "Dunk Low Panda",
    sku: "DD1391-100",
    size: "9",
    condition: "pre_owned",
    askPrice: 118,
    lastSale: 132,
    heatScore: 74,
    imageUrl: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1200&auto=format&fit=crop",
    seller: "MidwestKicks",
    status: "active"
  },
  {
    id: "j4-military-001",
    brand: "Jordan",
    model: "Jordan 4 Military Black",
    sku: "DH6927-111",
    size: "10",
    condition: "new",
    askPrice: 382,
    lastSale: 361,
    heatScore: 92,
    imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop",
    seller: "VaultRunner",
    status: "active"
  },
  {
    id: "sb-jarritos-001",
    brand: "Nike SB",
    model: "Dunk Low Jarritos",
    sku: "FD0860-001",
    size: "11",
    condition: "new",
    askPrice: 690,
    lastSale: 648,
    heatScore: 98,
    imageUrl: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop",
    seller: "TradeBlock_88",
    status: "active"
  },
  {
    id: "ts-reverse-001",
    brand: "Jordan x Travis Scott",
    model: "Jordan 1 Low Reverse Mocha",
    sku: "DM7866-162",
    size: "11",
    condition: "new",
    askPrice: 1230,
    lastSale: 1188,
    heatScore: 99,
    imageUrl: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1200&auto=format&fit=crop",
    seller: "HighHeatOnly",
    status: "active"
  }
];

export const tradeQueue = [
  {
    id: "trade-1001",
    offered: "Jordan 4 Military Black, Size 10",
    requested: "Jordan 1 Lost & Found, Size 10.5",
    cashDifference: 85,
    status: "awaiting_counterparty_ship"
  },
  {
    id: "trade-1002",
    offered: "Nike SB Dunk Jarritos, Size 11",
    requested: "Travis Scott Jordan 1 Low Reverse Mocha, Size 11",
    cashDifference: 420,
    status: "awaiting_authentication"
  },
  {
    id: "trade-1003",
    offered: "Yeezy Boost 350 V2 Zebra, Size 11",
    requested: "Nike Dunk Low Panda, Size 9",
    cashDifference: 190,
    status: "counter_offer_sent"
  }
];

export const liveDrops = [
  {
    id: "drop-01",
    title: "Friday Heat Drop",
    time: "8:00 PM EST",
    pairs: 42,
    status: "Tonight",
    accent: "volt"
  },
  {
    id: "drop-02",
    title: "Trade Night",
    time: "Sunday 7:30 PM EST",
    pairs: 28,
    status: "Open",
    accent: "heat"
  }
];

export const closetItems = featuredListings.slice(0, 4).map((item, index) => ({
  ...item,
  availableForTrade: index !== 1,
  ownerNote: index === 0 ? "Only trading up for Travis lows or SB grails." : "Open to clean trades with verified users."
}));
