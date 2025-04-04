import style from "./BaseButton.module.css";
import { ButtonHTMLAttributes, createElement } from "react";
import clsx from "clsx";
import { NavLink, type LinkProps} from "react-router";


export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "start" | "restart"
    to?: string
}

type AllProps = BaseButtonProps & (
    ButtonHTMLAttributes<HTMLButtonElement>
    | LinkProps
)

export function BaseButton({ to, variant, children, ...args }: AllProps) {
    const Tag = to !== undefined ? NavLink : "button";

    return createElement(
        Tag,
        {
            ...args,
            // @ts-expect-error to is not required for buttons
            to: to,
            className: clsx(style.btn, style[variant], args.className)
        },
        children,
    );
}