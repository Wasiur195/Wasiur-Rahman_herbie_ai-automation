import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly signInLink: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
  }

  async goto() {
    await this.page.goto('https://frontend-production-8351.up.railway.app/');
  }

  async login(email: string, pass: string) {
    await this.signInLink.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(pass);
    await this.signInButton.click();
  }
}