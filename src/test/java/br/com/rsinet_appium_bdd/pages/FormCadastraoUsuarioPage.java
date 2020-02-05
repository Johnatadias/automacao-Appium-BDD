package br.com.rsinet_appium_bdd.pages;
import java.util.Random;

import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;

public class FormCadastraoUsuarioPage extends BasePage{

	public FormCadastraoUsuarioPage(AndroidDriver<MobileElement> driver) {
		super(driver);
	}
	
	public FormCadastraoUsuarioPage(AndroidDriver<MobileElement> driver, TouchAction touchAction) {
		super(driver, touchAction);
	}

	public void inseriUserName(String userName) {
		MobileElement campoUserName = driver.findElementByXPath(".//android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.EditText");
		campoUserName.click();
		campoUserName.sendKeys(userName);
		bntNextLine(touchAction);
	}
	
	public void inseriEmail(String email) {

		MobileElement campoEmail = driver.findElementByXPath("//android.view.ViewGroup[@content-desc=\"Home Page\"]/android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.EditText");
		campoEmail.sendKeys(email);
		bntNextLine(touchAction);
	}
	
	public void inseriPassword(String password) {
		MobileElement campoPassword = driver.findElementByXPath(".//android.widget.LinearLayout[3]/android.widget.RelativeLayout/android.widget.EditText");
		campoPassword.sendKeys(password);
		bntNextLine(touchAction);
	}
	
	public void inseriConfirPassword(String confirmPassword) {
		MobileElement campoConfirmPassword = driver.findElementByXPath(".//android.widget.LinearLayout[4]/android.widget.RelativeLayout/android.widget.EditText");
		campoConfirmPassword.sendKeys(confirmPassword);
		bntNextLine(touchAction);
	}
	
	public void inseriLastName(String lastName) {
		MobileElement campoLastName = driver.findElementByXPath(".//android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.EditText");
		campoLastName.click();
		campoLastName.sendKeys(lastName);
	}
	
	public void inseriFirstName(String firstName) {
		MobileElement campoFirstName = driver.findElementByXPath(".//android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout[1]/android.widget.EditText");
		campoFirstName.click();
		campoFirstName.sendKeys(firstName);
		bntNextLine(touchAction);
	}
	
	public void inseriPhoneNumber(String phoneNumber) {
		MobileElement campoPhoneNumber = driver.findElementByXPath(".//android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.EditText");
		campoPhoneNumber.sendKeys(phoneNumber);
		hideKeyboard();
		scrollDown();
	}
	
	public void inseriCountry(String country) {
		//scrollAteElementoClicavel("United States");
		driver.findElementById("com.Advantage.aShopping:id/textViewCountries").click();
		scrollClick(country);
	}
	
	public void inseriStates(String states) {
		MobileElement campoStates = driver.findElementByXPath(".//android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.EditText");
		campoStates.click();
		campoStates.sendKeys(states);
		bntNextLine(touchAction);
	}
	
	public void inseriAddress(String address) {
		MobileElement campoAddress = driver.findElementByXPath(".//android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.EditText");
		campoAddress.sendKeys(address);
		bntNextLine(touchAction);
	}
	
	public void inseriCity(String city) {
		MobileElement campoCity = driver.findElementByXPath(".//android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.RelativeLayout[1]/android.widget.EditText");
		campoCity.sendKeys(city);
	}
	
	public void inseriZipCode(String zipCode) {
		MobileElement campoZip = driver.findElementByXPath(".//android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.RelativeLayout[2]/android.widget.EditText");
		campoZip.click();
		campoZip.sendKeys(zipCode);
		hideKeyboard();
	}
	
	public void checkBoxReceberPromocoes() {
		driver.findElementById("com.Advantage.aShopping:id/checkBoxRecieveOffers").click();
	}
	
	public HomePage btnRegistrar() {
		driver.findElementById("com.Advantage.aShopping:id/buttonRegister").click();
		
		return new HomePage(driver);
	}
	
	public HomePage cadastroDeUsuario(String userName, String email, String password, String confirmPassword, String firstName,
			String lastName, String phoneNumber, String country, String states, String address, String city, String zipCode) {
		
		inseriUserName(userName);
		inseriEmail(email);
		inseriPassword(password);
		inseriConfirPassword(confirmPassword);
		inseriLastName(lastName);
		inseriFirstName(firstName);
		inseriPhoneNumber(phoneNumber);
		inseriCountry(country);
		inseriStates(states);
		inseriAddress(address);
		inseriCity(city);
		inseriZipCode(zipCode);
		checkBoxReceberPromocoes();
		
		btnRegistrar();
		
		return new HomePage(driver);
	}
	
	//////////////////////////////////////////////////////
	
	public String campoUserNameRequired() {
		return driver.findElementByXPath("//android.view.ViewGroup[@content-desc=\"Home Page\"]/android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.TextView").getText();
	}
	
	public String campoEmailRequired() {
		return driver.findElementByXPath("//android.view.ViewGroup[@content-desc=\"Home Page\"]/android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.TextView").getText();
	}
	
	public String campoPasswordRequired() {
		return driver.findElementByXPath("//android.view.ViewGroup[@content-desc=\"Home Page\"]/android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.RelativeLayout/android.widget.TextView").getText();
	}
	
	public String campoConfirmPasswordRequired() {
		return driver.findElementByXPath("//android.view.ViewGroup[@content-desc=\"Home Page\"]/android.widget.LinearLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout[4]/android.widget.RelativeLayout/android.widget.TextView").getText();
	}
	
	public String getNomeUsuarioRandom(int qtdLetra) {
		Random random = new Random();
		int index;

		String caracteres = "ABCDEFGHIJKLMNOPQRSTUVYWXZabcdefghijklmnopqrstuvxwyz0123456789";
		String palavraRandom = "";

		for (int i = 0; i <= qtdLetra - 1; i++) {
			index = random.nextInt(caracteres.length());
			palavraRandom += caracteres.substring(index, index + 1);
		}
		return palavraRandom;
	}
}
