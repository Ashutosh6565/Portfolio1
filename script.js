const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const dets = {
  clientX: 0,
  clientY: 0,
};
function firstPageAnim() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

// this function is mainly working for the purpose of make circle that goes with the mouse to make is shrink and change its shap.
var timeout;
function circleChaptaKaro() {
  //here i am tring to define scale value
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function (dets) {
    clearInterval(timeout);
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function(){
        document.querySelector(
            "#minicircle"
          ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${1}, ${1})`;
    },100)

  });
}

function circleMouseFollower( xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleMouseFollower(dets);
firstPageAnim();
circleChaptaKaro();

//in the second div select all the three element after that use mousemove over them and also ckeck mouse kha pur that means check the postion of x and y and then show imge and move the image and while moving rotate it and when the mouse move an the same way the roation also become fast with the movement
// document.querySelectorAll(".elem").forEach(function(elem){
//     var rotate = 0;
//     var diffrot = 0;
//     elem.addEventListener("mousemove" ,function(details){
//         //dets = details where you get acces to x and y and others thinsgs
//         var diff = details.clientY - elem.getBoundingClientRect().top; 
//         diffrot = details.clientX - rotate;
//         rotate = dets.clientX;
//         console.log(details)
       
//         gsap.to(elem.querySelector("img"),{
//             opacity:1,
//             ease: Power1,
//             top: diff,
//             left: details.clientX,
//             rotate:  gsap.utils.clamp(-20,20,diffrot)
//         })
//     })
// })
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });