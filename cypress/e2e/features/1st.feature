Feature: calculator
  Scenario: operation basic calculator app
    When I visit the app
    And I click basic calculator
    Then I should see the basic calculator
  Scenario: Adding two numbers
    When I visit the app
    And I click basic calculator
    And I click 3 button
    And I click "Add" button
    And I click 7 button
    And I click "Equals" button
    Then I should see results shown as "10"