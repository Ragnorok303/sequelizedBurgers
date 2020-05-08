module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'), 
        },
    });

    Customer.associate = function(models) {
        Customer.hasMany(models.Burger, {
            as: "Burgers",
            onDelete: "cascade"
        });
    }

    return Customer;
};