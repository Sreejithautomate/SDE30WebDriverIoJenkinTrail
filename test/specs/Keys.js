describe('keys', () => {
    it('EnterKey',async () => {
        await browser.url("https://testautomationpractice.blogspot.com/")
        await $("#Wikipedia1_wikipedia-search-input").setValue("Clock")
        await browser.keys("Enter") 
        await browser.debug()

    });
});