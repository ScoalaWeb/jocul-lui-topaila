import { Meta } from "@storybook/react";
import { BaseMarquee as component } from "./BaseMarquee.tsx";

const meta = {
    title: "Game/BaseMarquee",
    component,
    parameters: {
        layout: 'left',
    }
} satisfies Meta<typeof component>

export default meta;

export const BaseMarquee = {
    args: {
        children: "Marquee",
        reversed: false
    },
};

export const Reversed = {
    args: {
        children: "Marquee",
        reversed: true,
        duration: "2s"
    }
};

export const Long = {
    args: {
        children: "Longer marquee test to demo speed",
        reversed: false,
        duration: "10s"
    }
};
