// import { Download } from "lucide-react";

// export const DownloadCv = () => {
//     return (
//         <div>
//             <a
//                 href="/CHUKS_DUMBIRI_CV.pdf"
//                 download="CHUKS_DUMBIRI_CV.pdf"
//                 className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors 
//                            bg-[#FFB400] hover:bg-[#fce78d] text-black dark:text-blue-950 dark:bg-yellow-400 
//                            dark:hover:bg-yellow-300 rounded-md gap-x-3"
//             >
//                 <p>DOWNLOAD CV</p>
//                 <Download className="w-4 h-4" />
//             </a>
//         </div>
//     );
// };


'use client'

import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'

export const DownloadCv = () => {
    const [isLoading, setIsLoading] = useState(false)

    const handleDownload = () => {
        setIsLoading(true)
        const link = document.createElement('a')
        link.href = '/CHUKS_DUMBIRI_CV.pdf'
        link.download = 'CHUKS_DUMBIRI_CV.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }

    return (
        <div>
            <button
                onClick={handleDownload}
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors 
                           bg-[#FFB400] hover:bg-[#fce78d] text-black dark:text-blue-950 dark:bg-yellow-400 
                           dark:hover:bg-yellow-300 rounded-md gap-x-3 disabled:opacity-70 cursor-pointer"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Downloading...</span>
                    </>
                ) : (
                    <>
                        <span>DOWNLOAD CV</span>
                        <Download className="w-4 h-4" />
                    </>
                )}
            </button>
        </div>
    )
}
