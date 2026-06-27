import { expect,test } from "@playwright/test";

test('Commands_Demo',async({page})=>{
    
    await page.goto("https://omayo.blogspot.com/");
    console.log("Url:",page.url());
    console.log("Title:",await page.title());
    console.log("Page content:",(await page.content()).substring(1,302));

    console.log("------------------------------------------------------");

    await page.goto("https://tutorialsninja.com/demo/");
    console.log("Url:",page.url());
    console.log("Title:",await page.title());
    console.log("Page content:",(await page.content()).substring(1,302));

    console.log("------------------------------------------------------");

    await page.goBack();
    console.log("Url:",page.url());
    console.log("Title:",await page.title());
    console.log("Page content:",(await page.content()).substring(1,302));

    console.log("------------------------------------------------------");

    await page.goForward();
    console.log("Url:",page.url());
    console.log("Title:",await page.title());
    console.log("Page content:",(await page.content()).substring(1,302));

    console.log("------------------------------------------------------");

    await page.reload();

})