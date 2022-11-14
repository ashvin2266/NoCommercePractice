package Base;

import cucumber.api.Scenario;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class DriverClass {

        public static WebDriver driver;
        public static Properties prop;
        public static Logger log;
        //this method read the properties file
        public void openBrowser() throws IOException {
            log= LogManager.getLogger(DriverClass.class.getName());
            Properties prop=new Properties();
            FileInputStream file=new FileInputStream("src/main/java/propertiesFile/Config.properties");
            prop.load(file);
            log.info("propertyfile is loaded");
            String Browser =prop.getProperty("browser");
            log.info("Properyfile is readed");
            if(Browser.equalsIgnoreCase("Chrome")){
                WebDriverManager.chromedriver().setup();
//             if we want headless browser use the following two option and add parameter in ChromeDrive(option)
//            ChromeOptions option=new ChromeOptions();
//            option.addArguments("window-1400,800");
//            option.addArguments("headless");
                driver=new ChromeDriver();
                log.info("Chrome Browser is opened");
            }
            else if(Browser.equalsIgnoreCase("firefox")){
                WebDriverManager.firefoxdriver().setup();
                driver=new FirefoxDriver();
                log.info("Firefox Browser is opened");
            }
            driver.get(prop.getProperty("url"));
            log.info("URL is opened");
            driver.manage().window().maximize();
            driver.manage().deleteAllCookies();
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        }
        public void closeBrowser(){

            driver.close();
            log.info("Browser is closed");
        }

        public  String TakeAscreenShot(Scenario scenario) throws IOException {
            String dateName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());

            File srcFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            String  ScreenShotPath = "./target/screenshots/" + scenario.getName() + dateName + ".png";
            try {

                FileUtils.copyFile(srcFile, new File(ScreenShotPath));

            } catch (IOException e1) {
                e1.printStackTrace();
            }
            return ScreenShotPath;




        }

        public String StringrandomString() {
            String generatedString1= RandomStringUtils.randomAlphabetic(4);
            return (generatedString1);
        }

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
//        this method verify pageTitle
        public void verifyPageTitle(String pagetitle){
           String actualPageTitle=driver.getTitle();
            Assert.assertEquals(pagetitle,actualPageTitle);
        }
//        this method verify Url of the page
         public void verifyUrl(String url){
            String actualUrl=driver.getCurrentUrl();
            Assert.assertEquals(url,actualUrl);
          log.info("Expected URL of page is "+url);
            log.info("Actual URL of page is "+actualUrl);
    }
    /**
     * This method will used to wait web driver until element become clickable
     */
    public void waitUntilElementToBeClickable(By by, int timeout) {
        WebDriverWait wait = new WebDriverWait(driver, timeout);
        wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(by)));
    }

    /**
     * This method will used to wait web driver until presence of element located by locator
     */
    public void waitUntilPresenceOfElementLocated(By by, int timeout) {
        WebDriverWait wait = new WebDriverWait(driver, timeout);
        wait.until(ExpectedConditions.presenceOfElementLocated(by));
    }

    /**
     * This method will used to wait web driver until visibility of element located by locator
     */
    public void waitUntilVisibilityOfElementLocated(By by, int timeout) {
        WebDriverWait wait = new WebDriverWait(driver, timeout);
        wait.until(ExpectedConditions.visibilityOfElementLocated(by));
    }

    }

