"use client"

import React, { useEffect, useState } from 'react'
import { ToolTip } from '@/components/tooltip'
import { menuIcons } from '@/data'
import { cn } from '@/lib/utils'

export const SideMenu = () => {
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                threshold: 0.6,
            }
        )

        const sections = document.querySelectorAll("section[id]")
        sections.forEach(section => observer.observe(section))

        return () => {
            sections.forEach(section => observer.unobserve(section))
        }
    }, [])

    return (
        <div>
            <div className="flex flex-col items-center justify-between gap-y-10">
                {menuIcons.map(({ icon: Icon, path, tip }, idx) => {
                    const sectionId = path.replace("#", "")
                    const isActive = activeSection === sectionId

                    return (
                        <ToolTip key={idx} tooltipText={tip} side="top">
                            <a
                                href={path}
                                className={cn(
                                    "w-10 h-10 flex items-center justify-center rounded-full transition",
                                    isActive ? "bg-[#FFB400]" : "bg-gray-200 hover:bg-[#FFB400]"
                                )}
                            >
                                <Icon
                                    className={cn(
                                        "w-5 h-5",
                                        isActive
                                            ? "text-black dark:text-blue-950"
                                            : "text-blue-950 dark:text-white"
                                    )}
                                />
                            </a>

                        </ToolTip>
                    )
                })}
            </div>
        </div>
    )
}
