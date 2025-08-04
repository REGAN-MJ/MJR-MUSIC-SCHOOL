const clickHere = document.getElementById('click-here');
const popup = document.querySelector('.form1');
const closeBtn = document.querySelector('.close-btn');
const submitBtn = document.querySelector('.submitbtn');
const thankYouMessage = document.querySelector('.Thankyoumessage');
const okBtn = document.querySelector('.okbtn');
const enrollButton = document.getElementById('enrollButton');

enrollButton.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const tel1 = document.getElementById('tel1');
  const tel2 = document.getElementById('tel2');
  const instrument = document.getElementById('instrument');
  const location = document.getElementById('location');
  const grade = document.getElementById('grade');
  const firstnames = document.getElementById('fname');
  const secondname = document.getElementById('lname');
  const oname = document.getElementById('oname');
  const email = document.getElementById('email');
  const dob = document.getElementById('dob');
  const gender = document.getElementById('gender');

  const alphaRegex = /^[A-Za-z]+$/;
  const fnameVal = firstnames.value.trim();
  const lnameVal = secondname.value.trim();
  const fnameerror = document.getElementById('fnamecomment');
  const lnameerror = document.getElementById('lnamecomment');
  const doberror = document.getElementById('dobcomment');
  const gendererror = document.getElementById('gendercomment');
  const tel1error = document.getElementById('tel1comment');
  const tel2error = document.getElementById('tel2comment');
  const locationerror = document.getElementById('locationcomment');
  const gradeerror = document.getElementById('gradecomment');
  const onameerror = document.getElementById('onamecomment');
  const emailerror = document.getElementById('emailcomment');

  let valid = true;

  // First Name Validation
  if (fnameVal === "") {
    fnameerror.style.display = 'flex';
    fnameerror.textContent = "First name is required.";
    firstnames.style.border = "2px solid red";
    valid = false;
  } else if (/^\d/.test(fnameVal)) {
    fnameerror.style.display = 'flex';
    fnameerror.textContent = "First name should not start with a number.";
    firstnames.style.border = "2px solid red";
    valid = false;
  } else if (fnameVal.length > 30) {
    fnameerror.style.display = 'flex';
    fnameerror.textContent = "First name should not exceed 30 characters.";
    firstnames.style.border = "2px solid red";
    valid = false;
  } else if (!alphaRegex.test(fnameVal)) {
    fnameerror.style.display = 'flex';
    fnameerror.textContent = "First name must contain only letters.";
    firstnames.style.border = "2px solid red";
    valid = false;
  } else {
    firstnames.style.border = "";
    fnameerror.style.display = 'none';
  }

  // Last Name Validation
  if (lnameVal === "") {
    lnameerror.style.display = 'flex';
    lnameerror.textContent = "Last name is required.";
    secondname.style.border = "2px solid red";
    valid = false;
  } else if (/^\d/.test(lnameVal)) {
    lnameerror.style.display = 'flex';
    lnameerror.textContent = "Last name should not start with a number.";
    secondname.style.border = "2px solid red";
    valid = false;
  } else if (lnameVal.length > 30) {
    lnameerror.style.display = 'flex';
    lnameerror.textContent = "Last name should not exceed 30 characters.";
    secondname.style.border = "2px solid red";
    valid = false;
  } else if (!alphaRegex.test(lnameVal)) {
    lnameerror.style.display = 'flex';
    lnameerror.textContent = "Last name must contain only letters.";
    secondname.style.border = "2px solid red";
    valid = false;
  } else {
    secondname.style.border = "";
    lnameerror.style.display = 'none';
  }

  // Other Name Validation
  const onameVal = oname.value.trim();
  if (onameVal !== "") {
    if (/^\d/.test(onameVal)) {
      onameerror.style.display = 'flex';
      onameerror.textContent = "Other name should not start with a number.";
      oname.style.border = "2px solid red";
      valid = false;
    } else if (onameVal.length > 30) {
      onameerror.style.display = 'flex';
      onameerror.textContent = "Other name should not exceed 30 characters.";
      oname.style.border = "2px solid red";
      valid = false;
    } else if (!alphaRegex.test(onameVal)) {
      onameerror.style.display = 'flex';
      onameerror.textContent = "Other name must contain only letters.";
      oname.style.border = "2px solid red";
      valid = false;
    } else {
      oname.style.border = "";
      onameerror.style.display = 'none';
    }
  } else {
    oname.style.border = "";
    onameerror.style.display = 'none';
  }

  // Date of Birth Validation
  if (dob.value.trim() === "") {
    doberror.style.display = 'flex';
    doberror.textContent = "Please select your date of birth.";
    dob.style.border = "2px solid red";
    valid = false;
  } else {
    dob.style.border = "";
    doberror.style.display = 'none';
  }

  // Gender Validation
  if (gender.value.trim() === "") {
    gendererror.style.display = 'flex';
    gendererror.textContent = "Please select your gender.";
    gender.style.border = "2px solid red";
    valid = false;
  } else {
    gender.style.border = "";
    gendererror.style.display = 'none';
  }

  // Telephone 1
  if (!/^\d{9,10}$/.test(tel1.value.trim())) {
    tel1error.style.display = 'flex';
    tel1error.textContent = "Enter a valid 9 or 10-digit phone number.";
    tel1.style.border = "2px solid red";
    valid = false;
  } else {
    tel1.style.border = "";
    tel1error.style.display = 'none'; 
  }

  // Telephone 2
  if (tel2.value.trim() !== "") {
    if (!/^\d{9,10}$/.test(tel2.value.trim())) {
      tel2error.style.display = 'flex'; 
      tel2error.textContent = "Enter a valid 9 or 10-digit phone number.";
      tel2.style.border = "2px solid red"; 
      valid = false;
    } else {
      tel2.style.border = "";
      tel2error.style.display = 'none';
    }
  } else {
    tel2.style.border = "";
    tel2error.style.display = 'none';
  }

  // Location
  if (location.value.trim() === "") {
    locationerror.style.display = 'flex';
    locationerror.textContent = "Please select your location or address.";
    location.style.border = "2px solid red";
    valid = false;
  } else {
    location.style.border = "";
    locationerror.style.display = 'none';
  }

  // If all fields valid, send data to server
  if (valid) {
    const formData = {
      fname: fnameVal,
      lname: lnameVal,
      oname: onameVal,
      dob: dob.value.trim(),
      gender: gender.value.trim(),
      tel1: tel1.value.trim(),
      tel2: tel2.value.trim(),
      location: location.value.trim(),
      grade: grade.value.trim(),
      email: email.value.trim(),
      instrument: instrument.value.trim()
    };
    // Log after declaration
    console.log('Submitting form data:', formData);

    fetch('/api/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      console.log('Response status:', response.status);
      return response.json();
    })
    .then(data => {
      console.log('Response data:', data);
      thankYouMessage.style.display = 'flex';
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert("Something went wrong. Please try again later.");
    });
  }
});

// OK Button resets form
okBtn.addEventListener('click', () => {
  thankYouMessage.style.display = 'none';
  popup.style.display = 'none';
  document.getElementById('registrationForm').reset();
});

//Admin Login


const LoginPanel = document.getElementById("LoginPanel");
const AdminBtn = document.querySelector(".user-icon");
const AdminPanelClose = document.getElementById("Adminclosebtn");

AdminBtn.addEventListener('click', ()=>{
  LoginPanel.style.display = "flex";
  
})

AdminPanelClose.addEventListener('click',function(){
   LoginPanel.style.display = "none";
  
})

const adminForm = document.getElementById('AdminForm');
const nameInput = document.getElementById('AdminName');
const passInput = document.getElementById('AdminPassword');
const nameError = document.getElementById('AdminComment');
const passError = document.getElementById('PasswordComment');

adminForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = nameInput.value.trim();
  const password = passInput.value.trim();
  let valid = true;

  if (!username) {
    nameError.textContent = "Username is required.";
    nameError.style.display = "flex";
    valid = false;
  } else {
    nameError.style.display = "none";
  }

  if (!password) {
    passError.textContent = "Password is required.";
    passError.style.display = "flex";
    valid = false;
  } else {
    passError.style.display = "none";
  }

  if (!valid) return;

  fetch('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(res => {
    if (!res.ok) throw new Error('Login failed');
    return res.json();
  })
  .then(data => {
    console.log(data.message);
    window.location.href = '/ADMIN.html'; // redirect to admin page
  })
  .catch(err => {
    passError.textContent = "Invalid username or password.";
    passError.style.display = "flex";
    console.error(err);
  });
});



