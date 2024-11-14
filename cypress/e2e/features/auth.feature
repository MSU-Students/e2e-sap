Feature: Auth
  Scenario: login screen
    When I visit the app
    And I am not yet authenticated
    Then I should be redirected to signin screen
