package br.com.rsinet_appium_bdd.utils;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import br.com.rsinet_appium_bdd.screens.BaseScreen;
import gherkin.formatter.model.Scenario;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class Screenshot extends BaseScreen{

	public Screenshot(AndroidDriver<MobileElement> driver) {
		super(driver);
	}

	public static String gerarScreenshot(AndroidDriver<MobileElement> driver, String cenario) {
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		
		String screenPath = System.getProperty("user.dir") + "/target/screenshot/" + cenario + DateUtils.getTimeStamp() + ".png";

		try {
			FileUtils.copyFile(file, new File(screenPath));
		} catch (IOException e) {
			System.out.println("Não foi possivel titar Screenshot: " + e.getMessage());
		}
		return screenPath;
	}
}
