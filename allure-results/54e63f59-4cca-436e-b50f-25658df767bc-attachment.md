# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Markers\Skip.test.ts >> LoginTest
- Location: tests\Markers\Skip.test.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Log out' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Log out' })
    - waiting for" https://www.demoblaze.com/" navigation to finish...
    - navigated to "https://www.demoblaze.com/"

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
```

# Test source

```ts
  1  | import { expect,test } from '@playwright/test';
  2  | 
  3  | test('LoginTest',async({page})=>{
  4  |     await page.goto("https://www.demoblaze.com/");
  5  |     await page.locator("#login2").click();
  6  |     await page.locator("#loginusername").fill("admin");
  7  |     await page.locator("#loginpassword").fill("admin");
  8  |     await page.locator("//button[text()='Log in']").click();
  9  | 
> 10 |     await expect(page.getByRole("link",{name:'Log out'})).toBeVisible();
     |                                                           ^ Error: expect(locator).toBeVisible() failed
  11 |     await expect(page.getByRole("link",{name:'Log out'})).toHaveText("Log out");
  12 |     const welcome = await page.locator("#nameofuser");
  13 |     expect (welcome).toHaveText("Welcome admin");
  14 | })
```