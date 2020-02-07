package br.com.rsinet_appium_bdd.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.List;

import br.com.rsinet_appium_bdd.screens.BaseScreen;
import br.com.rsinet_appium_bdd.screens.FormCadastraoUsuarioScreen;
import br.com.rsinet_appium_bdd.screens.HomeScreen;
import br.com.rsinet_appium_bdd.supports.DriverManager;
import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;

public class CadastraUsuarioStep {

	private AndroidDriver<MobileElement> driver;
	private HomeScreen homePage;
	private FormCadastraoUsuarioScreen formCadastroPage;
	
	@Dado("^que o usuário esteja na pagina cadastro de usuário$")
	public void que_o_usuário_esteja_na_pagina_cadastro_de_usuário() {
		driver = DriverManager.createDriver();
		homePage = new HomeScreen(driver);
		formCadastroPage = new FormCadastraoUsuarioScreen(driver);
		homePage.clicarMenuNaHomePage().clicarIconeLoginDoMenu().clicarNovaConta();
	}
	
	@Quando("^realizar um cadastro válido$")
	public void realizarUmCadastroVálido() {
		formCadastroPage.inseriUserName(formCadastroPage.getNomeUsuarioRandom(6));
		formCadastroPage.inseriEmail("a@a.com");
		formCadastroPage.inseriPassword("John20");
		formCadastroPage.inseriConfirPassword("John20");
		formCadastroPage.inseriFirstName("Johnata");
		formCadastroPage.inseriLastName("Dias");
		formCadastroPage.inseriPhoneNumber("1234-1234");
		formCadastroPage.inseriCountry("Brazil");
		formCadastroPage.inseriStates("SP");
		formCadastroPage.inseriAddress("Rua xyz, 198");
		formCadastroPage.inseriCity("São Paulo");
		formCadastroPage.inseriZipCode("12345-123");
		formCadastroPage.checkBoxReceberPromocoes();
		
		formCadastroPage.btnRegistrar();
	}

	@Então("^o usuario deve ser notificado que o usuario esta logado$")
	public void oUsuarioDeveSerNotificadoQueOUsuarioEstaLogado() throws Throwable {
		String usuarioAtual = homePage.assertNovoUsuario();
		assertNotEquals("LOGIN", usuarioAtual);
	}

	@Quando("^realizar o cadastro sem preencher os campos obrigatorios$")
	public void realizar_o_cadastro_sem_preencher_os_campos_obrigatorios() {
		formCadastroPage.inseriUserName("");
		formCadastroPage.inseriEmail("");
		formCadastroPage.inseriPassword("");
		formCadastroPage.inseriConfirPassword("");
		formCadastroPage.inseriFirstName("Johnata");
		formCadastroPage.inseriLastName("Dias");
		formCadastroPage.inseriPhoneNumber("1234-1234");
		formCadastroPage.inseriCountry("Brazil");
		formCadastroPage.inseriStates("SP");
		formCadastroPage.inseriAddress("Rua xyz, 198");
		formCadastroPage.inseriZipCode("12345-123");
		formCadastroPage.inseriCity("São Paulo");
		formCadastroPage.checkBoxReceberPromocoes();
		
		formCadastroPage.btnRegistrar();
	}

	@Então("^usuario é notificado com a mensagem$")
	public void usuario_é_notificado_com_a_mensagem(DataTable mensagens) {
		List<List<String>> date = mensagens.raw();
		
		new BaseScreen(driver, new TouchAction(driver)).scrollAndStop(date.get(0).get(0));
		assertEquals(date.get(0).get(0), formCadastroPage.campoUserNameRequired());
		assertEquals(date.get(0).get(1), formCadastroPage.campoEmailRequired());
		assertEquals(date.get(0).get(2), formCadastroPage.campoPasswordRequired());
		assertEquals(date.get(0).get(3), formCadastroPage.campoConfirmPasswordRequired());
	}
}
