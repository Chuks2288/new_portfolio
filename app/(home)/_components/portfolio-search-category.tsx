'use client'

import React, { useState } from 'react'
import { portfolioCategorySearch } from '@/data'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface Props {
  active: string
  setActive: (val: string) => void
}

const PortfolioSearchCategory: React.FC<Props> = ({ active, setActive }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {portfolioCategorySearch.map((item, idx) => {
        const isActive = item.value === active

        return (
          <Button
            key={idx}
            variant="ghost"
            onClick={() => setActive(item.value)}
            className={cn(
              "capitalize border transition-all cursor-pointer",
              isActive
                ? "bg-yellow-400 text-blue-950 dark:bg-yellow-300 dark:text-blue-950 border-transparent"
                : "bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-slate-600 hover:bg-yellow-100 dark:hover:bg-slate-600"
            )}
          >
            {item.label}
          </Button>
        )
      })}
    </div>
  )
}

export default PortfolioSearchCategory
