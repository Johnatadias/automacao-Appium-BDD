package br.com.rsinet_appium_bdd.pages;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class DescricaoProdutoPage extends BasePage{

	public DescricaoProdutoPage(AndroidDriver<MobileElement> driver) {
		super(driver);
	}

	public String validandoProdutoEscolhido() {
		return driver.findElementById("com.Advantage.aShopping:id/textViewProductName").getText();
	}
	
	///////////////////////////////////////////////////////
	
	public DescricaoProdutoPage selecionarQtdDeProdutos(String qtd) {
		driver.findElementById("com.Advantage.aShopping:id/textViewProductQuantity").click();
		driver.findElementById("com.Advantage.aShopping:id/textViewProductQuantity").sendKeys(qtd);
		driver.findElementById("com.Advantage.aShopping:id/textViewApply").click();
		
		return this;
	}
	
	public LoginPage btnAdicionarProdutoNoCarrinho() {
		driver.findElementById("com.Advantage.aShopping:id/buttonProductAddToCart").click();
		
		return new LoginPage(driver);
	}
	
	public boolean assertQtdCarrinho(String valorEsperado) {
		String valorAtual = driver.findElementById("com.Advantage.aShopping:id/textViewCartLength").getText();
		
		if(valorAtual.equals(valorEsperado))
			return true;
		return false;
	}
}
