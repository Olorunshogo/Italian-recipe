

    
    
    // The button in the footer
function author() {
    alert("Author is:  BAMTEFA, Olorunshogo Moses ☺☺☺☺.")
}

            // SIDEMENU
    // Open Button
// {
//     const openButton = document.getElementById("open-button");
//     openButton.addEventListener("click", function() {
//         document.getElementById('side-menu').style.width = '200px';
//     });
// }

    // Close Button
// {
//     const closeButton = document.getElementById("close-button");
//     const close1 = document.getElementById("home");

//         // Close X icon
//     closeButton.addEventListener("click", function() {
//         document.getElementById('side-menu').style.width = '0';
//     });

//     // Showcase Section
//     close1.addEventListener("click", function() {
//         document.getElementById('side-menu').style.width = '0';
//     });
// }

    // LOGIN Form
// {
//     let loginForm = document.getElementById("loginForm");
//     loginForm.addEventListener("submit", (e) => {
//         e.preventDefault();

//         let email = document.getElementById("logEmail");
//         let password = document.getElementById("logPassword");

//         if (email.value == "" || password.value == "") {
//             alert("Please ensure you input a value in both fields.")
//         } else {
//             // Perform operation with form input.
//             alert("This form has been submitted, successfully.");
//             console.log(
//                 "This form has an Email of " + email.value + " and password of " + password.value + "."
//             );

//             email.value = "";
//             password.value = "";
//         }
//     });
// } 

// SIGN UP FORM
// {
//     let signupFOrm = document.getElementById("sign-up-form");
//     signupFOrm.addEventListener("click", function() {
//         document.getElementById("signinForm").submit();
//     });
// }

// FAVORITES at Each Recipe part
function myFunction(x) {
    x.classList.toggle("fa-solid");
}


// REPORT DATE
function currentDate() {
    let dateObj = new Date();
    const month   = dateObj.getUTCMonth() + 1; // months from 1-12
    // const day     = dateObj.getUTCDate();
    const year    = dateObj.getUTCFullYear();
    const dateDisplayed = month + "/" + year;
    document.getElementById("currentDate").innerHTML = dateDisplayed;
}
currentDate();

// PIE CHART
{
    let xValues = ["Calories", "Fats", "Carbohydrate", "Protein"];
    let yValues = [48, 22, 48, 18];
    let barColours = [
        "#e8c3b9", "#00aba9",
        "#2b5797", "#b91d47"
    ];

    new Chart ("reportChart", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColours,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "World Wide Wine Production 2018"
            }
        }
    });
}
