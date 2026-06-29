# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PracticePrograms\FileUpload.spec.ts >> File upload
- Location: tests\PracticePrograms\FileUpload.spec.ts:3:1

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import { expect,test } from '@playwright/test';
  2  | 
  3  | test('File upload',async({page})=>{
  4  |     
  5  |     await page.goto("https://omayo.blogspot.com/");
  6  | 
  7  |     await page.locator("//input[@type='file']").setInputFiles("tests\\PracticePrograms\\Input.txt");
  8  | 
  9  |     const uploadedFilePath = await page.locator("//input[@type='file']").inputValue();
  10 | 
  11 |     expect(uploadedFilePath).toContain("Input.txt");
  12 | 
> 13 |     page.waitForTimeout(10000);
     |          ^ Error: page.waitForTimeout: Test ended.
  14 | 
  15 |     console.log("File uploaded successfully");
  16 | 
  17 | })
```