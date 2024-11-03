var spin = document.getElementById('pic');
var numberDisplay = document.getElementById('display-text');
var currentRotation = 0;

function handleClick(){
    var generateNum = Math.ceil(Math.random()*6);
    spin.src = `dise${generateNum}.png`;

    console.log(`Rolled Number : ${generateNum}`);
    numberDisplay.textContent = `Rolled Number : ${generateNum}`;   
    currentRotation += 360;
    spin.style.transform = `rotate(${currentRotation}deg)`;  
}