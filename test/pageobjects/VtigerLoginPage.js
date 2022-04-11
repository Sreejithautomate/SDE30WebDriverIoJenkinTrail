const loginPage = require("./login.page")

class LoginPage
{
  get userNameEdt()
  {
      return $('//input[@name="user_name"]')
  }
 
  get passwordEdt()
  {
      return $('//input[@name="user_password"]')
  }

  get LoginBtn()
  {
      return $('#submitButton')
  }

  async enterUserName(username)
  {
      await this.userNameEdt.setValue(username)
  }

async enterPassword(password)
{
    await this.passwordEdt.setValue(password)
}

async clickLoginBTN()
{
    await this.LoginBtn.click()
}
}

module.exports= new LoginPage()