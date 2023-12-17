// navbar
function burgerMenu() {
  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');
  console.log('click');
  if (navMenu.classList.contains("expanded")){
    navMenu.classList.remove("expanded");
    burgerBtn.setAttribute("aria-expanded", false);

  } else {
    navMenu.classList.add("expanded");
    animateListItems();
    burgerBtn.setAttribute("aria-expanded", true);
  }
}





// GSAP

// animation called when opening mob menu 
function animateListItems() {
  gsap.from(".navbar-li", { 
    opacity: 0,
    y: 30,
    // x: -60,
    duration: 1,
    ease: "ease-in",
    stagger: 0.1,
  });
}


// // "floating circles"
const randomX = random(1, 20);
const randomY = random(1, 20);
const randomDelay = random(0, 2);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(-10, 10);

const circles = gsap.utils.toArray('.floating');
circles.forEach(circle => {
  gsap.set(circle, {
    x: randomX(-1),
    y: randomX(1),
  });

  moveX(circle, 1);
  moveY(circle, -1);
});

function moveX(target, direction) {
  
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}


// SCROLLTRIGGER ANIMATIONS 
gsap.registerPlugin(ScrollTrigger);

// fade in (skills section)

const fadeIn = gsap.utils.toArray('.dev-icons');
fadeIn.forEach((fadeIn) => {
  gsap.from(fadeIn, { 
    duration: 1,
    opacity:0,
    x: -20,
    ease: "ease-in" ,
    stagger: 0.4,
    scrollTrigger: {
      trigger: fadeIn,
      start: "top 70%", //when top of element crosses 80% from of page
      end: "bottom center",   //when bottom of element crosses center of page
      toggleActions: "play none none none",
    }
  });
})

// bounce in (circles, our work section)
const bounceInCircles = gsap.utils.toArray('.bounce-in');
bounceInCircles.forEach((bounceInCircles) => {
  let randDur = gsap.utils.random(2, 5);
  gsap.from(bounceInCircles, { 
    scale: 0,
    duration: randDur,
    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
      trigger: bounceInCircles,
      start: "top 80%", //when top of element crosses 80% from of page
      end: "bottom center",   //when bottom of element crosses center of page
      toggleActions: "play none none none",
    }
  });
})

// spin (cicles, about section) 
const spinCircles = gsap.utils.toArray('.spinning');
spinCircles.forEach((spinCircles) => {
  gsap.to(spinCircles, {
    rotationY: 580,
    scrollTrigger: {
      trigger: spinCircles,
      scrub: 1.5
    }
  })
})

