export interface PackageType {
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

export interface filterProps {
  searchTerm: string;
  selectedDestination: string;
  selectedType: string;
  priceRange: number[];
  durationRange: number[];
  sortBy: string;
}

export interface PackageGridProps {
  filteredPackages: PackageType[];
  filters: filterProps;
  onFilterChange: (filters: Partial<filterProps>) => void;
  onPackageSelect: (pkg: PackageType) => void;
  onClearFilters: () => void;
}

export interface PackageDetailModalProps {
  package: PackageType | null;
  isOpen: boolean;
  onClose: () => void;
}
