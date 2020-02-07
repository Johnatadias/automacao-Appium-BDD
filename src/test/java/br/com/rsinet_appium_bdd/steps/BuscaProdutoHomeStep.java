package br.com.rsinet_appium_bdd.steps;

import static org.junit.Assert.assertEquals;

import br.com.rsinet_appium_bdd.screens.DescricaoProdutoScreen;
import br.com.rsinet_appium_bdd.screens.HomeScreen;
import br.com.rsinet_appium_bdd.screens.ResultadoFiltradoScreen;
import br.com.rsinet_appium_bdd.supports.DriverManager;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class BuscaProdutoHomeStep {

	private AndroidDriver<MobileElement> driver;
	private HomeScreen homePage;
	private ResultadoFiltradoScreen resultPage;
	private DescricaoProdutoScreen descProdutoPage;
	
	@Dado("^que o usuario esteja na pagina home$")
	public void queOUsuarioEstejaNaPaginaHome() {
		driver = DriverManager.createDriver();
		homePage = new HomeScreen(driver);
		resultPage = new ResultadoFiltradoScreen(driver);
		descProdutoPage = new DescricaoProdutoScreen(driver);
	}

	@Quando("^seleciona a categoria \"([^\"]*)\"$")
	public void selecionaACategoria(String categoria) {
		homePage.escolheCategoriaHome(categoria.toUpperCase());
	}

	@Quando("^seleciona o produto desejado \"([^\"]*)\"$")
	public void selecionaOProdutoDesejado(String produto) {
		resultPage.escolheProdudo(produto.toUpperCase());
	}
	
	@Então("^o usuario deve visualizar as informações do produto \"([^\"]*)\"$")
	public void oUsuarioDeveVisualizarAsInformaçõesDoProduto(String assertProduto) {
		assertEquals(assertProduto.toUpperCase(), descProdutoPage.validandoProdutoEscolhido());
	}
}
