

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

