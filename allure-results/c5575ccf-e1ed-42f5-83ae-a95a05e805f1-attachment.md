# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Markers\Parameterize.test.ts >> Search >> Search flow - Selenium
- Location: tests\Markers\Parameterize.test.ts:12:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://omayo.blogspot.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - iframe [ref=e5]:
    
  - generic [ref=e19]:
    - banner [ref=e20]:
      - generic [ref=e26]:
        - heading "omayo (QAFox.com)" [level=1] [ref=e28]
        - generic:
          - paragraph
    - generic [ref=e31]:
      - generic [ref=e34]:
        - link "Drop Down Menus":
          - /url: http://24work.blogspot.com/
          - img "Drop Down Menus" [ref=e35] [cursor=pointer]
        - link "CSS Drop Down Menu":
          - /url: http://24work.blogspot.com/
          - img "CSS Drop Down Menu" [ref=e36] [cursor=pointer]
        - link "Pure CSS Dropdown Menu":
          - /url: http://24work.blogspot.com/
          - img "Pure CSS Dropdown Menu" [ref=e37] [cursor=pointer]
        - list [ref=e39]:
          - listitem [ref=e40]:
            - link "Home" [ref=e41] [cursor=pointer]:
              - /url: http://www.omayo.blogspot.com
          - listitem [ref=e42]:
            - link "Blogs" [ref=e43] [cursor=pointer]:
              - /url: "#"
      - paragraph [ref=e47]:
        - text: This blog is created for
        - link "http://www.Selenium143.blogspot.com" [ref=e48] [cursor=pointer]:
          - /url: http://www.Selenium143.blogspot.com
    - generic [ref=e52]:
      - generic:
        - generic [ref=e64]:
          - generic [ref=e65]:
            - generic [ref=e67]:
              - heading "Monday, May 13, 2013" [level=2] [ref=e68]
              - generic [ref=e71]:
                - heading "Page One" [level=3] [ref=e72]:
                  - link "Page One" [ref=e73] [cursor=pointer]:
                    - /url: https://omayo.blogspot.com/2013/05/page-one.html
                - generic [ref=e74]: This is a sample text in the Page One.
            - link "Home" [ref=e78] [cursor=pointer]:
              - /url: https://omayo.blogspot.com/
            - generic [ref=e80]:
              - text: "Subscribe to:"
              - link "Posts (Atom)" [ref=e81] [cursor=pointer]:
                - /url: https://omayo.blogspot.com/feeds/posts/default
          - generic [ref=e82]:
            - heading "Text Area Field" [level=2] [ref=e83]
            - textbox [ref=e85]
          - generic [ref=e86]:
            - heading "Text Area Field Two" [level=2] [ref=e87]
            - textbox [ref=e89]: The cat was playing in the garden.
          - generic [ref=e90]:
            - heading "Table" [level=2] [ref=e91]
            - table [ref=e93]:
              - rowgroup [ref=e94]:
                - row "Name Age Place" [ref=e95]:
                  - columnheader "Name" [ref=e96]
                  - columnheader "Age" [ref=e97]
                  - columnheader "Place" [ref=e98]
              - rowgroup [ref=e99]:
                - row "Kishore 22 Delhi" [ref=e100]:
                  - cell "Kishore" [ref=e101]
                  - cell "22" [ref=e102]
                  - cell "Delhi" [ref=e103]
                - row "Manish 25 Pune" [ref=e104]:
                  - cell "Manish" [ref=e105]
                  - cell "25" [ref=e106]
                  - cell "Pune" [ref=e107]
                - row "Praveen 29 Bangalore" [ref=e108]:
                  - cell "Praveen" [ref=e109]
                  - cell "29" [ref=e110]
                  - cell "Bangalore" [ref=e111]
                - row "Dheepthi 31 Mumbai" [ref=e112]:
                  - cell "Dheepthi" [ref=e113]
                  - cell "31" [ref=e114]
                  - cell "Mumbai" [ref=e115]
          - generic [ref=e116]:
            - heading "HTML Form" [level=2] [ref=e117]
            - generic [ref=e119]:
              - text: "Username:"
              - textbox [ref=e120]
              - text: "Password:"
              - textbox [ref=e121]
              - button "LogIn" [ref=e122]
          - generic [ref=e123]:
            - heading "Iframe1 & Iframe2" [level=2] [ref=e124]
            - generic [ref=e125]:
              - iframe [ref=e126]
              - iframe [ref=e127]
          - generic [ref=e128]:
            - heading "LoginSection" [level=2] [ref=e129]
            - generic [ref=e130]:
              - text: Login page
              - heading "Simple Login Page" [level=1] [ref=e131]
              - generic [ref=e132]:
                - text: Username
                - textbox [ref=e133]
                - text: Password
                - textbox [ref=e134]
                - button "Login" [ref=e135]
                - button "Cancel" [ref=e136]
          - paragraph [ref=e139]: www.selenium-by-arun.blogspot.com
        - complementary [ref=e142]:
          - generic [ref=e143]:
            - paragraph [ref=e146]: PracticeAutomationHere
            - generic [ref=e147]:
              - heading "Multi Selection box" [level=2] [ref=e148]
              - listbox [ref=e150]:
                - option "Volvo" [ref=e151]
                - option "Swift" [ref=e152]
                - option "Hyundai" [ref=e153]
                - option "Audi" [ref=e154]
            - combobox [ref=e157]:
              - option "Older Newsletters" [selected]
              - option "doc 1"
              - option "doc 2"
              - option "doc 3"
              - option "doc 4"
            - generic [ref=e159]: This is a sample Text on this page. This is a sample Text on this page. This is a sample Text on this page.
            - link "Selenium143" [ref=e162] [cursor=pointer]:
              - /url: http://www.Selenium143.blogspot.com
            - link "Selenium143" [ref=e165] [cursor=pointer]:
              - /url: http://www.Selenium143.blogspot.com
            - generic [ref=e166]:
              - heading "Text Box with Preloaded Text" [level=2] [ref=e167]
              - textbox [ref=e169]: Selenium WebDriver
            - generic [ref=e170]:
              - heading "Opens In New Window Link" [level=2] [ref=e171]
              - link "SeleniumTutorial" [ref=e173] [cursor=pointer]:
                - /url: http://www.Selenium143.blogspot.com
            - generic [ref=e174]:
              - heading "Enabled Button" [level=2] [ref=e175]
              - button "Button2" [ref=e177]
            - generic [ref=e178]:
              - heading "Disabled Button" [level=2] [ref=e179]
              - button "Button1" [disabled] [ref=e181]
            - generic [ref=e182]:
              - heading "Disabled Text Box" [level=2] [ref=e183]
              - textbox [disabled] [ref=e185]
            - generic [ref=e186]:
              - heading "Buttons with same name attribute values" [level=2] [ref=e187]
              - generic [ref=e188]:
                - button "Submit" [ref=e189]
                - button "Login" [ref=e190]
                - button "Register" [ref=e191]
            - generic [ref=e192]:
              - heading "Ordered List" [level=2] [ref=e193]
              - list "list1" [ref=e195]:
                - listitem [ref=e196]: One
                - listitem [ref=e197]: Two
                - listitem "arun" [ref=e198]: Three
                - listitem [ref=e199]: Four
                - listitem [ref=e200]: Five
                - listitem [ref=e201]: Six
            - generic [ref=e202]:
              - heading "UnOrdered list" [level=2] [ref=e203]
              - list [ref=e205]:
                - listitem [ref=e206]: Apple
                - listitem [ref=e207]: Mango
                - listitem [ref=e208]: Orange
                - listitem [ref=e209]: Banana
                - listitem [ref=e210]: Grapes
                - listitem [ref=e211]: Pomegranate
            - generic [ref=e212]:
              - heading "DisplayForTimeAndDissapear" [level=2] [ref=e213]
              - generic [ref=e214]:
                - generic [ref=e215]: This text will disappear after 25 seconds
                - button "ClickAfterTextDissappears" [ref=e216]
            - heading "TextWillBeDisplayedWithDelay" [level=2] [ref=e218]
            - generic [ref=e220]:
              - heading "Popup Window" [level=2] [ref=e221]
              - paragraph [ref=e223]:
                - link "Open a popup window" [ref=e224] [cursor=pointer]:
                  - /url: JavaScript:newPopup('https://the-internet.herokuapp.com/windows/new');
            - generic [ref=e225]:
              - heading "UploadFile" [level=2] [ref=e226]
              - button "Choose File" [ref=e229]
            - generic [ref=e230]:
              - heading "TimerEnableButton" [level=2] [ref=e231]
              - button "Button3" [disabled] [ref=e233]
            - generic [ref=e234]:
              - heading "Disable Enable Button" [level=2] [ref=e235]
              - generic [ref=e236]:
                - button "My Button" [ref=e237]
                - paragraph [ref=e238]: Click the button try it button to disable the button after 3 seconds.
                - button "Try it" [ref=e239]
            - generic [ref=e241]:
              - button "Button X" [ref=e242]
              - button "Button Y" [ref=e243]
            - button "Double click Here" [ref=e246]
            - generic [ref=e248]:
              - text: "Mr Option:"
              - checkbox [disabled] [ref=e249]
              - paragraph [ref=e250]: The above Mr Option will be enabled in 10 seconds after clicking on below Check this button
              - button "Check this" [ref=e251]
        - complementary [ref=e254]:
          - generic [ref=e255]:
            - generic [ref=e256]:
              - heading "Image Element" [level=2] [ref=e257]
              - img [ref=e259]
            - generic [ref=e260]:
              - heading "Search This Blog" [level=2] [ref=e261]
              - table [ref=e265]:
                - rowgroup [ref=e266]:
                  - row "Search" [ref=e267]:
                    - cell [ref=e268]:
                      - textbox "search" [ref=e269]
                    - cell "Search" [ref=e270]:
                      - button "Search" [ref=e271]
            - generic [ref=e272]:
              - heading "Radio options" [level=2] [ref=e273]
              - generic [ref=e274]:
                - radio [ref=e275]
                - text: Male
                - radio [ref=e276]
                - text: Female
            - generic [ref=e277]:
              - heading "AlertDemo" [level=2] [ref=e278]
              - button "ClickToGetAlert" [ref=e280]
            - generic [ref=e281]:
              - heading "By Default Selected Check Box option" [level=2] [ref=e282]
              - generic [ref=e283]:
                - text: Orange
                - checkbox [checked] [ref=e284]
                - text: Blue
                - checkbox [ref=e285]
            - generic [ref=e286]:
              - heading "Readonly TextBox" [level=2] [ref=e287]
              - textbox [ref=e289]: ReadThisText
            - generic [ref=e290]:
              - heading "GetPrompt" [level=2] [ref=e291]
              - button "GetPrompt" [ref=e293]
            - generic [ref=e294]:
              - heading "Confirmation Dialog" [level=2] [ref=e295]
              - button "GetConfirmation" [ref=e297]
            - heading "Hidden Button" [level=2] [ref=e299]
            - generic [ref=e300]:
              - heading "Locate using name attribute" [level=2] [ref=e301]
              - textbox [ref=e303]
            - generic [ref=e304]:
              - heading "Other Sites to Practice Automation" [level=2] [ref=e305]
              - list [ref=e307]:
                - listitem [ref=e308]:
                  - link "compendiumdev" [ref=e309] [cursor=pointer]:
                    - /url: http://compendiumdev.co.uk/selenium/basic_web_page.html
                - listitem [ref=e310]:
                  - link "onlytestingblog" [ref=e311] [cursor=pointer]:
                    - /url: http://only-testing-blog.blogspot.in/2014/01/textbox.html
                - listitem [ref=e312]:
                  - link "testwisely" [ref=e313] [cursor=pointer]:
                    - /url: http://testwisely.com/demo
                - listitem [ref=e314]:
                  - link "jqueryui" [ref=e315] [cursor=pointer]:
                    - /url: http://jqueryui.com/
                - listitem [ref=e316]:
                  - link "theautomatedtester" [ref=e317] [cursor=pointer]:
                    - /url: http://book.theautomatedtester.co.uk
            - generic [ref=e318]:
              - heading "Having same id and name attribute values" [level=2] [ref=e319]
              - button "SameIDName" [ref=e321]
            - generic [ref=e322]:
              - heading "Locate using class" [level=2] [ref=e323]
              - textbox [ref=e325]
            - generic [ref=e326]:
              - heading "element having same class name of above field" [level=2] [ref=e327]
              - textbox [ref=e329]
            - generic [ref=e330]:
              - heading "Select a vehicle" [level=2] [ref=e331]
              - generic [ref=e332]:
                - text: "Bike:"
                - radio [ref=e333]
                - text: "Bicycle:"
                - radio [checked] [ref=e334]
                - text: "Car:"
                - radio [ref=e335]
            - generic [ref=e336]:
              - heading "Select multiple options" [level=2] [ref=e337]
              - generic [ref=e338]:
                - text: "Pen:"
                - checkbox [ref=e339]
                - text: "Book:"
                - checkbox [checked] [ref=e340]
                - text: "Laptop:"
                - checkbox [ref=e341]
                - text: "Bag:"
                - checkbox [ref=e342]
            - generic [ref=e343]:
              - heading "TestDoubleClick" [level=2] [ref=e344]
              - generic [ref=e345]:
                - paragraph [ref=e346]: Double-click
                - paragraph
            - generic [ref=e347]:
              - heading "Delayed-Button-Dropdown" [level=2] [ref=e348]
              - button "Dropdown" [ref=e350] [cursor=pointer]
          - table:
            - rowgroup:
              - row:
                - cell
                - cell
    - contentinfo [ref=e351]:
      - generic [ref=e354]:
        - table:
          - rowgroup:
            - row:
              - cell
              - cell
              - cell
        - generic [ref=e357]:
          - text: Simple theme. Powered by
          - link "Blogger" [ref=e358] [cursor=pointer]:
            - /url: https://www.blogger.com
          - text: .
```

# Test source

```ts
  1  | import {expect,test} from '@playwright/test'
  2  | 
  3  | const searchData = [
  4  |     {keyword:"Selenium",expectedTitle:"Selenium"},
  5  |     {keyword:"Playwright",expectedTitle:"Playwright"},
  6  |     {keyword:"cypress",expectedTitle:"cypress"}
  7  | ]
  8  | 
  9  | test.describe('Search',()=>{
  10 | 
  11 |     for (const data of searchData){
  12 |         test(`Search flow - ${data.keyword}`,async({page})=>{
  13 | 
  14 | 
> 15 |             await page.goto("https://omayo.blogspot.com/");
     |                        ^ Error: page.goto: Test timeout of 30000ms exceeded.
  16 | 
  17 |             await page.locator("input[name='q']").fill(data.keyword);
  18 |             await page.keyboard.press("Enter");
  19 | 
  20 |             // const result = page.locator("h3").first();
  21 |             // await result.click();
  22 | 
  23 |             await expect(page).toHaveURL(new RegExp(data.expectedTitle,"i"));
  24 | 
  25 |         })
  26 |     }
  27 | 
  28 | })
```