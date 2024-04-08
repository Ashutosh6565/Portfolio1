const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const dets = {
    clientX: 0,
    clientY: 0
};

function circleMouseFollower(dets) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

circleMouseFollower(dets); // Pass the 'dets' object as an argument here
