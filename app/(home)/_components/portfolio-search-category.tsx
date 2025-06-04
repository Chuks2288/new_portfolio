import React from 'react'
import { portfolioCategorySearch } from '@/data'
import { cn } from '@/lib/utils'

const PortfolioSearchCategory = () => {
  return (
    <div className='flex items-center justify-center gap-4'>
      {portfolioCategorySearch.map((item, idx) => {
        return (
          <div key={idx}>

          </div>
        )
      })}
    </div>
  )
}

export default PortfolioSearchCategory