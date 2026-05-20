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
  }
];
