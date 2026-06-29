import { expect,test,TestInfo } from "@playwright/test";

test('KeyboardAction',async({page},testInfo)=>{
    testInfo.setTimeout(45000);
    await page.goto("https://www.testmuai.com/selenium-playground/key-press/");
    await page.locator("#my_field").click();
    await page.keyboard.press('PageUp');
    console.log(await page.locator("#result").textContent());

})

test.afterEach(async ({}, testInfo) => {
        console.log("Title:",testInfo.title);
        console.log("Status:",testInfo.status);
        console.log("ExpectedStatus:",testInfo.expectedStatus);
        console.log("Retry:",testInfo.retry);
        console.log("Output Directory:",testInfo.outputDir);
        console.log("Duration:", testInfo.duration, "ms");
});