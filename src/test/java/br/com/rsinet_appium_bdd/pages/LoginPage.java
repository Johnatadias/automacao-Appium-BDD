package br.com.rsinet_appium_bdd.pages;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class LoginPage extends BasePage{
	
	public LoginPage(AndroidDriver<MobileElement> driver) {
		super(driver);
	}

	public FormCadastraoUsuarioPage clicarNovaConta() {
		driver.findElementById("com.Advantage.aShopping:id/textViewDontHaveAnAccount").click();
		return new FormCadastraoUsuarioPage(driver);
	}
	
	public HomePage realizaLoginValido() throws InterruptedException {
		driver.findElementByXPath(".//android.widget.RelativeLayout[3]/android.widget.EditText").sendKeys("123");
		MobileElement pass = driver.findElementByXPath(".//android.widget.RelativeLayout[4]/android.widget.EditText");
		pass.click();
		pass.sendKeys("123");
		driver.findElementById("com.Advantage.aShopping:id/buttonLogin").click();
		Thread.sleep(2000);
		driver.findElementById("android:id/button2").click();;
		
		return new HomePage(driver);
	}
}
