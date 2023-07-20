

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
      entry.target.classList.add('popping');
    } else {
      entry.target.classList.remove('popping');
    }
  });
});


poppingElements.forEach(element => {
  observer2.observe(element);
});


