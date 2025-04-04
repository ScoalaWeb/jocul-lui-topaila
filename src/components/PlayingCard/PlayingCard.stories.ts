import { Meta } from "@storybook/react";
import { PlayingCard as component } from "./PlayingCard.tsx";
import {cards} from "../../lib/playing-cards.ts";

const meta = {
    title: "Game/PlayingCard",
    component,

    argTypes: {
        file: {
            control: {
                type: "select",
            },

            options: [...Object.keys(cards)],
        }
    }
} satisfies Meta<typeof component>

export default meta;

export const PlayingCard = {
    args: {
        side: "front",
        file: "bunny",
    },
};

export const BackSide = {
    args: {
        side: "back",
        file: "bunny"
    }
};
