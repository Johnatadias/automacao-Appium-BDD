package br.com.rsinet_appium_bdd.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class ResultadoFiltradoScreen extends BaseScreen{

	public ResultadoFiltradoScreen(AndroidDriver<MobileElement> driver) {
		super(driver);
	}

	public DescricaoProdutoScreen escolheProdudo(String produto) {
		driver.findElementByXPath("//android.widget.TextView[starts-with(@text, '"+produto+"')]").click();
		
		return new DescricaoProdutoScreen(driver);
	}
	
	/////////////////////////////////////////////////////////
	
	public String validandoProdutoInexistente() {
		return driver.findElementById("com.Advantage.aShopping:id/textViewNoProductsToShow").getText();
	}
}
