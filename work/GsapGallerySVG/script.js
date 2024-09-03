const container = document.querySelector(".container")

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "container",
        start: "top top",
        scrub: 1,
        pin: true,
        end: "+=100%"

    }
})

    .to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientHeight) + "px",
        ease: "none",
        duration: 1
    })

    //PIN TEXT

    .to(".text-content", {
        x: () => (container.scrollWidth - document.documentElement.clientHeight) + "px",
        ease: "none",
        duration: 1,
        pin: true

    }, ">")


gsap.utils.toArray('.img').forEach(image => {
    gsap.to(image, {
        skewY: 50,
        scrollTrigger: {
            trigger: image,
            scrub: 1,
            start: "center center"

        }
    })



});