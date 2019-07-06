var db = require("../models");
//import stocks from "./stockArray";
const eodApi = require('eodhistoricaldata-api');
const stocks = require("./stockArray");
const axios = require("axios");
const router = require("express").Router();


// module.exports = function (app) {
// Get all examples
router.get("/api/report", function (req, res) {
  db.Report.findAll({}).then(function (dbData) {
    res.json(dbData);
  });
});

router.get("/api/report/company", function (req, res) {
  db.Report.findAll({
    where: {
      symbol: req.params.company
    },
    order: [
      ["reportDate", "asc"]
    ]
  }).then(function (dbData) {
    res.json(dbData);
  });
});

//use getAllStockData, loop every stock through it, have it await each stock API.
//eventually put the stocks[i] into here to loop all stocks[i]
async function getAllStockData(stockId) {
  //var URL = "https://eodhistoricaldata.com/api/fundamentals/AAPL.US?api_token=" + process.env.EOD_KEY + "&filter=Financials::Balance_Sheet::yearly::2007-12-31";


  //axios.get(`https://eodhistoricaldata.com/api/fundamentals/${stockId}.US?api_token=${process.env.EOD_KEY}&filter=Financials::Balance_Sheet::yearly`)
  axios.get(URL)
    .then(function (EbitResponse) {
      console.log("Derek, here is the API Res");
      //console.log(EbitResponse.data);

    });
};//end of getAllStockData()

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
                        await axios.get(URLStockPrice)
                          .then(function (stockPriceData) {
                            //-----------Name of Company-------------------------//
                            console.log("Derek, here is the API Res");
                            console.log("Name of Company: " + nameResponse.data);

                            //--------------Cash-------------------------------//
                            const cashData = [];
                            for (const key in cashResponse.data) {
                              //dates2.push(key);
                              cashData.push([cashResponse.data[key].cash]);
                            }
                            const cashValue = cashData.slice(0, 1);
                            console.log("Cash: " + cashValue)

                            //---------------shortlongTermDebt + longTermDebt------------------//
                            //  const xyz2 = dates2.slice(0, 4);
                            const SLTDValues = [];
                            const LTDValues = [];
                            for (const key in debtData.data) {
                              //dates2.push(key);
                              SLTDValues.push([debtData.data[key].shortlongTermDebt]);
                            }

                            for (const key in debtData.data) {
                              LTDValues.push([debtData.data[key].longTermDebt]);
                            }
                            const debtSLTD = SLTDValues.slice(0, 1);
                            const debtLTD = LTDValues.slice(0, 1);

                            console.log("ShortTerm + LongTerm Debt: " + debtSLTD);
                            console.log("LongTerm Debt Only: " + debtLTD);
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
                            console.log("Annual EBIT: " + annualEbit)

                            //----------------Market Capitalization---------------------------//

                            // const MarketCapitalizationData = [];
                            // for (const key in MarketCapitalizationResponse.data) {
                            //   //dates2.push(key);
                            //   MarketCapitalizationData.push([MarketCapitalizationResponse.data[key].commonStock]);
                            // }
                            //const MarketCapitalization = MarketCapitalizationData.slice(0, 1);
                            var MarketCapitalization = MarketCapitalizationResponse.data;
                            console.log("MarketCapitalization: " + MarketCapitalization)
                            //console.log("MarketCapitalization: " + MarketCapitalization)



                            //---------------Stock Price----------------------------------//
                            console.log("Stock Price: " + stockPriceData.data);

                            // let obj = {
                            //   //1st URL
                            //   a: {
                            //     //dates: xyz,
                            //     EV: EV
                            //   },
                            //   //2nd URL
                            //   b: {
                            //     // dates: xyz2,
                            //     debtSLTD: debtSLTD
                            //   }
                            // }
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
router.get("/api/report/allstocks", async function (req, res) {

  //getAllStockData()
  getAllStockData()

  res.json("Your Terminal is lighting up with stock API data pulls")


  db.Report.create(
    {
      symbol: nameResponse.data,
      // StocksDate: apiData.Financials.Balance_Sheet.quarterly[quarter1End].date,
      name: apiData.General.Name,
      cash: cashValue,
      longTermDebt: debtLTD,
      ebit: annualEbit,
      MarketCapitalization: MarketCapitalization,
      stockPrice: stockPriceData.data
    }
  )
  //})
  //} //end of getStockAndCreateRecord
});
// eodApi.getFundamentals(req.params.company).then(function (apiData) {
//   for (var i = 0; i < dateEndOf4Qtrs.length; i++) {
//     getStockAndCreateRecord(apiData, dateEndOf4Qtrs[i], lastDayofMarket)

//   }
// }) //end 

//end await here or end of loop



//random
// Delete an example by id
router.delete("/api/Report/:id", function (req, res) {
  db.Report.destroy({ where: { id: req.params.id } }).then(function (dbData) {
    res.json(dbData);
  });
});
// };

module.exports = router;
