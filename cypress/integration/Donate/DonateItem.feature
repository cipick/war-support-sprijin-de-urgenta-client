Feature: Donate Item Resources

  Background:
    Given I am a logged in user
    And I want to donate
    And I click products resource

  Scenario: Donate Food item
    Given I click donate food button
    And I fill the donate food form
    When I submit the form
    Then I see the thank you for donation message
    And donate item is created

  Scenario: Donate Multiple Food items
    Given I fill multiple donate food forms
      | has_transportation | county_coverage | town       | name    | quantity | unit_type | packaging_type |
      | true               | AB              | Alba       | Cartofi | 100      | kg        | sac            |
      | false              | IF              | Bucuresti  | Lapte   | 200      | l         | bax bidon 2l   |
    When I click next step button
    Then I see the thank you for donation message
    And donate item is created

  Scenario: Donate General Hygiene item
    Given I click donate general hygiene button
    And I fill the donate general hygiene form
    And I submit the form
    Then I see the thank you for donation message
    And donate item is created

  Scenario: Donate Feminine Hygiene item
    Given I click donate feminine hygiene button
    And I fill the donate feminine hygiene form
    And I submit the form
    Then I see the thank you for donation message
    And donate item is created

  Scenario: Donate Multiple Feminine Hygiene item
    Given I click donate feminine hygiene button
    And I fill the donate feminine hygiene form
    And I submit the form
    Then I see the thank you for donation message
    And donate item is created

  Scenario: Donate Textile item
    Given I click donate textile button
    And I fill the donate textile form
    And I submit the form
    Then I see the thank you for donation message
    And donate item is created

  Scenario: Donate Construction item
    Given I click donate construction button
    And I fill the donate construction form
    And I submit the form
    Then I see the thank you for donation message
    And donate item is created

  Scenario: Donate Tent item
    Given I click donate tent button
    And I fill the donate tent form
    And I submit the form
    Then I see the thank you for donation message
    And donate item is created

  Scenario: Donate other item
    Given I click donate other item button
    And I fill the donate other item form
    And I submit the form
    Then I see the thank you for donation message
    And donate item is created


