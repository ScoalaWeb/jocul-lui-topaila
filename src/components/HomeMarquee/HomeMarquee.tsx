import style from "./HomeMarquee.module.css";
import { top, bottom } from "../../lib/home-icons.ts";
import {BaseMarquee} from "../BaseMarquee";
import {Fragment} from "react";
import {HomeCard} from "../HomeCard";

const topKeys = Object.keys(top);
const bottomKeys = Object.keys(bottom);

export function HomeMarquee() {
    return (
        <div className={ style.marquee }>
            <BaseMarquee>
                <div className={style.cards}>
                    {topKeys.map((name) => (
                        <Fragment key={name}>
                            <HomeCard variant="top" file={name} />
                            <HomeCard variant="logo" />
                        </Fragment>
                    ))}
                </div>
            </BaseMarquee>
            <BaseMarquee reversed={true}>
                <div className={style.cards}>
                    {bottomKeys.map((name) => (
                        <Fragment key={name}>
                            <HomeCard variant="logo" />
                            <HomeCard variant="bottom" file={name} />
                        </Fragment>
                    ))}
                </div>
            </BaseMarquee>
        </div>
    );
}