document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
  
        // Highlight active link
        const links = document.querySelectorAll('.nav-link');
        const current = window.location.pathname.split("/").pop();
        links.forEach(link => {
          if (link.getAttribute('href') === current) {
            link.classList.add('active');
          }
        });
      });
});
