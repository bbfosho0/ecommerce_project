const { test, expect } = require('@playwright/test');

test('core storefront flow works with live Sanity content', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('/');
  await expect(page).toHaveTitle(/Audiophile Haven/);
  await expect(page.getByRole('heading', { name: /Best Selling Products/i })).toBeVisible();

  const firstProduct = page
    .getByRole('region', { name: /Best Selling Products/i })
    .getByRole('link', { name: /^View / })
    .first();
  await expect(firstProduct).toBeVisible();
  await Promise.all([
    page.waitForURL(/\/product\//),
    firstProduct.click(),
  ]);

  await expect(page.getByRole('button', { name: /Add to Cart/i })).toBeVisible();

  const firstThumbnail = page.getByRole('button', { name: /Show .* image 1/i }).first();
  if (await firstThumbnail.count()) {
    await firstThumbnail.click();
  }

  await page.getByRole('button', { name: /Increase quantity/i }).click();
  await page.getByRole('button', { name: /Add to Cart/i }).click();
  await page.getByRole('button', { name: /Open cart/i }).click();

  await expect(page.getByRole('dialog', { name: /Your cart/i })).toBeVisible();
  await expect(page.getByText(/Subtotal:/i)).toBeVisible();

  await page.getByRole('button', { name: /Remove/i }).first().click();
  await expect(page.getByText(/Cart is empty/i)).toBeVisible();

  await page.goto('/success');
  await expect(page.getByRole('heading', { name: /Payment successful/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Continue Shopping/i })).toBeVisible();

  expect(consoleErrors.filter((text) => !text.includes('favicon'))).toEqual([]);
});
