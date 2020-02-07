package br.com.rsinet_appium_bdd.supports;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class DriverManager {

	private static AndroidDriver<MobileElement> driver;
	private static DesiredCapabilities desiredCapabilities;

	public static AndroidDriver<MobileElement> getDriver(){
		if(driver == null)
			createDriver();
		return driver;
	}
	
	public static AndroidDriver<MobileElement> createDriver() {
		desiredCapabilities = new DesiredCapabilities();

		desiredCapabilities.setCapability("platformName", "Android");
		desiredCapabilities.setCapability("deviceName", "89d6f0da");
		desiredCapabilities.setCapability("udid", "0039960624"); 
		//desiredCapabilities.setCapability("udid", "emulator-5554"); //Define qual dispositivo vai executar
		// desiredCapabilities.setCapability(MobileCapabilityType.APP, C:\\temp\\Selenium_Automacao\\ProjectTreinamentoHub_Appium_BDD\\src\\test\\resources\\Advantage+demo+2_2.apk");
		desiredCapabilities.setCapability("appPackage", "com.Advantage.aShopping");
		desiredCapabilities.setCapability("appActivity", "com.Advantage.aShopping.SplashActivity");
		desiredCapabilities.setCapability("unicodeKeyboard", true);
		desiredCapabilities.setCapability("resetKeyboard", true);
		
		try {
			driver = new AndroidDriver<MobileElement>(new URL("http://localhost:4723/wd/hub"), desiredCapabilities);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		return driver;
	}

	public static AndroidDriver<MobileElement> quitChrome() {
		if (driver != null)
			driver.quit();
		return driver;
	}
}
