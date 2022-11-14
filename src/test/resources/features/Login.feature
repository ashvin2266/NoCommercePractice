@login
Feature: Login Feature

  As a user I want to login to my nop commerce account
  @login1
  Scenario:1. User should navigate to Login page successfully
    Given   I am on Home page
    When    I click on Login Link
    Then    I should navigate to Login page successfully
  @login2
  Scenario:2. User should Login successfully with valid credentials
    Given   I am on Home page
    When    I click on Login Link
    And     I enter email as "Abc@yahoo.co.in"
    And     I enter password as  "abcd123"
    And     I click on Login button
    Then    I should Login successfully
  @login3
  Scenario Outline:3. User should Login successfully with valid credentials
    Given   I am on Home page
    When    I click on Login Link
    And     I enter email as "<email>"
    And     I enter password as  "<password>"
    Then    I click on Login button
    Then    I should Login successfully
    Examples:
      | email            | password |
      | ram444@yahoo.com | london4  |
      | ram555@yahoo.com | london5  |
      | xyz13@gmail.com  | abc123   |
      | xyz1@gmail.com   | abc1234  |