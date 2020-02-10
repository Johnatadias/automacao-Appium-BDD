package br.com.rsinet_appium_bdd.steps;

import java.io.IOException;

import com.cucumber.listener.Reporter;

import br.com.rsinet_appium_bdd.supports.DriverManager;
import br.com.rsinet_appium_bdd.utils.Screenshot;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;

public class Hooks {

	@Before
	public void inicializa(){
		WebDriver driver = DriverManager.createDriver();
	}

	@After(order = 1)
	public void afterTest(Scenario cenario) throws IOException {
		String screenPath = Screenshot.gerarScreenshot(DriverManager.getDriver(), cenario.getName());
		Reporter.addScreenCaptureFromPath(screenPath);
	}
	
	@After(order = 0)
	public void tearDown() {
		DriverManager.quitChrome();
	}
}
