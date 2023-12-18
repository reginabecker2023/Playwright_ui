// @ts-check
const { test, expect } = require('@playwright/test');
const { before } = require('node:test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationpratice.com.br');
})

// Dimensões da tela
// test.use({
//   viewport: { width: 1600, height: 1200 }
// });
// test.use({
//   geolocation: { longitude: 41.890221, latitude: 12.492348 },
//   permissions: ['geolocation'],
// });

test('Login com sucesso @login', async ({ page }) => {
    //Fazer scroll até o botão Send Mail
  const button = await page.getByRole('button', { name: 'Send Mail'})
  await button.scrollIntoViewIfNeeded()
  await button.click()

  //Fazer scroll até o texto Newsletter
  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()

  await page.getByRole('link', { name: ' Login' }).click();  
  await page.locator('#user').click();
  await page.locator('#user').fill('thinaregina@gmail.com');
  await page.locator('#password').fill('$thina$2023');
  await page.screenshot({ path: 'screenshot/screenshot.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test.afterEach(async ({ page }) => {
  await page.screenshot({ path: 'screenshot/screenshot.png' });
})
