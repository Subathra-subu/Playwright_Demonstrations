import {expect,test} from '@playwright/test'

const searchData = [
    {keyword:"Selenium",expectedTitle:"Selenium"},
    {keyword:"Playwright",expectedTitle:"Playwright"},
    {keyword:"cypress",expectedTitle:"cypress"}
]

test.describe('Search',()=>{

    for (const data of searchData){
        test(`Search flow - ${data.keyword}`,async({page})=>{


            await page.goto("https://omayo.blogspot.com/");

            await page.locator("input[name='q']").fill(data.keyword);
            await page.keyboard.press("Enter");

            // const result = page.locator("h3").first();
            // await result.click();

            await expect(page).toHaveURL(new RegExp(data.expectedTitle,"i"));

        })
    }

})