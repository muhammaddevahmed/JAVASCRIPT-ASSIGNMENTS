function searchWord(){
    const paragraphText = document.getElementById('text').innerHTML.toLowerCase();
    const wordCheck = document.getElementById('wordInput').value.toLowerCase();

    if(paragraphText.includes(wordCheck) && wordCheck.trim() !== ""){
        alert("Word Found")
    }
    else{
        alert("Word Not Found")
    }
}