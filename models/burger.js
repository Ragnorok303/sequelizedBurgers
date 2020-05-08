module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
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

  burger.associate = function(models) {
      burger.belongsTo(models.Customer, {
          foreignKey: {
              allowNull: false
          }
      });
  };
  
  return burger;
};
