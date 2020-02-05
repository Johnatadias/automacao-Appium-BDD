package br.com.rsinet_appium_bdd.test;

import static org.junit.Assert.assertEquals;

import java.util.List;

import br.com.rsinet_appium_bdd.pages.BasePage;
import br.com.rsinet_appium_bdd.pages.FormCadastraoUsuarioPage;
import br.com.rsinet_appium_bdd.pages.HomePage;
import br.com.rsinet_appium_bdd.suport.DriverFactory;
import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;

public class CadastraUsuarioTest {

	private AndroidDriver<MobileElement> driver;
	private TouchAction<?> touchAction;
	private HomePage homePage;
	private FormCadastraoUsuarioPage formCadastroPage;
	
	@Dado("^que o usuário esteja na pagina cadastro de usuário$")
	public void que_o_usuário_esteja_na_pagina_cadastro_de_usuário() throws Throwable {
		driver = DriverFactory.createChromer();
		touchAction = new TouchAction(driver);
		homePage = new HomePage(driver);
		formCadastroPage = new FormCadastraoUsuarioPage(driver, touchAction);
		homePage.clicarMenuNaHomePage().clicarIconeLoginDoMenu().clicarNovaConta();
	}

	@Quando("^realizar o cadastro com username \"([^\"]*)\" válido$")
	public void realizar_o_cadastro_com_username_válido(String userName) throws Throwable {
		formCadastroPage.cadastroDeUsuario(userName, "a@a.com", "John20", "John20", 
													"Johnata", "Dias", "1234-1234", 
													"Brazil", "SP", "Rua xyz, 198", 
													"São Paulo", "12345-123");
	}

	@Então("^o usuario deve ser notificado que o usuario \"([^\"]*)\" esta logado$")
	public void o_usuario_deve_ser_notificado_que_o_usuario_esta_logado(String assertUserName) throws Throwable {
		assertEquals(assertUserName, homePage.assertNovoUsuario());
	}

	@Quando("^realizar o cadastro sem preencher os campos obrigatorios$")
	public void realizar_o_cadastro_sem_preencher_os_campos_obrigatorios() throws Throwable {
		formCadastroPage.cadastroDeUsuario("", "", "", "", 
				"Johnata", "Dias", "1234-1234", 
				"Brazil", "SP", "Rua xyz, 198", 
				"São Paulo", "12345-123");
	}

	@Então("^usuario é notificado com a mensagem$")
	public void usuario_é_notificado_com_a_mensagem(DataTable mensagens) throws Throwable {
		List<List<String>> date = mensagens.raw();
		
		new BasePage(driver, touchAction).scrollUp();
		assertEquals(date.get(0).get(0), formCadastroPage.campoUserNameRequired());
		assertEquals(date.get(0).get(1), formCadastroPage.campoEmailRequired());
		assertEquals(date.get(0).get(2), formCadastroPage.campoPasswordRequired());
		assertEquals(date.get(0).get(3), formCadastroPage.campoConfirmPasswordRequired());
	}
}
