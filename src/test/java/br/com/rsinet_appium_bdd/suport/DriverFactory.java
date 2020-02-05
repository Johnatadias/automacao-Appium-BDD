package br.com.rsinet_appium_bdd.suport;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class DriverFactory {

	private static AndroidDriver<MobileElement> driver;
	private static DesiredCapabilities desiredCapabilities;
	
	public static AndroidDriver<MobileElement> createChromer() {
		desiredCapabilities = new DesiredCapabilities();

		desiredCapabilities.setCapability("platformName", "Android");
		desiredCapabilities.setCapability("deviceName", "89d6f0da");
		//desiredCapabilities.setCapability("udid", "emulator-5554"); //Define qual dispositivo vai executar
		//desiredCapabilities.setCapability(MobileCapabilityType.APP, "C:\\temp\\Selenium_Automacao\\curso-Appium\\src\\main\\resources\\Advantage+demo+2_0.apk");
		desiredCapabilities.setCapability("appPackage", "com.Advantage.aShopping");
		desiredCapabilities.setCapability("appActivity", "com.Advantage.aShopping.SplashActivity");
		
		try {
			driver = new AndroidDriver<MobileElement>(new URL("http://localhost:4723/wd/hub"), desiredCapabilities);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		
		return driver;
	}
	
	public static void quitChrome(AndroidDriver<MobileElement> driver) {
		if(driver != null)
			driver.quit();
	}
}
