module.exports = function(sequelize, DataTypes) {
  
    var Stocks = sequelize.define("Stocks", {
      symbol: DataTypes.STRING,
      StocksDate: DataTypes.DATEONLY,
      name: DataTypes.STRING,
      outstandingShares: DataTypes.DECIMAL(18,2),
      ebit: DataTypes.DECIMAL(18,2),
      longTermDebt: DataTypes.DECIMAL(18,2),
      cash: DataTypes.DECIMAL(18,2),
      stockPrice: DataTypes.DECIMAL(18,2)
    });
    return Stocks;
  };
  
  // var Stocks = sequelize.define("Stocks", {
  //     title: {
  //       type: DataTypes.STRING,
  //       allowNull: false,
  //       validate: {
  //         len: [1]
  //       }
  //     },
  //     body: {
  //       type: DataTypes.TEXT,
  //       allowNull: false,
  //       validate: {
  //         len: [1]
  //       }
  //     },
  //     category: {
  //       type: DataTypes.STRING,
  //       defaultValue: "Personal"
  //     }
  //   });
  //   return Stocks;
  // };
  