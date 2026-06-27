# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SumOfTwoNumbers.spec.ts >> Sum
- Location: tests\SumOfTwoNumbers.spec.ts:3:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#addmessage')
Expected: "38"
Received: "Entered value is not a number"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#addmessage')
    13 × locator resolved to <p class="mt-20" id="addmessage">Entered value is not a number</p>
       - unexpected value "Entered value is not a number"

```

```yaml
- paragraph: Entered value is not a number
```

# Test source

```ts
  1  | import { expect,test } from "@playwright/test";
  2  | 
  3  | test('Sum',async({page})=>{
  4  | 
  5  |     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
  6  | 
  7  |     const number1 = 10;
  8  |     const number2 = 28;
  9  | 
  10 |     await page.locator('#sum1').scrollIntoViewIfNeeded();
  11 |     await page.locator('#sum1').fill(number1.toString());
  12 |     await page.locator('#sum2').fill(number2.toString());
  13 | 
  14 |     await page.getByRole('button',{name:'Get Sum'}).click();
  15 | 
  16 |     await page.locator('#addmessage').isVisible();
  17 | 
> 18 |     await expect(page.locator('#addmessage')).toHaveText((number1+number2).toString());
     |                                               ^ Error: expect(locator).toHaveText(expected) failed
  19 | 
  20 | })
```