package PageObjectPattern;

import Base.DriverClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends DriverClass {

@FindBy(linkText = "Log in")
WebElement loginlink;

    public HomePage(){
        PageFactory.initElements(driver,this);
    }
    public void clickLoginLink() throws InterruptedException {
        clickOnElement(loginlink);
        log.info("login link is clicked");
    }
    public void verifyLoginPage(){
        String pagetitle="nopCommerce demo store. Login";
        verifyPageTitle(pagetitle);
        log.info("LoginPage title "+pagetitle+" is verified");
        String url="https://demo.nopcommerce.com/login?returnUrl=%2F";
        verifyUrl(url);
        log.info("URL of login page is "+url+" is verified");
    }
}
