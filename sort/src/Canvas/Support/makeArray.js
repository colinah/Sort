    let   arr= [],
    xVal = 0,
    yVal = 500,
    width = 10;
    for(let i = 0; i < 50; i++){
    arr.push({x:xVal,y:yVal,w:width,h:500-yVal,color:255})
    xVal += 10;
    yVal -= 10;
    }
    
    const shuffle = (array) => {
        for(let i= 0; i < 50; i++){
            let initalX = array[i].x;
            let r = Math.floor(Math.random()*50)
            array[i]['x'] = array[r]['x'];
            array[r].x = initalX ;
        }
        return array
    }

    let shuf = shuffle(arr)

    export default shuf