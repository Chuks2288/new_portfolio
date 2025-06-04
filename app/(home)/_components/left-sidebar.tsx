import React from 'react'

import { Profile } from '../_components/profile'
import { Languages } from '../_components/languages'
import { Skills } from '../_components/skills'
import { ExtraSkills } from "../_components/extra-skills"
import { DownloadCv } from '../_components/download-cv'

export const LeftSidebar = () => {
    return (
        // <div className="flex-col space-y-8 w-[305px] h-[1330px] bg-white dark:bg-[#0F172A]  md:p-6 p-4 lg:flex hidden">
        <div className="hidden lg:flex flex-col space-y-8 w-[305px] bg-white dark:bg-[#0F172A] p-4 md:p-6 h-screen sticky top-0 overflow-y-auto no-scrollbar">
            <Profile />
            <Languages />
            <Skills />
            {/* <ExtraSkills /> */}
            <DownloadCv />
        </div>
    )
}
