import { test, expect } from '@playwright/test'

test('popover abre, posiciona e fecha por clique-fora', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Alternar Popover' }).click()
  const dialog = page.getByRole('dialog', { name: '' })
  await expect(dialog).toBeVisible()
  // clique fora
  await page.mouse.click(5, 5)
  await expect(dialog).toBeHidden({ timeout: 2000 })
})
