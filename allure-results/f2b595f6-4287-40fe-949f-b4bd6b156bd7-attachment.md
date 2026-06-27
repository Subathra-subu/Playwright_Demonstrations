# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PageObjectCommands_login.spec.ts >> Valid Login
- Location: tests\PageObjectCommands_login.spec.ts:2:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Logged in as emily')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Logged in as emily')

```

```yaml
- heading "This page isn’t working" [level=1]
- paragraph:
  - strong: automationexercise.com
  - text: is currently unable to handle this request.
- text: HTTP ERROR 500
- button "Reload"
```

# Test source

```ts
  1  | import {test,expect } from '@playwright/test';
  2  | test('Valid Login',async({page})=>{
  3  |    await page.goto('https://automationexercise.com/',{
  4  |      waitUntil: "domcontentloaded"
  5  |    });
  6  |    await page.locator("//a[normalize-space()='Signup / Login']").click();
  7  |    await page.locator('//input[@data-qa="login-email"]').fill('emilydavis@gmail.com');
  8  |    await page.locator('//input[@data-qa="login-password"]').fill('12345');
  9  |    await page.click('//button[@data-qa="login-button"]');
> 10 |    await expect(page.getByText('Logged in as emily')).toBeVisible();
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  11 |    
  12 | })
```