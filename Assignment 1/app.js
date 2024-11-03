var name = prompt("Enter your name");
var rollNumber = prompt("Enter your roll number");
var totalMarks = 500;
var maths = +prompt("Enter your Maths marks out of 100");
var english = +prompt("Enter your English marks out of 100");
var computer = +prompt("Enter your Computer marks out of 100");
var physics = +prompt("Enter your Physics marks out of 100");
var islamiat = +prompt("Enter your Islamiat marks out of 100");


var obtainedMarks = maths + english + computer + physics + islamiat;
var percentage = (obtainedMarks / totalMarks) * 100;


var grade;
if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else if (percentage >= 40) {
    grade = "D";
} else {
    grade = "Fail";
}

document.getElementById("name").innerText = "Name: " + name;
document.getElementById("roll-number").innerText = "Roll Number: " + rollNumber;
document.getElementById("total-marks").innerText = "Total Marks: " + totalMarks;
document.getElementById("obtained-marks").innerText = "Obtained Marks: " + obtainedMarks;
document.getElementById("percentage").innerText = "Percentage: " + percentage.toFixed(2) + "%";
document.getElementById("grade").innerText = "Grade: " + grade;