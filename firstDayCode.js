const collectInputs = require("./collectInputs")

const checkDepth = (array) => {
    let endProduct = 0
    let number = 0
    for(let i=1; i<array.length; i++){
        if(array[i]>array[i-1]){
            endProduct++;
        }
    }
    return endProduct
}

const checkThreeSum = (array) => {
    let endProduct = 0
    let prev = 0
    for(let i=3; i<array.length; i++){
        let curr = array[i-2] + array[i-1] + array[i]
        if(curr>prev){
            endProduct++
        }
        prev = curr
    }
    return endProduct
}

(async () => {
    const finalData = await collectInputs.getInput('firstDayInput.txt')
    const arr = finalData.split('\n').map(function(item){
        return parseInt(item, 10)
    })
    console.log(checkThreeSum(arr))
})()



