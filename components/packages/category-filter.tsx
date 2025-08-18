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
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {Object.entries(categories).map(([key, category]) => {
        return (
          <Button
            key={key}
            variant={activeCategory === key ? "default" : "outline"}
            onClick={() => onCategoryChange(key)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${activeCategory === key ? "bg-blue-600 text-white shadow-lg" : "hover:shadow-md hover:bg-blue-50"
              }`}
          >
            <span className="font-medium">{category.name}</span>
          </Button>
        )
      })}
    </div>
  )
}
