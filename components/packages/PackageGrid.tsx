import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PackageCard } from "@/components/package-card"
import { PackageGridProps, PackageType } from "@/types/packages"

export function PackageGrid({ filteredPackages, filters, onFilterChange, onPackageSelect, onClearFilters }: PackageGridProps) {
    const handleSortChange = (value: string) => {
        onFilterChange({ sortBy: value })
    }

    return (
        <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">{filteredPackages.length} packages found</p>
                <Select value={filters.sortBy} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-48">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="duration">Duration</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPackages.map((pkg, index) => (
                    <div key={pkg.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <PackageCard
                            package={{
                                ...pkg,
                                groupSize: Number(pkg.groupSize)
                            }}
                            onMoreDetails={(pkg) => onPackageSelect(pkg as PackageType)}
                        />
                    </div>
                ))}
            </div>

            {filteredPackages.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No packages found matching your criteria.</p>
                    <Button
                        onClick={onClearFilters}
                        className="mt-4"
                    >
                        Clear All Filters
                    </Button>
                </div>
            )}
        </div>
    )
}