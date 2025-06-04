import { Separator } from "@/components/ui/separator"
import { AllSkills } from "@/data"

export const Skills = () => {
    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Skills</h1>
                <div className="flex flex-row flex-wrap gap-2">
                    {AllSkills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded text-gray-800 dark:text-gray-200"
                        >
                            {skill.label}
                        </div>
                    ))}
                </div>
            </div>
            <Separator />
        </div>
    )
}
