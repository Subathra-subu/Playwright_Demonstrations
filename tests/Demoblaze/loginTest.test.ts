import { expect,test } from "@playwright/test";
import login_data from "../../testData/login_data.json";

interface LoginData{
    testName:string,
    userName:string,
    password:string,
    expectedResult:"Success"|"Failure",
    expectedMessage:string;
}

const users = login_data as LoginData[];

for(const data of users){

    console.log(data);

    test(`${data.testName}-${data.userName || "Blank Username"}`,async({page})=>{
        await page.goto("https://www.demoblaze.com/");
        await page.locator("#login2").click();
        await page.locator("#loginusername").fill(`${data.userName}`);
        await page.locator("#loginpassword").fill(`${data.password}`);
       
        page.on("dialog",async (alert)=>{
        await alert.accept();
        })
        
        await page.locator("//button[text()='Log in']").click({timeout:40000});

        if(data.expectedResult==="Success"){
            await page.waitForTimeout(2000);
        

        await expect(page.locator("#nameofuser")).toBeVisible({timeout:10000});

        await expect(page.locator('#nameofuser')).toContainText(`Welcome ${data.userName}`);
        }
        
    });
}

