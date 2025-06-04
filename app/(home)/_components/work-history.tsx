import React from "react";
import { experiences } from "@/data";
import { Separator } from "@/components/ui/separator";

export const WorkHistory = () => {
    return (
        <section id="experience" className="w-full px-4 py-12">
            <div className="flex flex-col items-center justify-center gap-y-4 text-center mb-10">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-950 dark:text-white">
                    Professional Experience
                </h1>
                <p className="max-w-md md:max-w-xl text-sm md:text-base text-gray-700 dark:text-gray-300">
                    A timeline of impactful roles and key contributions made across diverse industries and platforms.
                </p>
            </div>

            <div className="w-full md:p-6 p-4 bg-white dark:bg-slate-900 rounded-md shadow-sm space-y-8">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="space-y-4">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div className="flex-1 space-y-1">
                                <h3 className="text-base md:text-lg font-semibold text-blue-950 dark:text-yellow-400">
                                    {exp.role}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                    {exp.startDate} – {exp.endDate}
                                </p>
                            </div>
                            <div className="flex-1 space-y-1">
                                <h4 className="text-base md:text-lg font-medium text-blue-950 dark:text-white">
                                    {exp.company}
                                </h4>
                                {exp.description && (
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                                        {exp.description}
                                    </p>
                                )}
                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                    {exp.bullets.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {idx !== experiences.length - 1 && (
                            <Separator className="bg-[#FFB400]/60 dark:bg-yellow-400/40" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
