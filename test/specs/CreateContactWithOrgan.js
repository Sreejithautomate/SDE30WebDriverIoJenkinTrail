var assert = require('chai').assert

let hp = require("../pageobjects/VtigerHomePage")
let op= require("../pageobjects/VtigerOrganizationPage")
let cop= require("../pageobjects/VtigerCreateOrgPage")
let  cp= require ("../pageobjects/VtigerContactPage")
let ccp=require("../pageobjects/VtigerCreateNewContactPage")


describe('createContact', () => {
    it('TC_2', async () => {
      await hp.clickOrganizationLnk()
      var ran= await Math.random()
      let orgname="org"+ran
      await op.clickCreateOrgLnk()
      await cop.enterOrgName(orgname)
      await cop.clickSaveBtn()
     var orgHdrText= await  $("//span[@class='dvHeaderText']").getText()
  
      wdioExpect(orgHdrText).toHaveTextContaining(orgname)
      console.log("organization Created : "+orgHdrText);

     await hp.clickContactLnk()
     await cp.clickOnCreatContact()
     var lastname="Kv"
     await ccp.enterLastName(lastname)
     await ccp.clickOrgNameLookup()
     await browser.switchWindow("http://localhost:8888/index.php?module=Accounts&action=Popup&popuptype=specific_contact_account_address&form=TasksEditView&form_submit=false&fromlink=&recordid=")
     await $("//input[@name='search_text']").setValue(orgname)
     await $("//input[@name='search']").click()
     await $("//a[text()='"+orgname+"']").click()
     await browser.switchWindow("http://localhost:8888/index.php?module=Contacts&action=EditView&return_action=DetailView&parenttab=Marketing")
     await ccp.clickSaveBtn()

    });
});



