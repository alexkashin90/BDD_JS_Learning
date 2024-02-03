const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
    constructor() {
        super('.planner-header');
    }

    get title() {
        return this.rootElement.$('.clinic-name');
    }

    get logoutButton() {
        return this.rootElement.$('.logout-container');
    }

    get gitButton() {
        return this.rootElement.$('div[class*="sb-download-wrapper"]');
    }
}

module.exports = HeaderComponent