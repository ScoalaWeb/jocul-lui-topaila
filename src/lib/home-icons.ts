import filesToObject from "./filesToObject.ts";

export const topIconFiles = import.meta.glob("./../assets/home/top/*.svg", {
    eager: true,
    query: "?raw",
    import: "default"
});

export const top = filesToObject(topIconFiles) as Record<string, string>;


export const bottomIconFiles = import.meta.glob("./../assets/home/bottom/*.svg", {
    eager: true,
    query: "?raw",
    import: "default"
});

export const bottom = filesToObject(bottomIconFiles) as Record<string, string>;

export { default as logo } from "../assets/home/logo.svg?raw";


