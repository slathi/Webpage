var locators = require("../locators.js");
var loginpage = require("../Pages/loginPage.js");
var headerElements = require("../Pages/headerPage.js");

describe("To check the header elements of the webpage",function(){
	
	//Opens the web-site
	browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");
	
	//Logs-in the user
	it("Should verify for valid credentials",function(){
		loginpage.verifyForValidCredentials();
		
	});
	
	it("Should verify that all elements are present",function(){
				
		
		//Pause the browser so that the user can sign in
		browser.sleep(1000);
		
		//Verifies all the header elements
		headerElements.isOnlyForElements();
		
		//Logs-out the user
		headerElements.verifiesLogout();
	});
});