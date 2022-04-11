
let xlsx = require('xlsx')



function readDataFromExcel(path,Sheetname) {

    let wb=xlsx.readFile(path)
   

    let ws=wb.Sheets[Sheetname]
    let dataInJason  =xlsx.utils.sheet_to_json(ws)
    return dataInJason
}
 module.exports= readDataFromExcel


 

