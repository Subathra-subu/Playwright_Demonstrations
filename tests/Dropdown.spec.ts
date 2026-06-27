import { expect,test } from "@playwright/test";

test('Drop Down',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption("#select-demo",{
        // label:"Friday"
        // index:4
        value:"Wednesday"
    });

    await page.selectOption("#multi-select",[
        {label:'Florida'},
        {value:'New Jersey'},
        {index:5}
    ])
})