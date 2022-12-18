let firstlevel = document.querySelector('.bookingmenu_item1')

let lastlevel = document.querySelector('.select1')

firstlevel.onclick = ()=>{
  lastlevel.size = lastlevel.length;
  lastlevel.focus();
};
lastlevel.onchange = lastlevel.onclick = lastlevel.onblur = ()=>{
    lastlevel.size = 1;
};

let firstlevel2 = document.querySelector('.bookingmenu_item4')

let lastlevel2 = document.querySelector('.select2')

firstlevel2.onclick = ()=>{
  lastlevel2.size = lastlevel2.length;
  lastlevel2.focus();
};
lastlevel2.onchange = lastlevel2.onclick = lastlevel2.onblur = ()=>{
    lastlevel2.size = 1;
};

$('.slider1').owlCarousel({
  margin:20,
  items:4,
  
  nav: true,
  minWidth: 100,
  dots: false,
  responsive:{ 
    320:{
      items:1
  },
    426:{
      items:1
  },
    768:{
        items:4
    },
},
  navText: [" <div class='nav_prev_cont'> <img class='nav_prev' src='images/icons/prev.png'> <p>BACK</p> </div>", "<div class='nav_next_cont'> <p>NEXT</p> <img class='nav_next' src='images/icons/next.png'> </div>"],
})

$(document).ready(function(){
  $('.slider2').owlCarousel({
    items:2,
    margin: 10,
    loop: true,
    nav:true,
    dots: false,
    navText: [" <div class='nav_cont'> <img class='slide2_nav_prev' src='images/icons/prev2.png'>","<img class='slide2_nav_next' src='images/icons/next.png'></div>"],
    responsive:{ 
      320:{
        items:1,
    },
      426:{
        items:2
    },
      769:{
          items:4
      },
  }
  });
});

$(document).ready(function(){
  $('.slider3').owlCarousel({
    items:5,
    dots: false,
    margin: 15,
    loop: true,
    nav: true,
    autoWidth: true,
    navText: [" <div class='nav_cont'> <img class='slide2_nav_prev' src='images/icons/prev2.png'>","<img class='slide2_nav_next' src='images/icons/next.png'></div>"], 
    responsive:{ 
      320:{
        items:1
    },
      768:{
          items:2
      },
  }
  });
});

const swiper = new Swiper('.vids-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  loopedSlides: 2,
  // If we need pagination
  
});

$('.click-for-video').click(function() {
 
  $('div.youtube').css('display', 'block');
  
});




  

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('nav');
let logo = document.querySelector('.company_logo2')
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
  logo.classList.toggle('disabled');
})