import { Meta } from "@storybook/react";
import { GameBoard as component } from "./GameBoard.tsx";

const meta = {
    title: "Game/GameBoard",
    component,
} satisfies Meta<typeof component>

export default meta;

export const GameBoard = {
    args: {},
};
