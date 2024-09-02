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
    })