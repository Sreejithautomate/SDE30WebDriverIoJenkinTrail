 const { assert } = require("chai")
var cp  = require ("../pageobjects/VtigerContactPage")
 var ccp = require("../pageobjects/VtigerCreateNewContactPage")
 var hp=require("../pageobjects/VtigerHomePage")


describe('Contact',()=>{
    it('CreateContact', async ()=>{
        
        await hp.clickContactLnk() 
    
        await cp.clickOnCreatContact()
        await ccp.enterLastName("KV")
        
        await ccp.clickSaveBtn()
        title=await $("//span[@class='dvHeaderTe']").getText()
        
        wdioExpect(title).toHaveTextContaining("KV")
        
        
    })
})



