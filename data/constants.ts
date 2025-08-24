import { ContactInfo } from "../types";
interface Package {
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

interface Review {
  name: string;
  location: string;
  package: string;
  rating: number;
  review: string;
  image?: string;
}

export const featuredPackages: Package[] = [
  {
    id: 1,
    title: "Golden Triangle Classic",
    location: "Delhi, Agra, Jaipur",
    price: 65000,
    duration: 7,
    groupSize: "4-12",
    rating: 4.9,
    reviews: 234,
    type: "Cultural",
    description:
      "Explore India's most iconic destinations with the famous Golden Triangle tour",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80", // Taj Mahal - high quality
    services: [
      "Luxury accommodation",
      "Professional guide",
      "All meals included",
      "Private transportation",
      "Monument entry fees",
      "Cultural performances",
    ],
    highlights: [
      "Visit the magnificent Taj Mahal",
      "Explore Red Fort and India Gate",
      "Discover Amber Fort in Jaipur",
    ],
    itinerary: [
      "Day 1-2: Delhi - Red Fort, India Gate, Lotus Temple",
      "Day 3-4: Agra - Taj Mahal, Agra Fort, Mehtab Bagh",
      "Day 5-7: Jaipur - Amber Fort, City Palace, Hawa Mahal",
    ],
  },
  {
    id: 2,
    title: "Kerala Backwater Bliss",
    location: "Kerala",
    price: 95000,
    duration: 8,
    groupSize: "2-8",
    rating: 4.8,
    reviews: 189,
    type: "Nature",
    description:
      "Experience the serene backwaters and lush landscapes of God's Own Country",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Kerala backwaters houseboat - high quality
    services: [
      "Houseboat accommodation",
      "Ayurvedic spa treatments",
      "Traditional Kerala meals",
      "Backwater cruises",
      "Tea plantation tours",
      "Wildlife sanctuary visits",
    ],
    highlights: [
      "Stay in traditional houseboats",
      "Cruise through Alleppey backwaters",
      "Visit Munnar tea plantations",
    ],
    itinerary: [
      "Day 1-2: Cochin - Chinese fishing nets, spice markets",
      "Day 3-4: Munnar - Tea plantations, hill stations",
      "Day 5-6: Alleppey - Houseboat cruise, backwaters",
    ],
  },
  {
    id: 3,
    title: "Rajasthan Royal Heritage",
    location: "Rajasthan",
    price: 120000,
    duration: 10,
    groupSize: "6-15",
    rating: 4.9,
    reviews: 156,
    type: "Heritage",
    description:
      "Live like royalty in the land of maharajas with palace stays and desert adventures",
    image:
      "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Rajasthan palace
    services: [
      "Palace hotel stays",
      "Camel safari in Thar Desert",
      "Traditional Rajasthani cuisine",
      "Folk dance performances",
      "Heritage site tours",
      "Shopping assistance",
    ],
    highlights: [
      "Stay in converted palace hotels",
      "Camel safari in Jaisalmer",
      "Explore Udaipur's Lake Palace",
    ],
    itinerary: [
      "Day 1-2: Jaipur - City Palace, Amber Fort",
      "Day 3-4: Jodhpur - Mehrangarh Fort, blue city",
      "Day 5-6: Jaisalmer - Desert safari, sand dunes",
    ],
  },
];

export const customerReviews: Review[] = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    review:
      "WanderLust made our Golden Triangle tour absolutely perfect! Every detail was taken care of, and we created memories that will last a lifetime. The Taj Mahal at sunrise was breathtaking!",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80", // Professional woman traveler
    package: "Golden Triangle Classic",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    review:
      "The Kerala backwater experience exceeded all expectations. The houseboats were amazing and the guides were knowledgeable. The Ayurvedic treatments were so relaxing!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80", // Professional man smiling
    package: "Kerala Backwater Bliss",
  },
  {
    name: "Emma Wilson",
    location: "London, UK",
    rating: 5,
    review:
      "Amazing service from start to finish. The Rajasthan heritage tour was breathtaking and well-organized. The palace hotels made us feel like royalty!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Professional woman smiling
    package: "Rajasthan Royal Heritage",
  },
  {
    name: "David Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    review:
      "The spiritual journey to Varanasi and Rishikesh was life-changing. The yoga sessions by the Ganges and the evening aarti ceremony were unforgettable experiences.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Professional man portrait
    package: "Spiritual India Journey",
  },
  {
    name: "Lisa Thompson",
    location: "Sydney, Australia",
    rating: 5,
    review:
      "Kashmir truly is paradise on earth! The houseboat stay on Dal Lake and the shikara rides were magical. The hospitality was exceptional throughout our journey.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=989&q=80", // Professional woman smiling naturally
    package: "Kashmir Paradise",
  },
  {
    name: "James Miller",
    location: "Los Angeles, USA",
    rating: 5,
    review:
      "The Himalayan adventure was challenging but incredibly rewarding. The trek to Triund was spectacular, and our guides were professional and supportive throughout.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80", // Man traveler/adventurer
    package: "Himalayan Adventure",
  },
];

export const contactInfo: ContactInfo = {
  phone: "9764444110 / 7875636666",
  email: "chaitanyaservices01@gmail.com",
  address:
    "Dhanvantari nivas Udgirkar complex Opp Bajaj hospital Vazirabad Nanded 431601",
};
