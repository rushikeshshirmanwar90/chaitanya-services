// Default site content. Used to seed the database on first load and as a
// graceful fallback for the public site when the DB is unreachable.

export interface Statistic {
  value: string;
  label: string;
}

export interface ServiceItem {
  icon: string; // lucide icon key, see ICON_OPTIONS in components/admin
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteContentData {
  navbar: {
    logoText: string;
    links: NavLink[];
  };
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    buttonText: string;
    buttonLink: string;
  };
  about: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
    image: string;
    statistics: Statistic[];
  };
  packagesHeader: {
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    openingHours: string[];
    facebookUrl: string;
    termsLink: string;
    privacyLink: string;
  };
  footer: {
    companyName: string;
    description: string;
    copyrightYear: string;
    quickLinks: NavLink[];
    destinations: NavLink[];
  };
}

export const defaultSiteContent: SiteContentData = {
  navbar: {
    logoText: "Chaitanya Services",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "/About" },
      { label: "Packages", href: "/Packages" },
      { label: "Services", href: "#services" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact", href: "/contact" },
    ],
  },
  hero: {
    title: "Explore Incredible India",
    subtitle:
      "Discover amazing destinations and create unforgettable memories with our expertly crafted India travel packages",
    backgroundImage:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Explore Packages",
    buttonLink: "/Packages",
  },
  about: {
    heading: "About Chaitanya Services",
    paragraph1:
      "Established in August 2015, Chaitanya Services has been your trusted travel companion for over a decade. We specialize in creating personalized travel experiences that go beyond ordinary tourism.",
    paragraph2:
      "Our team of experienced travel experts has explored every corner of India to bring you the most authentic and memorable adventures. From cultural immersions to spiritual journeys, we make your travel dreams come true.",
    image:
      "https://plus.unsplash.com/premium_photo-1700486009227-4b194079c197?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    statistics: [
      { value: "10K+", label: "Happy Travelers" },
      { value: "50+", label: "Destinations" },
      { value: "10+", label: "Years Experience" },
    ],
  },
  packagesHeader: {
    titleLine1: "Discover Your Next",
    titleHighlight: "Adventure",
    subtitle:
      "Explore our carefully curated travel packages designed for every type of traveler",
  },
  services: {
    title: "Our Services",
    subtitle: "Everything you need for the perfect trip",
    items: [
      {
        icon: "MapPin",
        title: "Trip Planning",
        description:
          "Customized itineraries tailored to your preferences and budget",
      },
      {
        icon: "BookOpen",
        title: "Passport application and renewal",
        description:
          "Join like-minded travelers on expertly guided group adventures",
      },
      {
        icon: "Plane",
        title: "Flight booking",
        description: "We will take care of your all Flight Bookings",
      },
      {
        icon: "Car",
        title: "All India car rental",
        description: "Round-the-clock assistance throughout your journey",
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Ready to start your next adventure?",
    phone: "9764444116 / 7875636666",
    email: "chaitanyaservices01@gmail.com",
    address:
      "Dhanvantari nivas, Udgirkar complex Opp Bajaj hospital, Vazirabad Nanded 431601",
    openingHours: [
      "Monday-Saturday : 9AM to 8PM",
      "Sunday: 12 noon to 6PM",
    ],
    facebookUrl: "https://www.facebook.com/share/16zPfjSx4J/",
    termsLink: "/terms&condition",
    privacyLink: "/privacyPolicy",
  },
  footer: {
    companyName: "Chaitanya Services",
    description:
      "Creating unforgettable travel experiences across India since 2015.",
    copyrightYear: "2025",
    quickLinks: [
      { label: "About", href: "/About" },
      { label: "Packages", href: "/Packages" },
    ],
    destinations: [{ label: "Andaman", href: "" }],
  },
};

export interface ReviewData {
  name: string;
  location: string;
  package: string;
  rating: number;
  review: string;
  image?: string;
}

export const defaultReviews: ReviewData[] = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    review:
      "Chaitanya Services made our Golden Triangle tour absolutely perfect! Every detail was taken care of, and we created memories that will last a lifetime. The Taj Mahal at sunrise was breathtaking!",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b302?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    package: "Golden Triangle Classic",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    review:
      "The Kerala backwater experience exceeded all expectations. The houseboats were amazing and the guides were knowledgeable. The Ayurvedic treatments were so relaxing!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    package: "Kerala Backwater Bliss",
  },
  {
    name: "Emma Wilson",
    location: "London, UK",
    rating: 5,
    review:
      "Amazing service from start to finish. The Rajasthan heritage tour was breathtaking and well-organized. The palace hotels made us feel like royalty!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    package: "Rajasthan Royal Heritage",
  },
];

export interface PackageCategoryData {
  key: string;
  name: string;
  color: string;
  order: number;
  trips: string[];
}

export const defaultPackageCategories: PackageCategoryData[] = [
  {
    key: "customize",
    name: "customize Packages",
    color: "bg-blue-500",
    order: 0,
    trips: [
      "Sikkim Darjeeling",
      "3 Sisters (Assam + Meghalaya + Arunachal)",
      "Only Meghalaya",
      "Meghalaya Assam",
      "Karnataka Lovingly",
      "Only Coorg",
      "Shimla Manali",
      "Only Manali",
      "Kerala Bliss",
      "Jammu Kashmir",
      "Rajasthan Marwar",
      "Rajasthan Mewar + Mount Abu",
      "Puducherry Special",
      "Rest of Himachal",
      "Rest of Himachal + Amritsar",
    ],
  },
  {
    key: "yatra",
    name: "Yatra Special",
    color: "bg-orange-500",
    order: 1,
    trips: [
      "Jammu Kashmir + Vaishno Devi",
      "Chardham Yatra Uttarakhand",
      "Do Dham Yatra Uttarakhand",
      "Puri Bhubaneswar",
      "Puri Bhubaneswar Gangasagar",
      "Dwarka Somnath Statue of Unity",
      "Dwarka Somnath SOU + Gir Forest",
      "Madurai + Rameshwaram + Kodaikanal + Trivandrum",
      "Kashi + Ayodhya + Prayag Raj",
      "Nepal Special",
      "Pithapuram Special",
    ],
  },
  {
    key: "student",
    name: "Student Special",
    color: "bg-green-500",
    order: 2,
    trips: [
      "Visakhapatnam + Bora Caves + Araku Valley",
      "Bengaluru + Mysuru + Wonderla Water Park",
      "Hyderabad + Wonderla Water Park",
      "Delhi Agra",
      "Jaipur + Chittorgarh + Udaipur",
      "Jaipur + Jodhpur + Jaisalmer",
    ],
  },
  {
    key: "short",
    name: "Short Trips",
    color: "bg-purple-500",
    order: 3,
    trips: [
      "Konkan Special",
      "Shodash Shaktipeeth",
      "Ashtavinayak Yatra",
      "One Day Ramoji Film City",
      "Amavasya Kuber Bhandar Special",
    ],
  },
  {
    key: "honeymoon",
    name: "Honeymoon Packages",
    color: "bg-pink-500",
    order: 4,
    trips: ["Coming Soon..."],
  },
];
