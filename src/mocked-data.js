'use strict';

const fs = require('fs');

let DATA;
const INPUT_FILE_NAME = 'data_48_1Y.json';
const OUTPUT_FILE_NAME = 'test-data-2.js';

function witeDataIn({ inputFile = INPUT_FILE_NAME, outputFile =  OUTPUT_FILE_NAME}) {

    fs.readFile(inputFile, (err, data) => {
        if (err) throw err;
        DATA = JSON.parse(data);
        // console.log("%c 🚀  LOG: %c DATA ", ...Array(2).fill("color:yellow"), DATA)
        const minData = DATA.timeSeries.map(elem => {
            const formatData = {
                time: elem.time,
                value: elem.close,
            }
            return formatData;
        });
        // console.log("%c 🚀  LOG: %c minData ", ...Array(2).fill("color:yellow"), minData.slice(0,10))
    
        // console.log("%c 🚀  LOG: %c minData ", ...Array(2).fill("color:yellow"), minData)
        const formatedData = {
            ...minData
        };
        // console.log("%c 🚀  LOG: %c formatedData ", ...Array(2).fill("color:yellow"), Object.values(formatedData))
    
        const jsonData = JSON.stringify(Object.values(formatedData));
        // console.log("%c 🚀  LOG: %c data ", ...Array(2).fill("color:yellow"), jsonData)
    
        fs.writeFile(outputFile, jsonData, function (err) {
            if (err) return console.log(err);
            console.log(`data > ${outputFile}`);
        });
    
    });
}
witeDataIn({})
// witeDataIn({ inputFile: 'data_48_5Y.json', outputFile: 'test-data-48-5Y.js' });




