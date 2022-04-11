
describe('Launch_Suite', () => {
    it('navigateToAmazone', async() => {

       await browser.url("https://www.amazon.com")
       await expect(browser).toHaveUrl("https://wwww.amazon.com")

       var title = await browser.getTitle()
       expect(browser).toHaveTitleContaining("")


        
    });
});

