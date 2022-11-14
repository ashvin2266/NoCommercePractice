package PageObjectPattern;

import Base.DriverClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends DriverClass {


    @FindBy(id="Email")
    WebElement Email;
    @FindBy(id="Password")
    WebElement Password;
    @FindBy(xpath = "//button[normalize-space()='Log in']")
    WebElement loginbtn;
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMSG;


    public LoginPage(){
        PageFactory.initElements(driver,this);
    }
    public void enterEmail(String email) {
       sendTextToElement(Email,email);

    }
    public void enterpassword(String password){
        sendTextToElement(Password,password);

    }
    public void clickLogin(){
      clickOnElement(loginbtn);
      String errorMsg= driver.findElement(By.xpath("//div[@class='message-error validation-summary-errors']")).getText();
      log.info("I see the error message is  "+errorMsg);
//        loginBtn.click();
    }







}
