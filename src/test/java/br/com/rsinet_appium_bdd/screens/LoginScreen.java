package br.com.rsinet_appium_bdd.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class LoginScreen extends BaseScreen{
	
	public LoginScreen(AndroidDriver<MobileElement> driver) {
		super(driver);
	}

	public void clicarNovaConta() {
		driver.findElementById("com.Advantage.aShopping:id/textViewDontHaveAnAccount").click();
	}
	
	public void realizaLoginValido() throws InterruptedException {
		driver.findElementByXPath(".//android.widget.RelativeLayout[3]/android.widget.EditText").sendKeys("johnatas");
		MobileElement pass = driver.findElementByXPath(".//android.widget.RelativeLayout[4]/android.widget.EditText");
		pass.click();
		pass.sendKeys("Oicara10");
		driver.findElementById("com.Advantage.aShopping:id/buttonLogin").click();
		Thread.sleep(2000);
		driver.findElementById("android:id/button2").click();
	}
}
