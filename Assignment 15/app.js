let myForm = {
    username : undefined,
    email : undefined,
    password : undefined,
}
let arr = [];
function clickMe(){
    let username = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    myForm.username = username.value;
    myForm.email = email.value;
    myForm.password = password.value;
    arr.push(myForm);
    alert("Object are stored")
    console.log(arr)    
}