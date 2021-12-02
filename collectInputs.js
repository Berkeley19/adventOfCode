const fs = require('fs').promises

const getInput = (fileName) => {
  try {
    return fs.readFile(fileName, 'utf8');
  }catch(e) {
    console.log(e)
  }
}

module.exports = { getInput }
