import { expect,test } from '@playwright/test';

test.describe("Login1",{tag:"@regression"},()=>{

    test('LoginTest',async({page})=>{
        await page.goto("https://www.demoblaze.com/");
        await page.locator("#login2").click();
        await page.locator("#loginusername").fill("admin");
        await page.locator("#loginpassword").fill("admin");
        await page.locator("//button[text()='Log in']").click();

        await expect.soft(page.getByRole("link",{name:'Log out'})).toBeVisible();
        await expect.soft(page.getByRole("link",{name:'Log out'})).toHaveText("Log out");
        expect.soft(page.locator("#nameofuser")).toHaveText("Welcome admin");
    })

})

test.describe("Login2 @sanity",()=>{

    test('LoginTest',async({page})=>{
        await page.goto("https://www.demoblaze.com/");
        await page.locator("#login2").click();
        await page.locator("#loginusername").fill("admin");
        await page.locator("#loginpassword").fill("admin");
        await page.locator("//button[text()='Log in']").click();

        await expect.soft(page.getByRole("link",{name:'Log out'})).toBeVisible();
        await expect.soft(page.getByRole("link",{name:'Log out'})).toHaveText("Log out");
        expect.soft(page.locator("#nameofuser")).toHaveText("Welcome admin");
    })

})
    