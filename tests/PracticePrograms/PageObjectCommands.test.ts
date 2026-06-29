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

    await page.getByRole('button',{name:'Check this'}).click();

    await expect(checkBox).toBeEnabled({ timeout: 12000 });
    console.log("The Checkbox is Enabled");

    await checkBox.check();

    if(await checkBox.isChecked()){
        console.log("The Checkbox is Checked");
    }

    const checkedCheckBox =page.locator('#checkbox1');

    if(await checkedCheckBox.isChecked()){
        console.log("The Checkbox is Checked");
    }

    await checkedCheckBox.uncheck();

    await expect(checkedCheckBox).not.toBeChecked()
    console.log("The Checkbox is UnChecked");

    console.log("Visible command check:");
    const readOnlyText = page.locator('#rotb');

    if(await readOnlyText.isVisible()){
        console.log("Text inside the box:",await readOnlyText.inputValue());
    }

    console.log("Bounding Box command check:");
    const box = await readOnlyText.boundingBox();

    console.log("Height:",box?.height);
    console.log("Width:",box?.width);
    console.log("X:",box?.x);
    console.log("Y:",box?.y);

    console.log("Get Attribute command check:");
    console.log("Type_Attribute:",await readOnlyText.getAttribute('type'));

    console.log("Get CSS Property command check:");
    const blog = page.locator("//p[text()='This blog is created for ']");
    console.log("Font_size:",await blog.evaluate(el=>getComputedStyle(el).fontSize));

    console.log("Get TagName command check:");
    console.log("TagName:",await blog.evaluate(el=>el.tagName.toLowerCase()));

    await page.screenshot({path:'tests/PracticePrograms/HomePage.png'});

})