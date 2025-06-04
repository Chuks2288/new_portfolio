'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-6 px-4 md:px-6 py-10 md:h-[467px] bg-white dark:bg-[#0F172A]"
        >
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-xl">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-950 dark:text-white leading-snug md:leading-tight">
                    I’m DUMBIRI CHUKS <br />
                    Software Engineer
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed max-w-md">
                    Passionate about building performant, accessible, and beautiful web applications. I create pixel-perfect UIs and seamless user experiences using modern frontend technologies.
                </p>
                <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="bg-[#FFB400] hover:bg-[#fce78d] text-black dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-blue-950 cursor-pointer"
                >
                    Hire Me
                </Button>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
                <Image
                    src="/image.jpeg"
                    alt="Hero Image"
                    height={459}
                    width={325}
                    className="rounded-lg shadow-lg object-cover w-[200px] sm:w-[250px] md:w-[325px]"
                />
            </div>
        </section>
    )
}
