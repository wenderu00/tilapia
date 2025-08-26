const { I } = inject();

export class HomePage {
  url: string;
  tilapiaCard: CodeceptJS.Locator;
  constructor() {
    this.url = "/home";
    this.tilapiaCard = locate("button").withAttr({
      "aria-label": "tilápia-card",
    });
  }
  navegateToHome() {
    I.amOnPage(this.url);
  }
  waitForTilapiaInformation(){
    I.waitForElement(this.tilapiaCard);
  }

  clickAndSeeInformations(){
    I.click(this.tilapiaCard);
  }

}

export default new HomePage();