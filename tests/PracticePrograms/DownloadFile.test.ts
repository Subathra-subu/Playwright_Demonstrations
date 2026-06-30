import {expect,test} from '@playwright/test';

const data={demo:"Hello!!!Goodmorning....Have a nice day!"};

test.beforeEach('Setup',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/generate-file-to-download-demo/");
})

test('File Download',async({page})=>{

    await page.locator("#textbox").pressSequentially(data.demo);

    await page.getByRole('button',{name:'Generate File'}).isEnabled();
    await page.getByRole('button',{name:'Generate File'}).click();

    const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link',{name:'Download'}).click()
    ]);

    const fileName = download.suggestedFilename();
    console.log(fileName);

     await download.saveAs(`downloads/${fileName}`);

})