export interface Package {
  id: number;
  title: string;
  location: string;
  price: number;
  duration: number;
  groupSize: string;
  rating: number;
  reviews: number;
  type: string;
  description: string;
  image: string;
  services: string[];
  highlights: string[];
  itinerary: string[];
}

export interface Review {
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
  package: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  officeHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}
