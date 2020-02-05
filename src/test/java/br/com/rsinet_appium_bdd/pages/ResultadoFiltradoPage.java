package br.com.rsinet_appium_bdd.pages;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class ResultadoFiltradoPage extends BasePage{

	public ResultadoFiltradoPage(AndroidDriver<MobileElement> driver) {
		super(driver);
	}

	public DescricaoProdutoPage escolheProdudo(String produto) {
		driver.findElementByXPath("//android.widget.TextView[starts-with(@text, '"+produto+"')]").click();
		
		return new DescricaoProdutoPage(driver);
	}
	
	/////////////////////////////////////////////////////////
	
	public String validandoProdutoInexistente() {
		return driver.findElementById("com.Advantage.aShopping:id/textViewNoProductsToShow").getText();
	}
}
