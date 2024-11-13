const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const body = document.body;
const backdrop = document.querySelector('.backdrop');
const homeSection = document.getElementById('home');
const toggleButton = document.getElementById('toggleButton');
const currentYearElement = document.getElementById('currentYear');

// Function to handle toggling the transparency effect
const toggleTransparentText = () => {
  homeSection.classList.toggle('transparent-text');
};

// Toggle the menu on hamburger click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('menu-open'); 
  backdrop.classList.toggle('active'); 

  // Toggle the transparent text effect
  toggleTransparentText();
});

// Close the menu and backdrop when clicking outside of it
window.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && !backdrop.contains(e.target)) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    body.classList.remove('menu-open');
    backdrop.classList.remove('active');

    // Remove the transparent text effect when closing the menu
    homeSection.classList.remove('transparent-text');
  }
});

// Remove the transparency effect when navigating to other sections and close the menu
document.querySelectorAll('nav ul li a').forEach(item => {
  item.addEventListener('click', () => {
    homeSection.classList.remove('transparent-text'); // Reset transparency when navigating

    // Close the menu when a link is clicked
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    body.classList.remove('menu-open');
    backdrop.classList.remove('active');
  });
});

// Toggle extra videos visibility
toggleButton.addEventListener('click', function () {
  const extraVideos = document.querySelectorAll('.extra-video');

  // Toggle visibility of extra videos
  extraVideos.forEach(video => {
    video.classList.toggle('hidden');
  });

  // Toggle button text between "View More" and "View Less"
  toggleButton.textContent = toggleButton.textContent === 'View More' ? 'View' : 'View More';
});

// Set current year dynamically
currentYearElement.textContent = new Date().getFullYear();

// Geolocation functionality
function toggleLocationFields(isHouseCall) {
  const locationFields = document.getElementById('locationFields');
  
  if (isHouseCall) {
    locationFields.style.display = 'block'; // Show location fields for house call
  } else {
    locationFields.style.display = 'none'; // Hide location fields if no house call
  }
}

// Geolocation functionality
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("province").value = data.address.state || "";
      document.getElementById("city").value = data.address.city || data.address.town || data.address.village || "";
    })
    .catch(error => console.error('Error:', error));
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}