package br.com.rsinet_appium_bdd.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import br.com.rsinet_appium_bdd.screens.DescricaoProdutoScreen;
import br.com.rsinet_appium_bdd.screens.HomeScreen;
import br.com.rsinet_appium_bdd.screens.ResultadoFiltradoScreen;
import br.com.rsinet_appium_bdd.supports.DriverManager;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class BuscaProdutoLupaStep {

	private AndroidDriver<MobileElement> driver;
	private HomeScreen homeScreen;
	private ResultadoFiltradoScreen resultFiltradoScreen;
	private DescricaoProdutoScreen descProdutoScreen;

	@Dado("^que o usuario esteja na tela home do sistema$")
	public void queOUsuarioEstejaNaTelaHomeDoSistema() {
		driver = DriverManager.getDriver();
		homeScreen = new HomeScreen(driver);
		resultFiltradoScreen = new ResultadoFiltradoScreen(driver);
		descProdutoScreen = new DescricaoProdutoScreen(driver);
	}

	@Quando("^inserir a categoria \"([^\"]*)\" na lupa de pesquisa$")
	public void inserirACategoriaNaLupaDePesquisa(String categoria) {
		homeScreen.buscaLupa(categoria);
	}

	@Quando("^selecionar o produto desejado \"([^\"]*)\"$")
	public void selecionarOProdutoDesejado(String produto) {
		resultFiltradoScreen.escolheProdudo(produto.toUpperCase());
	}

	@Então("^o usuario deve visualizar as informações sobre o produto \"([^\"]*)\"$")
	public void oUsuarioDeveVisualizarAsInformaçõesSobreOProduto(String assertProduto) {
		assertEquals(assertProduto.toUpperCase(), descProdutoScreen.validandoProdutoEscolhido());
	}

	@Então("^o usuario deve ser notificado que o produto não existe \"([^\"]*)\"$")
	public void oUsuarioDeveSerNotificadoQueOProdutoNãoExiste(String assertMessagem) {
		assertTrue(resultFiltradoScreen.validandoProdutoInexistente().contains(assertMessagem));
	}
}
