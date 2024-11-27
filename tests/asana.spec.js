// @ts-check
const { test, expect } = require('@playwright/test');
const json = JSON.parse(JSON.stringify(require("../test-data//data.json")));
const {LoginPage} = require('../page-object/LoginPage');
//const {HomePage} = require('../page-object/HomePage');


test.beforeEach('Before each', async ({ page }) => {
  const loginPage =  new LoginPage(page);
  loginPage.LoginInit(json.url, json.userName, json.password);
});

test('Test 1', async ({ page }) => {
 // await page.getByLabel('Cross-functional project plan').click();
  await page.getByLabel(json.section.Cross_Functional).click();
  await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'To')][contains(text(),'do')]//following::span[text()='Draft project brief']")).toBeVisible();
  //await expect(page.getByText('Non-Priority')).toBeVisible();
  await expect(page.getByText(json.tags.NonPriority)).toBeVisible();
  await expect(page.getByText(json.tags.On_Track).nth(1)).toBeVisible();
});

test('Test 2', async ({ page }) => {
  await page.getByLabel(json.section.Cross_Functional).click();
  //await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'To')][contains(text(),'do')]//following::span[contains(text(),'Schedule kickoff meeting']")).toBeVisible();
  await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'To')]//following::span[contains(text(),'Schedule kickoff meeting']")).toBeVisible();
  await expect(page.getByText(json.tags.Medium)).toBeVisible();
  await expect(page.getByText(json.tags.At_Risk).first()).toBeVisible();
  
});

test('Test 3', async ({ page }) => {
    await page.getByLabel(json.section.Cross_Functional).click();
    //await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'To')][contains(text(),'do')]//following::span[text()='Share timeline with teammates']")).toBeVisible();
    await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'To')]//following::span[text()='Share timeline with teammates']")).toBeVisible();
    await expect(page.getByText(json.tags.At_Risk)).toBeVisible();
    //  does not have off track tag on this page, instead only on track
    //await expect(page.getByText('Off track')).toBeVisible();

});

test('Test 4', async ({ page }) => {
    await page.getByLabel(json.section.Work_Requests).click();
    //await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'New')][contains(text(),'Requests')]//following::span[text()='[Example] Laptop setup for new hire']")).toBeVisible();
    await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'New')][contains(text(),'Requests')]//following::span[text()='[Example] Laptop setup for new hire']")).toBeVisible();
    await expect(page.getByText(json.tags.Medium_priority)).toBeVisible();
    await expect(page.getByText(json.tags.Low_effort).first()).toBeVisible();
    await expect(page.getByText(json.tags.New_hardware).first()).toBeVisible();
    await expect(page.getByText(json.tags.Not_Started)).toBeVisible();
});

test('Test 5', async ({ page }) => {
      await page.getByLabel(json.section.Work_Requests).click();
      await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[contains(text(),'In')][contains(text(),'Progress')]//following::span[text()='[Example] Password not working']")).toBeVisible();
      await expect(page.getByText(json.tags.Low_effort).first()).toBeVisible();
      await expect(page.getByText(json.tags.Low_priority).first()).toBeVisible();
      await expect(page.getByText(json.tags.Password_reset).first()).toBeVisible();
      await expect(page.getByText(json.tags.Waiting)).toBeVisible();
});

test('Test 6', async ({ page }) => {
      await page.getByLabel(json.section.Work_Requests).click();
      //await expect(page.locator("//div[@class='CommentOnlyBoardColumn-header']//h3[(text()='Completed')]//following::span[text()='[Example] New keycard for Daniela V']")).toBeVisible();
      await expect(page.locator(json.xpath.Completed_for_Daniele_V)).toBeVisible();
      await expect(page.getByText(json.tags.Low_effort).first()).toBeVisible();
      await expect(page.getByText(json.tags.New_hardware).first()).toBeVisible();
      await expect(page.getByText(json.tags.High_Priority).first()).toBeVisible();
      await expect(page.getByText(json.tags.Done)).toBeVisible();
});

