document.addEventListener("DOMContentLoaded", () => {
    
    // Function to update active navigation link
    function updateActiveNavLink(path) {
        document.querySelectorAll('.navbar a[data-nav]').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `/${path}`) {
          link.classList.add('active');
        }
      });
    }

    function runPageScripts() {
        // Show profile picture with fade effect
        const profilePic = document.querySelector('.profile-pic');
        if (profilePic) {
          // Trigger reflow to restart CSS animation
          requestAnimationFrame(() => {
            profilePic.classList.add('visible');
          });
        }
    }
  
    // Function to load content dynamically based on the URL path
    function loadPageContent(path) {
      // If the path is empty (just /), load 'home.html'
      if (path === '' || path === '/') {
        path = 'home';
      }
      const contentContainer = document.getElementById('page-content');
      // Assuming the HTML files named as 'home.html', 'work.html', etc., inside a 'pages' folder
      fetch(`pages/${path}.html`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Page not found');
          }
          return response.text();
        })
        .then(html => {
          contentContainer.innerHTML = html;
          updateActiveNavLink(path);
          runPageScripts();
        })
        .catch(err => {
          // Load 404 page content
          fetch('pages/404.html')
          .then(response => response.text())
          .then(html => {
            contentContainer.innerHTML = html;
            updateActiveNavLink(''); // remove highlight from any nav link
          });
          console.error(`Failed to load ${path}:`, err);
        });
    }
  
    // Listen for changes in the history (when the user clicks back/forward in the browser)
    window.addEventListener('popstate', () => {
      const path = location.pathname.replace('/', '') || 'home';
      loadPageContent(path);
    });
  
    // Attach click event to navbar links
    document.body.addEventListener('click', (e) => {
      const link = e.target.closest("a[data-nav]");
      if (link) {
        e.preventDefault();
        const path = link.getAttribute('href').replace('/', ''); // Remove the '/' from the href
        window.history.pushState({ path }, '', `/${path}`);  // Update the URL without reloading the page
        loadPageContent(path);

        const menuToggle = document.getElementById('menu-toggle');
  
        // Close the mobile menu after a link is clicked
        if (menuToggle.checked) {
          menuToggle.checked = false;
        }
      }
    });
  
    // Initial load based on current URL path (check if path is empty or just '/')
    const initialPath = location.pathname.replace('/', '') || 'home';
    loadPageContent(initialPath);
  });
  