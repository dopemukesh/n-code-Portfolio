

// Appearance mode toggler
document.getElementById("darkModeToggle").addEventListener("click", function (e) {
  e.preventDefault();
  document.documentElement.classList.toggle("dark");
  // Save user preference to localStorage
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});

// Check user preference on page load and apply theme accordingly
(function() {
  // Check if user preference is saved in localStorage
  const userTheme = localStorage.getItem('theme');
  // Check if user preference is dark, or if no preference is saved, use OS preference
  const darkModeEnabled = userTheme === 'dark' || (userTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
  // Apply dark mode if enabled
  if (darkModeEnabled) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();


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


// -----------------------------------------
// Function to update the download link
document.getElementById('blue-option').addEventListener('click', function () {
  document.getElementById('download-link').setAttribute('href', './assets/resume/mukeshyadav-frontend-dev-resume-bl.pdf');
});

document.getElementById('bw-option').addEventListener('click', function () {
  document.getElementById('download-link').setAttribute('href', './assets/resume/mukeshyadav-frontend-dev-resume-bw.pdf');
});