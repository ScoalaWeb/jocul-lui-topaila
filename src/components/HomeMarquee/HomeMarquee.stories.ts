import { Meta } from "@storybook/react";
import { HomeMarquee as component } from "./HomeMarquee.tsx";

const meta = {
    title: "Game/HomeMarquee",
    component,
    parameters: {
        layout: 'left',
    }
} satisfies Meta<typeof component>

export default meta;

export const HomeMarquee = {};
