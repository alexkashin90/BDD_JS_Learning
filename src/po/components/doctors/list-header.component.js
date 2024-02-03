const BaseComponent = require("../common/base.component");

class ListHeaderComponent extends BaseComponent {
    constructor() {
        super('.specialization-types');
    }

    get addNewDoctorButton() {
        return this.rootElement.$('//button[text() = "Add New Doctor"]');
    }
}

module.exports = ListHeaderComponent