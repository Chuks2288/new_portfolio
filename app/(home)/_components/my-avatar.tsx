import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ToolTip } from '@/components/tooltip'

export const MyAvatar = () => {
    return (
        <div className='relative'>
            <Avatar className="w-[150px] h-[150px]">
                <AvatarImage
                    src="/image.jpeg"
                    alt="User Avatar"
                />
                <AvatarFallback>CH</AvatarFallback>
            </Avatar>
            <ToolTip tooltipText="Active" side="right">
                <div className='w-3 h-3 rounded-full bg-green-500 absolute right-3 bottom-5 cursor-pointer' />
            </ToolTip>
        </div>
    )
}
