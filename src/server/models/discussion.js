'use strict';
module.exports = function(sequelize, DataTypes) {
  var Discussion = sequelize.define('Discussion', {
    baseId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Discussion;
};