
class ContactPage
{
  get createcontactLookup()
  {
      return $('//img[@alt="Create Contact..."]')
  }
 
 async clickOnCreatContact()
  {
     await this.createcontactLookup.click()
  }

}

module.exports = new ContactPage()