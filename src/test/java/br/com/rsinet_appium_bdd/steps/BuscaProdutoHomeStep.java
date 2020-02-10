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
	private HomeScreen homeScreen;
	private ResultadoFiltradoScreen resultFiltradoScreen;
	private DescricaoProdutoScreen descProdutoScreen;
	
	@Dado("^que o usuario esteja na pagina home$")
	public void queOUsuarioEstejaNaPaginaHome() {
		driver = DriverManager.getDriver();
		homeScreen = new HomeScreen(driver);
		resultFiltradoScreen = new ResultadoFiltradoScreen(driver);
		descProdutoScreen = new DescricaoProdutoScreen(driver);
	}

	@Quando("^seleciona a categoria \"([^\"]*)\"$")
	public void selecionaACategoria(String categoria) {
		homeScreen.escolheCategoriaHome(categoria.toUpperCase());
	}

	@Quando("^seleciona o produto desejado \"([^\"]*)\"$")
	public void selecionaOProdutoDesejado(String produto) {
		resultFiltradoScreen.escolheProdudo(produto.toUpperCase());
	}
	
	@Então("^o usuario deve visualizar as informações do produto \"([^\"]*)\"$")
	public void oUsuarioDeveVisualizarAsInformaçõesDoProduto(String assertProduto) {
		assertEquals(assertProduto.toUpperCase(), descProdutoScreen.validandoProdutoEscolhido());
	}
}
