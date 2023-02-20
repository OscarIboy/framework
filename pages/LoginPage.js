import BasePage from './BasePage'

export default class LoginPage extends BasePage {
	constructor() {
		super()
		this.navBar = 'div.navbar:nth-child(1)'
        this.inputEmail = '#inputEmail'
        this.inputPassord = '#inputPassword'
        this.loginButton = '#login'
        this.loginPageText = "//h2[contains(text(),'History,')]"
	}

    async visit(){
        await page.goto('https://phptravels.org/login')
        await page.waitForSelector(this.navBar)
        
        const url = this.getUrl()

        console.log(url)
    }

    async login(email, password){
        await page.waitForSelector(this.inputEmail)
        await this.type(this.inputEmail, email)
        await this.type(this.inputPassord, password)
        await this.wait(15000)
        await this.click(this.loginButton)
    }

    async validateLogin(){
        await page.waitForXPath(this.loginPageText)
        await page.waitForSelector(this.navBar)
    }
}
