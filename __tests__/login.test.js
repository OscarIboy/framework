import LoginPage from "../pages/LoginPage";

let loginPage

describe('Iniciar sesion en la pagina', ()=>{
    beforeAll(async() =>{
        loginPage = new LoginPage()
    })

    test('Debera de ir a la pagina', async()=> {
        await loginPage.visit()
    })

    test('Debera llenar los campos', async()=>{
        await loginPage.login('user@phptravels.com', 'demouser')
    },30000)

    test('Validar que este en el dashboard', async()=>{
        await loginPage.validateLogin()
    },30000)
})