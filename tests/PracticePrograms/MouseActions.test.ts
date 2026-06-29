import {test,expect} from '@playwright/test'

test('MouseActionsMove',async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/drag-drop-range-sliders-demo/");

    const slider = await page.locator("//input[@value='5']").boundingBox();

    if(!slider){
        throw new Error("Null");
    }

    await page.mouse.move(slider.x+slider.width/2,slider.y+slider.height/2);
    await page.mouse.down();
    await page.mouse.move((slider.x+slider.width/2)-10,0);
    await page.mouse.up();

    console.log(await page.locator("//output[@id='range']").textContent());

})

test.only('DragAndDrop' ,async({page})=>{

    await page.goto("https://www.leafground.com/drag.xhtml;jsessionid=node01x6kkrhmvm1cs1od1mekflsa1n19714763.node0");

    const drag = page.locator("//div[@id='form:drag_content']");
    const drop = page.locator("//div[@id='form:drop_content']");

    await drag.dragTo(drop);

    const color = await drop.evaluate(el=>getComputedStyle(el).backgroundColor);
    console.log(color);

    expect(color).toBe('rgb(0, 113, 188)');
})