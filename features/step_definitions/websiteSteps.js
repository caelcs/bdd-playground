const { Given, When, Then } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');
const chai = require('chai');
const expect = chai.expect;

let browser;
let page;

Given('I open the browser', async () => {
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
});

When('I visit {string}', async (url) => {
  await page.goto(url);
});

Then('I should see the title {string}', async (title) => {
  const pageTitle = await page.title();
  if (pageTitle !== title) {
    throw new Error(`Expected title to be '${title}', but got '${pageTitle}'`);
  }
  await browser.close();
});