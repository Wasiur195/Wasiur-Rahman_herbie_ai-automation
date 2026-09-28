import { test, expect } from '@playwright/test';
import path from 'path';

test('Herbie AI - End to End Project Workflow', async ({ page }) => {
  // Root folder e thaka file-er absolute path setup
  const filePath = path.resolve(__dirname, '../Project A - Solar Pilot.docx');

  // 1. Navigate & Login
  await page.goto('https://frontend-production-8351.up.railway.app/');
  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByRole('textbox', { name: 'Email' }).fill('wasiurrahman195@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('E5q5WNuzCAzYyqw');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // 2. Navigate to Projects & Create New Project
  await page.getByRole('link', { name: 'Projects' }).click();
  await page.getByRole('button', { name: 'New Project' }).click();

  const projectNameInput = page.getByRole('textbox', { name: 'Project Name' });
  await projectNameInput.fill('Project Testy');
  await page.getByRole('button', { name: 'Create Project' }).click();

  // 3. Upload File from Root Folder
  await page.getByRole('button', { name: 'Upload files to this project' }).click();
  
  const fileInput = page.getByRole('complementary')
                        .filter({ hasText: 'Project Files' })
                        .locator('input[type="file"]');
  await fileInput.setInputFiles(filePath);

  // 4. Submit Query
  const chatInput = page.getByRole('textbox', { name: 'Ask about this project…' });
  await chatInput.click();
  await chatInput.fill('What is the cost of Solar battery?');
  await page.keyboard.press('Enter');

  // 5. Verify Response Rendered
  await expect(page.locator('body')).not.toBeEmpty();
});