"use client"

import { Button } from "@/components/ui/button"
import type { PackageCategories } from "@/types"

interface CategoryFilterProps {
  categories: PackageCategories
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex overflow-x-auto gap-3 pb-2 px-4 md:flex-wrap md:justify-center md:px-0 scrollbar-hide">
        {Object.entries(categories).map(([key, category]) => {
          return (
            <Button
              key={key}
              variant={activeCategory === key ? "default" : "outline"}
              onClick={() => onCategoryChange(key)}
              className={`flex items-center gap-2 px-4 py-3 md:px-6 rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap flex-shrink-0 min-w-fit ${activeCategory === key ? "bg-blue-600 text-white shadow-lg" : "hover:shadow-md hover:bg-blue-50"
                }`}
            >
              <span className="font-medium text-sm md:text-base">{category.name}</span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
