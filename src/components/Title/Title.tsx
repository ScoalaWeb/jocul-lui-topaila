import style from "./Title.module.css";
import clsx from "clsx";

export interface TitleProps {
    giga?: boolean
    drop?: boolean
}

export function Title({ giga, drop }: TitleProps) {
    return (
        <div className={ clsx(style.Title, {
            [style.giga]: giga,
            [style.drop]: drop,
        }) }>
            <span>Jocul lui</span>
            <span className={style.character}>Țopăilă</span>
        </div>
    );
}