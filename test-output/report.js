$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "\r\nAs a user I want to login to my nop commerce account",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 5173075200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "1. User should navigate to Login page successfully",
  "description": "",
  "id": "login-feature;1.-user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@login1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to Login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 119761700,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iClickOnLoginLink()"
});
formatter.result({
  "duration": 945945100,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 15449000,
  "status": "passed"
});
formatter.after({
  "duration": 649633200,
  "status": "passed"
});
formatter.before({
  "duration": 3770163200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "2. User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;2.-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@login2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email as \"Abc@yahoo.co.in\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password as  \"abcd123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 31600,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iClickOnLoginLink()"
});
formatter.result({
  "duration": 439680300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc@yahoo.co.in",
      "offset": 18
    }
  ],
  "location": "Login_sd.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 46301100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123",
      "offset": 22
    }
  ],
  "location": "Login_sd.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 39465400,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iClickOnLoginButton()"
});
formatter.result({
  "duration": 376719900,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.after({
  "duration": 634798700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "3. User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;3.-user-should-login-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@login3"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter email as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter password as  \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-feature;3.-user-should-login-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 27,
      "id": "login-feature;3.-user-should-login-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "ram444@yahoo.com",
        "london4"
      ],
      "line": 28,
      "id": "login-feature;3.-user-should-login-successfully-with-valid-credentials;;2"
    },
    {
      "cells": [
        "ram555@yahoo.com",
        "london5"
      ],
      "line": 29,
      "id": "login-feature;3.-user-should-login-successfully-with-valid-credentials;;3"
    },
    {
      "cells": [
        "xyz13@gmail.com",
        "abc123"
      ],
      "line": 30,
      "id": "login-feature;3.-user-should-login-successfully-with-valid-credentials;;4"
    },
    {
      "cells": [
        "xyz1@gmail.com",
        "abc1234"
      ],
      "line": 31,
      "id": "login-feature;3.-user-should-login-successfully-with-valid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3395442200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "3. User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;3.-user-should-login-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 18,
      "name": "@login3"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter email as \"ram444@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter password as  \"london4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 41100,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iClickOnLoginLink()"
});
formatter.result({
  "duration": 908955100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram444@yahoo.com",
      "offset": 18
    }
  ],
  "location": "Login_sd.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 56512400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london4",
      "offset": 22
    }
  ],
  "location": "Login_sd.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 36861800,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iClickOnLoginButton()"
});
formatter.result({
  "duration": 395382900,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 15100,
  "status": "passed"
});
formatter.after({
  "duration": 744320000,
  "status": "passed"
});
formatter.before({
  "duration": 3407064200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "3. User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;3.-user-should-login-successfully-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 18,
      "name": "@login3"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter email as \"ram555@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter password as  \"london5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 49800,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iClickOnLoginLink()"
});
formatter.result({
  "duration": 479719400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram555@yahoo.com",
      "offset": 18
    }
  ],
  "location": "Login_sd.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 53415600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london5",
      "offset": 22
    }
  ],
  "location": "Login_sd.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 39216000,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iClickOnLoginButton()"
});
formatter.result({
  "duration": 413033500,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 10500,
  "status": "passed"
});
formatter.after({
  "duration": 733817300,
  "status": "passed"
});
formatter.before({
  "duration": 3913128800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "3. User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;3.-user-should-login-successfully-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 18,
      "name": "@login3"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter email as \"xyz13@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter password as  \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 31400,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iClickOnLoginLink()"
});
formatter.result({
  "duration": 479437700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz13@gmail.com",
      "offset": 18
    }
  ],
  "location": "Login_sd.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 59964700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 22
    }
  ],
  "location": "Login_sd.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 41543100,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iClickOnLoginButton()"
});
formatter.result({
  "duration": 394134700,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 15800,
  "status": "passed"
});
formatter.after({
  "duration": 745857400,
  "status": "passed"
});
formatter.before({
  "duration": 3592822400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "3. User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;3.-user-should-login-successfully-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 18,
      "name": "@login3"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter email as \"xyz1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter password as  \"abc1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 51100,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iClickOnLoginLink()"
});
formatter.result({
  "duration": 460998900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1@gmail.com",
      "offset": 18
    }
  ],
  "location": "Login_sd.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 53578600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 22
    }
  ],
  "location": "Login_sd.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 49493700,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iClickOnLoginButton()"
});
formatter.result({
  "duration": 383909100,
  "status": "passed"
});
formatter.match({
  "location": "Login_sd.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 10700,
  "status": "passed"
});
formatter.after({
  "duration": 615839500,
  "status": "passed"
});
});