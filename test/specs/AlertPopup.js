describe('AlertPop', () => {
    it('alert', async() => {
        await browser.url("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver")
        await browser.maximizeWindow()
        await $("//input[@name='alert']").click()
        alerttext=await browser.getAlertText()
        console.log(alerttext);
       await browser.acceptAlert()

    });

    it.only
    ('alert_2', async() => {
        await browser.url("https://testautomationpractice.blogspot.com/")
        await browser.maximizeWindow()
        await $("//button[text()='Click Me']").click()
        alerttext=await browser.getAlertText()
        console.log("****alertText*******  : " +alerttext);
      await browser.acceptAlert()

       await browser.debug()

    });


});