const signupDiv = document.getElementById('signup');
const loginDiv = document.getElementById('login');
const dashboard = document.getElementById('dashboard');
const employeeDataTable = document.getElementById('employee-data').getElementsByTagName('tbody')[0];
const userRoleSpan = document.getElementById('user-role');
const logoutButton = document.getElementById('logout');

let users = JSON.parse(localStorage.getItem('users')) || [];

// Predefined Employee Data (up to 20 employees)
const predefinedEmployees = [
    { id: 1, username: 'john_doe', password: 'password123', role: 'employee' },
    { id: 2, username: 'jane_smith', password: 'password123', role: 'employee' },
    { id: 3, username: 'michael_johnson', password: 'password123', role: 'employee' },
    { id: 4, username: 'chris_evans', password: 'password123', role: 'employee' },
    { id: 5, username: 'scarlett_johansson', password: 'password123', role: 'employee' },
    { id: 6, username: 'robert_downey', password: 'password123', role: 'employee' },
    { id: 7, username: 'tom_holland', password: 'password123', role: 'employee' },
    { id: 8, username: 'gal_gadot', password: 'password123', role: 'employee' },
    { id: 9, username: 'brad_pitt', password: 'password123', role: 'employee' },
    { id: 10, username: 'angelina_jolie', password: 'password123', role: 'employee' },
    { id: 11, username: 'will_smith', password: 'password123', role: 'employee' },
    { id: 12, username: 'jessica_alba', password: 'password123', role: 'employee' },
    { id: 13, username: 'leonardo_dicaprio', password: 'password123', role: 'employee' },
    { id: 14, username: 'matt_damon', password: 'password123', role: 'employee' },
    { id: 15, username: 'ben_affleck', password: 'password123', role: 'employee' },
    { id: 16, username: 'charlize_theron', password: 'password123', role: 'employee' },
    { id: 17, username: 'rooney_mara', password: 'password123', role: 'employee' },
    { id: 18, username: 'ryan_reynolds', password: 'password123', role: 'employee' },
    { id: 19, username: 'natalie_portman', password: 'password123', role: 'employee' },
    { id: 20, username: 'jared_leto', password: 'password123', role: 'employee' },
];

// Initialize User Data
function initializeUserData() {
    if (users.length === 0) {
        users = [...predefinedEmployees];
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// Show Dashboard Data
function showDashboardData(currentUser) {
    userRoleSpan.textContent = currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1);
    employeeDataTable.innerHTML = ''; // Clear previous data

    // Show all employee data
    users.forEach(user => addEmployeeToTable(user));

    // Show dashboard and hide login/signup
    dashboard.classList.remove('hidden');
    loginDiv.classList.add('hidden');
    signupDiv.classList.add('hidden');

    // If the user is not an admin, hide the add/edit/delete functionalities
    if (currentUser.role === 'admin') {
        document.getElementById('admin-panel').classList.remove('hidden');
    } else {
        document.getElementById('admin-panel').classList.add('hidden');
    }
}

// Add Employee Data to Table
function addEmployeeToTable(user) {
    const row = employeeDataTable.insertRow();
    row.insertCell(0).textContent = user.id;
    row.insertCell(1).textContent = user.username;
    row.insertCell(2).textContent = user.role;

    // If user is admin, show edit and delete buttons
    const actionsCell = row.insertCell(3);
    if (userRoleSpan.textContent === 'Admin') {
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editUser(user.id);
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteUser(user.id);
        actionsCell.appendChild(deleteButton);
    }
}

// Add New Employee (only available to admin)
document.getElementById('submit-employee').onclick = function() {
    const currentUserRole = userRoleSpan.textContent.toLowerCase();
    if (currentUserRole === 'admin') {
        const username = document.getElementById('new-employee-username').value;
        const password = document.getElementById('new-employee-password').value;
        const role = document.getElementById('new-employee-role').value;

        if (username && password) {
            const newUser = {
                id: getNextId(), // Use the helper function to assign a new ID
                username,
                password,
                role
            };

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            showDashboardData({ role: 'admin' }); // Refresh dashboard for admin
        }
    } else {
        alert('Only admins can add new employees.');
    }
};

// Function to get the next available ID
function getNextId() {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
}

// Edit User Data (only available to admin)
function editUser(userId) {
    const currentUserRole = userRoleSpan.textContent.toLowerCase();
    if (currentUserRole === 'admin') {
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex > -1) {
            const user = users[userIndex];
            const newUsername = prompt('Enter new username:', user.username);
            const newPassword = prompt('Enter new password:', user.password);
            if (newUsername) {
                user.username = newUsername;
            }
            if (newPassword) {
                user.password = newPassword;
            }
            localStorage.setItem('users', JSON.stringify(users));
            showDashboardData({ role: 'admin' }); // Refresh dashboard
        }
    } else {
        alert('Only admins can edit employee details.');
    }
}

// Delete User (only available to admin)
function deleteUser(userId) {
    const currentUserRole = userRoleSpan.textContent.toLowerCase();
    if (currentUserRole === 'admin') {
        users = users.filter(user => user.id !== userId);
        localStorage.setItem('users', JSON.stringify(users));
        showDashboardData({ role: 'admin' }); // Refresh dashboard for admin
    } else {
        alert('Only admins can delete employees.');
    }
}

// Signup Functionality
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const role = document.getElementById('signup-role').value;

    const newUser = {
        id: getNextId(), // Use the helper function to assign a new ID
        username,
        password,
        role
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now log in.');
    showLogin();
});

// Login Functionality
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const currentUser = users.find(user => user.username === username && user.password === password);
    if (currentUser) {
        showDashboardData(currentUser);
    } else {
        alert('Invalid credentials, please try again.');
    }
});

// Logout Functionality
logoutButton.addEventListener('click', function () {
    dashboard.classList.add('hidden');
    loginDiv.classList.remove('hidden');
});

// Show Login
function showLogin() {
    loginDiv.classList.remove('hidden');
    signupDiv.classList.add('hidden');
}

// Show Signup
function showSignup() {
    signupDiv.classList.remove('hidden');
    loginDiv.classList.add('hidden');
}

// Initialize the app
initializeUserData();


