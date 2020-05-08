'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('burgers', [
        { burger_name: 'Bacon Chili Cheese Burger' },
        { burger_name: 'Avocado Burger' },
        { burger_name: 'Mushroom Swiss Burger' },
        { burger_name: 'Pastrami Burger' },
        { burger_name: 'Double-Decker Joel Burger' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('burgers', null, {});
  }
};