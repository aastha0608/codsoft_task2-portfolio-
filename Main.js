/*-------------------- toggle icon navbar--------------------- */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*-------------------- scroll section active link--------------------- */

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =sec.getattribute('id');

        if(top >=offset && top < offset + height) {
            navLinks.forEachapply(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href  "=' + id + ']').classList.add('active');

            });
        };
    });

    /*-------------------- sticky navbar--------------------- */
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    /*-------------------- remove toggle icon and navbar--------------------- */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

 /*-------------------- scroll reveal--------------------- */
 ScrollReveal({
    distance : '80px',
    duration : 2000,
    delay : 200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box , .contact form' ,{ origin :'button' });
 ScrollReveal().reveal('.home-content, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p , .about-content', { origin : 'right'});

 /*-------------------- typed JS--------------------- */
 const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer' , 'Web Designer'],
    typespeed: 70,
    backspeed: 70,
    backdelay: 1000,
    loop: true,
 });