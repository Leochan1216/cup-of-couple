//variables
const menuToggle = document.getElementById('menuToggle');
const dropdown = document.getElementById('dropdown');

dropdown.style.display = 'none';
// click event listener to menu toggle
menuToggle.addEventListener('click', () => {
    // Toggle the dropdown's visibility
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block'; // Show the dropdown
    } else {
        dropdown.style.display = 'none'; // Hide the dropdown
    }
});