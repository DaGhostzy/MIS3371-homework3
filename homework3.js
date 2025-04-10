/*
Name: Michael Tran
Date created: 3/19/2025
Date last edited: 4/5/2025
Version: 1.0
Description: Homework 3 JavaScript
*/

/*
    References: W3Schools
*/

//dynamic date
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

// First name validation
function validateFirstName() {
    FirstName = document.getElementById("FirstName").value.trim();
    var namePattern = /^[a-zA-Z'-]{1,30}$/;
    // regex pattern from w3schools/stackflow

    // checks/validates of the first name field is empty/blank
    if (FirstName == "") {
        document.getElementById("FirstName-error").innerHTML = 
        "Please enter a valid first name, can NOT be left empty/blank";
        return false;
        }
    // checks validation if first name matches pattern
    else if (FirstName != "") {
        if (!FirstName.match(namePattern)) {
            document.getElementById("FirstName-error").innerHTML = "Letters, apostrophes, and dashes only";
            return false;
        
    // checks validation if first name has at least 1 character
        } else if (FirstName.length < 2) {
           document.getElementById("FirstName-error").innerHTML = "First name can NOT have less than 2 letters";
            return false; 
    // checks validation if first name has more than 30 characters
        } else if (FirstName.length > 30) {
           document.getElementById("FirstName-error").innerHTML = "First name can NOT have more than 30 letters";
            return false;
        } else {
            document.getElementById("FirstName-error").innerHTML = "";
            return true;
        }
    }
}

// Middle initial validation
function validateMiddle() {
    let MiddleInitial = document.getElementById("MiddleInitial");
    const namePattern = /^[A-Z]+$/;
    // regex pattern from w3schools/stackflow
 
    // validates the middle initial to uppercase letter
    MiddleInitial = MiddleInitial.toUpperCase();
    document.getElementById("MiddleInitial").value = MiddleInitial;

    if (!MiddleInitial.match(namePattern)) {
        document.getElementById("MiddleInitial-error").innerHTML =
        "Middle initial must be a single letter and uppercase";
        return false;
    } else {
        document.getElementById("MiddleInitial-error").innerHTML = "";
        return true;
    }
}

// Last name validation
function validateLastName() {
    LastName = document.getElementById("LastName").value.trim();
    var namePattern = /^[a-zA-Z'-]{1,30}$/;
    // regex pattern from w3schools/stackflow

    // checks/validates of the last name field is empty/blank
    if (LastName == "") {
        document.getElementById("LastName-error").innerHTML = 
        "Please enter a valid last name, can NOT be left empty/blank";
        return false;
        }
    // checks validation if last name matches pattern
    else if (LastName != "") {
        if (!LastName.match(namePattern)) {
            document.getElementById("LastName-error").innerHTML = "Letters, apostrophes, and dashes only";
            return false;
    // checks validation if last name has at least 1 character
        } else if (LastName.length < 2) {
           document.getElementById("LastName-error").innerHTML = "Last name can NOT have less than 2 letters";
            return false; 
    // checks validation if last name has more than 30 characters
        } else if (LastName.length > 30) {
           document.getElementById("LastName-error").innerHTML = "Last name can NOT have more than 30 letters";
            return false;
        } else {
            document.getElementById("LastName-error").innerHTML = "";
            return true;
        }
    }
}

// validation for date of birth
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(maxDate.getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Future dates are not allowed.";
        dob.value = "";
        return false;
    } else if (date < maxDate(maxDate)) {
        document.getElementById("dob-error").innerHTML =
        "The date can NOT be over 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// validation for social security number
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    // regex social security number validate pattern from GeeksforGeeks
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML =
        "Enter a valid Social Security Number";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// Address validation
function validateAddress1() {
    const address = document.getElementById("Address1");
    if (address.value.length < 2) {
        document.getElementById("Address1-error").innerHTML = 
        "The address should contain a minimum of 2 characters";
        return false;
    } else {
        document.getElementById("Address1-error").innerHTML = "";
        return true;
    }
}

// City validation
function validateCity() {
    City = document.getElementById("City").value.trim();

    if (!City) {
        document.getElementById("City-error").innerHTML= "Select a city, cannot be blank";
        return false;
    } else {
        document.getElementById("City-error").innerHTML= "";
        return true;
    }
}

// validation for ZIP code
function validateZipcode() {
    const zipInput = document.getElementById("Zipcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("Zipcode-error").innerHTML = 
        "Enter a Zip Code";
        return false;
    }

    const zipPattern = /^\d{5}(-\d{4})?$/;
    // regex zip code validate pattern from stack overflow
    if (!zipPattern.test(zip)) {
        document.getElementById("Zipcode-error").innerHTML = 
        "Enter a valid Zip Code";
        return false;
    } else {
        document.getElementById("Zipcode-error").innerHTML = "";
        return true;
    }
}

//validate email
function validateEmail() {
    var email = document.getElementById("Email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // regex email validate pattern from MISSO resources

    if (email.length == 0) {
        document.getElementById("Email-error").innerHTML = 
        "Email can't be blank";
        return false;
    }
  
    if (!emailR.test(email)) {
        document.getElementById("Email-error").innerHTML = 
        "Enter a valid email address";
        return false;
    } else {
        document.getElementById("Email-error").innerHTML = "";
        return true;
    }
}

//format phone number to 000-000-000
function formatPhoneNumber() {
    var phoneInput = document.getElementById("PhoneNumber");
    var phoneValue = phoneInput.value.replace(/\D/g, "");
    // format phone # validate pattern from stack overflow

    if (phoneValue.length <= 3) {
        phoneInput.value = phoneValue;
    } else if (phoneValue.length < 6) {
        phoneInput.value = phoneValue.slice(0,3) + "-" + phoneValue.slice(3);
    } else {
        phoneInput.value = phoneValue.slice(0,3) + "-" + phoneValue.slice(3,6) + "-" + phoneValue.slice(6,10);
        // slice from MISSO resources
    }
}

// validate phone number
function validatePhoneNumber() {
    var phoneInput = document.getElementById("PhoneNumber");
    var phoneValue = phoneInput.value;

    if (phoneValue.length === 0) {
        document.getElementById("PhoneNumber-error").innerHTML = 
        "Phone number can NOT be blank";
        return false;
    }
   
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    // validate phone # validate pattern from stack overflow
    if (!phonePattern.test(phoneValue)) {
        document.getElementById("PhoneNumber-error").innerHTML = 
        "Enter a valid phone #";
        return false;
    } else {
        document.getElementById("PhoneNumber-error").innerHTML = "";
        return true;
    }
}

// validate User ID
function validateUsid() {
    const usid = document.getElementById("usid").value.toLowerCase();
    document.getElementById("usid").value = usid;

    if (usid.length == 0) {
        document.getElementById("usid-error").innerHTML = 
        "The User ID can NOT be left blank, MUST be filled in";
        return false;
    }

    if (!isNaN(usid.charAt(0))) {
        document.getElementById("usid-error").innerHTML = 
        "The User ID can NOT start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    // regex validate pattern from MISSO resources
    if (!regex.test(usid)) {
        document.getElementById("usid-error").innerHTML = 
        "The User ID can ONLY have letters, numbers, and an underscore OR dash. NO special characters";
        return false;
    } else if (usid.length < 5) {
        document.getElementById("usid-error").innerHTML =
        "The User ID must have a minimum of 5 characters";
        return false;
    } else if (usid.length > 30) {
        document.getElementById("usid-error").innerHTML =
        "The User ID can NOT have more than 30 characters";
        return false;
    } else {
        document.getElementById("usid-error").innerHTML = "";
        return true;
    }
}

// Password validation
function validatepsword() {
    const psword = document.getElementById("psword").value;
    const usid = document.getElementById("usid").value;
    const errorMessages = [];
    let isValid = true;
    
    if (!psword.match(/[a-z]/)) {
        errorMessages.push("Include at least one lowercase letter");
        isValid = false;
    }

    if (!psword.match(/[A-Z]/)) {
        errorMessages.push("Include at least one uppercase letter");
        isValid = false;
    }

    if (!psword.match(/[0-9]/)) {
        errorMessages.push("Include at least one number");
        isValid = false;
    }

    if (!psword.match(/[!@#$%&*\-_\.+\(\)]/)) {
        errorMessages.push("Include at least one special character");
        isValid = false;
    }

    if (usid && psword.includes(usid)) {
        errorMessages.push("User ID cannot be part of the password");
        isValid = false;
    }
    
    // Update the message spans
    document.getElementById("msg1").innerHTML = errorMessages[0] || "";
    document.getElementById("msg2").innerHTML = errorMessages[1] || "";
    document.getElementById("msg3").innerHTML = errorMessages[2] || "";
    document.getElementById("msg4").innerHTML = errorMessages[3] || "";
    
    return isValid;
}

// Confirm password validation
function confirmpsword() {
    const psword1 = document.getElementById("psword").value;
    const psword2 = document.getElementById("cpsword").value;

    if (!psword2) {
        document.getElementById("cpsword-error").innerHTML = "";
        return false;
    }
    
    if (psword1 !== psword2) {
        document.getElementById("cpsword-error").innerHTML = 
        "Both passwords do NOT match";
        return false;
    } else {
        document.getElementById("cpsword-error").innerHTML = 
        "Both passwords match!";
        return true;
    }
}

// Review Button
function reviewInput() {
    var formcontent = document.getElementById("patientSignup");
    var formElements = formcontent.elements;
    var formoutput = "<table class='output'><tr><th colspan='2'>Review your Information:</th></tr>";
    
    //some of for loop from MISSO resources
    // parts of if/else element.type code from American Express- https://online.americanexpress.com/myca/tasdsgn/us/docs/en_US_sbs/faqs/faq1.html
    for (let i = 0; i < formElements.length; i++) {
        // parts from Medium- https://medium.com/@cunhasb/parsing-html-form-data-into-fetch-body-requests-5dc981477248

        let element = formElements[i];
        
        // Skip submit/button elements and elements without names
        if (element.type === "submit" || element.type === "button" || !element.name) {
        //elements button/method from w3schools & stackoverflow
        // parts of if/else element.type code from American Express- https://online.americanexpress.com/myca/tasdsgn/us/docs/en_US_sbs/faqs/faq1.html
            continue;

        }
        // Handle different input types
        if (element.type === "checkbox") {
            if (element.checked) {
                formoutput += `<tr><td align='right'>${element.name}</td><td>&#x2713;</td></tr>`;
            }
        } 
        // parts of if/else element.type code from American Express- https://online.americanexpress.com/myca/tasdsgn/us/docs/en_US_sbs/faqs/faq1.html
        else if (element.type === "radio") {
            if (element.checked) {
                formoutput += `<tr><td align='right'>${element.name}</td><td>${element.value}</td></tr>`;
            }
        } 
        // parts of if/else element.type code from American Express- https://online.americanexpress.com/myca/tasdsgn/us/docs/en_US_sbs/faqs/faq1.html
        else if (element.value !== "") {
            // For text, email, password, etc. with values
            formoutput += `<tr><td align='right'>${element.name}</td><td>${element.value}</td></tr>`;
        }
    }
// parts of if/else element.type code from American Express- https://online.americanexpress.com/myca/tasdsgn/us/docs/en_US_sbs/faqs/faq1.html

//Alert box
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display= "none";
    }
}

// valitate for everything
function validateEverything() {
    let valid= true;

    if (!validateFirstName()) {
        valid = false;
    }
    if (!validateMiddle()) {
        valid = false;
    }
    if (!validateLastName()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZipcode()) {
        valid = false;
    }
    if (!validatePhoneNumber()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validateUsid()) {
        valid = false;
    }
    if (!validatepsword()) {
        valid = false;
    }
    if (!confirmpsword()) {
        valid = false;
    }

    if (valid) {
        document.getElementById("submit").disabled = false;
        return true;
    }
    else {
        showAlert();
        return false;
    }
}










    
