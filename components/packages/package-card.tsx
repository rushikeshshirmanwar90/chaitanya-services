"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users } from "lucide-react"

interface PackageCardProps {
  trip: string
  categoryName: string
  index: number
  onTripSelect: (tripName: string) => void
}

export default function PackageCard({ trip, categoryName, index, onTripSelect }: PackageCardProps) {
  const isComingSoon = trip === "Coming Soon..."

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer border border-gray-200 hover:border-blue-300 bg-white animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => !isComingSoon && onTripSelect(trip)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-700 border-0 mb-2 hover:bg-blue-200 transition-colors"
          >
            {categoryName}
          </Badge>
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
            <MapPin className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <CardTitle className="text-lg font-serif group-hover:text-blue-600 transition-colors duration-300">
          {trip}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 mb-4 font-sans">
          {isComingSoon
            ? "Exciting honeymoon packages coming soon!"
            : "Discover amazing destinations and create unforgettable memories with our expertly planned itinerary."}
        </CardDescription>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Flexible</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>All Ages</span>
            </div>
          </div>
          {!isComingSoon && (
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
