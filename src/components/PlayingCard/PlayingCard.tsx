import style from "./PlayingCard.module.css";
import { blank, back, cards } from "../../lib/playing-cards.ts";
import clsx from "clsx";
import {useEffect, useState} from "react";

export interface PlayingCardProps {
    side: "front" | "back"
    file: keyof typeof cards
    onTurn?: () => void
}

export function PlayingCard({ side, file, onTurn }: PlayingCardProps) {
    const [currentSide, setCurrentSide] = useState(side);

    useEffect(() => {
        setCurrentSide(side);
    }, [side]);

    const image = cards[file];

    const turn = () => {
        if (currentSide === "front") return;

        setCurrentSide("front");
        onTurn?.();
    }

    return (
        <button
            className={ clsx(style.PlayingCard, style[currentSide]) }
            onClick={turn}
        >
            <div
                className={ style.frontSide }
                dangerouslySetInnerHTML={{
                    __html: currentSide === "front" ? image : blank
                }}
            />
            <div
                className={ style.backSide }
                dangerouslySetInnerHTML={{
                    __html: back
                }}
            />
            <span className="sr-only">
                {
                    currentSide === "front"
                        ? `Ai găsit cartea "${file}".`
                        : "Apasă pentru a descoperi cartea."
                }
            </span>
        </button>
    );
}