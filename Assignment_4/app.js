let students = [
    [1, "John Doe", "john.doe@example.com", 20, "Male"],
    [2, "Jane Smith", "jane.smith@example.com", 22, "Female"],
    [3, "Mike Johnson", "mike.johnson@example.com", 19, "Male"],
    [4, "Emily Davis", "emily.davis@example.com", 21, "Female"],
    [5, "Chris Lee", "chris.lee@example.com", 23, "Male"],
    [6, "Sophia Patel", "sophia.patel@example.com", 20, "Female"],
    [7, "David Brown", "david.brown@example.com", 22, "Male"],
    [8, "Isabella Garcia", "isabella.garcia@example.com", 19, "Female"],
    [9, "Daniel Martinez", "daniel.martinez@example.com", 21, "Male"],
    [10, "Olivia Wilson", "olivia.wilson@example.com", 23, "Female"]
];
let output = "";
for (let i = 0; i < students.length; i++) {
    let rowClass = (i % 2 === 0) ? 'even' : 'odd';
    output += `<tr class="${rowClass}">
        <td>${students[i][0]}</td>
        <td>${students[i][1]}</td>
        <td>${students[i][2]}</td>
        <td>${students[i][3]}</td>
        <td>${students[i][4]}</td>
    </tr>`;
}

document.getElementById("student-records").innerHTML = output;