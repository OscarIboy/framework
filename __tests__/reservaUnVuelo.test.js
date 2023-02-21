import LoginPage from "../pages/LoginPage";
import FlightsPage from "../pages/FlightsPage";
import NavbarPage from "../components/NavbarPage";

let loginPage
let flightsPage
let navbarPage

describe('Iniciar sesion en la pagina', ()=>{
    beforeAll(async() =>{
        loginPage = new LoginPage()
        flightsPage = new FlightsPage()
        navbarPage = new NavbarPage()
    })

    test('Debemos iniciar sesion', async()=> {
        await loginPage.visit()
        await loginPage.login('user@phptravels.com', 'demouser')
    },30000)

    test('Validar que este en el dashboard', async()=>{
        await loginPage.validateLogin()
    },30000)

    test('Navegar hacia la pagina de vuelos', async()=>{
        await navbarPage.validateNavBarIsPresent()
        await navbarPage.selectMenuItem('flights')
    },30000)

    test('Validar que estemos en vuelos y seleccionar vuelos', async()=>{
        await flightsPage.validatePage()
        await flightsPage.selectFlight('Mexico', 'Paris', '20-11-2023', 5)
    },30000)

    test('Validar que hayamos buscado el vuelo', async()=>{
        await flightsPage.validateFlights()
    },30000)
})