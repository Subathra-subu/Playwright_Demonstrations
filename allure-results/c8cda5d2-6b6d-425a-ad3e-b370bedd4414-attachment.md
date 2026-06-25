# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PageObjectCommands.spec.ts >> PageObjectCommands
- Location: tests\PageObjectCommands.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//b[text()=\'Enter Account Information\']')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//b[text()=\'Enter Account Information\']')

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address"
- textbox "Password"
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name": Karmegam
- textbox "Email Address": karkuzhal@gmail.com
- paragraph: Email Address already exist!
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Automation practice website"
  - link "API integration services"
  - link "Test case management"
- insertion:
  - iframe
```

# Test source

```ts
  1  | import { chromium,expect,test } from "@playwright/test";
  2  | 
  3  | test("PageObjectCommands",async()=>{
  4  |     const browser = await chromium.launch({headless:false});
  5  | 
  6  |     const context = await browser.newContext();
  7  | 
  8  |     const page = await context.newPage();
  9  | 
  10 |     await page.goto("https://automationexercise.com");
  11 |     await expect(page).toHaveTitle("Automation Exercise");
  12 | 
  13 |     await page.getByRole('link',{name:'Signup / Login'}).click();
  14 | 
  15 |     await expect(page.locator('.signup-form')).toBeVisible();
  16 | 
  17 |     await page.getByPlaceholder('Name').fill("Karmegam");
  18 |     await page.locator("//input[@data-qa='signup-email']").fill('karkuzhal@gmail.com');
  19 |     await page.getByRole('button',{name:'Signup'}).click();
  20 | 
> 21 |     await expect(page.locator("//b[text()='Enter Account Information']")).toBeVisible();
     |                                                                           ^ Error: expect(locator).toBeVisible() failed
  22 | 
  23 |     await page.locator('#id_gender2').check();
  24 |     await page.getByLabel('Password ').fill('12345');
  25 |     await page.locator('#days').selectOption('9');
  26 |     await page.locator('#months').selectOption('October');
  27 |     await page.locator('#years').selectOption('2004');
  28 |     await page.locator('#newsletter').check();
  29 |     await page.locator('[type="checkbox"]').nth(1).check();
  30 | 
  31 |     await page.getByLabel('First name').fill('Karmega');
  32 |     await page.getByLabel('Last name').fill('Kuzhali');
  33 |     await page.locator('#address1').fill('Cross street');
  34 |     await page.locator('#country').selectOption('India');
  35 |     await page.getByLabel('State').fill('TamilNadu');
  36 |     await page.getByLabel('City').fill('Salem');
  37 |     await page.locator('#zipcode').fill('987654');
  38 |     await page.getByLabel('Mobile Number').fill('9876543210');
  39 | 
  40 |     await page.getByRole('button',{name:'Create Account'}).click();
  41 | 
  42 |     const actual = await page.locator('.title.text-center').textContent();
  43 |     expect(actual!.toUpperCase()).toEqual("ACCOUNT CREATED!");
  44 | 
  45 |     await page.getByRole('link',{name:'Continue'}).click();
  46 | 
  47 |     await expect(page.locator('.fa fa-user')).toHaveText(" Logged in as emily");
  48 | 
  49 |     await page.getByRole('link',{name:'Delete Account'}).click();
  50 | 
  51 |     await expect(page.locator('.title text-center')).toBeVisible();
  52 | 
  53 |     await page.getByRole('link',{name:'Continue'}).click();
  54 |     expect(page.url).toContain("https://automationexercise.com/");
  55 | });
```