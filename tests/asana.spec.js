// @ts-check
const { test, expect } = require('@playwright/test');
const json = JSON.parse(JSON.stringify(require("../test-data//data.json")))


test.beforeEach('Test Case 1', async ({ page }) => {
  await page.goto(json.url);

  await page.locator("input[autocomplete='username']").fill(json.userName);
  await page.locator(".ButtonThemeablePresentation--isEnabled.ButtonThemeablePresentation.ButtonThemeablePresentation--large.LoginButton.LoginEmailForm-continueButton.Stack.Stack--align-center.Stack--direction-row.Stack--display-inline.Stack--justify-center").click();
  await page.locator("input[class='TextInputBase SizedTextInput SizedTextInput--medium TextInput TextInput--medium TextInputIconContainer-input LoginPasswordForm-passwordInput']").fill('Password123');
  await page.locator(".ButtonThemeablePresentation--isEnabled.ButtonThemeablePresentation.ButtonThemeablePresentation--large.LoginButton.LoginPasswordForm-loginButton.Stack.Stack--align-center.Stack--direction-row.Stack--display-inline.Stack--justify-center").click();
  
});

test('Test 1', async ({ page }) => {
  await page.getByLabel('Cross-functional project plan').click();
  await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'To')][contains(text(),'do')]//following::span[text()='Draft project brief']")).toBeVisible();
  await expect(page.getByText('Non-Priority')).toBeVisible();
  await expect(page.getByText('On track').nth(1)).toBeVisible();

});

test('Test 2', async ({ page }) => {
  await page.getByLabel('Cross-functional project plan').click();
  await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'To')][contains(text(),'do')]//following::span[contains(text(),'Schedule kickoff meeting']")).toBeVisible();
  await expect(page.getByText('Medium')).toBeVisible();
  await expect(page.getByText('At risk').first()).toBeVisible();
  
});

test('Test 3', async ({ page }) => {
    await page.getByLabel('Cross-functional project plan').click();
    await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'To')][contains(text(),'do')]//following::span[text()='Share timeline with teammates']")).toBeVisible();
    await expect(page.getByText('High')).toBeVisible();
    //  does not have off track tag on this page, instead only on track
    //await expect(page.getByText('Off track')).toBeVisible();

});

test('Test 4', async ({ page }) => {
    await page.getByLabel('Work Requests, Project').click();
    await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'New')][contains(text(),'Requests')]//following::span[text()='[Example] Laptop setup for new hire']")).toBeVisible();
    await expect(page.getByText('Medium priority')).toBeVisible();
    await expect(page.getByText('Low effort').first()).toBeVisible();
    await expect(page.getByText('New hardware').first()).toBeVisible();
    await expect(page.getByText('Not Started')).toBeVisible();
});

test('Test 5', async ({ page }) => {
      await page.getByLabel('Work Requests, Project').click();
      await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'In')][contains(text(),'Progress')]//following::span[text()='[Example] Password not working']")).toBeVisible();
      await expect(page.getByText('Low effort').first()).toBeVisible();
      await expect(page.getByText('Low priority').first()).toBeVisible();
      await expect(page.getByText('Password reset').first()).toBeVisible();
      await expect(page.getByText('Waiting')).toBeVisible();
});

test('Test 6', async ({ page }) => {
      await page.getByLabel('Work Requests, Project').click();
      await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[(text()='Completed')]//following::span[text()='[Example] New keycard for Daniela V']")).toBeVisible();
      await expect(page.getByText('Low effort').first()).toBeVisible();
      await expect(page.getByText('New hardware').first()).toBeVisible();
      await expect(page.getByText('High Priority').first()).toBeVisible();
      await expect(page.getByText('Done')).toBeVisible();
});

