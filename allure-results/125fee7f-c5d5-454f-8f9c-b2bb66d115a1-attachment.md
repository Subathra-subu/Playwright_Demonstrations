# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PageObjectCommands.spec.ts >> PageObjectCommands
- Location: tests\PageObjectCommands.spec.ts:3:1

# Error details

```
Error: locator.check: Unexpected token "" while parsing css selector "[name=option". Did you mean to CSS.escape it?
Call log:
  - waiting for [name=option

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for practice automation" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for practice automation" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e40]:
    - generic [ref=e41]:
      - heading "Enter Account Information" [level=2] [ref=e42]
      - generic [ref=e43]:
        - generic [ref=e44]:
          - generic [ref=e45]: Title
          - generic [ref=e47]:
            - radio "Mr." [ref=e49]
            - text: Mr.
          - generic [ref=e51]:
            - radio "Mrs." [checked] [ref=e53]
            - text: Mrs.
        - generic [ref=e54]:
          - generic [ref=e55]:
            - text: Name
            - superscript [ref=e56]: "*"
          - textbox "Name *" [ref=e57]: Karmegam
        - generic [ref=e58]:
          - generic [ref=e59]:
            - text: Email
            - superscript [ref=e60]: "*"
          - textbox "Email *" [disabled] [ref=e61]: karkuzhal@gmail.com
        - generic [ref=e62]:
          - generic [ref=e63]:
            - text: Password
            - superscript [ref=e64]: "*"
          - textbox "Password *" [ref=e65]: "12345"
        - generic [ref=e66]:
          - generic [ref=e67]: Date of Birth
          - generic [ref=e68]:
            - combobox [ref=e71]:
              - option "Day"
              - option "1"
              - option "2"
              - option "3"
              - option "4"
              - option "5"
              - option "6"
              - option "7"
              - option "8"
              - option "9" [selected]
              - option "10"
              - option "11"
              - option "12"
              - option "13"
              - option "14"
              - option "15"
              - option "16"
              - option "17"
              - option "18"
              - option "19"
              - option "20"
              - option "21"
              - option "22"
              - option "23"
              - option "24"
              - option "25"
              - option "26"
              - option "27"
              - option "28"
              - option "29"
              - option "30"
              - option "31"
            - combobox [ref=e74]:
              - option "Month"
              - option "January"
              - option "February"
              - option "March"
              - option "April"
              - option "May"
              - option "June"
              - option "July"
              - option "August"
              - option "September"
              - option "October" [selected]
              - option "November"
              - option "December"
            - combobox [ref=e77]:
              - option "Year"
              - option "2021"
              - option "2020"
              - option "2019"
              - option "2018"
              - option "2017"
              - option "2016"
              - option "2015"
              - option "2014"
              - option "2013"
              - option "2012"
              - option "2011"
              - option "2010"
              - option "2009"
              - option "2008"
              - option "2007"
              - option "2006"
              - option "2005"
              - option "2004" [selected]
              - option "2003"
              - option "2002"
              - option "2001"
              - option "2000"
              - option "1999"
              - option "1998"
              - option "1997"
              - option "1996"
              - option "1995"
              - option "1994"
              - option "1993"
              - option "1992"
              - option "1991"
              - option "1990"
              - option "1989"
              - option "1988"
              - option "1987"
              - option "1986"
              - option "1985"
              - option "1984"
              - option "1983"
              - option "1982"
              - option "1981"
              - option "1980"
              - option "1979"
              - option "1978"
              - option "1977"
              - option "1976"
              - option "1975"
              - option "1974"
              - option "1973"
              - option "1972"
              - option "1971"
              - option "1970"
              - option "1969"
              - option "1968"
              - option "1967"
              - option "1966"
              - option "1965"
              - option "1964"
              - option "1963"
              - option "1962"
              - option "1961"
              - option "1960"
              - option "1959"
              - option "1958"
              - option "1957"
              - option "1956"
              - option "1955"
              - option "1954"
              - option "1953"
              - option "1952"
              - option "1951"
              - option "1950"
              - option "1949"
              - option "1948"
              - option "1947"
              - option "1946"
              - option "1945"
              - option "1944"
              - option "1943"
              - option "1942"
              - option "1941"
              - option "1940"
              - option "1939"
              - option "1938"
              - option "1937"
              - option "1936"
              - option "1935"
              - option "1934"
              - option "1933"
              - option "1932"
              - option "1931"
              - option "1930"
              - option "1929"
              - option "1928"
              - option "1927"
              - option "1926"
              - option "1925"
              - option "1924"
              - option "1923"
              - option "1922"
              - option "1921"
              - option "1920"
              - option "1919"
              - option "1918"
              - option "1917"
              - option "1916"
              - option "1915"
              - option "1914"
              - option "1913"
              - option "1912"
              - option "1911"
              - option "1910"
              - option "1909"
              - option "1908"
              - option "1907"
              - option "1906"
              - option "1905"
              - option "1904"
              - option "1903"
              - option "1902"
              - option "1901"
              - option "1900"
        - generic [ref=e78]:
          - checkbox "Sign up for our newsletter!" [checked] [active] [ref=e79]
          - text: Sign up for our newsletter!
        - generic [ref=e80]:
          - checkbox "Receive special offers from our partners!" [ref=e81]
          - text: Receive special offers from our partners!
        - heading "Address Information" [level=2] [ref=e82]
        - paragraph [ref=e83]:
          - generic [ref=e84]:
            - text: First name
            - superscript [ref=e85]: "*"
          - textbox "First name *" [ref=e86]
        - paragraph [ref=e87]:
          - generic [ref=e88]:
            - text: Last name
            - superscript [ref=e89]: "*"
          - textbox "Last name *" [ref=e90]
        - paragraph [ref=e91]:
          - generic [ref=e92]: Company
          - textbox "Company" [ref=e93]
        - paragraph [ref=e94]:
          - generic [ref=e95]:
            - text: Address
            - superscript [ref=e96]: "*"
            - text: (Street address, P.O. Box, Company name, etc.)
          - textbox "Address * (Street address, P.O. Box, Company name, etc.)" [ref=e97]
        - paragraph [ref=e98]:
          - generic [ref=e99]: Address 2
          - textbox "Address 2" [ref=e100]
        - paragraph [ref=e101]:
          - generic [ref=e102]:
            - text: Country
            - superscript [ref=e103]: "*"
          - combobox "Country *" [ref=e104]:
            - option "India" [selected]
            - option "United States"
            - option "Canada"
            - option "Australia"
            - option "Israel"
            - option "New Zealand"
            - option "Singapore"
        - paragraph [ref=e105]:
          - generic [ref=e106]:
            - text: State
            - superscript [ref=e107]: "*"
          - textbox "State *" [ref=e108]
        - paragraph [ref=e109]:
          - generic [ref=e110]:
            - text: City
            - superscript [ref=e111]: "*"
          - textbox "City * Zipcode *" [ref=e112]
        - paragraph [ref=e113]:
          - generic [ref=e114]:
            - text: Zipcode
            - superscript [ref=e115]: "*"
          - textbox [ref=e116]
        - paragraph [ref=e117]:
          - generic [ref=e118]:
            - text: Mobile Number
            - superscript [ref=e119]: "*"
          - textbox "Mobile Number *" [ref=e120]
        - button "Create Account" [ref=e121] [cursor=pointer]
    - generic:
      - insertion:
        - generic:
          - iframe
  - contentinfo [ref=e122]:
    - generic [ref=e127]:
      - heading "Subscription" [level=2] [ref=e128]
      - generic [ref=e129]:
        - textbox "Your email address" [ref=e130]
        - button "" [ref=e131] [cursor=pointer]:
          - generic [ref=e132]: 
        - paragraph [ref=e133]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e137]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e138]:
    - iframe [ref=e141]:
      - iframe [ref=f33e1]:
        - generic [active]:
          - generic [ref=f34e1]:
            - generic [ref=f34e2]:
              - generic:
                - img [ref=f34e6] [cursor=pointer]
                - button [ref=f34e8] [cursor=pointer]:
                  - img [ref=f34e9]
            - insertion [ref=f34e16]:
              - generic [ref=f34e17]:
                - link "Click Here" [ref=f34e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=ClpDligs9ar7jM_PMssUP4u38mAPd_cvuhQHqrpDioxWv5Z25wEYQASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEgAJP0As6LuQM1F6jYsuMC8je36osQrq78TfshEA98aWcej3Xg5aj0NPf15jiL3PKdbwwP4WBZQUFBPY_d6fuamNjFMX2HHaDrNvCRGpCyR6GuSraWnxrx4pLtqHY3-vc1hEbF6keDQKQozHsMy2Esg2rxx_4vsc0GdWmA6YpYav0iMlkb9zMCvO3sClNpLck2qH01llsf0hBSAjAXIELI6rSc3CfYiHthFnSu3TRDkrHDjXz5EmiVwOvbzP602SWGnC8OoNUGJIMm2AYG2G_Flr0NIaL0QnwA6vfdrv3wiu564Cb_BLTD3kqklh8q_-XAlywatxsL_cX96H30CF7IT_vwATz3IzutAXgBAOIBY-elaNUkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY56r9yp-ilQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCO3c_cqfopUDFXOmrAId4jYfM_ANAYgOCbAT7aHwItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRICnWMYTSIBANAZAdgZAQ&ae=1&num=1&cid=CAQS9AEAEQoqgSxzw1fVTnsJj7hSIKbtC-e9Yu4P6SNAYL6iO0PbNiRS3RZOlvKaxcI-OuJtDkvPAjFKJqBg7ucDJVcZIDfp5KFS8u_30mwLJR4WZTNXwiP04_MaiX5vBP5u97wl5ViN9VD5d0CNSTfdhj0I4ndbrEsXeWejLTyZ8mau5EQ5oTzCjMQnFW5WBayrawwkXPBlHGOQDP_TgEzNIv-tUSfjXfpgiSdlXx7lCehOLvlsOgINJgDN1FMgS_0KBLHSBE2UCypgBLNa3C2RjCNTC8uibdXIPewpzujtuYWwdlip0S1Y16pfBgDq1Hon9KWLrXqBGAE&sig=AOD64_1-PtwlPpA1ozXTsOjAUnNg1YIRaQ&client=ca-pub-1677597403311019&dbm_c=AKAmf-DZ4QN-GYbR5ZKb6_4GDJbsfyxF1h-NjWYpqPflYJdilFmnTxkxaYujC56tIAihAXvlpFyJgyDIwn7uiEufglyBRlCTpjEXQ2cJi4G-ULRhWR9m8YPxXOsX-TMO3oLfA-ZQ-jcZYTjVGhUNvDuJd2yrLukGIIWVOSweQuCF8sZ6VzuHoc3sN5qMxQYkrqzYpa6PDoenGWBCJMU-kuzH-kuvR1ZmOHeVO2deV0hqvtxipPY7fOaePqnQEJYowVKyl3GSvO1BeQRx4I2exrA-MD6qHeH1HQ&cry=1&dbm_d=AKAmf-BM0vPeEmOiXF1FGKhw9sV1mMfeBJeYtFUyvejSsMrS0jiHHfMKoBdJCK7rTPhTQziJViucdv2WgiLmFvIuXcq1LvNawTMf6fot2TEFX1dxe5zX9cTZZsCLIG4C1nR-i5YjGBFEBM9sKbbwEMgruiS8o7JbYVmORFD-FHQErsaF2ShZIBWPydgB1wNK-rYv_yDvq-6oqhxE-Fh6rsWCJdiiQ6WgovDEwhotZpx0YaKhWsB8YKovUlyVDjCWjZ4YoUPfVqM_oIr9hJi4Wwkhn34weLGn2ygkPxWX87g3CM-1qA4XpIszv99fT0cbUB9HS6d-7BYedTWVlH4iCT5dnU2yv-UHAuJSaS2r7CXaudZ4NtoY0_-Na3RoA0oHYN2z4hJ-fXwJez7yY4htrNS-xumYBNkC4s4zuwssHhc5xn5EHOj6I4NXeBVjstkkTbWYXsK_EFvRKFSSfH03LR8BYtt3vEoA_qiCpLLveXq7TUr6aS5h_74TQZgZnbPcWr7Zzzmk8aT7s1NBBHscWbPJsOwo86en2BSWSE5iOqQL3jHUbxd06_LlIf51nUgGU9BZs1dBNMA2Tm_bGbM-Ckn8cpReYZG_UenVB5e5SvzOnzGEwKzuy9Ov8xHoPyGW5bv-mIeOtau_1gRQpZM7zHtg8BcSkjtK5O4uXMN7MQK-KqqL6-WjBxvffcgxD5_ppApVgGU1sNZL&adurl=https://servedby.flashtalking.com/click/7/296653;10338317;6146791;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0idUX43S7ZxH4DKCgGCvpvo&ft_impID=045059A0-16D7-0049-B131-4685DEED86EA&ft_section=22622326543&g=6750080046F48D&random=849652.5048321005&ft_width=728&ft_height=90&url=https://www.adobe.com/in/education/students/creativecloud.html?&sdid=PQ7SPXQB&mv=display&mv2=display
                  - img "Click Here" [ref=f34e19]
                - link "AdChoices arrow" [ref=f34e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f34e22]
                - link "Privacy Notification" [ref=f34e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f34e25]
                - link "Privacy Notification" [ref=f34e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f34e28]
          - iframe
          - iframe [ref=f34e29]:
            
          - iframe [ref=f34e30]:
            
          - iframe [ref=f34e31]:
            
          - iframe [ref=f34e32]:
            
          - iframe [ref=f34e33]:
            
```

# Test source

```ts
  1  | import { chromium,expect,test } from "@playwright/test";
  2  | 
  3  | test("PageObjectCommands",async()=>{
  4  |     const browser = await chromium.launch({headless:false});
  5  | 
  6  |     const context = await browser.newContext();
  7  | 
  8  |     const page = await context.newPage();
  9  | 
  10 |     await page.goto("https://automationexercise.com");
  11 | 
  12 |     await expect(page).toHaveTitle("Automation Exercise");
  13 | 
  14 |     await page.getByRole('link',{name:'Signup / Login'}).click();
  15 | 
  16 |     await expect(page.locator('.signup-form')).toBeVisible();
  17 | 
  18 |     await page.getByPlaceholder('Name').fill("Karmegam");
  19 | 
  20 |     await page.locator("//input[@data-qa='signup-email']").fill('karkuzhal@gmail.com');
  21 | 
  22 |     await page.getByRole('button',{name:'Signup'}).click();
  23 | 
  24 |     await expect(page.locator("//b[text()='Enter Account Information']")).toBeVisible();
  25 | 
  26 |     await page.locator('#id_gender2').click();
  27 | 
  28 |     await page.getByLabel('Password ').fill('12345');
  29 | 
  30 |     await page.locator('#days').selectOption('9');
  31 |     await page.locator('#months').selectOption('October');
  32 |     await page.locator('#years').selectOption('2004');
  33 | 
  34 |     await page.locator('#newsletter').check();
> 35 |     await page.locator('[name=option').check();
     |                                        ^ Error: locator.check: Unexpected token "" while parsing css selector "[name=option". Did you mean to CSS.escape it?
  36 | 
  37 | })
```