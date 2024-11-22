const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const expect = chai.expect;

let number1, number2, result;

Given('I have two numbers {int} and {int}', (num1, num2) => {
  number1 = num1;
  number2 = num2;
});

When('I add them', () => {
  result = number1 + number2;
});

Then('the result should be {int}', (expectedResult) => {
  expect(result).to.equal(expectedResult);
});
