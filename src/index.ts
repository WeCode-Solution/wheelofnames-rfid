import puppeteer from "puppeteer";
import getViewport from "GetViewport.js";

// Summon browser and page
const browser = await puppeteer.launch({
    headless: false,
    args: [
        "--start-fullscreen",
        "--window-position=0,0"
    ]
});
const [page] = await browser.pages();

await page.setViewport(getViewport());
await page.goto("https://wheelofnames.com/");
