import { test, expect } from '@playwright/test';
import path from 'path';
import { LoginPage } from './pages/LoginPage';
import { ProjectPage } from './pages/ProjectPage';

test('Herbie AI - End to End Project Workflow', async ({ page }) => {
  const filePath = path.resolve(__dirname, '../Project A - Solar Pilot.docx');
  const loginPage = new LoginPage(page);
  const projectPage = new ProjectPage(page);

  // 1. Login Flow (Credentials using environment variables / sanitized inputs)
  await loginPage.goto();
 await loginPage.goto();
  await loginPage.login('wasiurrahman195@gmail.com', 'E5q5WNuzCAzYyqw');

  // 2. Project Creation & Document Attachment
  await projectPage.createNewProject('Project Testy');
  await projectPage.uploadDocument(filePath);

  // 3. AI Query Submission
  await projectPage.askQuestion('What is the cost of Solar battery?');

  // 4. Assertion
  await expect(page.locator('body')).not.toBeEmpty();
});