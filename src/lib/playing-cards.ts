import filesToObject from "./filesToObject.ts";

export const cardFiles = import.meta.glob("./../assets/cards/*.svg", {
    eager: true,
    query: "?raw",
    import: "default"
});

const allCards = filesToObject(cardFiles) as Record<string, string>;

export const { back, blank, ...cards } = allCards;