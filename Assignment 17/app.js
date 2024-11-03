function changeContent(newHeading,alertMessage){
    document.getElementById('heading').innerText=newHeading;
    document.getElementById('para').innerText=`You have changed the heading to ${newHeading}.`;
    alert(alertMessage)
}