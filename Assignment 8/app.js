let num = [32,4, 67,89,2,9,55,100,1];
document.getElementById('original').innerHTML="Original values : " + num.join(',');

function ascendingOrder(asc){
    let sortedArray = asc.slice();
    for(let i=0; i < sortedArray.length ; i++){
        for (let j=i+1; j < sortedArray.length; j++){
            if(sortedArray[i] > sortedArray[j]){
                let temp = sortedArray[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = temp
            }

        }
    }
    return sortedArray;
}

function descendingOrder(des){
    let sortedArray = des.slice();
    for(let i= 0; i < sortedArray.length; i++){
        for(let j=i+1; j < sortedArray.length; j++){
            if(sortedArray[i] < sortedArray[j]){
                let temp = sortedArray[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = temp;
            }
        }
    }
    return sortedArray;
}

let order1 = ascendingOrder(num);
let order2 = descendingOrder(num);

document.getElementById('ascending').innerHTML= "Ascending Order: " + order1.join(',');
document.getElementById('descending').innerHTML= "Descending Order: " + order2.join(',');