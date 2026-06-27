import { expect,test } from "@playwright/test";

test('Demo', async({page}) => {
    
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");

    console.log(await page.title());

    console.log((await page.content()).substring(0,100));

    console.log(await page.getByPlaceholder('Please enter your Message').getAttribute("placeholder"));

    console.log("Before message:"+await page.getByPlaceholder('Please enter your Message').inputValue());

    await page.getByPlaceholder('Please enter your Message').fill('Subathra');

    console.log("After message:"+await page.getByPlaceholder('Please enter your Message').inputValue());

    await page.locator('//button[@id="showInput"]').click();

    await page.locator('#message').isVisible();

    console.log(await page.locator('#message').inputValue());

});
