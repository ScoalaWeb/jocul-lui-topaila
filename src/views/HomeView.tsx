import {HomeMarquee} from "../components/HomeMarquee";
import {Title} from "../components/Title";
import {BaseButton} from "../components/BaseButton";
import style from "./HomeView.module.css";

export default function HomeView() {
    return (<div className={style.home}>
        <div className={style.title}>
            <Title giga={true} drop={true} />
            <BaseButton
                variant="start"
                to="/game"
            >
                Start
            </BaseButton>
        </div>

        <HomeMarquee />
    </div>)
}