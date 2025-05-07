gsap.to("h1", {
    x: 400
});

// gsap默认使用500ms，可以通过defaults更改默认值
gsap.defaults({
    duration: 0.5
})

gsap.to('.fred', {
    x: 400,
    y: 300,
    scale: 2,
    rotation: 360,
    duration: 3,
})