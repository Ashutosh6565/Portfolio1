const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const dets = {
    clientX: 0,
    clientY: 0
};
function firstPageAnim(){
    var tl =gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay:-1,
        stagger: .2
    })
    .from("#herofooter",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function circleChaptaKaro(){
    window.addEventListener("")
}

function circleMouseFollower(dets) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

circleMouseFollower(dets); 
firstPageAnim();
