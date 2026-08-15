import { test, expect, Page, Locator } from '@playwright/test';

export class ProductsListPage {
  readonly page: Page;
  readonly plpHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.plpHeader = page.getByText('Products');
  }

  async assertPageOpened() {
    await test.step('Assert that PLP page is open', async () => {
      await expect(this.page).toHaveURL('/inventory.html');
      await expect(this.plpHeader).toBeVisible();
    });
  }
}
