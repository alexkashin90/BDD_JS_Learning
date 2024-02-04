const BaseComponent = require("../common/base.component");

class AddDoctorComponent extends BaseComponent {
    constructor() {
        super('ejs-dialog[cssclass="new-doctor-dialog"]');
    }

    //Dialog Header Content
    get dialogHeader() {
        return this.rootElement.$('.e-dlg-header-content');
    }

    get dialogTitle() {
        return this.dialogHeader.$('.e-dlg-header');
    }

    get closeButton() {
        return this.dialogHeader.$('button[title="Close"]');
    }

    //Dialog Main Content
    get dialogContent() {
        return this.rootElement.$('.e-dlg-content');
    }


    /**
     * @param {'save' | 'close' | 'cancel'} button
     */
    async clickButton(button) {
        switch (button.toLowerCase()) {
            case "save":
                return await this.saveButton.click();
            case "close":
                return await this.closeButton.click();
            case "cancel":
                return await this.cancelButton.click();
            default:
                throw Error(`"${button}" is not a valid button`);
        }
    }

    /**
     * @param {'name' | 'phone' | 'email' | 'education' | 'designation'} parameter
     * @returns {Element} 
     * @memberof AddDoctorComponent
     */
    input(parameter) {
        const selectors = {
            name: 'input[name="Name"]',
            phone: 'input[name="Mobile"]',
            email: 'input[name="Email"]',
            education: 'input[name="Education"]',
            designation: 'input[name="Designation"]',
        };
        return this.dialogContent.$(selectors[parameter.toLowerCase()]);
    }

    async enterValue(value, inputField) {
        await (this.input(inputField)).setValue(value);
    }

    //Dialog Footer Content
    get dialogFooter() {
        return this.rootElement.$('.e-footer-content');
    }

    get saveButton() {
        return this.dialogFooter.$('//button[text() = "Save"]');
    }

    get cancelButton() {
        return this.dialogFooter.$('//button[text() = "Cancel"]');
    }
}

module.exports = AddDoctorComponent