package br.com.rsinet_appium_bdd.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.List;

import br.com.rsinet_appium_bdd.screens.BaseScreen;
import br.com.rsinet_appium_bdd.screens.FormCadastraoUsuarioScreen;
import br.com.rsinet_appium_bdd.screens.HomeScreen;
import br.com.rsinet_appium_bdd.screens.LoginScreen;
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
	private HomeScreen homeScreen;
	private FormCadastraoUsuarioScreen formCadastroScreen;
	private LoginScreen loginScreen;
	
	@Dado("^que o usuário esteja na pagina cadastro de usuário$")
	public void que_o_usuário_esteja_na_pagina_cadastro_de_usuário() {
		driver = DriverManager.getDriver();
		homeScreen = new HomeScreen(driver);
		formCadastroScreen = new FormCadastraoUsuarioScreen(driver);
		loginScreen = new LoginScreen(driver);
		homeScreen.clicarMenuNaHomePage();
        homeScreen.clicarIconeLoginDoMenu();
        loginScreen.clicarNovaConta();
	}
	
	@Quando("^realizar um cadastro válido$")
	public void realizarUmCadastroVálido() {
		formCadastroScreen.inseriUserName(formCadastroScreen.getNomeUsuarioRandom(6));
		formCadastroScreen.inseriEmail("a@a.com");
		formCadastroScreen.inseriPassword("John20");
		formCadastroScreen.inseriConfirPassword("John20");
		formCadastroScreen.inseriFirstName("Johnata");
		formCadastroScreen.inseriLastName("Dias");
		formCadastroScreen.inseriPhoneNumber("1234-1234");
		formCadastroScreen.inseriCountry("Brazil");
		formCadastroScreen.inseriStates("SP");
		formCadastroScreen.inseriAddress("Rua xyz, 198");
		formCadastroScreen.inseriCity("São Paulo");
		formCadastroScreen.inseriZipCode("12345-123");
		formCadastroScreen.checkBoxReceberPromocoes();
		
		formCadastroScreen.btnRegistrar();
	}

	@Então("^o usuario deve ser notificado que o usuario esta logado$")
	public void oUsuarioDeveSerNotificadoQueOUsuarioEstaLogado() throws Throwable {
		String usuarioAtual = homeScreen.assertNovoUsuario();
		assertNotEquals("LOGIN", usuarioAtual);
	}

	@Quando("^realizar o cadastro sem preencher os campos obrigatorios$")
	public void realizar_o_cadastro_sem_preencher_os_campos_obrigatorios() {
		formCadastroScreen.inseriUserName("");
		formCadastroScreen.inseriEmail("");
		formCadastroScreen.inseriPassword("");
		formCadastroScreen.inseriConfirPassword("");
		formCadastroScreen.inseriFirstName("Johnata");
		formCadastroScreen.inseriLastName("Dias");
		formCadastroScreen.inseriPhoneNumber("1234-1234");
		formCadastroScreen.inseriCountry("Brazil");
		formCadastroScreen.inseriStates("SP");
		formCadastroScreen.inseriAddress("Rua xyz, 198");
		formCadastroScreen.inseriZipCode("12345-123");
		formCadastroScreen.inseriCity("São Paulo");
		formCadastroScreen.checkBoxReceberPromocoes();
		
		formCadastroScreen.btnRegistrar();
	}

	@Então("^usuario é notificado com a mensagem$")
	public void usuario_é_notificado_com_a_mensagem(DataTable mensagens) {
		List<List<String>> date = mensagens.raw();
		
		new BaseScreen(driver, new TouchAction(driver)).scrollAndStop(date.get(0).get(0));
		assertEquals(date.get(0).get(0), formCadastroScreen.campoUserNameRequired());
		assertEquals(date.get(0).get(1), formCadastroScreen.campoEmailRequired());
		assertEquals(date.get(0).get(2), formCadastroScreen.campoPasswordRequired());
		assertEquals(date.get(0).get(3), formCadastroScreen.campoConfirmPasswordRequired());
	}
}
