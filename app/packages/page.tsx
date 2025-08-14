"use client"

import { useState, useEffect } from "react"
import { PackageDetailModal } from "@/components/pacakge-detail-modal"
import { FilterSidebar } from "@/components/packages/FilterSection"
import { PackageHeader } from "@/components/packages/PackageHeader"
import { PackageGrid } from "@/components/packages/PackageGrid"
import { Navigation } from "@/components/packages/Navigation"
import { packages } from "@/data/packagesData"
import { filterProps, PackageType } from "@/types/packages"

export default function PackagesPage() {
    const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(null)
    const [filteredPackages, setFilteredPackages] = useState<PackageType[]>(packages)
    const [filters, setFilters] = useState<filterProps>({
        searchTerm: "",
        selectedDestination: "all",
        selectedType: "all",
        priceRange: [0, 150000],
        durationRange: [1, 15],
        sortBy: "popular"
    })

    const destinations = [...new Set(packages.map(pkg => pkg.location))]
    const types = [...new Set(packages.map(pkg => pkg.type))]

    // Real-time filtering
    useEffect(() => {
        const filtered = packages.filter(pkg => {
            const matchesSearch = pkg.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                pkg.location.toLowerCase().includes(filters.searchTerm.toLowerCase())
            const matchesDestination = filters.selectedDestination === "all" || pkg.location === filters.selectedDestination
            const matchesType = filters.selectedType === "all" || pkg.type === filters.selectedType
            const matchesPrice = pkg.price >= filters.priceRange[0] && pkg.price <= filters.priceRange[1]
            const matchesDuration = pkg.duration >= filters.durationRange[0] && pkg.duration <= filters.durationRange[1]

            return matchesSearch && matchesDestination && matchesType && matchesPrice && matchesDuration
        })

        // Apply sorting
        switch (filters.sortBy) {
            case "price-low":
                filtered.sort((a, b) => a.price - b.price)
                break
            case "price-high":
                filtered.sort((a, b) => b.price - a.price)
                break
            case "duration":
                filtered.sort((a, b) => a.duration - b.duration)
                break
            case "rating":
                filtered.sort((a, b) => b.rating - a.rating)
                break
            default:
                filtered.sort((a, b) => b.reviews - a.reviews)
        }

        setFilteredPackages(filtered)
    }, [filters])

    const handleFilterChange = (newFilters: filterProps) => {
        setFilters(prev => ({ ...prev, ...newFilters }))
    }

    const clearAllFilters = () => {
        setFilters({
            searchTerm: "",
            selectedDestination: "all",
            selectedType: "all",
            priceRange: [0, 150000],
            durationRange: [1, 15],
            sortBy: "popular"
        })
    }

    return (
        <div className="min-h-screen bg-gray-50">


            <div className="container mx-auto px-4 py-8">
                <PackageHeader />

                <div className="grid lg:grid-cols-4 gap-8">
                    <FilterSidebar
                        filters={filters}
                        destinations={destinations}
                        types={types}
                        onFilterChange={(filter: Partial<filterProps>) => handleFilterChange(filter as filterProps)}
                        onClearFilters={clearAllFilters}
                    />

                    <PackageGrid
                        filteredPackages={filteredPackages}
                        filters={filters}
                        onFilterChange={(filters: Partial<filterProps>) => handleFilterChange(filters as filterProps)}
                        onPackageSelect={setSelectedPackage}
                        onClearFilters={clearAllFilters}
                    />
                </div>
            </div>

            <PackageDetailModal
                package={selectedPackage}
                isOpen={!!selectedPackage}
                onClose={() => setSelectedPackage(null)}
            />
        </div>
    )
}