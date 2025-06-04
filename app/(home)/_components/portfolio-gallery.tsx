import React from 'react'
import PortfolioGalleryItems from './portfolio-gallery-items'
import PortfolioSearchCategory from './portfolio-search-category'

const PortfolioGallery = () => {
    return (
        <div>
            <PortfolioSearchCategory />
            <PortfolioGalleryItems />
        </div>
    )
}

export default PortfolioGallery