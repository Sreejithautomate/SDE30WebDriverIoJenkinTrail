

describe('disableElementSuite', () => {
    it('disableElement', async () => {
 
        await browser.url("file:///D:/SDET30JsAutomation/test/specs/disable.html")

        var fnametextField=await $("//input[@id='fname']")
         await browser.pause(3000)
         await fnametextField.setValue("Sreee")
         
         fnameValue=await fnametextField.getValue()
         await browser.pause(3000)
         console.log("***Fname*** : " + fnameValue);

         var lnametextField=await $("//input[@id='Lname']")

        
         await browser.execute(() => {

           // document.getElementById('Lname').value='sss'
            document.getElementById('Lname').setAttribute("value","Sreee")
            
         })

         lnameValue=await lnametextField.getValue()

         console.log("***Lname*** : " + lnameValue);

        
    });
});