const { I, homePage } = inject();

Given("I am already on home page", () => {
  homePage.default.navegateToHome();
});

When("I click on tilapia card", () => {
    homePage.default.waitForTilapiaInformation();
});

Then("I can see tilapia information", () => {
    homePage.default.clickAndSeeInformations();
});
