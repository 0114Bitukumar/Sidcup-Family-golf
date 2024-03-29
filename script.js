var cursor = document.querySelector("#cursor");
var blur = document.querySelector("#cursor_blur");
document.addEventListener("mousemove",function(dets){
   cursor.style.left = dets.x+30+"px"
   cursor.style.top = dets.y-15+"px"

   blur.style.left = dets.x-200 +"px"
   blur.style.top = dets.y-210 +"px"

})

gsap.to("#nav",{
    backgroundColor :"#000",
    duration:0.5,
    height:"85px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    cursor.style.height = "65px"
    cursor.style.width = "65px"
    cursor.style.border = "1px solid #fff"
    cursor.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave",function(){
    cursor.style.height = "20px"
    cursor.style.width = "20px"
    cursor.style.backgroundColor = "#95C11E"
  })
})    

gsap.from("#about_us",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#about_us",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:3
  }
})

gsap.from(".card",{
  scale:0.8,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 60%",
    scrub:1
  }
})

gsap.from("#colon1",{
  y:65,
  x:75,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 30%",
    end:"top 45%",
    scrub:5
  }

})

gsap.from("#colon2",{
  y:-65,
  x:-75,
  scrollTrigger:{
    trigger:"#colon2",
    scroller:"body",
    // markers:true,
    start:"top 73%",
    end:"top 55%",
    scrub:5
  }

})

gsap.from("#elem h1",{
  y:50,
  scrollTrigger:{
    trigger:"#elem h1",
    scroller:"body",
    // markers:true,
    start:"top 75%",
    end:"top 70%",
    scrub:3
  }
})
