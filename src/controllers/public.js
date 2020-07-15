
const fs = require('fs')
const csv = require('csv-parser');

function getGladiatorsByYear(req, res) {

  let data = []
  const year = req.params.year;
  
  fs.createReadStream("gladiators.csv")
    .pipe(csv())
    .on('data', (row) => {
      data.push(row)
    })
    .on('end', () => {
      if(validateYear(year)) {
        sendResponse(data)
      } else {
        res.json([])
      }
    })

    const validateYear = (year) => {
      let parsedYear = parseInt(year, 10)
      if(isNaN(parsedYear)) {
        console.log("Invalid Year")
        return false
      } else return true
    }

    const sendResponse = (data) => {
      let response = filterGladiators(data)
      console.log(`Retrieved ${response.length} gladiators in the year ${year}`)
      if(response.length > 0) {
        res.json(response)
      } else {
        res.json([])
      }
    }
    
    const filterGladiators = (data) => {
      const response = data.filter(item => {
        let firstYear = parseInt(item['first year'], 10)
        let lastYear = parseInt(item['last year'], 10)
        if(year >= firstYear && year <= lastYear) {
          return true
        }
      })
      return response
    }
}

module.exports = {
  getGladiatorsByYear
};
