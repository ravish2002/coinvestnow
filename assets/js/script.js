'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

document.querySelector('.message-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission to the server

  const button = document.getElementById('submit-button');
  const notification = document.getElementById('notification');

  // Set button to loading state
  button.textContent = 'Sending...';
  button.classList.add('loading');

  // Simulate a delay (1 second)
  setTimeout(() => {
    // Restore button state
    button.textContent = 'Get Started';
    button.classList.remove('loading');

    // Show the notification
    notification.classList.remove('hidden');
    notification.classList.add('visible');

    // Hide the notification after 2 seconds
    setTimeout(() => {
      notification.classList.remove('visible');
      notification.classList.add('hidden');
    }, 2000);
  }, 1000);
});


/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);


document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    // Toggle active class
    question.classList.toggle('active');
    
    // Toggle the display of the answer
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);