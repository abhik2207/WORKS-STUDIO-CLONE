const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const toTop = document.querySelector('#to-top');
toTop.addEventListener('click', () => {
    scroll.scrollTo(0);
});

function loaderAnimation() {
    var tl = gsap.timeline();

    tl.to("#overlay", {
        top: "-100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    });

    tl.to("#loader > video", {
        top: "-100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    });

    tl.to("#loader > h1", {
        color: '#000',
        delay: -0.5,
        duration: 1
    });

    tl.to("#loader", {
        opacity: 0
    });

    tl.to("#loader", {
        display: 'none'
    });
}
loaderAnimation();

function page2Animation() {
    const elements = document.querySelectorAll('.elem');
    const page2 = document.querySelector('#page2');
    elements.forEach((e) => {
        e.addEventListener('mouseenter', () => {
            const bgImage = e.getAttribute('data-img');
            page2.style.backgroundImage = `url(${bgImage})`;
        });
    });
}
page2Animation();