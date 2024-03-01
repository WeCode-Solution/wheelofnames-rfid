import puppeteer from "puppeteer";
import getViewport from "GetViewport.js";

// Summon browser and page
const browser = await puppeteer.launch({
    headless: false,
    userDataDir: "./userData",
    args: [
        "--start-fullscreen",
        "--window-position=0,0"
    ]
});
const [page] = await browser.pages();

// Setup browser
await page.setViewport(getViewport());
await page.goto("https://wheelofnames.com/");

// Get element of handler
const spinButton = await page.waitForSelector("#wheelCanvas");
if (spinButton === null) {
    throw new Error("No spin button located");
}

// Click the button
await spinButton.click();
