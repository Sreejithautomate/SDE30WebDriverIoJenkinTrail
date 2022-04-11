describe('dragandDropSuite', () => {
    it('DragandDrop', async () => {
     await browser.url('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
     await browser.maximizeWindow()
    var targetField= await $("//div[text()='United States']")
   var dragelement=await $("//div[text()='Washington'][2]")
    
    await dragelement.dragAndDrop(targetField)

    await browser.debug()


            
    });
});