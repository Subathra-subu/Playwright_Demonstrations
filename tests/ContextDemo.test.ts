import { chromium,test } from "@playwright/test";

test("Login_Demo",async()=>{
    const browser = await chromium.launch({headless:false});

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://www.demoblaze.com");

    await page.click('#login2')
    await page.fill('#loginusername',"admin");
    await page.fill('#loginpassword',"admin");
    await page.click('button[onclick="logIn()"]');

    await page.waitForTimeout(5000);

    // const page1 = await context.newPage();
    // await page1.goto("https://www.demoblaze.com/cart.html");

    // await page.waitForTimeout(5000);

    const newContext = await browser.newContext();
    const page1 = await newContext.newPage();
    await page1.goto("https://www.demoblaze.com/cart.html");

    await page.waitForTimeout(5000);
})