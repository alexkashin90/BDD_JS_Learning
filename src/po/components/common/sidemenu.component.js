const BaseComponent = require("./base.component");

class SideMenuComponent extends BaseComponent {
    constructor() {
        super('#plannerSiderBar');
    }

    get userName() {
        return this.rootElement.$('.name');
    }

    get userType() {
        return this.rootElement.$('.user-type');
    }

    get userPhoto() {
        return this.rootElement.$('.image').$('img');
    }

    /**
     * @param { 'dashboard' | 'schedule' | 'doctors' | 'patients' | 'preference' | 'about' } parameter
     * @return {Element} 
     * @memberof SideMenuComponent
     */
    item(parameter) {
        const selectors = {
            dashboard: 'div[class*="dashboard"]',
            schedule: 'div[class*="calendar"]',
            doctors: 'div[class*="doctors"]',
            patients: 'div[class*="patients"]',
            preference: 'div[class*="preference"]',
            about: 'div[class*="about"]'
        }
        return this.rootElement.$(selectors[parameter.toLowerCase()])
    }

}

module.exports = SideMenuComponent