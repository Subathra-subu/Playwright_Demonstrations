# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PageObjectCommands.spec.ts >> PageObjectCommands
- Location: tests\PageObjectCommands.spec.ts:3:1

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: "ACCOUNT CREATED!"
Received: "Account Created!"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Automation Exercise website" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Automation Exercise website" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e40]:
    - heading "Account Created!" [level=2] [ref=e41]
    - paragraph [ref=e42]: Congratulations! Your new account has been successfully created!
    - paragraph [ref=e43]: You can now take advantage of member privileges to enhance your online shopping experience with us.
    - link "Continue" [ref=e45] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=e46]:
    - generic [ref=e51]:
      - heading "Subscription" [level=2] [ref=e52]
      - generic [ref=e53]:
        - textbox "Your email address" [ref=e54]
        - button "" [ref=e55] [cursor=pointer]:
          - generic [ref=e56]: 
        - paragraph [ref=e57]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e61]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e63]:
    - iframe [ref=e65]:
      
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
  21 |     await expect(page.locator("//b[text()='Enter Account Information']")).toBeVisible();
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
> 43 |     expect(actual).toEqual("ACCOUNT CREATED!");
     |                    ^ Error: expect(received).toEqual(expected) // deep equality
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