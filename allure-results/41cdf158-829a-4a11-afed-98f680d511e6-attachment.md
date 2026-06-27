# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Frames.spec.ts >> Frames
- Location: tests\Frames.spec.ts:3:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('iframe[name="firstfr"]').contentFrame().locator('p.text-sm font-semibold text-center')
Expected substring: "You have entered Suba thra"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('iframe[name="firstfr"]').contentFrame().locator('p.text-sm font-semibold text-center')

```

```yaml
- navigation "main navigation":
  - link "LetCode Home":
    - /url: /
    - img "LetCode"
  - link "Work-Space":
    - /url: /test
  - button "Products":
    - text: Products
    - img
  - link "Ortoni Report":
    - /url: /product/ortoni-report
  - link "LetXPath":
    - /url: /product/letxpath
  - link "Playwright Runner":
    - /url: /product/playwright-runner
  - button "Grooming":
    - text: Grooming
    - img
  - link "Test Practice":
    - /url: /test-practice
  - link "Interview Q & A":
    - /url: /interview
  - link "Playwright Quiz":
    - /url: /pw-quiz
  - link "Courses":
    - /url: /courses
  - link "Contact":
    - /url: /contact
  - button "Switch to dark mode":
    - img
- main:
  - navigation "Breadcrumb":
    - link "Workspace":
      - /url: /test
      - img
      - text: Workspace
    - img
    - text: Frame
  - heading "Frame" [level=1]
  - text: Let's go for a frame practice 😉
  - iframe
  - img
  - heading "Learning Points" [level=3]
  - list:
    - listitem:
      - img
      - text: Target Locator
    - listitem:
      - img
      - text: switchTo()
    - listitem:
      - img
      - text: defaultContent()
    - listitem:
      - img
      - text: parentFrame()
    - listitem:
      - img
      - text: Overloading concept - JAVA
  - link "Watch Tutorial":
    - /url: /video/frame
    - img
    - text: Watch Tutorial
  - text: "Practice ID:"
  - code: frame
  - insertion
  - insertion
- contentinfo:
  - paragraph:
    - text: © 2026 LetCode ·
    - link "Koushik Chatterjee":
      - /url: https://www.linkedin.com/in/ortoni/
    - text: "&"
    - link "Bollineni Yaswanth":
      - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
  - link "GitHub":
    - /url: https://github.com/ortoniKC
    - img
  - link "YouTube":
    - /url: https://www.youtube.com/@letcode
    - img
  - link "LinkedIn":
    - /url: https://www.linkedin.com/in/ortoni/
    - img
  - link "Contact":
    - /url: /contact
  - link "🍕 Support":
    - /url: https://buymeacoffee.com/letcode
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Test Automation Tools"
  - link "Koushik Chatterjee Consulting"
  - link "Educational Course Development"
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
  10 |     const myFrame = page.frame("firstFr");
  11 | 
  12 |     await myFrame?.fill('//input[@name="fname"]',"Suba");
  13 |     await myFrame?.fill('//input[@name="lname"]',"thra");
  14 | 
  15 |     const frame = page.frameLocator('iframe[name="firstfr"]');
  16 | 
> 17 |     await expect(frame.locator("p.text-sm font-semibold text-center")).toContainText("You have entered Suba thra");
     |                                                                        ^ Error: expect(locator).toContainText(expected) failed
  18 | 
  19 | })
```