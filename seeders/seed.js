'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('burgers', [
        { burger_name: 'Big Mac' },
        { burger_name: 'Whopper' },
        { burger_name: 'Veggie' },
        { burger_name: 'Krabby Patty' },
        { burger_name: 'Baconator' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('burgers', null, {});
  }
};