import { test,expect } from "@playwright/test";

test("Browser_Commands",async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    const title = await page.title();
    console.log(title);

    const url = page.url();
    console.log(url);

    const page_content = await page.content();
    console.log(page_content.substring(0,300));

    await page.close();

})
