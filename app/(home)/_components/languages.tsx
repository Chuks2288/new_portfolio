import { Separator } from "@/components/ui/separator";
import { spokenLanguages } from "@/data";

export const Languages = () => {
    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Languages</h1>
                <div>
                    {spokenLanguages.map((lang, idx) => (
                        <div key={idx} className="mb-4">
                            <div className="font-semibold mb-1 flex items-center justify-between text-gray-500 dark:text-gray-300">
                                <p>{lang.label}</p>
                                <p>{lang.percent}</p>
                            </div>
                            <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded overflow-hidden">
                                <div
                                    className="h-full bg-[#FFB400] transition-all duration-300"
                                    style={{ width: `${lang.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Separator />
        </div>
    );
};
