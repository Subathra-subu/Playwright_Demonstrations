import {expect,test} from '@playwright/test';

test('Frames',async({page})=>{
    
    await page.goto("https://letcode.in/frame");

    const allFrames = page.frames();
    console.log("Count:"+allFrames.length);

    // const myFrame = page.frame("firstFr");

    // await myFrame?.fill('//input[@name="fname"]',"Suba");
    // await myFrame?.fill('//input[@name="lname"]',"thra");

    // const frame = page.frameLocator('iframe[name="firstfr"]');

    // await expect(frame.locator("p.text-sm font-semibold text-center")).toHaveText("You have entered Suba thra");


    const myFrame = page.frameLocator("#firstFr");

    await myFrame.locator('//input[@name="fname"]').fill("Suba");
    await myFrame.locator('//input[@name="lname"]').fill("thra");

    await expect(myFrame.locator("p.text-sm.font-semibold.text-center")).toHaveText("You have entered Suba thra");


    const innerFrame = myFrame.frameLocator("iframe[src='/innerframe']");
    await innerFrame.locator("input[name='email']").fill("suba@gmail.com");

})