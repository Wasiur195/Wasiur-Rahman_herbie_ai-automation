import { Page, Locator } from '@playwright/test';

export class ProjectPage {
  readonly page: Page;
  readonly projectsLink: Locator;
  readonly newProjectButton: Locator;
  readonly projectNameInput: Locator;
  readonly createProjectButton: Locator;
  readonly uploadFilesButton: Locator;
  readonly fileInput: Locator;
  readonly chatInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.projectsLink = page.getByRole('link', { name: 'Projects' });
    this.newProjectButton = page.getByRole('button', { name: 'New Project' });
    this.projectNameInput = page.getByRole('textbox', { name: 'Project Name' });
    this.createProjectButton = page.getByRole('button', { name: 'Create Project' });
    this.uploadFilesButton = page.getByRole('button', { name: 'Upload files to this project' });
    this.fileInput = page.getByRole('complementary')
                         .filter({ hasText: 'Project Files' })
                         .locator('input[type="file"]');
    this.chatInput = page.getByRole('textbox', { name: 'Ask about this project…' });
  }

  async createNewProject(name: string) {
    await this.projectsLink.click();
    await this.newProjectButton.click();
    await this.projectNameInput.fill(name);
    await this.createProjectButton.click();
  }

  async uploadDocument(filePath: string) {
    await this.uploadFilesButton.click();
    await this.fileInput.setInputFiles(filePath);
  }

  async askQuestion(question: string) {
    await this.chatInput.click();
    await this.chatInput.fill(question);
    await this.page.keyboard.press('Enter');
  }
}