

var sections = [];
var currentScroll = -1;



document.querySelectorAll("section").forEach(element => {
    sections.push(element);
});




document.querySelector(".scroller-up").addEventListener("click", ()=>{
    if (currentScroll > -1) {
        currentScroll--;
    } else{
        currentScroll = sections.length-2;

    }
    sections[currentScroll+1].scrollIntoView({ behavior: 'smooth' });

});

document.querySelector(".scroller-down").addEventListener("click", ()=>{
    if (currentScroll < sections.length-2) {
        currentScroll++;
    } else{
        currentScroll = -1;
    }
    sections[currentScroll+1].scrollIntoView({ behavior: 'smooth' });

});

const elements = document.querySelectorAll('.animate-me');

const poppingElements = document.querySelectorAll('.pop-me');


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('entering');
    } else {
      entry.target.classList.remove('entering');
    }
  });
});

elements.forEach(element => {
  observer.observe(element);
});


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('popping');
      }, 500);
    } else {
      setTimeout(() => {
        entry.target.classList.add('popping');
      }, 500);
    }
  });
});


poppingElements.forEach(element => {
  observer2.observe(element);
});

// Initialize EmailJS with your User ID
emailjs.init("uPQB2vUvFUlp3ktNZ");

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  // Send email using EmailJS API/
  emailjs.send("service_arcwefm", "template_hjfr713", templateParams)
    .then(function(response) {
      alert("Email sent successfully!");
    }, function(error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email. Please try again later.");
    });
});

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fillPercentage = entry.target.querySelector('.skill-bar-fill').getAttribute('data-fill');
      entry.target.querySelector('.skill-bar-fill').style.width = fillPercentage;
    } else {
      entry.target.querySelector('.skill-bar-fill').style.width = '0%';
    }
  });
});

const skillContainers = document.querySelectorAll('.skill-container');
skillContainers.forEach(container => {
  observer3.observe(container);
});