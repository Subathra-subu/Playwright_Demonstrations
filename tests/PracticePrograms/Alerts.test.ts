import {expect,test } from "@playwright/test";

test('Alerts',async({page})=>{

    await page.goto("https://omayo.blogspot.com/");

    page.on('dialog',async(alert)=>{

        console.log("Type:",alert.type())
        console.log("Message:",alert.message());

        if(alert.type() == 'prompt'){
            alert.accept("Hiii");
        }
        else if(alert.type() == 'confirm'){
            alert.dismiss();
        }
        else await alert.accept();
    })
    
    await page.locator('#alert1').click();

    await page.locator('#prompt').click();

    await page.locator('#confirm').click();
})
