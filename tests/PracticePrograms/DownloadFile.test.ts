import {expect,test} from '@playwright/test';
import { beforeEach } from 'node:test';

const data={demo:"Hello!!!Goodmorning....Have a nice day!"};

test.beforeEach('Setup',({page})=>{
    page.goto("https://www.testmuai.com/selenium-playground/download-file-demo/");
})

test('File Download',async({page})=>{

    await page.locator("#textbox").fill(data.demo);

    await page.getByRole('button',{name:'Generate File'}).click();

    await page.getByRole('link',{name:'Download'}).click();

})