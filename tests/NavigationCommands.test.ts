import { chromium,test } from "@playwright/test";

test("Navigation",async()=>{
    const browser = await chromium.launch({headless:false});

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://www.demoblaze.com");
    await page.waitForTimeout(2000);

    await page.goto("https://www.flipkart.com/");
    await page.waitForTimeout(2000);

    await page.goBack();
    await page.waitForTimeout(2000);

    await page.goForward();
    await page.waitForTimeout(2000);

    await page.reload();

    await browser.close();

})