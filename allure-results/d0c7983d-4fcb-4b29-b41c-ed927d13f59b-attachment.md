# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demoblaze_login.test.ts >> LoginDemo Test
- Location: tests\Demoblaze_login.test.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.demoblaze.com/
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('LoginDemo Test',async({page})=>{
> 4 |     await page.goto(process.env.BASE_URL!);
    |                ^ Error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.demoblaze.com/
  5 |     await page.click('#login2')
  6 |     await page.fill('#loginusername',process.env.U_NAME!);
  7 |     await page.fill('#loginpassword',process.env.PASSWORD!);
  8 |     await page.click('button[onclick="logIn()"]');
  9 | });
```