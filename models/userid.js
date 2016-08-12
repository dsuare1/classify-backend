'use strict';
module.exports = function(sequelize, DataTypes) {
    var userID = sequelize.define('userID', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        domain: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                userID.hasMany(models.userpage, {
                    onDelete: 'cascade'
 3               });
            }
        }
    });
    return userID;
};
