// document.addEventListener("DOMContentLoaded", () => {
//   // Mobile Navigation Toggle
//   const hamburger = document.querySelector(".hamburger")
//   const navLinks = document.querySelector(".nav-links")
//   const navLinksItems = document.querySelectorAll(".nav-links a")

//   hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active")
//     navLinks.classList.toggle("active")
//   })

//   // Close mobile menu when clicking on a nav link
//   navLinksItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       hamburger.classList.remove("active")
//       navLinks.classList.remove("active")
//     })
//   })

//   // Active navigation link based on scroll position
//   const sections = document.querySelectorAll("section")
//   const navItems = document.querySelectorAll(".nav-links a")

//   window.addEventListener("scroll", () => {
//     let current = ""

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop
//       const sectionHeight = section.clientHeight

//       if (pageYOffset >= sectionTop - 150) {
//         current = section.getAttribute("id")
//       }
//     })

//     navItems.forEach((item) => {
//       item.classList.remove("active")
//       if (item.getAttribute("href").substring(1) === current) {
//         item.classList.add("active")
//       }
//     })
//   })

//   // Scroll animation for elements
//   const fadeInElements = document.querySelectorAll(".project-card, .skill-card, .timeline-item, .certification-card")

//   const fadeInOptions = {
//     threshold: 0.3,
//     rootMargin: "0px 0px -100px 0px",
//   }

//   const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
//     entries.forEach((entry) => {
//       if (!entry.isIntersecting) {
//         return
//       } else {
//         entry.target.style.opacity = 1
//         entry.target.style.transform = "translateY(0)"
//         fadeInObserver.unobserve(entry.target)
//       }
//     })
//   }, fadeInOptions)

//   fadeInElements.forEach((element) => {
//     element.style.opacity = 0
//     element.style.transform = "translateY(20px)"
//     element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
//     fadeInObserver.observe(element)
//   })

//   // Contact form submission
//   const contactForm = document.getElementById("contactForm")

//   if (contactForm) {
//     contactForm.addEventListener("submit", (e) => {
//       e.preventDefault()

//       // Get form values
//       const name = document.getElementById("name").value
//       const email = document.getElementById("email").value
//       const subject = document.getElementById("subject").value
//       const message = document.getElementById("message").value

//       // Here you would typically send the form data to a server
//       // For now, we'll just show an alert
//       alert(`Thank you for your message, ${name}! I'll get back to you soon.`)

//       // Reset the form
//       contactForm.reset()
//     })
//   }
// })



document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links a");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking on a nav link
  navLinksItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Active navigation link based on scroll position
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href").substring(1) === current) {
        item.classList.add("active");
      }
    });
  });

  // Scroll animation for elements
  const fadeInElements = document.querySelectorAll(".project-card, .skill-card, .timeline-item, .certification-card");

  const fadeInOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px",
  };

  const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, fadeInOptions);

  fadeInElements.forEach((element) => {
    element.style.opacity = 0;
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    fadeInObserver.observe(element);
  });

  // Contact form submission
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the form data to a server
      // For now, we'll just show an alert
      alert(`Thank you for your message, ${name}! I'll get back to you soon.`);

      // Reset the form
      contactForm.reset();
    });
  }
});

