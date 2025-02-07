let slide = document.querySelectorAll(".patientcard");
let card = document.querySelectorAll(".card");
let search = document.querySelector('.search-box');
let navbar = document.querySelector('.navbar');
let user = document.querySelector('.user');

let count = 0;

document.querySelector('#seacrh-icon').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    user.classList.remove('active');
   
    
}
document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
}


document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
}

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
})

function myfun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
}
setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myfun()
}, 2000)






// Optional: Add JavaScript to dynamically log clicks for analytics
const links = document.querySelectorAll('.social-media a');
links.forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Navigated to: ${link.href}`);
    });
});
// script.js
document.getElementById('read-more-btn').addEventListener('click', function () {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; // Show the pop-up
  });
  
  document.getElementById('close-btn').addEventListener('click', function () {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Hide the pop-up
  });

// script.js

// script.js

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
  
  // Scroll event listener to trigger the animation
  window.addEventListener('scroll', () => {
    const popup = document.querySelector('.card');
    if (isInViewport(popup)) {
      popup.classList.add('visible'); // Trigger the animation
    }
  });
  





















function changeBorderColor() {
    const box = document.getElementById("colorful-box");
  
    // Array of colors to choose from
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  
    // Generate a random index from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Change the border color to a random color
    at.style.borderColor = randomColor;
  }
  
 
 







// Script to show more information when the button is clicked
document.getElementById('showMoreBtn').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'Learn More';
    }
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (!name || !email || !message) {
        document.getElementById('error').style.display = 'block';  // Show error message
    } else {
        document.getElementById('error').style.display = 'none';  // Hide error message
        alert('Thank you for your message! We will get back to you soon.');
        // Optionally, you can send the form data to a server here.
    }
});














