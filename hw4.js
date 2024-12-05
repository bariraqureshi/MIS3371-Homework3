/*
   Name: Barira Qureshi
    Name of File: hw4.js
    Date Created: 2024-12-01
    Date Updated: 
    Purpose: Homework 4 JS
*/
//Dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code
let slider = document.getElementById("range")
    let output = document.getElementById("range-slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

//first name validation js
function validateFname() {
    const fname = document.getElementById("fname").value.trim();
    const namePattern = /^[a-zA-Z'-]+$/;

    if (!fname) {
        document.getElementById("fname-error").innerHTML = "First name cannot be empty.";
        return false;
    }
    if (!namePattern.test(fname)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    }
    if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name must be at least 2 characters.";
        return false;
    }
    if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot exceed 30 characters.";
        return false;
    }
    document.getElementById("fname-error").innerHTML = "";
    return true;
}

//middle initial validation js
function validateMinitial(){
    minitial = document.getElementById("minitial").value;
    var namePattern = /^[A-Z]$/; 

    //makes middle initial be upper case
    minitial = minitial.toUpperCase();
    document.getElementById("minitial").value = minitial;

    //checks to make sure initial is only 1 character
    if (!minitial.match(namePattern)) { //checks if minitial matches pattern
        document.getElementById("minitial-error").innerHTML = "Middle initial must be a single uppercase letter.";
        return false;
    } else {
        document.getElementById("minitial-error").innerHTML = "";
        return true; 
    }
}

//last name validation js
function validateLname(){
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/; 
    //checks if there is a value input for last name 
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name cannot be empty."; 
        return false; 
    } else if (lname != "") {
    if (!lname.match(namePattern)) { //checks if lname matches pattern
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) { //checks that name is at least 1 character 
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (lname.length > 30) { //checks that name is less than 30 characters
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true; 
    }
}
}

//dob javascript validation  
    function validateDob() {
        dob=document.getElementById("dob");
        const maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future."
        dob.value=""; 
        return false;
    } else if(date < new Date(maxDate)) { 
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago."
        dob.value=""; 
        return false; 
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true; 
    }   
} 
//ssn javascript validation 
function validateSsn(){
    const ssn = document.getElementById("ssn").value;

    //ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number.";
        return false;
        } else {
        document.getElementById("ssn-error"). innerHTML = "";
        return true;
        }
    }
    //address1 validation javascript
    function validateAddress1(){
        var ad1 = document.getElementById("address1").value;
        console.log(ad1);
        console.log(ad1.length);

        if(ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Please enter something on address line"; 
        return false; 
        } else {
        document.getElementById("address1-error").innerHTML = ""; 
        return true;
        }

    }

    //city validation javascript 
    function validateCity(){
        city = document.getElementById("city").value.trim();

        if (!city){
            document.getElementById("city-error").innerHTML = "City cannot be left blank. ";
            return false; 
        } else {
            document.getElementById("city-error").innerHTML = "";
            return true; 
        }
    }

    //zipcode validation javascript
    function validateZcode() {
        const zipInput = document.getElementById("zcode");
        let zip = zipInput.value.replace(/[^\d-]/g,"")// removes any non-number and non-dash characters

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = "Zip Code cannot be left blank.";
        return false;
    }
    
    if (zip.length > 5) {
    zip = zip.slice(0,5); //removes all digits after first 5
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true; 

    }
   //email validation in javascript
   function validateEmail() {
    let email= document.getElementById ("email").value;
    var EmailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex pattern for email

    if (email =="") {
    document.getElementById ("email-error").innerHTML = "Email cannot be empty.";
    return false;

    } else if (!email.match(EmailR)){
    document.getElementById ("email-error").innerHTML = "Please enter a valid email address." ;
    return false;

    } else {
    document.getElementById ("email-error").innerHTML = ""; 
    return true;
    }
 }

 //phone number validation in javascript 
 function validatePnum () {
    const phoneInput = document.getElementById("pnum")
    const phone = phoneInput.value.replace(/\D/g,""); //removes all non-number characters

    if (phone.length != 10) {
    document.getElementById("pnum-error").innerHTML="Phone number cannot be left black. "
    return false; 
    }

    const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6) 
    phoneInput.value = formattedPhone;
    document.getElementById("pnum-error").innerHTML="";
    return true; 
 }

//username validation javascript 
function validateUname() {
    uname = document.getElementById("uname").value;

    // makes username lowercase 
    uname = uname.toLowerCase();

    //display lowercase username 
    document.getElementById("uname").value = uname;

    if (uname.length == 0 ) {
        document.getElementById("uname-error").innerHTML = "Username field cannot be empty.";
        return false;
    }
    //checks that username doesn't start with a number
    if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error").innerHTML = "Username cannot start with a number";
        return false;
    }

    //checks that username is only consisted of letters, numbers, or underscores
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(uname)) {
        document.getElementById("uname-error").innerHTML=" Username only contains letters, numbers, and underscores.";
        return false;
    } else if (uname.length < 5) {
        document.getElementById("uname-error").innerHTML = "Username must be a t least 5 characters.";
        return false;
    }
        
    //checks that username does not have 30+ characters
       else if(uname.length > 30) {
        document.getElementById("uname-error").innerHTML = "Username cannot exceed 30 characters.";
        return false;
    }   else { //if all the above checks then username is valid
        document.getElementById("uname-error").innerHTML = "";
        return true;
    }
}


 //password javascript validation 
 function validatePassword() {
    const pass = document.getElementById("pass").value; 
    const uname = document.getElementById("uname").value; 

    //sets up and initializes array 
    const errorMessage = [];

    //check for lowercase letters
    if (!pass.match(/[a-z]/)){
        errorMessage.push("Enter at least one lowercase letter."); 
    }

    //checks for uppercase letters
    if (!pass.match(/[A-Z]/)){
        errorMessage.push("Enter at least one uppercase letter.");
    }

    //check for numbers 
    if (!pass.match(/[0-9]/)){
        errorMessage.push("Enter at least one number.");
    }

    //check for special characters  
    if (!pass.match(/[!@#\$%\^&*\-_\.\+\(\)]/)) {
        errorMessage.push("Enter at least one special character.");
    }

    //checks that username is not in the password  
    if (pass==uname || pass.includes(uname)) {
        errorMessage.push("Password cannot contain username.");
    }

    //displays error messages if there any errors
    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");
 }

//confirm javascript for password validation 
function confirmPassword(){
    pass1 = document.getElementById("pass").value;
    pass2 = document.getElementById("pass_con").value;

    if (pass1 !== pass2) {
        document.getElementById("pass2-error").innerHTML ="Password do not match.";
        return false; 
    } else {
        document.getElementById("pass2-error").innerHTML ="Password match.";
        return true; 
    }
} 

//re-display user input back to user (review button)
function reviewInput(){
    var formcontent = document.getElementById("signup");
    var formoutput= "";
    var i;
    formoutput = "<table class = 'output'><th colspan = '3'> Your Information: </th>";
    for (i=0; i< formcontent.length; i++) {
        if (formcontent.elements[i].value!= "") {
            datatype = formcontent.elements[i].type;
            switch (datatype){
                case"checkbox":
                    if (formcontent.elements[i].checked){
                        formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class = 'outputdata'>&#x2713; </td></tr>";
                }
                    break;
                case "radio": 
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr> <td align='right'" + formcontent.elements[i].name + "</td>";
                        formoutput = "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break; 
                case "button":
                case "submit":
                case "reset":
                    break; 
                default:
                    formoutput = formoutput + "<tr><td align= 'right' >" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class = 'outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            
            }
        }
    }
    if (formoutput.length > 0){
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
} 

//remove user input 
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
 }

 //shows alert box when needed js code
 function showAlert() {
    var alertBox = document.getElementById("alert-box"); 
    var closeAlert = document.getElementById("close-box");

    alertBox.style.display = "block"; 
    closeAlert.onclick = function () {
        alertBox.style.display = "none"; 
    }
 }

 //validate everything on form 
 function validateInput() {
    let valid = true; 

    if (!validateFname()); {
        valid = false; 
    }
    if (!validateMinitial()); {
        valid = false; 
    }
    if (!validateLname()); {
        valid = false; 
    }
    if (!validateDob()); {
        valid = false; 
    }
    if (!validateSsn()); {
        valid = false; 
    }
    if (!validateAddress1()); {
        valid = false; 
    }
    if (!validateCity()); {
        valid = false; 
    }
    if (!validateZcode()); {
        valid = false; 
    }
    if (!validateEmail()); {
        valid = false; 
    }
    if (!validatePnum()); {
        valid = false; 
    }
    if (!validateUname()); {
        valid = false; 
    }
    if (!validatePassword()); {
        valid = false; 
    }
    if (!confirmPassword()); {
        valid = false; 
    }
    if (valid) {
        document.getElementById("submit").disabled = false; 
    } else {
        showAlert();
    }

 }

 /* cookie for remembering information on form*/ 
 function setCookie (name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays*24*60*60*1000));
    var expires = "expires=" + day.toUTCString(); 
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
 }

 function getCookie (name) {
    var cookieName = name + "="; 
    var cookies = document.cookie.split(';'); 

    for (var i = 0; i < cookies.length; i++){
        var cookie = cookies[i].trim();
        while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
        }
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length); 
        }
    return " ";
 }
 

 var inputs = [
   {id: "fname", cookieName: "firstName"}, 
   {id: "minitial", cookieName: "midInitial"}, 
   {id: "lname", cookieName: "lastName"}, 
   {id: "dob", cookieName: "dob"}, 
   {id: "ssn", cookieName: "ssn"}, 
   {id: "address1", cookieName: "address"}, 
   {id: "address2", cookieName: "address2"}, 
   {id: "city", cookieName: "city"}, 
   {id: "zcode", cookieName: "zipcode"}, 
   {id: "email", cookieName: "email"}, 
   {id: "pnum", cookieName: "phoneNumber"}, 
   {id: "uname", cookieName: "userName"}, 
 ]

 inputs.forEach(function(input) {
    var inputElement = document.getElementById(input.id);

    // Ensure inputElement exists before performing operations
    if (inputElement) {
        // Prefill input fields with value from the cookie
        var cookieValue = getCookie(input.cookieName); // Fixed typo: `input.cookiename` -> `input.cookieName`
        if (cookieValue !== "") { // Correct comparison to check for empty strings
            inputElement.value = cookieValue;
        }

        // Set a cookie with the input value when the input field changes
        inputElement.addEventListener("input", function() {
            setCookie(input.cookieName, inputElement.value, 30); 
        });
    } else {
        console.warn(`Input element with ID "${input.id}" not found.`);
    }
});

 //greet the user with name and message if the cookie is set 

 var firstName = getCookie("firstName");
 if (firstName && firstName.trim() !== "") {
     document.getElementById("welcome1").innerHTML = "Welcome Back, " + firstName + "! </br>";
     document.getElementById("welcome2").innerHTML =
         "<a href='#' id='new-user'> Not " + firstName + "? Click here to start a new form. </a>";
 
     document.getElementById("new-user").addEventListener("click", function() {
         var inputs = [
             { cookieName: "firstName" },
             { cookieName: "lastName" },
             // Add other cookies here
         ];
         inputs.forEach(function(input) {
             setCookie(input.cookieName, "", -1);
         });
         location.reload();
     });
 }
 

