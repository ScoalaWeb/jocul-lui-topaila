import { Meta } from "@storybook/react";
import { Title as component } from "./Title.tsx";

const meta = {
    title: "Game/Title",
    component,
} satisfies Meta<typeof component>

export default meta;

export const Title = {
    args: {
        giga: true,
        drop: true
    },
};
