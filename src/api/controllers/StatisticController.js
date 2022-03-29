const Statistic = require("../models/Statistic");
const config = require("../config");


module.exports = {
    findAll: async (req, res) => {
      try {
        console.log("mongo_uri", process.env.MONGO_URI);
        console.log("mongo_uri", config.mongo_uri);

        const allActiveStatistic = await Statistic.find() // .forEach( function(myDoc) { console.log( "stations: " ) } );
        // let jsonCollections = JSON.stringify(allActiveStatistic)
        // for (let i = 0 ; jsonCollections.length; i++){
        //     console.log(jsonCollections[i])
        // }

        // console.log(JSON.stringify(allActiveStatistic))
        // console.log("allActiveStatistic.length = ", allActiveStatistic.length, typeof allActiveStatistic)
        // let arrayInfo = []
        // for (var [key, value] of Object.entries(allActiveStatistic)) {
            // console.log("value ",value, typeof value);
            
// for (let index = 0; index < value['stations'].length; index++) {
//     const element = value['stations'][index];
//     console.log("element ", element)
//     // for (var [key_aux, value_aux] of Object.entries(value)) {
//             //     console.log("value_aux ",value_aux,"key_aux",key_aux, typeof value_aux['stations'])
//             //     let {id} = value_aux['stations']
//             //     console.log("id ",id)
//             // }
// }
            // let {id} = value['stations']
            // console.log("id",id)
        // }

        // for(let i = 0 ; i < allActiveStatistic.length ; i++){
        //     console.log(i)
        //     // console.log(JSON.stringify(allActiveStatistic))
        //     // let {location, indexes} =  allActiveStatistic[i]['stations'][0]
        //     // console.log(i)
        //     // let imeca_txt = 'ND'
        //     // switch (indexes['value']) {
        //     //     case imeca_txt < 50:
        //     //         imeca_txt = 'BUENA'
        //     //         break;
            
        //     //     case imeca_txt < 100:
        //     //         imeca_txt = 'REGULAR'
        //     //         break;
            
        //     //     case imeca_txt < 151:
        //     //         imeca_txt = 'MALA'
        //     //         break;
            
        //     //     case imeca_txt < 200:
        //     //         imeca_txt = 'MUY MALA'
        //     //         break;
            
        //     //     case imeca_txt < 50:
        //     //         imeca_txt = 'BUENA'
        //     //         break;

        //     // }
        //     // arrayInfo.push({location, imeca_txt})
        // }

        res.status(200).json({ message: "All Statistic points", data: allActiveStatistic });

      } catch (error) {
        res.status(400).json({
          message: "Error recover statistic",
          error,
        });
      }
    },
  };
  