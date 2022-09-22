import { expect, test } from '@playwright/test';

test('card headers contain the correct symbols', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toContain('Ê');
	expect(await page.textContent('h1')).toContain('Ơ');
	page.textContent('');
});
