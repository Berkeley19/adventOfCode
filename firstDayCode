const collectInputs = require("./collectInputs")

const collectData = async () => {
    try {
        return await collectInputs.getInput('firstDayInput')
      }
      catch (e) {
        return 'caught';
      }
    
}

const checkDepth = (array) => {
    let endProduct = 0
    for(let i=1; i<=array.length; i++){
        if(array[i]>array[i-1]){
            console.log(endProduct)
            endProduct++;
        }
    }
    return endProduct
}

(async () => {
    const finalData = await collectData()
    const arr = finalData.split('\n')
    console.log(checkDepth(arr))
})()



