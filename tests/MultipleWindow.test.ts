import {test,expect} from '@playwright/test';

test('Multiple Window',async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows");

    console.log("First window URL:"+page.url());

    const [window]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click(),
    ]);

    await window.waitForLoadState("domcontentloaded");

    const [tab]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click(),
    ]);

    await tab.waitForLoadState("domcontentloaded");

    const pages = context.pages();

    for (const p of pages){

        console.log("-----------------------------");
        console.log("URL:",p.url());
        console.log("Title:",await p.title());

    }
});

test('Iterative Windows',async({page,context})=>{

    await page.goto("https://demoqa.com/browser-windows");

    console.log("First window URL:"+page.url());

    const [window]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click(),
    ]);

    await window.waitForLoadState("domcontentloaded");

    const [tab]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click(),
    ]);

    await tab.waitForLoadState("domcontentloaded");

    const pages = context.pages();

    console.log("Count:",pages.length);

    for (const p of pages){

        console.log("URL:",p.url());

        if(p.url().includes("sample")){
            const text = await p.locator("#sampleHeading").textContent();

            console.log("Sample page Heading:",text);
        }

    }



})