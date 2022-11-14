package StepDefinations;

import Base.DriverClass;
import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class Hook {
    DriverClass driverC = new DriverClass();

    @Before
    public void browser() throws IOException {

        driverC.openBrowser();
    }


    @After
    public void tearDown(Scenario scenario) throws IOException {

        if (scenario.isFailed()) {
            Reporter.addStepLog("scenario is Failed");
            Reporter.getExtentReport().createTest(scenario.getName());
            String screenShotPath = driverC.TakeAscreenShot(scenario);
            System.out.println(screenShotPath);
            try {
                Reporter.addScreenCaptureFromPath("C:/Users/ashvi/commerce/target/screenshots");

            } catch (IOException e) {
                e.printStackTrace();
            }
            Reporter.getExtentReport();
        }
        driverC.closeBrowser();
    }

//    @After(order = 0)
//    public void closeBrowser() {
//
//            driverC.closeBrowser();
//    }
/*

    @After(order= 1)
    public void tearDown(Scenario scenario, WebDriver driver) throws IOException {
          driver=null;
        if(scenario.isFailed()){

           String screenShotPath=  driverC.TakeAscreenShot(scenario,driver);
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        driverC.closeBrowser();
    }*/
//    @After
//    public void closeBrowser(){
//        driverC.closeBrowser();
//    }


    }

