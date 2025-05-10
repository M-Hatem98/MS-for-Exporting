let navLinks = document.querySelectorAll('.nav-link')

for(let i =0; i< navLinks.length ; i++) {
navLinks[i].addEventListener('click' , function(e){
    for(let i =0 ; i<navLinks.length; i++) {
        navLinks[i].classList.remove('active')
    }
        e.target.classList.add('active')
        
    })
    }