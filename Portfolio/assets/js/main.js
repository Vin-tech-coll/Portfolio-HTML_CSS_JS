// NAVIGATION BAR FUNCTION BLUR EFFECT
function myMenuFunction() {
    const x = document.getElementById('myNavMenu');
    if (x.className === 'nav-menu') {
        x.className += ' responsive';
        document.body.classList.add('blur');
    } else {
        x.className = 'nav-menu';
        document.body.classList.remove('blur');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav_link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
        const x = document.getElementById('myNavMenu');
        x.className = 'nav-menu';
        document.body.classList.remove('blur');
        });
    });
});


//TYPING EFFECT ON THE TYPEDTEXT
const typingEffect = new Typed(".typedText",{
    strings: ["A Designer","A Developer","A Logic Thinker", "A Problem-Solver"],
    loop: true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000
})

//SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

//HOME
sr.reveal('.feature-text-card',{})
sr.reveal('.feature-name', {delay:100});
sr.reveal('.feature-text-info', {delay:200});
sr.reveal('.feature-text-btn', {delay:200});
sr.reveal('.social_icons', {delay:200});
sr.reveal('.feature-image', {delay:300});

//ABOUT INFO & CONTACT INFO
const srLeft = ScrollReveal({
    origin:'left',
    distance:'80px',
    duration:2000,
    reset:true
});

srLeft.reveal('.about-info',{delay:100});
srLeft.reveal('.contact-info', { delay: 100 });

//ABOUT SKILLS & FORM BOX
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true,
});
srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

//PROJECT BOX
sr.reveal('.project-box', {interval:200});

//HEADINGS
sr.reveal('.top-header',{});



//CHANGE ACTIVE LINK

const scrollReveal = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');

        }else{
            document
            .querySelector('.nav-menu a[href*=' + sectionId + ']')
            .classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);



