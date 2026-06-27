# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Frames.spec.ts >> Frames
- Location: tests\Frames.spec.ts:3:1

# Error details

```
Error: locator.fill: Unexpected token "" while parsing css selector "iframe[src=/innerframe'] >> internal:control=enter-frame >> input[name='email']". Did you mean to CSS.escape it?
Call log:
  - waiting for #firstFr >> internal:control=enter-frame >> iframe[src=/innerframe'] >> internal:control=enter-frame >> input[name='email']

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation "main navigation" [ref=e4]:
      - generic [ref=e5]:
        - link "LetCode Home" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "LetCode" [ref=e7]
        - generic [ref=e8]:
          - link "Work-Space" [ref=e9] [cursor=pointer]:
            - /url: /test
          - generic [ref=e10]:
            - button "Products" [ref=e11] [cursor=pointer]:
              - text: Products
              - img [ref=e12]
            - generic:
              - link "Ortoni Report":
                - /url: /product/ortoni-report
              - link "LetXPath":
                - /url: /product/letxpath
              - link "Playwright Runner":
                - /url: /product/playwright-runner
          - generic [ref=e15]:
            - button "Grooming" [ref=e16] [cursor=pointer]:
              - text: Grooming
              - img [ref=e17]
            - generic:
              - link "Test Practice":
                - /url: /test-practice
              - link "Interview Q & A":
                - /url: /interview
              - link "Playwright Quiz":
                - /url: /pw-quiz
          - link "Courses" [ref=e20] [cursor=pointer]:
            - /url: /courses
          - link "Contact" [ref=e21] [cursor=pointer]:
            - /url: /contact
        - button "Switch to dark mode" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
    - main [ref=e26]:
      - generic [ref=e28]:
        - generic [ref=e30]:
          - navigation "Breadcrumb" [ref=e31]:
            - link "Workspace" [ref=e32] [cursor=pointer]:
              - /url: /test
              - img [ref=e33]
              - generic [ref=e38]: Workspace
            - img [ref=e39]
            - generic [ref=e41]: Frame
          - heading "Frame" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]: Let's go for a frame practice 😉
            - iframe [active] [ref=e51]:
              - generic [ref=f1e1]:
                - generic [ref=f1e4]:
                  - heading "Enter Details" [level=1] [ref=f1e5]
                  - generic [ref=f1e6]:
                    - generic [ref=f1e7]:
                      - generic [ref=f1e8]: First Name
                      - textbox "Enter name" [ref=f1e9]: Suba
                    - generic [ref=f1e10]:
                      - generic [ref=f1e11]: Last Name
                      - textbox "Enter email" [active] [ref=f1e12]: thra
                  - paragraph [ref=f1e14]: You have entered Suba thra
                  - iframe [ref=f1e16]:
                    - generic [active] [ref=f2e1]:
                      - generic [ref=f2e5]:
                        - generic [ref=f2e6]: Email
                        - textbox "Enter email" [ref=f2e7]
                      - insertion [ref=f2e9]:
                        - generic [ref=f2e12]:
                          - heading "These are topics related to the article that might interest you" [level=2] [ref=f2e14]: Discover more
                          - link "Web Browsers" [ref=f2e15] [cursor=pointer]:
                            - generic "Web Browsers" [ref=f2e16]
                            - img [ref=f2e18]
                          - link "Software" [ref=f2e20] [cursor=pointer]:
                            - generic "Software" [ref=f2e21]
                            - img [ref=f2e23]
                - insertion [ref=f1e18]:
                  - generic [ref=f1e21]:
                    - heading "These are topics related to the article that might interest you" [level=2] [ref=f1e23]: Discover more
                    - link "Learning Resources Library" [ref=f1e24] [cursor=pointer]:
                      - generic "Learning Resources Library" [ref=f1e25]
                      - img [ref=f1e27]
                    - link "Education" [ref=f1e29] [cursor=pointer]:
                      - generic "Education" [ref=f1e30]
                      - img [ref=f1e32]
                    - link "Test Automation Training" [ref=f1e34] [cursor=pointer]:
                      - generic "Test Automation Training" [ref=f1e35]
                      - img [ref=f1e37]
          - generic [ref=e53]:
            - generic [ref=e54]:
              - img [ref=e55]
              - heading "Learning Points" [level=3] [ref=e58]
            - list [ref=e59]:
              - listitem [ref=e60]:
                - img [ref=e61]
                - generic [ref=e64]: Target Locator
              - listitem [ref=e65]:
                - img [ref=e66]
                - generic [ref=e69]:
                  - text: switchTo()
                  - link "Educational Resources" [ref=e70] [cursor=pointer]:
                    - img [ref=e72]
                    - text: Educational Resources
              - listitem [ref=e74]:
                - img [ref=e75]
                - generic [ref=e78]: defaultContent()
              - listitem [ref=e79]:
                - img [ref=e80]
                - generic [ref=e83]: parentFrame()
              - listitem [ref=e84]:
                - img [ref=e85]
                - generic [ref=e88]: Overloading concept - JAVA
            - generic [ref=e89]:
              - link "Watch Tutorial" [ref=e90] [cursor=pointer]:
                - /url: /video/frame
                - img [ref=e91]
                - generic [ref=e93]: Watch Tutorial
              - generic [ref=e94]:
                - text: "Practice ID:"
                - code [ref=e95]: frame
          - generic [ref=e96]:
            - generic:
              - generic:
                - insertion
        - generic:
          - generic:
            - generic:
              - insertion
    - contentinfo [ref=e97]:
      - generic [ref=e98]:
        - paragraph [ref=e99]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e100] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e101] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e102]:
          - link "GitHub" [ref=e103] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
            - img [ref=e104]
          - link "YouTube" [ref=e107] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e108]
          - link "LinkedIn" [ref=e111] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e112]
          - link "Contact" [ref=e117] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e118] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e120]:
    - generic [ref=e123]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e125]: Discover more
      - link "Machine Learning & Artificial Intelligence" [ref=e126] [cursor=pointer]:
        - generic "Machine Learning & Artificial Intelligence" [ref=e127]
        - img [ref=e129]
      - link "Online Learning Modules" [ref=e131] [cursor=pointer]:
        - generic "Online Learning Modules" [ref=e132]
        - img [ref=e134]
      - link "Distance Learning" [ref=e136] [cursor=pointer]:
        - generic "Distance Learning" [ref=e137]
        - img [ref=e139]
```

# Test source

```ts
  1  | import {expect,test} from '@playwright/test';
  2  | 
  3  | test('Frames',async({page})=>{
  4  |     
  5  |     await page.goto("https://letcode.in/frame");
  6  | 
  7  |     const allFrames = page.frames();
  8  |     console.log("Count:"+allFrames.length);
  9  | 
  10 |     // const myFrame = page.frame("firstFr");
  11 | 
  12 |     // await myFrame?.fill('//input[@name="fname"]',"Suba");
  13 |     // await myFrame?.fill('//input[@name="lname"]',"thra");
  14 | 
  15 |     // const frame = page.frameLocator('iframe[name="firstfr"]');
  16 | 
  17 |     // await expect(frame.locator("p.text-sm font-semibold text-center")).toHaveText("You have entered Suba thra");
  18 | 
  19 | 
  20 |     const myFrame = page.frameLocator("#firstFr");
  21 | 
  22 |     await myFrame.locator('//input[@name="fname"]').fill("Suba");
  23 |     await myFrame.locator('//input[@name="lname"]').fill("thra");
  24 | 
  25 |     await expect(myFrame.locator("p.text-sm.font-semibold.text-center")).toHaveText("You have entered Suba thra");
  26 | 
  27 | 
  28 |     const innerFrame = myFrame.frameLocator("iframe[src=/innerframe']");
> 29 |     await innerFrame.locator("input[name='email']").fill("suba@gmail.com");
     |                                                     ^ Error: locator.fill: Unexpected token "" while parsing css selector "iframe[src=/innerframe'] >> internal:control=enter-frame >> input[name='email']". Did you mean to CSS.escape it?
  30 | 
  31 | })
```