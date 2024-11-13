const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const body = document.body;
const backdrop = document.querySelector('.backdrop');
const homeSection = document.getElementById('home'); 

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



  document.getElementById('toggleButton').addEventListener('click', function () {
    const extraVideos = document.querySelectorAll('.extra-video');
    const button = document.getElementById('toggleButton');

    // Toggle visibility of extra videos
    extraVideos.forEach(video => {
      video.classList.toggle('hidden');
    });

    // Toggle button text between "View More" and "View Less"
    if (button.textContent === 'View More') {
      button.textContent = 'View More';
    } else {
      button.textContent = 'View Less';
    }
  });
  
  document.getElementById('currentYear').textContent = new Date().getFullYear();