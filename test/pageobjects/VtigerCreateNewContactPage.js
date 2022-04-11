class CreateContact
{
  get lastNameTxt()
  {
      return $('//input [@name="lastname"]')
  }
  
  get orgNameLookup()
  {
    return $("//input[@name='account_id']/following-sibling::img[@alt='Select']")
  }
 
  get repotToLookUp()
 {
   return $("//input[@name='contact_name']/following-sibling::img[@alt='Select']")
 }

  get saveBTN()
  {
      return $('//input[@title="Save [Alt+S]"]')
  }

async enterLastName(lastname)
{
  await  this.lastNameTxt.setValue(lastname)
}

async clickOrgNameLookup()
{
  await this.orgNameLookup.click()
}

async clickOnReportToLookup()
{
  await this.repotToLookUp.click()
}


async clickSaveBtn()
{
   await  this.saveBTN.click()
}


}
module.exports=new CreateContact()