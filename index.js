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
