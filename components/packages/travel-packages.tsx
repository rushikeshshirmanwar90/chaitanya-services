"use client"

import { useState } from "react"
import { packageCategories } from "@/data/packages"
import type { SelectedTrip } from "@/types"
import TravelHeader from "./travel-header"
import CategoryFilter from "./category-filter"
import PackageCard from "./package-card"
import TripBookingForm from "./trip-booking-form"
import { Button } from "@/components/ui/button"

export default function TravelPackages() {
  const [activeCategory, setActiveCategory] = useState("customise")
  const [selectedTrip, setSelectedTrip] = useState<SelectedTrip | null>(null)
  const [showAll, setShowAll] = useState(false)

  const handleTripSelect = (tripName: string) => {
    setSelectedTrip({
      name: tripName,
      category: packageCategories[activeCategory].name,
    })
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setShowAll(false)
  }

  const tripsToShow = showAll
    ? packageCategories[activeCategory].trips
    : packageCategories[activeCategory].trips.slice(0, 4)

  const hasMoreTrips = packageCategories[activeCategory].trips.length > 4

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <TravelHeader />

      <CategoryFilter
        categories={packageCategories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tripsToShow.map((trip, index) => (
          <PackageCard
            key={index}
            trip={trip}
            categoryName={packageCategories[activeCategory].name}
            index={index}
            onTripSelect={handleTripSelect}
          />
        ))}
      </div>

      {hasMoreTrips && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="px-8 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${tripsToShow.length * 0.1}s` }}
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}

      {selectedTrip && (
        <TripBookingForm
          isOpen={!!selectedTrip}
          onClose={() => setSelectedTrip(null)}
          tripName={selectedTrip.name}
          categoryName={selectedTrip.category}
        />
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
