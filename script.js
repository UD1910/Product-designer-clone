// const scroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true
// });

function circleChaptaKaro() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);
  });
}

function firstPageAnimation() {
  var tl = gsap.timeline();

  tl.from(".nav", {
    y: "-10",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  });
  tl.to(".boundingelem", {
    y: 0,
    ease: Expo.easeInOut,
    durartion: 2,
    stagger: 0.3,
  }).from(".herofooter", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      ".minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}


document.querySelectorAll(".elem")
.forEach(function (elem) {
    elem.addEventListener("mousemove", function(dets){
            
    })
});

circleMouseFollower();
firstPageAnimation();
circleChaptaKaro();
