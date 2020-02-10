package br.com.rsinet_appium_bdd.steps;

import static org.junit.Assert.assertTrue;

import br.com.rsinet_appium_bdd.screens.DescricaoProdutoScreen;
import br.com.rsinet_appium_bdd.screens.HomeScreen;
import br.com.rsinet_appium_bdd.screens.LoginScreen;
import br.com.rsinet_appium_bdd.screens.ResultadoFiltradoScreen;
import br.com.rsinet_appium_bdd.supports.DriverManager;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class AdicionaProdutoCarrinhoStep {

	private AndroidDriver<MobileElement> driver;
	private HomeScreen homeScreen;
	private LoginScreen loginScreen;
	private ResultadoFiltradoScreen resultFiltradoScreen;
	private DescricaoProdutoScreen descProdutoScreen;

	@Dado("^que o usuario esteja logado na tela principal$")
	public void queOUsuarioEstejaLogadoNaTelaPrincipal() throws InterruptedException {
		driver = DriverManager.getDriver();
		homeScreen = new HomeScreen(driver);
		loginScreen = new LoginScreen(driver);
		resultFiltradoScreen = new ResultadoFiltradoScreen(driver);
		descProdutoScreen = new DescricaoProdutoScreen(driver);

		homeScreen.clicarMenuNaHomePage();
		homeScreen.clicarIconeLoginDoMenu();
		loginScreen.realizaLoginValido();
	}

	@Quando("^seleciona determinada categoria \"([^\"]*)\"$")
	public void selecionaDeterminadaCategoria(String categoria) {
		homeScreen.escolheCategoriaHome(categoria.toUpperCase());
	}

	@Quando("^seleciona o produto \"([^\"]*)\"$")
	public void selecionaOProduto(String produto) {
		resultFiltradoScreen.escolheProdudo(produto.toUpperCase());
	}

	@Quando("^adiciona a quantidades de items para \"([^\"]*)\"$")
	public void adicionaAQuantidadesDeItemsPara(String Quantidade) throws InterruptedException {
		descProdutoScreen.selecionarQtdDeProdutos(Quantidade);
	}

	@Quando("^adiciono no carrinho de compras$")
	public void adicionoNoCarrinhoDeCompras() {
		descProdutoScreen.btnAdicionarProdutoNoCarrinho();
	}

	@Então("^deve existir \"([^\"]*)\" itens no carrinho$")
	public void deveExistirItensNoCarrinho(String assertQuantidade) {
		assertTrue(descProdutoScreen.assertQtdCarrinho(assertQuantidade));
	}
}
