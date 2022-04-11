
describe('Frames', () => {
    it('SwitchToFrame', async () => {
        await browser.url("https://chercher.tech/practice/frames")
        browser.maximizeWindow()
        var Topic= await $("//span[text()='Not a Friendly Topic']").getText()
        console.log("Topic : "+ Topic);
        var frame1=await $("//iframe[@id='frame1']")
        await browser.switchToFrame(frame1)
        var frame3=await $("//iframe[@id='frame3']")
        await browser.switchToFrame(frame3)
        await $("//input[@id='a']").click()
        await browser.switchToParentFrame()
        await $("//b[@id='topic']/following-sibling::input").setValue("Javascript")
        await browser.switchToFrame(null)

        var frame2=await $("//iframe[@id='frame2']")
        await browser.switchToFrame(frame2)
       var Animalsdropdown=await $("//select[@id='animals']")
       await Animalsdropdown.selectByVisibleText("Avatar")
        

       await browser.debug()






    });
});
