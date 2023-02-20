
describe('Google ', () => {
	test('Abrir el navegador', async () => {
		await page.goto('https://www.google.com/')
		await page.waitForTimeout(5000)
	},8000)
})
