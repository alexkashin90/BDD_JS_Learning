const BaseComponent = require("../common/base.component");

class SpecialictCardComponent extends BaseComponent {
    constructor(id) {
        super(`#Specialist_${id}`);
    }

    get name() {
        return this.rootElement.$('.name');
    }

    get education() {
        return this.rootElement.$('.education');
    }

    get specialization() {
        return this.rootElement.$('.specialization-text');
    }
}

module.exports = SpecialictCardComponent;