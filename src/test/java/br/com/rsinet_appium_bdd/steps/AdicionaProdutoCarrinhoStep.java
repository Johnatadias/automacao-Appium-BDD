package br.com.rsinet_appium_bdd.steps;

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

public class AdicionaProdutoCarrinhoStep {

	private AndroidDriver<MobileElement> driver;
	private HomeScreen homePage;
	private ResultadoFiltradoScreen resultFiltradoPage;
	private DescricaoProdutoScreen descProdutoPage;

	@Dado("^que o usuario esteja logado na tela principal$")
	public void queOUsuarioEstejaLogadoNaTelaPrincipal() throws InterruptedException {
		driver = DriverManager.createDriver();
		homePage = new HomeScreen(driver);
		resultFiltradoPage = new ResultadoFiltradoScreen(driver);
		descProdutoPage = new DescricaoProdutoScreen(driver);

		homePage.clicarMenuNaHomePage().clicarIconeLoginDoMenu().realizaLoginValido();
	}

	@Quando("^seleciona determinada categoria \"([^\"]*)\"$")
	public void selecionaDeterminadaCategoria(String categoria) {
		homePage.escolheCategoriaHome(categoria.toUpperCase());
	}

	@Quando("^seleciona o produto \"([^\"]*)\"$")
	public void selecionaOProduto(String produto) {
		resultFiltradoPage.escolheProdudo(produto.toUpperCase());
	}

	@Quando("^adiciona a quantidades de items para \"([^\"]*)\"$")
	public void adicionaAQuantidadesDeItemsPara(String Quantidade) throws InterruptedException {
		descProdutoPage.selecionarQtdDeProdutos(Quantidade);
	}

	@Quando("^adiciono no carrinho de compras$")
	public void adicionoNoCarrinhoDeCompras() {
		descProdutoPage.btnAdicionarProdutoNoCarrinho();
	}

	@Então("^deve existir \"([^\"]*)\" itens no carrinho$")
	public void deveExistirItensNoCarrinho(String assertQuantidade) {
		assertTrue(descProdutoPage.assertQtdCarrinho(assertQuantidade));
	}
}
