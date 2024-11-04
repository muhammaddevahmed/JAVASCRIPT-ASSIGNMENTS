// Arrays to store multiple entries
var forFullName = [];
var forEmail = [];
var forPhoneNumber = [];
var forPassword = [];

// Function to gather inputs and display them
function takeInputs() {
    // Get the values from form inputs
    var fullName = document.getElementById('fullName').value;
    var YourEmail = document.getElementById('YourEmail').value;
    var PhoneNumber = document.getElementById('PhoneNumber').value;
    var YourPassword = document.getElementById('YourPassword').value;

    // Push values to respective arrays
    forFullName.push(fullName);
    forEmail.push(YourEmail);
    forPhoneNumber.push(PhoneNumber);
    forPassword.push(YourPassword);

    // Display the arrays' content
    displayDetails();
}

// Function to remove the last entry from each array
function pop() {
    forFullName.pop();
    forEmail.pop();
    forPhoneNumber.pop();
    forPassword.pop();

    // Display the updated arrays' content
    displayDetails();
}

// Function to remove the first entry from each array
function shift() {
    forFullName.shift();
    forEmail.shift();
    forPhoneNumber.shift();
    forPassword.shift();

    // Display the updated arrays' content
    displayDetails();
}

// Function to display all entries in the HTML
function displayDetails() {
    document.getElementById('showText').innerHTML = `
        <h2>Your Details</h2>
        <p><b>Full Names:</b> ${forFullName.join(", ")}</p>
        <p><b>Emails:</b> ${forEmail.join(", ")}</p>
        <p><b>Phone Numbers:</b> ${forPhoneNumber.join(", ")}</p>
        <p><b>Passwords:</b> ${forPassword.join(", ")}</p>`
     
}
