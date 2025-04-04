import { Meta } from "@storybook/react";
import { BaseButton as component } from "./BaseButton.tsx";

const meta = {
    title: "Game/BaseButton",
    component,
} satisfies Meta<typeof component>

export default meta;

export const StartButton = {
    args: {
        children: "Start",
        variant: "start"
    }
};

export const RestartButton = {
    args: {
        children: "Restart",
        variant: "restart"
    }
};
