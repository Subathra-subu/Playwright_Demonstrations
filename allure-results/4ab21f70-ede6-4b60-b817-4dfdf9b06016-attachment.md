# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContextDemo.test.ts >> Login_Demo
- Location: tests\ContextDemo.test.ts:3:1

# Error details

```
Error: page.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#loginusername')
    - locator resolved to <input type="text" id="loginusername" class="form-control"/>
    - fill("admin")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms

```

# Test source

```ts
  1  | import { chromium,test } from "@playwright/test";
  2  | 
  3  | test("Login_Demo",async()=>{
  4  |     const browser = await chromium.launch({headless:false});
  5  | 
  6  |     const context = await browser.newContext();
  7  | 
  8  |     const page = await context.newPage();
  9  | 
  10 |     await page.goto("https://www.demoblaze.com");
  11 | 
  12 |     await page.click('#login2')
> 13 |     await page.fill('#loginusername',"admin");
     |                ^ Error: page.fill: Target page, context or browser has been closed
  14 |     await page.fill('#loginpassword',"admin");
  15 |     await page.click('button[onclick="logIn()"]');
  16 | 
  17 |     await page.waitForTimeout(5000);
  18 | 
  19 |     // const page1 = await context.newPage();
  20 |     // await page1.goto("https://www.demoblaze.com/cart.html");
  21 | 
  22 |     // await page.waitForTimeout(5000);
  23 | 
  24 |     const newContext = await browser.newContext();
  25 |     const page1 = await newContext.newPage();
  26 |     await page1.goto("https://www.demoblaze.com/cart.html");
  27 | 
  28 |     await page.waitForTimeout(5000);
  29 | })
```