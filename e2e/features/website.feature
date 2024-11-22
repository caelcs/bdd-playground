Feature: Open a website and check the title

  Scenario: Visit a webpage and check its title
    Given I open the browser
    When I visit "http://google.com"
    Then I should see the title "Google"