// Select the navbar div
const navbar = document.querySelector(".navbar");

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Set the URL of the HTML file to load
xhr.open("GET", "../../modules/navbar.html");

// Define what happens when the file is loaded
xhr.onload = function() {
  // Check that the request was successful
  if (xhr.status === 200) {
    // Extract the HTML content from the response
    const navbarHtml = xhr.responseText;

    // Insert the HTML into the navbar div
    navbar.insertAdjacentHTML("afterbegin", navbarHtml);

    // Load the navBar.js script
    const script = document.createElement("script");
    script.src = "../scripts/java/navBar.js";
    document.head.appendChild(script);

    // Print a message to the console
    console.log("navbar loaded");
  }
};

// Send the request to load the HTML file
xhr.send();
