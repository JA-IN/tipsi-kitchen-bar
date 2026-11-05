export type DietaryType = 'veg' | 'nonveg' | 'veg-nonveg';

export interface MenuVariant {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  type: DietaryType;
  variants: MenuVariant[];
  badge?: string;
  isSpecial?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  courseNumber?: string;
  subtitle?: string;
  items: MenuItem[];
}

export interface CartItem {
  cartId: string;
  itemId: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
  type: DietaryType;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  address: string;
  landmark: string;
  phone: string;
  phoneDisplay: string;
  secondaryPhone: string;
  secondaryPhoneDisplay: string;
  whatsappNumber: string;
  instagramUrl: string;
  mapsUrl: string;
  hours: string;
}

export interface BanquetHall {
  id: string;
  name: string;
  tagline: string;
  capacity: string;
  image: string;
  features: string[];
  idealFor: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface BanquetInquiry {
  eventType: string;
  guestCount: number;
  date: string;
  timeSlot: string;
  hallPreference: string;
  catering: string;
  customerName: string;
  phone: string;
  notes: string;
}
