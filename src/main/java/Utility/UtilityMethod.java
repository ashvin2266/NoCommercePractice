package Utility;

import Base.DriverClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class UtilityMethod extends DriverClass {


    // this method will click on element

    public void clickOnElement(By by) {
        driver.findElement(by).click();
    }

    // This method will click on element

    public void clickOnElement(WebElement element) {
        element.click();
    }

    // this method will send text on element
    public void sendTextToElement(By by, String str) {
        WebElement element = driver.findElement(by);
        element.clear();
        element.sendKeys(str);
    }

    public void sendTextToElement(WebElement element, String str) {
        element.sendKeys(str);
    }
}
