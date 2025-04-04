import { Meta } from "@storybook/react";
import { HomeCard as component } from "./HomeCard.tsx";
import { top, bottom } from "../../lib/home-icons.ts";

const meta = {
    title: "Game/HomeCard",
    component,

    argTypes: {
        file: {
            control: {
                type: "select",
            },

            options: [...Object.keys(top), ...Object.keys(bottom)],
        }
    }
} satisfies Meta<typeof component>

export default meta;

export const Top = {
    args: {
        variant: "top",
        file: "1"
    }
};

export const Bottom = {
    args: {
        variant: "bottom",
        file: "1"
    }
};

export const Logo = {
    args: {
        variant: "logo",
        file: "1"
    }
};
