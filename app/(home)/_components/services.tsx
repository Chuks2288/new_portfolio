'use client'

import React from 'react'
import { services } from '@/data'

export const Services = () => {
    return (
        <section id="services" className="w-full px-4 py-12">
            <div className="flex flex-col items-center justify-center gap-y-4 text-center mb-10">
                <h1 className="text-3xl font-bold text-blue-950 dark:text-white">Services</h1>
                <p className="max-w-xl text-gray-700 dark:text-gray-300">
                    I offer a variety of services tailored to meet your digital needs—from development to design and performance optimization.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 transition-all duration-300"
                    >
                        <h2 className="text-lg font-semibold text-blue-950 dark:text-yellow-400 mb-4">{service.title}</h2>
                        <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                            {service.value.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
