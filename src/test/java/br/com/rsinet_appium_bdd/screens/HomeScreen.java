package br.com.rsinet_appium_bdd.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class HomeScreen extends BaseScreen{

	public HomeScreen(AndroidDriver<MobileElement> driver) {
		super(driver);
	}

	public HomeScreen clicarMenuNaHomePage() {
		driver.findElementById("com.Advantage.aShopping:id/imageViewMenu").click();
	
		return this;
	}
	
	public LoginScreen clicarIconeLoginDoMenu() {
		driver.findElementById("com.Advantage.aShopping:id/textViewMenuUser").click();
		
		return new LoginScreen(driver);
	}
	
	public String assertNovoUsuario() {
		clicarMenuNaHomePage();
		return driver.findElementById("com.Advantage.aShopping:id/textViewMenuUser").getText();
	}
	
	///////////////////////////////////////////////////////////////////
	
	public ResultadoFiltradoScreen escolheCategoriaHome(String categoria) {
		driver.findElementByXPath("//android.widget.TextView[starts-with(@text, '"+categoria+"')]").click();
		
		return new ResultadoFiltradoScreen(driver);
	}
	
	public ResultadoFiltradoScreen buscaLupa(String buscaProduto) {
		driver.findElementById("com.Advantage.aShopping:id/editTextSearch").sendKeys(buscaProduto);
		driver.findElementById("com.Advantage.aShopping:id/imageViewSearch").click();
		
		return new ResultadoFiltradoScreen(driver);
	}
}
