package cucumberIntro;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome = true,
		features = "src/cucumberIntro",
		plugin = {"pretty","html:target/cucmber-html-report"},
		tags = "@Sanity"
		)
public class shoppingTestRunner extends AbstractTestNGCucumberTests{

	

}
