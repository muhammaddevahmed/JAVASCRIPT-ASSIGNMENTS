let num = [3,34,65,2,78,78,,54,99];
document.getElementById('original').innerHTML= "Total Numbers : " + num.join(',');

function findMax(maximum){
    let max = maximum[0];
    for(let i=1; i < maximum.length; i++){
        if(maximum[i] > max){
            max = maximum[i];
        }
    }
    return max;
}

function findMin(minimum){
    let min = minimum[0];
    for(let i=1; i < minimum.length;i++){
        if(minimum[i] < min){
            min = minimum[i];
        }

    }
    return min;
}

let maxNumber = findMax(num);
let minNumber = findMin(num);

document.getElementById('max').innerHTML="Maximum Value : " + maxNumber;
document.getElementById('min').innerHTML="Minimum Value : " + minNumber
