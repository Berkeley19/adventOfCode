const collectInputs = require("./collectInputs");

const finalDepthMulHorizontal = (array) => {
    let h = 0;
    let d = 0;
    for(let i=0; i<array.length; i++){
        let str = array[i]
        let currNum = Number(str.slice(-1))
        let currMov = str.charAt(0)
        switch(currMov){
            case 'f':
                h+=currNum;
                break;
            case 'd':
                d+=currNum;
                break;
            default:
                d-=currNum;
        }
    }
    return h * d
}

const finalWithAim = (array) => {
    let h = 0;
    let a = 0;
    let d = 0;
    for(let i=0; i<array.length; i++){
        let str = array[i]
        let currNum = Number(str.slice(-1))
        let currMov = str.charAt(0)
        switch(currMov){
            case 'f':
                h+=currNum;
                d+=a*currNum;
                break;
            case 'd':
                a+=currNum;
                break;
            default:
                a-=currNum;
        }
        console.log('h-', h, '   a-', a, '   d-', d)
    }
    return h * d
}

(async () => {
    const finalData = await collectInputs.getInput('secondDayInput.txt')
    const arr = finalData.split('\n')

    console.log(finalWithAim(arr))
})()