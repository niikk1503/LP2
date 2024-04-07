


gsap.to("#imagecontainer",{
    width:"100%",
    ease: Expo.easeInOut,
    scrub: 2,
    duration:2
})
gsap.from("#imgcontainer",{
    opacity:0,
    
    ease: Expo.easeInOut,
    duration:2,
    scale:0.3
})
gsap.from("#text",{
    
    opacity:0,
    ease: Expo.easeInOut,
    duration:2,
    // top:"100px"
})

gsap.from("#sidetext",{
    top:"-100%",
    opacity:0,
    ease: Expo.easeInOut,
    duration:3,
    delay:1
    // top:"100px"
})


