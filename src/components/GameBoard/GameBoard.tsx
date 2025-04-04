import style from "./GameBoard.module.css";
import {useEffect, useState} from "react";
import { cards } from "../../lib/playing-cards.ts";
import {PlayingCard} from "../PlayingCard";
import {BaseButton} from "../BaseButton";
import GameEvents from "../../lib/GameEvents.ts";

export interface GameBoardProps {
    onEvent?: (event: GameEvents, turns?: number) => void;
}

const cardNames = Object.keys(cards);

enum CardState {
    Front,
    Back,
    Matched
}

export function GameBoard({ onEvent }: GameBoardProps) {
    const [displayCards, setDisplayCards] = useState<Array<keyof typeof cards>>([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [cardStates, setCardStates] = useState<Array<CardState>>([]);
    const [turns, setTurns] = useState<Array<number>>([]);

    const newGame = () => {
        const cards = [...cardNames, ...cardNames].sort(
            () => Math.random() - 0.5
        );

        setDisplayCards(cards);
        setIsGameOver(false);
        setCardStates(cards.map(() => CardState.Back));
        setTurns(cards.map(() => 0));
        onEvent?.(GameEvents.NewGame);
    }

    useEffect(newGame, []);

    const getCardState = (index: number) => {
        return cardStates[index] === CardState.Back ? "back" : "front";
    }

    const turn = (index: number) => {
        const newCardStates = [...cardStates];
        const newTurns = [...turns];

        const turnedCount = cardStates.filter((cs) => cs === CardState.Front).length;

        newCardStates[index] = CardState.Front;
        newTurns[index] += 1;

        if (turnedCount === 2) {
            newCardStates.forEach((cs, csIndex) => {
                if (cs === CardState.Front && csIndex !== index) {
                    newCardStates[csIndex] = CardState.Back;
                } else {
                    newCardStates[csIndex] = cs;
                }
            })
        } else if (turnedCount === 1) {
            const firstCardIndex = cardStates.findIndex(c => c === CardState.Front);
            const firstCard = displayCards[firstCardIndex];

            if (firstCard === displayCards[index]) {
                const currentCardTurns = newTurns[index];
                const firstCardTurns = newTurns[firstCardIndex];
                newCardStates[firstCardIndex] = CardState.Matched;
                newCardStates[index] = CardState.Matched;

                const notMatched = newCardStates.find((cs) => cs !== CardState.Matched);

                if (notMatched === undefined) {
                    setIsGameOver(true);
                } else if (currentCardTurns === 1 && firstCardTurns === 1) {
                    onEvent?.(GameEvents.LuckyMatch)
                } else if (currentCardTurns === 2 && firstCardTurns < 3) {
                    onEvent?.(GameEvents.SmartMatch)
                } else {
                    onEvent?.(GameEvents.Match, newTurns[index]);
                }
            }
        }

        setTurns(newTurns);
        setCardStates(newCardStates);
    }

    return (
        <div className={ style.GameBoard }>
            <div className={ style.cards }>
                {displayCards.map((card, index) => (
                    <PlayingCard
                        key={`${card}-${index}`}
                        side={getCardState(index)}
                        file={card}
                        onTurn={() => turn(index)}
                    />
                ))}
            </div>

            {isGameOver && <div className={ style.reset }>
                <BaseButton
                    variant="restart"
                    className={style.restart}
                    onClick={newGame}
                >
                    Restart
                </BaseButton>
            </div>}
        </div>
    );
}