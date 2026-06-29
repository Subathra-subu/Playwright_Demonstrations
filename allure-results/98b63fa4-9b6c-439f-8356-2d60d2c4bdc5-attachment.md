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
  - Expect "soft toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Log out' })

```

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: admin
    - text: "Password:"
    - textbox: admin
    - button "Close"
    - button "Log in"
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
  - img "Second slide"
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
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('link', { name: 'Log out' })
Expected: "Log out"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "soft toHaveText" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Log out' })

```

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: admin
    - text: "Password:"
    - textbox: admin
    - button "Close"
    - button "Log in"
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
  - img "Second slide"
  - img "Third slide"
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
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#nameofuser')
Expected: "Welcome admin"
Received: ""

Call log:
  - Expect "soft toHaveText" with timeout 5000ms
  - waiting for locator('#nameofuser')
    7 × locator resolved to <a href="#" id="nameofuser" class="nav-link"></a>
      - unexpected value ""

```

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: admin
    - text: "Password:"
    - textbox: admin
    - button "Close"
    - button "Log in"
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
  - img "Third slide"
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
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import { expect,test } from '@playwright/test';
  2  | 
  3  | test('LoginTest',{tag:["@smoke","@regression"]},async({page})=>{
  4  |     await page.goto("https://www.demoblaze.com/");
  5  |     await page.locator("#login2").click();
  6  |     await page.locator("#loginusername").fill("admin");
  7  |     await page.locator("#loginpassword").fill("admin");
  8  |     await page.locator("//button[text()='Log in']").click();
  9  | 
  10 |     await expect.soft(page.getByRole("link",{name:'Log out'})).toBeVisible();
  11 |     await expect.soft(page.getByRole("link",{name:'Log out'})).toHaveText("Log out");
> 12 |     expect.soft(page.locator("#nameofuser")).toHaveText("Welcome admin");
     |                                              ^ Error: expect(locator).toHaveText(expected) failed
  13 | })
  14 | 
  15 | test('LoginTest1',async({page})=>{
  16 |     // test.skip(true,"Under development");
  17 |     await page.goto("https://www.demoblaze.com/");
  18 |     await page.locator("#login2").click();
  19 |     await page.locator("#loginusername").fill("admin");
  20 |     await page.locator("#loginpassword").fill("admin");
  21 |     await page.locator("//button[text()='Log in']").click();
  22 | 
  23 |     await expect.soft(page.getByRole("link",{name:'Log out'})).toBeVisible();
  24 |     await expect.soft(page.getByRole("link",{name:'Log out'})).toHaveText("Log out");
  25 |     expect.soft(page.locator("#nameofuser")).toHaveText("Welcome admin");
  26 | })
  27 | 
  28 | test('LoginTest2 @smoke',async({page})=>{
  29 |     await page.goto("https://www.demoblaze.com/");
  30 |     await page.locator("#login2").click();
  31 |     await page.locator("#loginusername").fill("admin");
  32 |     await page.locator("#loginpassword").fill("admin");
  33 |     await page.locator("//button[text()='Log in']").click();
  34 | 
  35 |     await expect.soft(page.getByRole("link",{name:'Log out'})).toBeVisible();
  36 |     await expect.soft(page.getByRole("link",{name:'Log out'})).toHaveText("Log out");
  37 |     expect.soft(page.locator("#nameofuser")).toHaveText("Welcome admin");
  38 | })
  39 | 
  40 | 
  41 | 
  42 | 
  43 | 
  44 | 
```