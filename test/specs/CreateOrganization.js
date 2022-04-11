
var hp = require("../pageobjects/VtigerHomePage")
var op=require("../pageobjects/VtigerOrganizationPage")
var cop=require("../pageobjects/VtigerCreateOrgPage")

describe('Organization', () => {
    it('CreateOrganization', async () => {
      await  hp.clickOrganizationLnk()
      await op.clickCreateOrgLnk()
        var ran= await  Math.random()
       var orgname="org"+ran
        await console.log(orgname);
        await cop.enterOrgName(orgname)
        await cop.clickSaveBtn()
    });
});

