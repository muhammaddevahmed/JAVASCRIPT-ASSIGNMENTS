// Function to handle signup
function signup() {
    const firstName = document.getElementById('signupFirstName').value;
    const lastName = document.getElementById('signupLastName').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;
    const signupMessage = document.getElementById('signupMessage');

    // Check if the user already exists
    if (localStorage.getItem(email)) {
        signupMessage.textContent = "User already exists!";
    } else {
        // Save new user data to localStorage
        const userData = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(userData));
        signupMessage.textContent = "Signup successful! Please login.";
        
        // Show the login form and hide the signup form
        document.getElementById('signupContainer').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
    }
}

// Function to handle login
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const loginMessage = document.getElementById('loginMessage');

    // Check if user data matches
    const storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser && storedUser.password === password) {
        loginMessage.textContent = "Login successful!";
        loginMessage.style.color = "green";
    } else {
        loginMessage.textContent = "Invalid email or password!";
    }
}
