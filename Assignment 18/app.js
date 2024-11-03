function generateIDCard() {
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const gender = document.getElementById('gender').value;
    const profileImage = document.getElementById('profileImage').files[0];

    if (profileImage) {
      const reader = new FileReader();
      reader.onload = function () {
        localStorage.setItem("name", name);
        localStorage.setItem("fatherName", fatherName);
        localStorage.setItem("rollNumber", rollNumber);
        localStorage.setItem("contactNumber", contactNumber);
        localStorage.setItem("gender", gender);
        localStorage.setItem("profileImage", reader.result);
        showIDCard();
      };
      reader.readAsDataURL(profileImage);
    } else {
      alert("Please upload a profile image.");
    }
  }

  function showIDCard() {
    document.getElementById("displayName").textContent = "Name: " + localStorage.getItem("name");
    document.getElementById("displayFatherName").textContent = "Father's Name: " + localStorage.getItem("fatherName");
    document.getElementById("displayRollNumber").textContent = "Roll Number: " + localStorage.getItem("rollNumber");
    document.getElementById("displayContactNumber").textContent = "Contact: " + localStorage.getItem("contactNumber");
    document.getElementById("displayGender").textContent = "Gender: " + localStorage.getItem("gender");
    document.getElementById("displayImage").src = localStorage.getItem("profileImage");
    document.getElementById("idCard").style.display = "block";
    document.getElementById("download-btn").style.display = "block";
  }

  function downloadIDCard() {
    html2canvas(document.querySelector("#idCard")).then(canvas => {
      let link = document.createElement("a");
      link.download = "id_card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }

  window.onload = function () {
    if (localStorage.getItem("name")) showIDCard();
  };