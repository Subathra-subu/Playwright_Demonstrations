# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PageObjectCommands.spec.ts >> PageObjectCommands
- Location: tests\PageObjectCommands.spec.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Automation Exercise website" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Automation Exercise website" [ref=e9]
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
    - heading "Account Created!" [level=2] [ref=e41]
    - paragraph [ref=e42]: Congratulations! Your new account has been successfully created!
    - paragraph [ref=e43]: You can now take advantage of member privileges to enhance your online shopping experience with us.
    - link "Continue" [ref=e45] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=e46]:
    - generic [ref=e51]:
      - heading "Subscription" [level=2] [ref=e52]
      - generic [ref=e53]:
        - textbox "Your email address" [ref=e54]
        - button "" [ref=e55] [cursor=pointer]:
          - generic [ref=e56]: 
        - paragraph [ref=e57]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e61]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e63]:
    - generic [ref=e66]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e68]: Discover more
      - link "User account management" [ref=e69] [cursor=pointer]:
        - generic "User account management" [ref=e70]
        - img [ref=e72]
      - link "API testing services" [ref=e74] [cursor=pointer]:
        - generic "API testing services" [ref=e75]
        - img [ref=e77]
      - link "Software testing tools" [ref=e79] [cursor=pointer]:
        - generic "Software testing tools" [ref=e80]
        - img [ref=e82]
  - insertion [ref=e84]:
    - iframe [ref=e87]:
      - iframe [ref=f62e1]:
        - generic [active]:
          - generic [ref=f63e1]:
            - generic [ref=f63e2]:
              - generic:
                - img [ref=f63e6] [cursor=pointer]
                - button [ref=f63e8] [cursor=pointer]:
                  - img [ref=f63e9]
            - insertion [ref=f63e16]:
              - generic [ref=f63e17]:
                - link "Click Here" [ref=f63e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CSJjM4hI9aog9tZT-0w-e77SoC939y-6FAequkOKjFa_lnbnARhABIP20npUBYOWa6IPYDqABi-KKoAHIAQmoAwHIA5sEqgSGAk_QLWiohapyhsHpCl56X1eIOOTrvAmrlx7iAug60wS6nm75mX4X-bksGCVqsejZfsN7NfuH8N6GVcPACm74Sjj31VDywWs2zoqxaXHhEoSA6UO7NHHn5o3TmRXWnAus9hylyytN58KnxtwFLtEInVBmaMJ0F_-H4cgG3ZFtomzGChI10Yd3KXTqcg5GiQuRJ61Ux6NUAW1L0kEKDqaWK1VxuaO6xsajGxOZ9hzSE_YJQVhPFRyWHO-Pjltf1Nk73aYpwhF29XYp2L62Ou_ZegiLuAM4HxF8T8r4fiv3fhxZkG-aM_EzBKSug4wUont3TtTqeFUgT49ovzSGsAP6pFGR9pSb__bABPPcjO60BeAEA4gFj56Vo1SQBgGgBk2AB92d9d8CqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfn17EC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOli07v7KpqKVA2ABgAoBmAsByAsBgAwBqg0CSU7qDRMI77uEy6ailQMVNYp_BB2eNw218A0BiA4JsBPtofAi0BMA2BMNiBQB2BQB0BUByhYCCgD4FgGAFwGyFwQYAlAGshgJEgKdYxhNIgEA0BkB2BkB&ae=1&num=1&cid=CAQS9QEAEQoqgaYsbgHCJyAHeTjwHDJlZNnJ23PAFiq3eKuMcCnzE_J-NloG7a26g_4UsvIgKjw_UXM_nqhUA-BHS4Sr6VEpOBPsDvO1Y_lR54ltvzgmvXXSLD7ZH-jkywu1B1-nNZv3KNxKTCGZ1sKuIIyjF00kGZ53qieFC-pWa_8lmdpHjhZIs6w0Zioda1hlU9OuDXpHNYPcSi_xzzI40FE2RugLowMgmnZKfkECszNbIfjCgaOYmT99kTsxmaZa1IU3NFHysE5EY2YCbkC0XM83sN67mtUZ-LI0yBTsELEEs9dODD9V6-CeEWiTtd7ct-b_MnUmaxgB&sig=AOD64_2QXHv2vIaNmyfnTG4xb7KdGLXSqw&client=ca-pub-1677597403311019&dbm_c=AKAmf-CP9h5C0wcWTTLAjs0i8LDIeTBvIpO2VaodlIOu7auY0yyxAIlwsGjouZeOIQQwly0RA4kLbHMbX7caT3dCHpLLleA3ssPEQUOlDq7ZOUQ8DNUeNdn2tY3ioe7xMOVDc7Vw9hXKqqxQXZrytURRopvAzXSFvPNezpyLQSdxicyxGDLRR8N5n2sh_jzAXgTg6P_A3OLxpEjq8xLZq-E6KHY8QNqtwktt366NA67XsSEbSfNnz5ejVcA7Z2-bxgr7W7Fc_OSjhhvHirgpizW26KQ08u-TUg&cry=1&dbm_d=AKAmf-CIrtHswJCpOVvcVaEFO9LvjOYX8UcCQqZfPIbc_AJlviN3nJAXqmxE1DNrU89_jtkmSzFNz90ZAYfE_efI7olvhh8O3x0RdrxwaZlbyrpqOI273A2ZvT2-ObTAPZsLbn2Q6L4DSRCwYonADF-zewb-WZCaaKcz-O6yZMqhypw65zqd5ggtOj8Etr-jlZnOveVMLprFOrVT4araPx5XP2G20gOVvRpgylAuRtN0FekgylDgvAqwR0IiuXY0uwXXUd-ACdxxgt7861D3Sx-c6lpjws6-qZVsJdWbt6E0UcEGlUlERUXaKTfgqeWdwMHFCmp7jmZrJW9d_MACIjhyL11pF6ZY0C3X3dAkwZqwBxNxaes60HbZo7YRFUt26U7kE7XzpFJuxo_NXRdZ20LN18I0SeKPbBMAwbBD3tXNGfsINHYuy9VlHHvaw3Ye0Ilfx5kamntF3wWZcp5_4dQu3ecEKQXxSKzluG7rPaUlMqavoiD6VXLXT0XU5cbeXpSNY3qBE_7Fd3-r-QGZO47V6wW4lFRodHTcVKXaHs0qp-0rDRnka4_p2ttlVb6Bs2iNIaFcMnvg5XS-yiWnP2JmNntIgCNMmm6PDH92gF-NFAu7mf113toVYh2-NJ-ngQqtani_2tbWoIHJKYyh4--MoogEOhh-vBoNtbp7SLmWv9y08ZCImhrhiL9pH0aStfo7qYZEd1R2&adurl=https://servedby.flashtalking.com/click/7/296653;10338317;6146776;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0gKIvjPky6ORXFS04qJtMWU&ft_impID=C90A873D-A6A6-2BF0-4AD4-53D54EFAB4F7&ft_section=22622326543&g=6750933ED2EA42&random=228234.3562754388&ft_width=728&ft_height=90&url=https://www.adobe.com/in/education/students/creativecloud.html?&sdid=PQ7SPXQB&mv=display&mv2=display
                  - img "Click Here" [ref=f63e19]
                - link "AdChoices arrow" [ref=f63e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f63e22]
                - link "Privacy Notification" [ref=f63e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f63e25]
                - link "Privacy Notification" [ref=f63e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f63e28]
          - iframe
  - generic [ref=e88]:
    - generic [ref=e89] [cursor=pointer]:
      - img [ref=e91]
      - link "Go to shopping options for Website performance analysis" [ref=e93]: Website performance analysis
    - button "Close shopping anchor" [ref=e94]
```