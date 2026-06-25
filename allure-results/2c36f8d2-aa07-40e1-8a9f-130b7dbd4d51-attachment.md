# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PageObjectCommands.spec.ts >> PageObjectCommands
- Location: tests\PageObjectCommands.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeDisabled() failed

Locator: locator('//b[text()=\'Enter Account Information\']')
Expected: disabled
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeDisabled" with timeout 5000ms
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
- textbox "Email Address": kar@gmail.com
- paragraph: Email Address already exist!
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
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
  11 | 
  12 |     await expect(page).toHaveTitle("Automation Exercise");
  13 | 
  14 |     await page.getByRole('link',{name:'Signup / Login'}).click();
  15 | 
  16 |     await expect(page.locator('.signup-form')).toBeVisible();
  17 | 
  18 |     await page.getByPlaceholder('Name').fill("Karmegam");
  19 | 
  20 |     await page.locator("//input[@data-qa='signup-email']").fill('kar@gmail.com');
  21 | 
  22 |     await page.getByRole('button',{name:'Signup'}).click();
  23 | 
> 24 |     await expect(page.locator("//b[text()='Enter Account Information']")).toBeDisabled();
     |                                                                           ^ Error: expect(locator).toBeDisabled() failed
  25 | 
  26 |     await page.getByTestId('id_gender2').check();
  27 | 
  28 |     await page.getByLabel('Password ').fill('12345');
  29 | 
  30 |     await page.locator('#newsletter').check();
  31 | 
  32 | 
  33 | })
```