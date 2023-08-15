/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
/*
const navbar = document.querySelector(".navbar__list");
const sectionClass = document.querySelectorAll(".landing__container");
*/
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navbar = document.querySelector("#navbar__list");
const sectionClass = document.querySelectorAll(".landing__container");
//for each section, push data-nav to nav bar sectionClass.dataset.nav

for (let i = 0; i < sectionClass.length; i++) {
    const item = document.createElement('li');
    const name = sectionClass[i].dataset.nav;
      // Create a text node with the name and append it to the navigation item
    const itemName = document.createTextNode(name);
    item.appendChild(itemName);
     // Append the navigation item to the navbar
    navbar.appendChild(item);
};


// Add class 'active' to section when near top of viewport
//if id is near top of viewport, add class active, else remove class active 

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


