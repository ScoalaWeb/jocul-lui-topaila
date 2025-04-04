import style from "./Score.module.css";

export interface ScoreProps {
    value: number;
}

export function Score({ value }: ScoreProps) {
    return <div className={style.score}>

        <span className={style.value}>
            {value}
        </span>

        <span className={style.text}>
            puncte
        </span>

    </div>
}