gsap.registerPlugin(ScrollTrigger);

const wrappers = gsap.utils.toArray(".stack-card-wrapper");
const cards = gsap.utils.toArray(".stack-card");

wrappers.forEach((wrapper, i) => {

    let scale = 1;
    let rotation = 0;

    if (i !== cards.length - 1) {
        scale = 0.9 + (0.025 * i);
        rotation = -10;
    }

    gsap.to(cards[i], {
        scale,
        rotationX: rotation,
        transformOrigin: "top center",
        ease: "none",

        scrollTrigger: {
            trigger: wrapper,
            start: `top ${60 + (10 * i)}`,
            end: "bottom top",
            endTrigger: wrapper.parentElement,
            scrub: true,
            pin: wrapper,
            pinSpacing: false,

            // markers: true
        }
    });

});