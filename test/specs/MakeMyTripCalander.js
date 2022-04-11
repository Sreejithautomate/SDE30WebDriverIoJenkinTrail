
describe('MakeMyTrip', () => {
    it('MakeMyTripCalander',async () => {

        await browser.url("https://www.makemytrip.com/")
        await browser.maximizeWindow()
       await $("body").click() // clicking anywhere on the body of webpage
     
       await $("//span[text()='DEPARTURE']").click()

        date="August"
        day=4


        //await $("//div[contains(text(),'April')]/ancestor::div[@class='DayPicker-Month']/descendant::p[text()='9']").click()

        for(;;)
        {     
            try {

                await $("//div[contains(text(),'"+date+"')]/ancestor::div[@class='DayPicker-Month']/descendant::p[text()='"+day+"']").click()

              break  
            } catch (error) 
            {
               await  $("//span[@aria-label='Next Month']").click()
            }

        }

    
 });
});