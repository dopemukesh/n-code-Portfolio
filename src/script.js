

// -----------------------------------------
// apearance mode toggler
document
  .getElementById("darkModeToggle")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark");
  });

// JavaScript to toggle the sidebar
document.getElementById("menuIcon").addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("transform");
  sidebar.classList.toggle("translate-x-0");
  sidebar.classList.toggle("-translate-x-full");
});

// JavaScript to handle the active link state
const links = document.querySelectorAll("#sidebar a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the custom-active class from all links
    links.forEach((link) => link.classList.remove("custom-active"));
    // Add the custom-active class to the clicked link
    this.classList.add("custom-active");
  });
});

// Handle touch events to remove hover effect after tap
// link.addEventListener("touchend", function () {
//   // Simulate a click to trigger the active class change
//   this.click();
// });



// -----------------------------------------
// Function to update the download link
document.getElementById('blue-option').addEventListener('click', function () {
  document.getElementById('download-link').setAttribute('href', '.assets/resume/mukeshyadav-frontend-dev-resume-bl.pdf');
});

document.getElementById('bw-option').addEventListener('click', function () {
  document.getElementById('download-link').setAttribute('href', '.assets/resume/mukeshyadav-frontend-dev-resume-bw.pdf');
});