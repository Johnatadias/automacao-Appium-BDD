package br.com.rsinet_appium_bdd.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
			features = "src/test/resources/features/",
			glue = "br.com.rsinet_appium_bdd.test",
			monochrome = true,
			snippets = SnippetType.CAMELCASE,
			plugin = {"pretty", "html:target/reportRelatorio/report.html"},
			dryRun = false
		)
public class Runner {

}
