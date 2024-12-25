document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll("#filter_button li");
    const gridItems = document.querySelectorAll(".portfolio_subcontent");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", function() {
        const filterValue = this.getAttribute("data-filter");
  
        // Remove 'current' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("current"));
        // Add 'current' class to the clicked button
        this.classList.add("current");
  
        gridItems.forEach(item => {
          // Check if the item has the specified filter class
          if (filterValue === "*" || item.classList.contains(filterValue)) {
            item.style.display = "block"; // Show items matching the filter
          } else {
            item.style.display = "none"; // Hide items not matching the filter
          }
        });
      });
    });
  });

  function toggleMenu() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show'); // Close the menu
    }
}
  
//   window.addEventListener("scroll", function () {
//     var navbar = document.querySelector(".navbar");
//     navbar.classList.toggle("scrolled", window.scrollY > 50);
// });
  // function toggleMenu() {
  //   const menu = document.querySelector("#navbarNav"); // Target the navbar-collapse div
  //   const icon = document.querySelector(".hamburger-icon"); // Target the button with the hamburger icon
  
  //   menu.classList.toggle("open"); // Toggle the Bootstrap 'show' class to collapse/expand the menu
  //   icon.classList.toggle("open"); // Optional: Add an open class to style the hamburger icon differently
  // }
  
// view more
document.getElementById('view-more-btn').addEventListener('click', function() {
    var moreProjects = document.getElementById('more-projects');
    if (moreProjects.style.display === 'none') {
      moreProjects.style.display = 'contents';
      this.innerText = 'View Less';
    } else {
      moreProjects.style.display = 'none';
      this.innerText = 'View More';
    }
  });

// 
