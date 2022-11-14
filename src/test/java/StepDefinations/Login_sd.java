package StepDefinations;

import Base.DriverClass;
import PageObjectPattern.HomePage;
import PageObjectPattern.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

public class Login_sd extends DriverClass {

    @Given("^I am on Home page$")
    public void iAmOnHomePage() throws IOException {
//         openBrowser();
    }
    @When("^I click on Login Link$")
    public void iClickOnLoginLink() throws InterruptedException {
        new HomePage().clickLoginLink();}
    @Then("^I should navigate to Login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        new HomePage().verifyLoginPage();
    }
    @And("^I enter email as \"([^\"]*)\"$")
    public void iEnterEmailAs(String email) throws InterruptedException {
      new LoginPage().enterEmail(email);
    }
    @And("^I enter password as  \"([^\"]*)\"$")
    public void iEnterPasswordAs(String password)  {
        new LoginPage().enterpassword(password);
    }
    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickLogin();
    }
    @Then("^I should Login successfully$")
    public void iShouldLoginSuccessfully() {
    }



}
