import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { filterProps } from "@/types/packages"
import React from "react"

interface FilterSectionProps {
    filters: filterProps,
    destinations: string[],
    types: string[],
    onFilterChange: (filter: Partial<filterProps>) => void;
    onClearFilters: () => void;
}

export const FilterSidebar: React.FC<FilterSectionProps> = ({ filters, destinations, types, onFilterChange, onClearFilters }) => {
    const handleFilterUpdate = (key: string, value: string | number[]) => {
        onFilterChange({ [key]: value })
    }

    return (
        <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4">
                <h3 className="text-xl font-bold mb-6">Filter Packages</h3>

                {/* Search */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Search</label>
                    <Input
                        placeholder="Search destinations..."
                        value={filters.searchTerm}
                        onChange={(e) => handleFilterUpdate('searchTerm', e.target.value)}
                    />
                </div>

                {/* Destination Filter */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Destination</label>
                    <Select value={filters.selectedDestination} onValueChange={(value) => handleFilterUpdate('selectedDestination', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="All Destinations" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Destinations</SelectItem>
                            {destinations.map(dest => (
                                <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Package Type Filter */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Package Type</label>
                    <Select value={filters.selectedType} onValueChange={(value) => handleFilterUpdate('selectedType', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            {types.map(type => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                        Price Range: ₹{filters.priceRange[0].toLocaleString('en-IN')} - ₹{filters.priceRange[1].toLocaleString('en-IN')}
                    </label>
                    <Slider
                        value={filters.priceRange}
                        onValueChange={(value) => handleFilterUpdate('priceRange', value)}
                        max={150000}
                        min={0}
                        step={5000}
                        className="mt-2"
                    />
                </div>

                {/* Duration Range */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                        Duration: {filters.durationRange[0]} - {filters.durationRange[1]} days
                    </label>
                    <Slider
                        value={filters.durationRange}
                        onValueChange={(value) => handleFilterUpdate('durationRange', value)}
                        max={15}
                        min={1}
                        step={1}
                        className="mt-2"
                    />
                </div>

                <Button
                    onClick={onClearFilters}
                    variant="outline"
                    className="w-full"
                >
                    Clear All Filters
                </Button>
            </Card>
        </div>
    )
}