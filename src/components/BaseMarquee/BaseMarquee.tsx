import style from "./BaseMarquee.module.css";
import {PropsWithChildren, useEffect, useRef, useState} from "react";
import clsx from "clsx";

export interface BaseMarqueeProps {
    duration?: `${number}${"s" | "ms"}`
    reversed?: boolean
}

export function BaseMarquee({ reversed, duration, children }: PropsWithChildren<BaseMarqueeProps>) {
    const [repeats, setRepeats] = useState(2);
    const wrapper = useRef<HTMLDivElement>(null)
    const inner = useRef<HTMLDivElement>(null)

    const updateRepeats = () => {
        if(!wrapper.current || !inner.current) return;

        const wrapperWidth = wrapper.current.clientWidth;
        const innerWidth = inner.current.clientWidth;

        if (wrapperWidth < innerWidth) {
            return;
        }

        const instanceWidth = innerWidth / repeats;

        setRepeats(1 + Math.ceil(wrapperWidth / instanceWidth));
    }

    useEffect(updateRepeats, [children]);

    useEffect(() => {
        window.addEventListener("resize", updateRepeats);

        return () => {
            window.removeEventListener("resize", updateRepeats);
        }
    });

    return (
        <div
            ref={wrapper}
            className={ style.marquee }
            style={{
                // @ts-expect-error Custom CSS property
                "--duration": duration
            }}
        >
            <div ref={inner} className={ style.inner }>
                {[...Array(repeats).keys()].map((index) => (
                    <div
                        key={index}
                        className={ clsx(style.instance, {
                            [style.reversed]: reversed,
                        })}
                    >
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
}