import { chromium,expect,test } from "@playwright/test";

test("PageObjectCommands",async()=>{
    const browser = await chromium.launch({headless:false});

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://automationexercise.com");
    await expect(page).toHaveTitle("Automation Exercise");

    await page.getByRole('link',{name:'Signup / Login'}).click();

    await expect(page.locator('.signup-form')).toBeVisible();

    await page.getByPlaceholder('Name').fill("Karmegam");
    await page.locator("//input[@data-qa='signup-email']").fill('karkuzhal@gmail.com');
    await page.getByRole('button',{name:'Signup'}).click();

    await expect(page.locator("//b[text()='Enter Account Information']")).toBeVisible();

    await page.locator('#id_gender2').check();
    await page.getByLabel('Password ').fill('12345');
    await page.locator('#days').selectOption('9');
    await page.locator('#months').selectOption('October');
    await page.locator('#years').selectOption('2004');
    await page.locator('#newsletter').check();
    await page.locator('[type="checkbox"]').nth(1).check();

    await page.getByLabel('First name').fill('Karmega');
    await page.getByLabel('Last name').fill('Kuzhali');
    await page.locator('#address1').fill('Cross street');
    await page.locator('#country').selectOption('India');
    await page.getByLabel('State').fill('TamilNadu');
    await page.getByLabel('City').fill('Salem');
    await page.locator('#zipcode').fill('987654');
    await page.getByLabel('Mobile Number').fill('9876543210');

    await page.getByRole('button',{name:'Create Account'}).click();

    const actual = await page.locator('.title.text-center').textContent();
    expect(actual).toEqual("Account Created!");

    await page.getByRole('link',{name:'Continue'}).click();

    await expect(page.locator("//ul[@class='nav navbar-nav']/descendant::a[10]")).toHaveText("Logged in as Karmegam");

    await page.getByRole('link',{name:'Delete Account'}).click();

    await expect(page.locator('.title.text-center')).toBeVisible();

    await page.getByRole('link',{name:'Continue'}).click();

    await expect(page).toHaveURL("https://automationexercise.com/");
});