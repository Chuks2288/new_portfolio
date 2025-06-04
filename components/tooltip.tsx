import React, { ComponentProps } from "react"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type ButtonProps = ComponentProps<typeof Button>

type TooltipSide = "top" | "right" | "bottom" | "left"

interface ReusableTooltipProps {
    tooltipText: string
    children?: React.ReactNode
    buttonProps?: ButtonProps
    asChild?: boolean
    side?: TooltipSide
}

export const ToolTip: React.FC<ReusableTooltipProps> = ({
    tooltipText,
    children,
    buttonProps,
    asChild = true,
    side = "top",
}) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild={asChild}>
                    {children ?? <Button variant="outline" {...buttonProps}>Hover</Button>}
                </TooltipTrigger>
                <TooltipContent side={side}>
                    <p>{tooltipText}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
