import {expect,test} from '@playwright/test'

test('Element commands',async({page})=>{
    await page.goto("https://omayo.blogspot.com/");
 
    const textbox = page.locator("//h2[text()='Text Area Field Two']/parent::*/child::div/child::*");

    console.log("Clear command check:");
    console.log("Before fill('') usage:",await textbox.inputValue());
    await textbox.fill('');
    console.log("After fill('') usage:",await textbox.inputValue());
    await textbox.fill("Subathra");
    expect(await textbox.inputValue()).toBe("Subathra");

    console.log("Textcontent command check:");
    console.log("Text content usage:",await textbox.textContent());

    console.log("Enable command check:");
    const enable_button = page.locator("#but2");
    const disable_button = page.locator("#but1");

    if(await enable_button.isEnabled() === true){
        console.log("The button is Enabled");
    }

    if(await disable_button.isEnabled() === false){
        console.log("The button is Disabled");
    }

    console.log("Check command check:");

    const checkBox = page.locator("#dte");
    if(await checkBox.isChecked()== false){
        console.log("The Checkbox is Disabled");
    }

    await page.getByLabel("Check this").click();

    if(await checkBox.isEnabled({timeout:1000})== true){
        console.log("The Checkbox is Enabled");
    }

    await checkBox.check();

    if(await checkBox.isChecked()== true){
        console.log("The Checkbox is Checked");
    }

})