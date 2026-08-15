import { test } from '@playwright/test';
import { LoginPage } from '../src/ui/pages/LoginPage';

test('Login page is open', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.assertLoginFormAvaliable();
});
