import {expect,test} from '@playwright/test';

test('Alerts',async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/",{
        waitUntil:"networkidle"
});
    
    page.on("dialog",async (alert)=>{
        console.log(alert.defaultValue());
        await alert.accept("Subathra");
    })
    
    await page.locator("(//button[@type='button'])[3]").click();
    await expect(page.locator('#prompt-demo')).toHaveText("You have entered 'Subathra' !");

});



