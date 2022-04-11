describe('doubleClick', () => {
    it('Doubleclick', async () => {
        browser.url('file:///D:/SDET30JsAutomation/test/specs/doubleclick.html')
       beforeclick= await $('#someText').getText()
       console.log("***Text Before click*** : "+beforeclick);
       $('#myButton').doubleClick()
       afterclick= await $('#someText').getText()
       console.log("***Text After click*** : "+afterlick);
        
    });
});