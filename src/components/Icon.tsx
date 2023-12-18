
'use client'

import { useState } from "react";

type IconProps = {
    fill: string;
    fill2: string;
    hoverFill: string;
    hoverFill2: string;
    height: number;
    width: number;
    scale?: number;
    classes?: string;
}

export default function Icon({
    fill,
    fill2,
    hoverFill,
    hoverFill2,
    height,
    width,
    scale,
}: IconProps) {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    const hoverStatus = (status: boolean) => {
        setIsHovered(status);
    };

    return (
        <svg id="Layer_1" onMouseEnter={() => hoverStatus(true)} onMouseLeave={() => hoverStatus(false)} className="transition-all" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" transform={scale ? `scale(${scale})` : ''} height={height} width={width} viewBox="0 0 200 200">
            <title>JC-logo-2020-filled</title>
            <circle className="cls-1" fill={isHovered ? hoverFill: fill} stroke={isHovered ? hoverFill: fill} strokeMiterlimit='10' strokeWidth='3px' cx="100" cy="100" r="47.45"/>
            <path className="cls-2" fill={isHovered ? hoverFill2: fill2} d="M85.48,99.09V93.74A7.85,7.85,0,0,0,87.4,94c2.35,0,3.48-1.12,3.48-3.58V61.66h5.88V90.21c0,6.15-2.78,9.09-8.56,9.09A14,14,0,0,1,85.48,99.09Z"/>
            <path className="cls-2" fill={isHovered ? hoverFill2: fill2} d="M102.61,128.4V108.29c0-5.77,3-9.19,8.66-9.19s8.67,3.42,8.67,9.19v4h-5.56v-4.33c0-2.46-1.18-3.47-2.94-3.47s-3,1-3,3.47v20.91c0,2.46,1.18,3.42,3,3.42s2.94-1,2.94-3.42v-5.72h5.56v5.29c0,5.77-3,9.19-8.67,9.19S102.61,134.17,102.61,128.4Z"/>
            <line className="cls-3" fill='none' stroke={isHovered ? hoverFill2: fill2} strokeLinecap='round' strokeLinejoin='round' strokeWidth='2px' x1="124.78" y1="75.22" x2="75.22" y2="124.78"/>
        </svg>
    )
}