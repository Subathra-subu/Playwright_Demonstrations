import { expect,test } from '@playwright/test';

test('File upload',async({page})=>{

    test.slow();
    
    await page.goto("https://omayo.blogspot.com/");

    await page.locator("//input[@type='file']").setInputFiles("tests\\PracticePrograms\\Input.txt");

    const uploadedFilePath = await page.locator("//input[@type='file']").inputValue();

    expect(uploadedFilePath).toContain("Input.txt");

    console.log("File uploaded successfully");

})