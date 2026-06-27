import { expect,test } from "@playwright/test";

test('Sum',async({page})=>{

    test.setTimeout(60000);

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");

    const number1 = 10;
    const number2 = 28;

    await page.locator("#sum1").scrollIntoViewIfNeeded();
    await page.locator('#sum1').click();
    await page.locator('#sum1').fill(number1.toString());
    console.log("Input1:"+await page.locator('#sum1').inputValue());
    await page.locator('#sum2').fill(number2.toString());
    console.log("Input2:"+await page.locator('#sum2').inputValue());

    const box = await page.getByRole('button',{name:'Get Sum'}).boundingBox(); 
    if(box){
        console.log("Width:"+box.width);
        console.log("Height:"+box.height);
        console.log("X:"+box.x);
        console.log("Y:"+box.width);
    }

    await page.getByRole('button',{name:'Get Sum'}).click();

    await page.locator('#addmessage').isVisible();

    await expect(page.locator('#addmessage')).toHaveText((number1+number2).toString());

})