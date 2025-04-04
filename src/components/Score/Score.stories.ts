import { Meta } from "@storybook/react";
import { Score as component } from "./Score.tsx";

const meta = {
    title: "Game/Score",
    component,
} satisfies Meta<typeof Score>

export default meta;

export const Score = {
    args: {
        value: 50,
    }
};