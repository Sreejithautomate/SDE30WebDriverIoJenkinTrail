var cp  = require ("../pageobjects/VtigerContactPage")
 var ccp = require("../pageobjects/VtigerCreateNewContactPage")
 var hp=require("../pageobjects/VtigerHomePage")

 describe('CreateContact', () => {
     it('TC_4',async () => {
         await hp.clickContactLnk()
         await cp.clickOnCreatContact()
         ran=Math.random()
         lastname="KV"+ran
         await ccp.enterLastName(lastname)
         await ccp.clickOnReportToLookup()
       let parentwindow=await browser.getWindowHandle()
        let windowhandles= await browser.getWindowHandles()
        //console.log("Parentwindow : "+parentwindow);
        //console.log(windowhandles);
        await browser.switchToWindow(windowhandles[1])
        await $("//input[@name='search_text']").setValue("KV")
        await $("//input[@name='search']").click()
       existinglastnames= await $$('//a[contains(text()," KV")]')
       //console.log(existinglastnames);
       await existinglastnames[0].click()
        await browser.switchToWindow(parentwindow)
        await ccp.clickSaveBtn()
     
     });
 });