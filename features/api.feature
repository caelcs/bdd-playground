Feature: Hello World API

  Scenario: Verify the Hello World endpoint
    Given I send a GET request to "http://localhost:3000/"
    Then the response should be "Hello, World!"