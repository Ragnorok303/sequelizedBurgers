module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      burger_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false
      },
      createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'), 
      },
  });

  Burger.associate = function(models) {
      Burger.belongsTo(models.Customer, {
          foreignKey: {
              allowNull: true
          }
      });
  };
  
  return Burger;
};
