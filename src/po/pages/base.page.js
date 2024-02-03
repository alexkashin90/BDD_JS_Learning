const { Header, SideMenu } = require("../components");

class BasePage {
    constructor(url) {
        this.url = url;
        this.header = new Header;
        this.sideMenu = new SideMenu();
    }

    async open() {
        return await browser.url(this.url);
    }
}

module.exports = BasePage