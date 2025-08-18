export interface Trip {
  name: string;
  description?: string;
}

export interface PackageCategory {
  name: string;
  icon: unknown;
  color: string;
  trips: string[];
}

export interface PackageCategories {
  [key: string]: PackageCategory;
}

export interface SelectedTrip {
  name: string;
  category: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface LeadData {
  name: string;
  phoneNumber: number;
  packageCategory: string;
  packageName: string;
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  whatsappNumber: string;
  desiredLocation: string;
  tripDuration: string;
}
