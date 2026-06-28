# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PracticePrograms\Alerts.test.ts >> Alerts
- Location: tests\PracticePrograms\Alerts.test.ts:3:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#alert1')

```

# Test source

```ts
  1  | import {expect,test } from "@playwright/test";
  2  | 
  3  | test('Alerts',async({page})=>{
  4  | 
  5  |     page.on('dialog',async(alert)=>{
  6  |         console.log(alert.message());
  7  |         await alert.accept();
  8  |     })
  9  |     
> 10 |     await page.locator('#alert1').click();
     |                                   ^ Error: locator.click: Target page, context or browser has been closed
  11 | })
  12 | 
```