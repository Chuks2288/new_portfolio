import React from 'react'
import { Hero } from './hero'
import { Services } from './services'
import { Recommendations } from './recommendations'
import { Education } from './education'
import { WorkHistory } from './work-history'
import { PortFolio } from './portfolio'
import { Blog } from './blog'
import { Contact } from './contact'

export const MainContent = () => {
    return (
        // <div className="flex-1 overflow-auto px-6 md:space-y-10 space-y-4">
        <div className="flex-1 overflow-y-auto no-scrollbar pr-[60px] md:pr-[90px]">
            <Hero />
            <Services />
            {/* <Recommendations /> */}
            <Education />
            <WorkHistory />
            <PortFolio />
            <Blog />
            <Contact />
        </div>
    )
}
