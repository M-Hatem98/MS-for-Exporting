let navLinks = document.querySelectorAll('.nav-link')

for(let i =0; i< navLinks.length ; i++) {
navLinks[i].addEventListener('click' , function(e){
    for(let i =0 ; i<navLinks.length; i++) {
        navLinks[i].classList.remove('active')
    }
        e.target.classList.add('active')
        
    })
    }


gsap.registerPlugin(ScrollTrigger);

let home = document.querySelector('.home')
if(home) {

    gsap.from(".testimonial", {
        scrollTrigger: {
    trigger: ".testimonial",
    start: "top 80%", // when top of element hits 80% of viewport
    toggleActions: "play none none none"
  },
  opacity: 0,
//   y: 100,            // start lower and slide up
  duration: 1.2,
  stagger: 0.3,
  ease: "power2.out"
});

gsap.from(".value-box", {
    scrollTrigger: {
        trigger: ".value-box",
        start: "top 80%", // when top of element hits 80% of viewport
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 100,            // start lower and slide up
    duration: 1.2,
    stagger: 0.3,
    ease: "power2.out"
});
}
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".card",
        start: "top 80%", // when top of element hits 80% of viewport
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 100,            // start lower and slide up
    duration: 1.2,
    stagger: 0.3,
    ease: "power2.out"
    });
