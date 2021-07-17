const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body')

    //show navigation 
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


        //navlinks animation
        navlinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.7s ease forwards ${index/12+0.7}s`;
            }
        });
        //burger animation 
        burger.classList.toggle('toggle');
        body.classList.toggle('noScroll');

    });


}

navSlide();