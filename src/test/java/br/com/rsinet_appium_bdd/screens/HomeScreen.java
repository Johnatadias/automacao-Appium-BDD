package br.com.rsinet_appium_bdd.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomeScreen extends BaseScreen{

	public HomeScreen(AndroidDriver<MobileElement> driver) {
		super(driver);
	}

	public void clicarMenuNaHomePage() {
		WebDriverWait wait = new WebDriverWait(driver, 100);
		wait.until(ExpectedConditions.visibilityOf(driver.findElementById("com.Advantage.aShopping:id/imageViewMenu"))).click();
		//driver.findElementById("com.Advantage.aShopping:id/imageViewMenu").click();
	}
	
	public void clicarIconeLoginDoMenu() {
		driver.findElementById("com.Advantage.aShopping:id/textViewMenuUser").click();
	}
	
	public String assertNovoUsuario() {
		clicarMenuNaHomePage();
		return driver.findElementById("com.Advantage.aShopping:id/textViewMenuUser").getText();
	}
	
	///////////////////////////////////////////////////////////////////
	
	public void escolheCategoriaHome(String categoria) {
		driver.findElementByXPath("//android.widget.TextView[starts-with(@text, '"+categoria+"')]").click();
	}
	
	public void buscaLupa(String buscaProduto) {
		driver.findElementById("com.Advantage.aShopping:id/editTextSearch").sendKeys(buscaProduto);
		driver.findElementById("com.Advantage.aShopping:id/imageViewSearch").click();
	}
}
