import {useMemo} from "react";
import clsx from "clsx";
import { top, bottom, logo } from "../../lib/home-icons.ts";
import style from "./HomeCard.module.css";


export interface HomeCardProps {
    variant: "top" | "bottom" | "logo"
    file?: string
}

export function HomeCard({ variant, file }: HomeCardProps) {

    const image = useMemo(() => {
        if(!file) return logo;

        switch (variant) {
            case "top":
                return top[file as keyof typeof top];
            case "bottom":
                return bottom[file as keyof typeof bottom];
            default:
                return logo;
        }

    }, [variant, file]);

    return (
        <div
            className={ clsx(style.card, style[variant]) }
            dangerouslySetInnerHTML={{
                __html: image ?? logo
            }}
        />
    );
}