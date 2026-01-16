
import { test, expect } from '@playwright/test';

test('Test', async ({ page }) => {
  
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  await page.locator('a.dropdown-toggle:has(span.title:has-text("My account"))').hover();

  await page.locator('ul.dropdown-menu >> text=Login').click();

  await page.getByPlaceholder('E-Mail Address').fill('Harvinder.singh2597@gmail.com');
  await page.getByPlaceholder('Password').fill('Harry@25');
  await page.getByRole('button', {name: 'Login'}).click();

  await page.getByRole('textbox', { name: 'Search' }).fill('iMac');

  await page.getByRole('button', {name: 'Search'}).click();

  await page.screenshot({ path: 'full_page_screenshot.png', fullPage: true });

});
