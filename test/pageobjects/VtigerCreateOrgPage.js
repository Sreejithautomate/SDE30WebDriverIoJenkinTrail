class createOrgPage
{
  get OrgNameText()
  {
     return $("//input[@name='accountname']")
  }
  
  get industryDropDown()
  {
     return $("//select[@name='industry']")
  }

  get saveBtn()
  {
    return $('//input[@title="Save [Alt+S]"]')
  }



 async enterOrgName(name)
  {
     await this.OrgNameText.setValue(name)
  }

 async  clickSaveBtn()
  {
     await this.saveBtn.click()
  }
  
   async IndDropDownSelectByText(text)
   {
      await this.industryDropDown.selectByVisibleText(text)
   }

}

module.exports = new createOrgPage()