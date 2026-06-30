import {test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.route('**/*', route => {
        const url = route.request().url();

        if (
            url.includes('googleads') ||
            url.includes('doubleclick') ||
            url.includes('googlesyndication') ||
            url.includes('adservice')
        ) {
            route.abort();
        } else {
            route.continue();
        }
    });

    await  page.goto('https://automationexercise.com');

});

test('Search product',async({page})=>{
  
  await expect(page.locator("//a[normalize-space()='Home']")).toBeVisible();
  await page.click('//a[text()=" Products"]');
  await expect(page).toHaveTitle('Automation Exercise - All Products');
  await page.locator("//input[@id='search_product']").fill('Blue Top');
  await page.locator('//button[@id="submit_search"]').click();
  await expect(page.locator('//h2[text()="Searched Products"]')).toBeVisible();
  await expect(page.locator("(//p[text()='Blue Top'])[1]")).toHaveText('Blue Top');
})