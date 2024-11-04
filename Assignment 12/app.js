function calculateAge() {
    // Get the birthdate input
    var birthdate = document.getElementById('birthdate').value;
    
    // Check if a date was entered
    if (!birthdate) {
        document.getElementById('result').innerHTML = "Please enter your birthdate.";
        return;
    }

    // Create a Date object from the input
    var birthDate = new Date(birthdate);
    var today = new Date();

    // Calculate the age in years
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust the age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('result').innerHTML = "Your age is: " + age + " years.";
}
