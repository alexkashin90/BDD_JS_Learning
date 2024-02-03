const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");


/**
 * @param {'dasboard' | 'doctors'} name 
 * @returns {DashboardPage | DoctorsPage} 
 */
function pages(name) {
    const items = {
        dasboard: new DashboardPage(),
        doctors: new DoctorsPage(),
    }
    return items[name.toLowerCase()];
}

module.exports = {
    DashboardPage,
    DoctorsPage,
    pages,
}