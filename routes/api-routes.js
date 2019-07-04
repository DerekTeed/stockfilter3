var db = require("../models");
//import stocks from "./stockArray";
//const eodApi = require('eodhistoricaldata-api');
const stocks = require("./stockArray");
const axios = require("axios");


module.exports = function (app) {
  // Get all examples
  

  

  async function getAllStockData() {
    for (var i = 0; i < stocks.length; i++) {
      //  console.log(stocks[i])
      //await getAllStockData(stocks[i]);
      var URLName = "https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=General::Name";
      var URLCash = "https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Financials::Balance_Sheet::quarterly";
      var URLEbit = "https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Financials::Income_Statement::quarterly";
      var URLDebt = "https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Financials::Balance_Sheet::quarterly";
      var URLMarketCapitalization = "https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Highlights::MarketCapitalization";
      var URLStockPrice = "https://eodhistoricaldata.com/api/real-time/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&fmt=json&filter=close";
      //var URLPreferredShares = "https://eodhistoricaldata.com/api/fundamentals/" + stocks[i] + ".US?api_token=" + process.env.EOD_KEY + "&filter=Financials::Balance_Sheet::quarterly";

      await axios.get(URLName)
        .then(async function (nameResponse) {
          await axios.get(URLCash)
            .then(async function (cashResponse) {
              await axios.get(URLEbit)
                .then(async function (EbitResponse) {
                  await axios.get(URLDebt)
                    .then(async function (debtData) {
                      await axios.get(URLMarketCapitalization)
                        .then(async function (MarketCapitalizationResponse) {
                          axios.get(URLStockPrice)
                            .then( function (stockPriceData) {
                              // await axios.get(URLPreferredShares)
                              //   .then(function (preferredData) {
                              //-----------Name of Company-------------------------//
                              //console.log("Derek, here is the API Res");
                              // console.log("Name of Company: " + nameResponse.data);
                              var companyName = nameResponse.data
                              var stockDataPackageQ12019 = [];
                              var stockDataFinal = [];
                              //--------------Cash-------------------------------//
                              const cashData = [];
                              for (const key in cashResponse.data) {
                                //dates2.push(key);
                                cashData.push([cashResponse.data[key].cash]);
                              }

                              const cashValue1 = cashData.slice(0, 1);
                              const cashValue = cashValue1[0][0];
                              //console.log("Cash: " + cashValue)

                              //---------------shortlongTermDebt + longTermDebt------------------//
                              //  const xyz2 = dates2.slice(0, 4);
                              //const SLTDValues = [];
                              const LTDValues = [];
                              // for (const key in debtData.data) {
                              //   //dates2.push(key);
                              //   SLTDValues.push([debtData.data[key].shortlongTermDebt]);
                              // }

                              for (const key in debtData.data) {
                                LTDValues.push([debtData.data[key].longTermDebt]);
                              }
                              // const debtSLTD = SLTDValues.slice(0, 1);
                              const debtLTD1 = LTDValues.slice(0, 1);
                              const debtLTD = debtLTD1[0][0];
                              //console.log("ShortTerm + LongTerm Debt: " + debtSLTD);
                              //console.log("LongTerm Debt Only: " + debtLTD);
                              // if (debtSLTD === "undefined" || null) {
                              // }
                              //---------------EBIT----------------------------------//
                              const dates = [];
                              const ebitValues = [];
                              for (const key in EbitResponse.data) {
                                dates.push(key);
                                ebitValues.push([EbitResponse.data[key].ebit]);
                              }

                              // const xyz = dates.slice(0, 1);
                              const EV = ebitValues.slice(0, 4);
                              var annualEbit = +EV[0] + +EV[1] + +EV[2] + +EV[3];
                              //console.log("Annual EBIT: " + annualEbit)

                              //---------------Preferred Shares--------------------------------//
                              // const preferredValues = [];


                              // for (const key in preferredData.data) {
                              //   preferredValues.push([preferredData.data[key].preferredStockTotalEquity]);
                              // }
                              // // const debtSLTD = SLTDValues.slice(0, 1);
                              // const preferredSliced = preferredValues.slice(0, 1);
                              // var preferredStockTotalEquity = preferredSliced[0][0];
                              // if (preferredStockTotalEquity == null) {
                              //   preferredStockTotalEquity = 0;
                              // }
                              // if(value) {
                              //   preferredStockTotalEquity;
                              // }
                              //stockDataPackageQ12019[0].preferredStockTotalEquity
                              //Needs to go below stockDataFinal
                              // if (stockDataFinal[6] == null) {
                              //   stockDataFinal[6] = 0;
                              // }

                              //----------------Market Capitalization---------------------------//

                              // const MarketCapitalizationData = [];
                              // for (const key in MarketCapitalizationResponse.data) {
                              //   //dates2.push(key);
                              //   MarketCapitalizationData.push([MarketCapitalizationResponse.data[key].commonStock]);
                              // }
                              //const MarketCapitalization = MarketCapitalizationData.slice(0, 1);
                              var MarketCapitalization = MarketCapitalizationResponse.data;
                              // console.log("MarketCapitalization: " + MarketCapitalization)
                              //console.log("MarketCapitalization: " + MarketCapitalization)



                              //---------------Stock Price----------------------------------//
                              //console.log("Stock Price: " + stockPriceData.data);
                              //   stockDataPackageQ12019.push(
                              //   {"companyName": nameResponse.data,
                              //   "cash": cashValue,
                              //   "longTermDebt": debtLTD1,
                              //   "ebit": annualEbit,                      
                              //   "marketCapitalization": MarketCapitalization,
                              //   "stockPrice": stockPriceData.data},
                              // )
                              var stockPrice = stockPriceData.data;

                              stockDataPackageQ12019.push(
                                {
                                  companyName,
                                  cashValue,
                                  debtLTD,
                                  annualEbit,
                                  MarketCapitalization,
                                  stockPrice
                                },
                              )
                              //console.log(companyName)
                              console.log("----Stock data baybeee!-----")
                              //console.log("----Array Len:"+stockDataPackageQ12019.length+"-----")
                              //console.log(stockDataPackageQ12019[0].cashValue)

                              stockDataFinal.push(
                                stockDataPackageQ12019[0].companyName,
                                stockDataPackageQ12019[0].cashValue,
                                stockDataPackageQ12019[0].debtLTD,
                                stockDataPackageQ12019[0].annualEbit,
                                stockDataPackageQ12019[0].MarketCapitalization,
                                stockDataPackageQ12019[0].stockPrice,

                              )
  
                              
                              console.log(companyName)
                              console.log("EV/EBIT: ", finalRatioEvEbit);

                              var enterpriseValue = [+stockDataFinal[2] + +stockDataFinal[4]]
                              var symbol = stocks[i];
                              var finalRatioEvEbit = parseFloat((enterpriseValue / stockDataFinal[3])).toFixed(2);
                              db.Report.create({
                                companyName: companyName,
                                symbol: symbol,
                                stockPrice: stockPrice,
                                finalRatioEvEbit: finalRatioEvEbit

                              }).then(function (dbData) {
                                //console.log(dbData);
                                console.log("Hi World")
                              });
                            
                            
                            });
                        });
                    });
                });
            });
        });
    }
  }
  //end of loop

  // Create a new example
  app.get("/api/report/allstocks", async function (req, res) {

    //getAllStockData()
    getAllStockData()

    res.json("Your Terminal is lighting up with stock API data pulls")


    // db.Report.create(
    //   {
    //     symbol: nameResponse.data,
    //     // StocksDate: apiData.Financials.Balance_Sheet.quarterly[quarter1End].date,
    //     name: apiData.General.Name,
    //     cash: cashValue,
    //     longTermDebt: debtLTD,
    //     ebit: annualEbit,
    //     MarketCapitalization: MarketCapitalization,
    //     stockPrice: stockPriceData.data
    //   }
    // )
    //})
    //} //end of getStockAndCreateRecord
  })
  // eodApi.getFundamentals(req.params.company).then(function (apiData) {
  //   for (var i = 0; i < dateEndOf4Qtrs.length; i++) {
  //     getStockAndCreateRecord(apiData, dateEndOf4Qtrs[i], lastDayofMarket)

  //   }
  // }) //end 

  //end await here or end of loop



  //random
  // Delete an example by id
  app.delete("/api/Report/:id", function (req, res) {
    db.Report.destroy({ where: { id: req.params.id } }).then(function (dbData) {
      res.json(dbData);
    });
  });

  app.get("/api/top30", function (req, res) {
    db.Report.findAll({
      //  where: {
         
      //    finalRatioEvEbit: {
      //    $gte: 0
      //   } 
      // },
      order: [
        ["finalRatioEvEbit", "asc"]
      ],
      limit: 30
    }).then(function (dbData) {
      var stockArray = [];
      dbData.forEach(element => {
        //console.log(parseFloat(element.finalRatioEvEbit));
        var x = parseFloat(element.finalRatioEvEbit);
        console.log("x",typeof x)
        if (x > 0) {
          stockArray.push(element)
        }
        console.log(typeof(element.finalRatioEvEbit));
      });
      //dbData.filter(e => e.finalRatioEvEbit > 0)
      res.json(stockArray);
    });
  });

  app.get("/api/report/company", function (req, res) {
    db.Report.findAll({
      where: {
        finalRatioEvEbit: req.params.company
      },
      order: [
        ["finalRatioEvEbit", "desc"]
      ]
    }).then(function (dbData) {
      res.json(dbData);
    });
  });
};


