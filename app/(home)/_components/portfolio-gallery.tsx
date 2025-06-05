'use client'

import React, { useState } from 'react'
import PortfolioGalleryItems from './portfolio-gallery-items'
import PortfolioSearchCategory from './portfolio-search-category'

const PortfolioGallery = () => {
    const [active, setActive] = useState('all')

    return (
        <div>
            <PortfolioSearchCategory active={active} setActive={setActive} />
            <PortfolioGalleryItems active={active} />
        </div>
    )
}

export default PortfolioGallery
