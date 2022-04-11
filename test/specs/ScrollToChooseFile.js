

let hp = require("../pageobjects/VtigerHomePage")
let op= require("../pageobjects/VtigerOrganizationPage")
let cop= require("../pageobjects/VtigerCreateOrgPage")
let  cp= require ("../pageobjects/VtigerContactPage")
let ccp=require("../pageobjects/VtigerCreateNewContactPage")

describe('createContact', () => {
    it('CreateContactWithImage',async () => {
        
        await hp.clickContactLnk()
        await cp.clickOnCreatContact()
       
       
     var choosefile= await $("//input[@name='imagename']")
      await choosefile.scrollIntoView()
      await choosefile.click()
      await browser.debug()
      //await choosefile.setValue('C:/Users/sreej/Downloads/contactDemo.jpg')
      
     
        });
});