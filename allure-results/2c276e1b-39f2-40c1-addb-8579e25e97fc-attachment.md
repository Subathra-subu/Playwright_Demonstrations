# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PageObjectCommands.spec.ts >> PageObjectCommands
- Location: tests\PageObjectCommands.spec.ts:3:1

# Error details

```
Error: locator.fill: Error: strict mode violation: getByLabel('Address') resolved to 2 elements:
    1) <input value="" type="text" required="" id="address1" name="address1" data-qa="address" class="form-control"/> aka getByRole('textbox', { name: 'Address * (Street address, P.' })
    2) <input value="" type="text" id="address2" name="address2" data-qa="address2" class="form-control"/> aka getByRole('textbox', { name: 'Address 2' })

Call log:
  - waiting for getByLabel('Address')

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
          - checkbox "Sign up for our newsletter!" [checked] [ref=e79]
          - text: Sign up for our newsletter!
        - generic [ref=e80]:
          - checkbox "Receive special offers from our partners!" [checked] [ref=e81]
          - text: Receive special offers from our partners!
        - heading "Address Information" [level=2] [ref=e82]
        - paragraph [ref=e83]:
          - generic [ref=e84]:
            - text: First name
            - superscript [ref=e85]: "*"
          - textbox "First name *" [ref=e86]: Karmega
        - paragraph [ref=e87]:
          - generic [ref=e88]:
            - text: Last name
            - superscript [ref=e89]: "*"
          - textbox "Last name *" [active] [ref=e90]: Kuzhali
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
      - iframe [ref=f20e1]:
        - generic [active]:
          - generic [ref=f21e1]:
            - generic [ref=f21e2]:
              - generic:
                - img [ref=f21e6] [cursor=pointer]
                - button [ref=f21e8] [cursor=pointer]:
                  - img [ref=f21e9]
            - insertion [ref=f21e16]:
              - generic [ref=f21e17]:
                - link "Click Here" [ref=f21e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CG7fFvRA9asSjArCXk7QPhZuXkArd_cvuhQHqrpDioxWv5Z25wEYQASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEhgJP0MOACQF9T4wnKhoohr-Nkt6105i9UbhfVM8UgOasCjw8ay1t0JmqoWxkq8seV3LpkcNC6gB78myvxMKHNkXsxxyB1UsMH-jr87y7-5oUrsQs6_05jPINAz-rmCmyfG5-evny7i_wT3mb_38b5FL-hPfwPV37RqCDzxllnVpcIiEzREbRmARiHggOMDtJdwJkaekioRDYIAPxjgDlRpMT-NfQi20ueiwTG4TsrQWYT8xocp9oL5uyvRNWWZIiweD5Og8EvSfGQqPSD7gSEzJ4KfgZM4jR8pD5T4XwFsAlnQvPa9OjZkE4nI7fiqMp3msXRn4D2PBJZHY9PsEa1Z-lQ8_mACp7wATz3IzutAXgBAOIBY-elaNUkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY3c2hxaSilQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCLD7ocWkopUDFbDLhAAdhc0FovANAYgOCbAT7aHwItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRICnWMYTSIBANAZAdgZAQ&ae=1&num=1&cid=CAQS9QEAEQoqgdmvt2bjoDQ1o79cNULn66yCRdSH0BlvBVmtd2HRR8Ql1Xf8LmPJ_Cau7cbmKgL1X1Alp3OuZ74JCeYd_ens4Jy9634v4CtzzHEkYQO0884mZqaG_TNokk22NKzQy3_gokSQVLtl2Uq6SqdH8zGLGNdC_fbCDTGesSCEvmmnwKNyrq-jOtLq4iNMVOL1lz86BuFMhP23wyeq5AW_4BloQwtiHoPYN4Gg7bB4ni2-uTphHKL-vAu5P2ITQoO2iTeBG81PihZUHGKGYkG1UTNkxYVZgcdmgd78xSfw4IZCNbGI2VRr-CsbiY_zbMU22etQYxgB&sig=AOD64_02XsTqNk14fGmz0Le4sLpRR4Sb5Q&client=ca-pub-1677597403311019&dbm_c=AKAmf-D8jpBhtKOmEx6mWQKnt7O8KTMzhP4mwmLJ8YnHo0txdI91qI7AT_KlbPVK2kyHqGVDB_tYUqzxcQEul7v-OPLqeiTYZLjBiPnfk5IHtP_KEnKAbqIavpYJqJcPPJB8W0IJ_9JO9V_kyNb5QGp9hjcohEE5M-KgFL2Nj7BGwMaaKyh3dd5yhazMofkCyP_OhMiytWcaNz618ECsseQDF3ePPPWJkGSzQ7oFcZdcFO6sugY_4dZw001s6eWL_tZ148U79xhgwETADFBiP-P9U9UIMxKfBWvDY7-yoItVMLwVwrLYdkg&cry=1&dbm_d=AKAmf-D29x_5NXMH-u0BP6Cqq7kPQkC8DMxc4nAyV4KmPvW7eJon1CGKvkLxD0Q9LK9diB-Nj4YKNOxjmUyS0AaqvEBbmnW6Oy66F6eendsh_aUDYZqCGmAQ5JsC9fKJeq6Lk7PyRo_gQAXEGNQqoK7_mF3mLpBC64GpRXF56FZuqSI_xqGfA4LqHeaYcOeTxL_zUGanbvCCaD4C5knJf_AQRgHEJ-epF9WMxW1ZFKY7fg1hrCJo5F5XuZ-6TFOMGwKUDnYB5DdW4zleXDqrTcqMFGWPKaeOAZElMfuPjDyJ1QW29TkXiqZVQZDdcW1pMQol0LgzyNqvfDP-eKBWirCjuBtyL7gvUqyhRw09TwwzHhorsXTNCwmPFLUNNCOzJK4FAUZSRNqnSvd4JKCOGzleZpZ_XLcDeYqnp3fyXzJS3-5KGY1rhh6WdiuHfXoq-SIcCqjX_tX0pevsMWyzluE0WCkdw8w72vUzvt0l3Pz0SlrQlDI2_ltifu-sd5_8jzKeUt9luW1NZvSy3GKXhZWYNMpi3IxNrlKIH1Lb1k7kNaDeLD-g9sQVEp-2mjV-ClpWKKWTMwlTCk-_1FH_J_jmKq06rHR7XDh9LqHBICBgt8TeRUihRjWwvj3E4i0MK55LSbroQ_og3XKRlbl3oCxqGjxg6rT8i0eF7tJyNe-A8FY508xJZXMV1KTFsv_vXg52SHnbG2JK&adurl=https://servedby.flashtalking.com/click/7/296653;10338317;6146776;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0j8QSMCA8dFw7gMgTVtkMJ_&ft_impID=C05760B6-FA12-91B1-4A70-773E32BFD2D3&ft_section=22622326543&g=6750232469E789&random=228234.3562754388&ft_width=728&ft_height=90&url=https://www.adobe.com/in/education/students/creativecloud.html?&sdid=PQ7SPXQB&mv=display&mv2=display
                  - img "Click Here" [ref=f21e19]
                - link "AdChoices arrow" [ref=f21e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f21e22]
                - link "Privacy Notification" [ref=f21e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f21e25]
                - link "Privacy Notification" [ref=f21e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f21e28]
          - iframe
          - iframe [ref=f21e29]:
            
          - iframe [ref=f21e30]:
            
          - iframe [ref=f21e31]:
            
          - iframe [ref=f21e32]:
            
          - iframe [ref=f21e33]:
            
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
  11 |     await expect(page).toHaveTitle("Automation Exercise");
  12 | 
  13 |     await page.getByRole('link',{name:'Signup / Login'}).click();
  14 | 
  15 |     await expect(page.locator('.signup-form')).toBeVisible();
  16 | 
  17 |     await page.getByPlaceholder('Name').fill("Karmegam");
  18 |     await page.locator("//input[@data-qa='signup-email']").fill('karkuzhal@gmail.com');
  19 |     await page.getByRole('button',{name:'Signup'}).click();
  20 | 
  21 |     await expect(page.locator("//b[text()='Enter Account Information']")).toBeVisible();
  22 | 
  23 |     await page.locator('#id_gender2').check();
  24 |     await page.getByLabel('Password ').fill('12345');
  25 |     await page.locator('#days').selectOption('9');
  26 |     await page.locator('#months').selectOption('October');
  27 |     await page.locator('#years').selectOption('2004');
  28 |     await page.locator('#newsletter').check();
  29 |     await page.locator('[type="checkbox"]').nth(1).check();
  30 | 
  31 |     await page.getByLabel('First name').fill('Karmega');
  32 |     await page.getByLabel('Last name').fill('Kuzhali');
> 33 |     await page.getByLabel('Address').fill('Cross street');
     |                                      ^ Error: locator.fill: Error: strict mode violation: getByLabel('Address') resolved to 2 elements:
  34 |     await page.locator('#country').selectOption('India');
  35 |     await page.getByLabel('State').fill('TamilNadu');
  36 |     await page.getByLabel('City').fill('Slaem');
  37 |     await page.getByLabel('Zipcode').fill('987654');
  38 |     await page.getByLabel('Mobile Number').fill('9876543210');
  39 | 
  40 |     await page.getByRole('button',{name:'Create Account'}).click();
  41 | 
  42 |     const actual = await page.locator('.title text-center').textContent();
  43 |     expect(actual).toEqual("Account Created!");
  44 | 
  45 |     await page.getByRole('link',{name:'Continue'}).click();
  46 | 
  47 |     await expect(page.locator('.fa fa-user')).toHaveText(" Logged in as emily");
  48 | 
  49 |     await page.getByRole('link',{name:'Delete Account'}).click();
  50 | 
  51 |     await expect(page.locator('.title text-center')).toBeVisible();
  52 | 
  53 |     await page.getByRole('link',{name:'Continue'}).click();
  54 | });
```