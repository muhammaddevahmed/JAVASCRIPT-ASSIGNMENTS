function displayResults() {
    // Getting form values
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Displaying values in the result container
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultFatherName').textContent = fatherName;
    document.getElementById('resultEmail').textContent = email;
    document.getElementById('resultPhone').textContent = phone;
    document.getElementById('resultPassword').textContent = password;

    // Show the result container
    document.getElementById('resultContainer').style.display = 'block';
}