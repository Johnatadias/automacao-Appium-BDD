package br.com.rsinet_appium_bdd.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class LoginScreen extends BaseScreen{
	
	public LoginScreen(AndroidDriver<MobileElement> driver) {
		super(driver);
	}

	public FormCadastraoUsuarioScreen clicarNovaConta() {
		driver.findElementById("com.Advantage.aShopping:id/textViewDontHaveAnAccount").click();
		
		return new FormCadastraoUsuarioScreen(driver);
	}
	
	public HomeScreen realizaLoginValido() throws InterruptedException {
		driver.findElementByXPath(".//android.widget.RelativeLayout[3]/android.widget.EditText").sendKeys("johnatas");
		MobileElement pass = driver.findElementByXPath(".//android.widget.RelativeLayout[4]/android.widget.EditText");
		pass.click();
		pass.sendKeys("Oicara10");
		driver.findElementById("com.Advantage.aShopping:id/buttonLogin").click();

		//driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[1]").click();
		
		return new HomeScreen(driver);
	}
}
