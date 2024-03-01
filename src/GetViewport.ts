import process from "node:process";
import type { Viewport } from "puppeteer";

function splitViewport(viewport: string): number[] {
    return viewport.split("x").map(val => Number.parseInt(val, 10)).slice(0, 2);
}

export default function getViewport(): Viewport {
    const [width, height] = splitViewport(process.env.CHROME_VIEWPORT ?? "1280x720");
    return { width, height };
}
