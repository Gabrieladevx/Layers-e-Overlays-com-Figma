import { test, expect } from '@playwright/test'

test('modal abre e prende foco; ESC fecha', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Abrir Modal' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  // foco dentro do dialog
  await expect(page.getByRole('dialog')).toBeFocused()
  // ESC fecha
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toBeHidden({ timeout: 2000 })
})
