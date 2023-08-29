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




/*
 * Start Helper Functions
 * 
*/
//Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("a");
const activeSection = document.querySelector(".active");
const navItems = document.querySelectorAll("#navbar__list li");

//NAV BUILDING
//for each section, push data-nav to nav bar sectionClass.dataset.nav
for (let i = 0; i < sections.length; i++) {
  //create a link 
    const link = document.createElement('a');
    const linkName = `#section${[i+1]}`;
    link.setAttribute('href',linkName);
    const item = document.createElement('li');
    const name = document.querySelectorAll('section')[i].dataset.nav;
      // Create a text node with the name and append it to the navigation item
    const itemName = document.createTextNode(name);
    item.appendChild(itemName);
    item.classList.add('menu__link');
    //append item to link
    link.appendChild(item);
     // Append the navigation item to the navbar
    navbar.appendChild(link);
};


// Add class 'active' to section when near top of viewport
function makeActive() { sections.forEach(section => {
  if (isInViewport(section)){
    section.classList.add("active");
    navLinks.forEach(navLink => {
      if(navLink.getAttribute('href') == section.getAttribute('id')){
        navLink.classList.add("activeLink");
      }
      else{
        navLink.classList.remove('activeLink')
      }
    })
  }
  else{
    section.classList.remove("active");
  }
})
};

//call function when user scrolls
document.addEventListener("scroll", makeActive);

//HIGHLIGHT NAVBAR LINK WHEN SECTION IS ACTIVE

//Scroll to section
navItems.forEach(navItem => {
  navItem.addEventListener("click", function(event) {
    event.preventDefault();
    const targetSectionId = navItem.getAttribute("href");
    document.querySelector(targetSectionId).scrollIntoView({ behavior: "smooth" });
    makeActive();
  });
});

