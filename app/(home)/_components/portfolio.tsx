import React from 'react'
import PortfolioGallery from './portfolio-gallery'

export const PortFolio = () => {
    return (
        <section id="portfolio" className="w-full px-4 py-12">
            <div className="flex flex-col items-center justify-center gap-y-4 text-center mb-10">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-950 dark:text-white">
                    Projects
                </h1>
                <p className="max-w-md md:max-w-xl text-sm md:text-base text-gray-700 dark:text-gray-300">
                    A selection of projects that highlight my experience in frontend, mobile, and full-stack development. Each piece reflects my focus on performance, usability, and clean, maintainable code.
                </p>
            </div>

            <PortfolioGallery />
        </section>
    )
}
