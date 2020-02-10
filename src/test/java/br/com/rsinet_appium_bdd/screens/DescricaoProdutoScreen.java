package br.com.rsinet_appium_bdd.screens;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class DescricaoProdutoScreen extends BaseScreen{

	public DescricaoProdutoScreen(AndroidDriver<MobileElement> driver) {
		super(driver);
	}

	public String validandoProdutoEscolhido() {
		return new WebDriverWait(driver, 50).until(ExpectedConditions.visibilityOf(driver.findElementById("com.Advantage.aShopping:id/textViewProductName"))).getText();
	}
	
	///////////////////////////////////////////////////////
	
	public void selecionarQtdDeProdutos(String qtd) throws InterruptedException {
		new WebDriverWait(driver, 50).until(ExpectedConditions.visibilityOf(driver.findElementById("com.Advantage.aShopping:id/textViewProductQuantity"))).click();
		driver.findElementById("com.Advantage.aShopping:id/textViewProductQuantity").clear();
		driver.findElementById("com.Advantage.aShopping:id/textViewProductQuantity").sendKeys(qtd);
		driver.findElementById("com.Advantage.aShopping:id/textViewApply").click();
	}
	
	public void btnAdicionarProdutoNoCarrinho() {
		driver.findElementById("com.Advantage.aShopping:id/buttonProductAddToCart").click();
	}
	
	public boolean assertQtdCarrinho(String valorEsperado) {
		String valorAtual = driver.findElementById("com.Advantage.aShopping:id/textViewCartLength").getText();
		
		if(valorAtual.equals(valorEsperado))
			return true;
		return false;
	}
}
