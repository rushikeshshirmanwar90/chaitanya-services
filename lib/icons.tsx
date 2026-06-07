import {
  MapPin,
  Car,
  Plane,
  BookOpen,
  Compass,
  Calendar,
  Heart,
  GraduationCap,
  Star,
  Phone,
  Mail,
  Globe,
  Hotel,
  Camera,
  Mountain,
  type LucideIcon,
} from "lucide-react";

// Central registry of icons that can be picked for service cards in the admin.
// Stored in the DB as a string key and resolved back to a component here.
export const ICON_MAP: Record<string, LucideIcon> = {
  MapPin,
  Car,
  Plane,
  BookOpen,
  Compass,
  Calendar,
  Heart,
  GraduationCap,
  Star,
  Phone,
  Mail,
  Globe,
  Hotel,
  Camera,
  Mountain,
};

export const ICON_OPTIONS = Object.keys(ICON_MAP);

export function getIcon(key: string): LucideIcon {
  return ICON_MAP[key] || MapPin;
}
