export type SneakerCondition = "new" | "new_defects" | "pre_owned";

export type ListingStatus =
  | "draft"
  | "active"
  | "sold_pending_ship"
  | "in_authentication"
  | "authenticated"
  | "failed_auth"
  | "completed"
  | "cancelled";

export type SneakerListing = {
  id: string;
  brand: string;
  model: string;
  sku: string;
  size: string;
  condition: SneakerCondition;
  askPrice: number;
  lastSale: number;
  heatScore: number;
  imageUrl: string;
  seller: string;
  status: ListingStatus;
};
