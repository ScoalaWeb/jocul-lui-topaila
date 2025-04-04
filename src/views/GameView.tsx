import {Score} from "../components/Score";
import {Title} from "../components/Title";
import {useState} from "react";
import {GameBoard} from "../components/GameBoard";
import style from "./GameView.module.css";
import GameEvents from "../lib/GameEvents.ts";

export default function GameView() {
    const [score, setScore] = useState(0);

    const onGameEvent = (event: GameEvents, turns?: number) => {
        switch (event) {
            case GameEvents.NewGame:
                setScore(0);
                break;
            case GameEvents.Match:
                setScore(score + 11 - Math.min(turns!, 5));
                break;
            case GameEvents.SmartMatch:
                setScore(score + 20);
                break;
            case GameEvents.LuckyMatch:
                setScore(score + 25);
                break;
        }
    }

    return (<div className={style.GameView}>
        <div className={style.title}>
            <Title />
        </div>
        <div className={style.score}>
            <Score value={score} />
        </div>
        <div className={style.board}>
            <GameBoard
                onEvent={onGameEvent}
            />
        </div>
    </div>);
}