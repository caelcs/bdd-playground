const { Given, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');

let response;

Given('I send a GET request to {string}', async function (url) {
  response = await axios.get(url);
});

Then('the response should be {string}', function (expectedResponse) {
  assert.strictEqual(response.data, expectedResponse);
});