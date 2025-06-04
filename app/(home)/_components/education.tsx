import { Separator } from "@/components/ui/separator";
import { educations } from "@/data";
import React from "react";

export const Education = () => {
    return (
        <section id="education" className="w-full px-4 py-12">
            <div className="flex flex-col items-center justify-center gap-y-4 text-center mb-10">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-950 dark:text-white">
                    Education & Certifications
                </h1>
                <p className="max-w-md md:max-w-xl text-sm md:text-base text-gray-700 dark:text-gray-300">
                    A blend of formal education and industry certifications that validate my skills in cloud, mobile, and web development.
                </p>
            </div>

            <div className="w-full md:p-6 p-4 bg-white dark:bg-slate-900 rounded-md shadow-sm space-y-8">
                {educations.map((edu, idx) => (
                    <div key={idx} className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-6">
                            <div className="flex-1 space-y-1">
                                <h4 className="text-base md:text-lg font-semibold text-blue-950 dark:text-yellow-400">
                                    {edu.universityName}
                                </h4>
                                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                    {edu.startDate} – {edu.endDate || "Present"}
                                </p>
                            </div>
                            <div className="flex-1 space-y-1">
                                <h4 className="text-base md:text-lg font-medium text-blue-950 dark:text-white">
                                    {edu.course}
                                </h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {edu.description}
                                </p>
                            </div>
                        </div>

                        {idx !== educations.length - 1 && (
                            <Separator className="bg-[#FFB400]/60 dark:bg-yellow-400/40" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
