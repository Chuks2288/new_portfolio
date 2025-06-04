import Link from "next/link"
import { MyAvatar } from "./my-avatar"
import { bioData, socialMediaIcons } from "@/data"
import { Separator } from "@/components/ui/separator"
import { ToolTip } from "@/components/tooltip"

export const Profile = () => {
    return (
        <div className="space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4">
                <MyAvatar />
                <div className="flex flex-col space-y-2 text-center">
                    <p className="font-bold text-gray-900 dark:text-white">
                        DUMBIRI CHUKS
                    </p>
                    <p className="font-normal text-lg text-gray-700 dark:text-gray-300">
                        Software Engineer
                    </p>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-2 flex-wrap">
                {socialMediaIcons.map(({ icon: Icon, link, tip }, idx) => (
                    <ToolTip key={idx} tooltipText={tip} side="top">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full 
                                       bg-[#FFB400] hover:opacity-80 transition"
                        >
                            <Icon
                                className={`w-5 h-5 ${idx === 0 ? "text-[#FFB400]" : "text-blue-950 dark:text-blue-100"}`}
                                fill="#172554"
                            />
                        </a>
                    </ToolTip>
                ))}
            </div>

            <Separator />

            <div className="space-y-3">
                {bioData.map((data, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                        <p className="flex items-center justify-center font-medium p-1 px-2 rounded-md 
                                      bg-[#FFB400] text-blue-950 dark:text-blue-950">
                            {data.label}:
                        </p>
                        <span className={`${idx === 2 ? "text-green-700 dark:text-green-400 font-bold" : "text-gray-800 dark:text-gray-200"}`}>
                            {data.value}
                        </span>
                    </div>
                ))}
            </div>

            <Separator />
        </div>
    )
}
