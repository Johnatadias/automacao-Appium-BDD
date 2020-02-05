package br.com.rsinet_appium_bdd.pages;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class HomePage extends BasePage{

	public HomePage(AndroidDriver<MobileElement> driver) {
		super(driver);
	}

	public HomePage clicarMenuNaHomePage() {
		driver.findElementById("com.Advantage.aShopping:id/imageViewMenu").click();
		
		return this;
	}
	
	public LoginPage clicarIconeLoginDoMenu() {
		driver.findElementById("com.Advantage.aShopping:id/textViewMenuUser").click();
		
		return new LoginPage(driver);
	}
	
	public String assertNovoUsuario() throws InterruptedException {
		clicarMenuNaHomePage();
		
		return driver.findElementById("com.Advantage.aShopping:id/textViewMenuUser").getText();
	}
	
	///////////////////////////////////////////////////////////////////
	
	public ResultadoFiltradoPage escolheCategoriaHome(String categoria) {
		driver.findElementByXPath("//android.widget.TextView[starts-with(@text, '"+categoria+"')]").click();
		
		return new ResultadoFiltradoPage(driver);
	}
	
	public ResultadoFiltradoPage buscaLupa(String buscaProduto) {
		driver.findElementById("com.Advantage.aShopping:id/editTextSearch").sendKeys(buscaProduto);
		driver.findElementById("com.Advantage.aShopping:id/imageViewSearch").click();
		
		return new ResultadoFiltradoPage(driver);
	}
}
