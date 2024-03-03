//Greeting with simple Prompt..
// Function to greet the user
function greetUser() {
    // Prompt the user for their name
    let userName = prompt("What's your name?");

    // Check if the user entered a name
    if (userName !== null && userName !== "") {
        // If a name is provided, select the h2 element on the page
        let greetingElement = document.querySelector('h2');
        
        // Update the text content of the h2 element to display the greeting
        greetingElement.textContent = 'Hello, ' + userName + '!';
    } else {
        // If the user didn't enter a name, display an alert
        alert("Please enter a name to be greeted.");
    }
}




//Greeting with simple Inbox
// Define a function named greet.
function greet() {
    // Retrieve the value entered in the 'name' input field.
    let name = document.getElementById('name').value;

    // Construct a greeting string by concatenating text and the entered name.
    let string = "Hii " + "Mr." + name + "  - Welcome to Sandeep's Javascript Portfolio ";

    // Update the content of the element with the class 'Greet' using the constructed greeting string.
    document.getElementsByClassName('Greet')[0].innerHTML = string;
}




//Showing Current date and Time with greeting..
// Define a function named showDateTime.
function showDateTime() {
    // Get the current date and time.
    let currentDate = new Date();

    // Format the date and time.
    let formattedDate = currentDate.toLocaleDateString();
    let formattedTime = currentDate.toLocaleTimeString();

    // Determine the appropriate greeting based on the current time.
    let greeting = (currentDate.getHours() < 12) ? 'Good Morning' : (currentDate.getHours() < 18) ? 'Good Afternoon' : 'Good Evening';

    // Update the content of the element with the class 'time' using the formatted information.
    document.querySelector('.time').innerHTML = `<p>${greeting}!<br>Current Date: ${formattedDate}<br>Current Time: ${formattedTime}</p>`;
}



// Function to change box background
function MyFunction() {
    document.getElementById("box").style.background = "#fff";  // Set box background to white;
}

function MyFunction2() {
    document.getElementById("box").style.background = "#f44336";
}


function MyFunction3() {

    document.getElementById("box").style.background = "#000";

}

//Function for Checking Eligiblity to drink behalf of Age..

// Define a function named checkAge.
function checkAge() {
    // Get the value of the age input field.
    let x = document.getElementById("ageInput").value;

    // Check if the entered value is empty or not a number.
    if (x === "" || isNaN(x)) {
        // Display a message if the entered age is invalid.
        document.getElementById("result").innerHTML = "Please enter a valid age.";
    } else {
        // Convert the input value to an integer.
        x = parseInt(x);

        // Check if the age is 18 or below.
        if (x <= 18) {
            // Display a message if the person is not old enough to drink alcohol.
            document.getElementById("result").innerHTML = "You are not old enough to drink alcohol.";
        } else if (x >= 50) {
            // Display an alert if the person is 50 or older.
            alert("Hurray!! You can drink anything.");
        } else {
            // Display a message if the person is eligible to drink alcohol.
            document.getElementById("result").innerHTML = "Subject is Eligible to drink alcohol.";
        }
    }
}


// function for a Simple calculator..
// Define a function named cal.
function cal() {
    // Retrieve the values entered in the 'first', 'second', and 'ope' input fields.
    let opr1 = document.getElementById('first').value;
    let opr2 = document.getElementById('second').value;
    let ope = document.getElementById('ope').value;

    // Declare a variable to store the result of the calculation.
    let res;

    // Perform different calculations based on the selected operator.
    if (ope == '+') {
        res = parseInt(opr1) + parseInt(opr2);
    } else if (ope == '-') {
        res = parseInt(opr1) - parseInt(opr2);
    } else if (ope == '*') {
        res = parseInt(opr1) * parseInt(opr2);
    } else if (ope == '/') {
        res = parseInt(opr1) / parseInt(opr2);
    }

    // Update the value element with id 'res' to display the calculated result.
    document.getElementById('res').value = res;

    // alert(res); // Checked if the code worked or not.
}


