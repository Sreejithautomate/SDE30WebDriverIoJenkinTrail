class HomePage
{
  get contactLnk()
  {
      return $("//a[text()='Contacts']")
  }

   get organizationLnk()
  {
      return $("//a[text()='Organizations']")
  }

  get administatorImg()
  {
      return $("//img[@src='themes/softed/images/user.PNG']")
  }

  get signOutButton()
  {
      return $("//a[text()='Sign Out']")
  }


  async clickContactLnk()
  {
      await this.contactLnk.click()
  }

  async clickOrganizationLnk()
  {
     await this.organizationLnk.click()
  }

  async SignOutFromVtiger()
  {
      await this.administatorImg.moveTo()
      await this.signOutButton.click()
  }

}

module.exports=new HomePage()