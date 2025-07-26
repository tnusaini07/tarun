document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Navbar load error:", error));
});
<script>
  const contactForm = document.getElementById('contactForm');
  const feedback = document.getElementById('contactFeedback');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (name && email && message) {
      // Simulated success (real logic would involve backend/API)
      feedback.textContent = "Thank you! Your message has been sent.";
      contactForm.reset();
    } else {
      feedback.textContent = "Please fill in all fields.";
      feedback.style.color = "#ff6b6b";
    }
  });
  <script>
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
</script>
<script>
  // Toggle mobile menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Optional: Smooth scroll for nav links
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      navLinks.classList.remove('active'); // Close on click
    });
  });
</script>

</script>
