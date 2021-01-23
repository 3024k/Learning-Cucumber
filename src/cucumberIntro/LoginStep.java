package cucumberIntro;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStep {
	
	@Given("^Launch the Chrome browser$")
	public void Launch_the_Chrome_browser() {
		System.out.println("Launching the chrome browser...");
	}
	
	@Given("^I launch the application$")
	public void I_launch_the_application() {
		System.out.println("I launch the application");
	}
	
	@Then("^I enter correct username and password$")
	public void I_enter_correct_username_and_password() {
		System.out.println("I enter correct username and password");
	}
	
	@And("^clicked on Login Button$")
	public void clicked_on_Login_Button() {
		System.out.println("clicked on Login Button");
	}
	
	@Then("^I am login into application$")
	public void I_am_login_into_application() {
		System.out.println("I am login into application");
	}
	
	
	

}
