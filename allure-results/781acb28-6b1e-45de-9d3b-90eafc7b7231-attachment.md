# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NewWindow.test.ts >> New Window
- Location: tests\NewWindow.test.ts:3:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#sampleHeading')
Expected: "This is a samplepage"
Received: "This is a sample page"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#sampleHeading')
    13 × locator resolved to <h1 id="sampleHeading">This is a sample page</h1>
       - unexpected value "This is a sample page"

```

```yaml
- heading "This is a sample page" [level=1]
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('New Window',async({page,context})=>{
  4  |     await page.goto("https://demoqa.com/browser-windows");
  5  | 
  6  |     console.log("First window URL:"+page.url);
  7  | 
  8  |     const [newWindow]=await Promise.all([
  9  |         context.waitForEvent("page"),
  10 |         page.locator("#windowButton").click(),
  11 |     ]);
  12 | 
  13 |     await newWindow.waitForLoadState("domcontentloaded");
  14 | 
  15 |     console.log("New window URL:"+newWindow.url);
  16 | 
  17 |     const heading = await newWindow.locator("#sampleHeading").textContent();
  18 |     console.log("New Window content:"+heading);
  19 | 
> 20 |     await expect(newWindow.locator("#sampleHeading")).toHaveText("This is a samplepage");
     |                                                       ^ Error: expect(locator).toHaveText(expected) failed
  21 | 
  22 |     await window.close();
  23 | 
  24 |     console.log("First window URL:"+page.url);
  25 | 
  26 | })
```