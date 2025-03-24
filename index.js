//DROPDOWN MENU
//variables
const menuToggle = document.getElementById('menuToggle');
const dropdown = document.getElementById('dropdown');

dropdown.style.display = 'none';
// click event listener to menu toggle
menuToggle.addEventListener('click', () => {
    // toggle the dropdown's visibility
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block'; // show the dropdown
    } else {
        dropdown.style.display = 'none'; // hide the dropdown
    }
});



//FEATURED ARTICLES
//variables
// gallery container
const gallery = document.querySelector('.gallery');
const articles = Array.from(gallery.children);
 

// clone and loop
const clonedArticles = articles.map(article => article.cloneNode(true));
clonedArticles.forEach(clone => gallery.appendChild(clone));

// scroll amount and interval
const scrollAmount = 300; 
const scrollPause = 3000;

// function to scroll 
function scrollWithPause() {
    gallery.scrollBy({
        left: scrollAmount, 
        behavior: "smooth" 
    });

    // reset
    if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
        // wait for scroll to complete
        setTimeout(() => {
            gallery.scrollLeft = gallery.scrollWidth / 2 - gallery.clientWidth; 
        }, scrollPause / 2); 
    }
}

// scroll and pause
let scrollInterval = setInterval(scrollWithPause, scrollPause);




//REVEAL HIDDEN LIST ITEMS (bag, access)

// reveal dropdown items
function revealDropdownItems(items) {
    items.forEach(item => {
        item.classList.add('revealed');
    });
}

// hide dropdown items
function hideDropdownItems(items) {
    items.forEach(item => {
        item.classList.remove('revealed'); 
    });
}

// Select the dropdown items
const dropdownItems = document.querySelectorAll('.dropdown .bag, .dropdown .access');

// event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        revealDropdownItems(dropdownItems); 
    } else {
        hideDropdownItems(dropdownItems); 
    }
});

//MOVING THE HEADER TO THE LEFT

// header element
const header = document.querySelector('header');

// event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) { 
        header.classList.add('moved'); 
    } else {
        header.classList.remove('moved'); 
    }
});

//MOVING THE NAV BAR UP

// nav element
const nav = document.querySelector('nav');

// event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) { 
        nav.classList.add('scrolled'); 
    } else {
        nav.classList.remove('scrolled'); 
    }
});

