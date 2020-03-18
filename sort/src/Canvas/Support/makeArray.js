    let   arr= [],
    xVal = 0,
    yVal = 500,
    width = 10;
    for(let i = 0; i < 51; i++){
    arr.push({x:xVal,y:yVal,w:width,h:500-yVal,color:255})
    xVal += 10;
    yVal -= 10;
    }
    
    const shuffleX = (array) => {
        for(let i= 0; i < array.length; i++){
            let initalX = array[i].x;
            let r = Math.floor(Math.random()*50)
            array[i]['x'] = array[r]['x'];
            array[r].x = initalX ;
        }
        return array
    }

    function shuffleArray (array) {
        var j, x, i;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }

    // let shuf = shuffleX(arr)
    let shuf = shuffleArray(arr)

    export default shuf