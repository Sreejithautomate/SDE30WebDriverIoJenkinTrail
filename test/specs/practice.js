describe('amazon',()=>{

it('getAtrribute',async ()=>{
    await browser.url("https://www.amazon.in/?&ext_vrnc=hi&tag=googinhydr1-21&ref=pd_sl_4b3e4wrxds_b&adgrpid=60639568242&hvpone=&hvptwo=&hvadid=294102729729&hvpos=&hvnetw=g&hvrand=2715709168295902971&hvqmt=b&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062009&hvtargid=kwd-311187680635&hydadcr=5841_1914865&gclid=EAIaIQobChMIlLa3hY7_9gIVCzUrCh2ihgNxEAAYASAAEgLoAfD_BwE")
   // element getAttribute() will return the value of a attribut which we passed 
    classAttribute = await $('#searchDropdownBox').getAttribute('class')
   console.log("***classAttribute***"+classAttribute);

  })

  it('getHTML', async() => {
    await browser.url("https://www.amazon.in/?&ext_vrnc=hi&tag=googinhydr1-21&ref=pd_sl_4b3e4wrxds_b&adgrpid=60639568242&hvpone=&hvptwo=&hvadid=294102729729&hvpos=&hvnetw=g&hvrand=2715709168295902971&hvqmt=b&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062009&hvtargid=kwd-311187680635&hydadcr=5841_1914865&gclid=EAIaIQobChMIlLa3hY7_9gIVCzUrCh2ihgNxEAAYASAAEgLoAfD_BwE")
    // 
     elementhtml = await $('#searchDropdownBox').getHTML()
    console.log("***elementhtml***"+elementhtml);
 
   });

   it('getLocation', async() => {
    await browser.url("https://www.amazon.in/?&ext_vrnc=hi&tag=googinhydr1-21&ref=pd_sl_4b3e4wrxds_b&adgrpid=60639568242&hvpone=&hvptwo=&hvadid=294102729729&hvpos=&hvnetw=g&hvrand=2715709168295902971&hvqmt=b&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062009&hvtargid=kwd-311187680635&hydadcr=5841_1914865&gclid=EAIaIQobChMIlLa3hY7_9gIVCzUrCh2ihgNxEAAYASAAEgLoAfD_BwE")
    // 
     elemXaxis = await $('#searchDropdownBox').getLocation('x')
     elemYaxis=await $('#searchDropdownBox').getLocation('y')

    console.log("***elem-X-axis***"+elemXaxis);
    console.log("***elem-Y-axis***"+elemYaxis);
 
   });

   it.only('getproperty',async ()=>{
    await browser.url("https://www.amazon.in/?&ext_vrnc=hi&tag=googinhydr1-21&ref=pd_sl_4b3e4wrxds_b&adgrpid=60639568242&hvpone=&hvptwo=&hvadid=294102729729&hvpos=&hvnetw=g&hvrand=2715709168295902971&hvqmt=b&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062009&hvtargid=kwd-311187680635&hydadcr=5841_1914865&gclid=EAIaIQobChMIlLa3hY7_9gIVCzUrCh2ihgNxEAAYASAAEgLoAfD_BwE")
   // element getAttribute() will return the value of a attribut which we passed 
    elemProperty = await $('#searchDropdownBox').getProperty('id')
   console.log("***elemProperty***"+elemProperty);
   })

})
