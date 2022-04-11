class OrgPage
{
     get createOrgLnk()
     {
         return $('//img[@alt="Create Organization..."]')
     }

     async clickCreateOrgLnk()
     {
       await  this.createOrgLnk.click()
     }

}

module.exports= new OrgPage()