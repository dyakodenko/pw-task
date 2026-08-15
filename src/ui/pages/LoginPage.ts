import { test, expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await test.step('Go to login page', async () => {
      await this.page.goto('');
      await expect(this.page).toHaveURL('');
    });
  }

  async assertLoginFormAvaliable() {
    await test.step('Assert login form is avaliable', async () => {
      await expect(this.page.getByPlaceholder('Username')).toBeVisible();
    });
  }
}
