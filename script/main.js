$(function () {
  const $slider = $('.brands-cont');
  let isDown = false;
  let startX;
  let scrollLeft;
  let moved = false;

  // 🎯 Desktop
  $slider.on('mousedown', function (e) {
    isDown = true;
    moved = false;
    $(this).addClass('cursor-grabbing');
    startX = e.pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
  });

  $slider.on('mouseleave mouseup', function () {
    isDown = false;
    $(this).removeClass('cursor-grabbing');
  });

  $slider.on('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - this.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(x - startX) > 5) moved = true; // تشخیص درگ واقعی
    this.scrollLeft = scrollLeft - walk;
  });

  // 📱 Touch
  let touchStartX = 0;
  let touchScrollLeft = 0;

  $slider.on('touchstart', function (e) {
    const touch = e.originalEvent.touches[0];
    touchStartX = touch.pageX - this.offsetLeft;
    touchScrollLeft = this.scrollLeft;
    moved = false;
  });

  $slider.on('touchmove', function (e) {
    const touch = e.originalEvent.touches[0];
    const x = touch.pageX - this.offsetLeft;
    const walk = (x - touchStartX) * 1.5;
    if (Math.abs(x - touchStartX) > 5) moved = true;
    this.scrollLeft = touchScrollLeft - walk;
  });

  // 🧠 جلوگیری از کلیک ناخواسته پس از درگ
  $('.brand-item').on('click', function (e) {
    if (moved) {
      e.preventDefault();
      return false; // جلوگیری از کلیک در حالت درگ
    }
    const link = $(this).data('link');
    if (link) window.location.href = link;
  });
});


var slideIndex=1;
showSlide(slideIndex);
// let dot=document.querySelectorAll('.dot');
// for(let i=0;i<dot.length;i++){
//     dot[i].addEventListener("click",dotSlide(i))
// }

function showSlide(n){
    let i;
    const slides=document.querySelectorAll('.slide');
    if(n > slides.length){
        slideIndex=1;
    }
    if(n < 1){
        slideIndex=slides.length;
    }
    for(let i=0;i<slides.length;i++){
        if(i != slideIndex-1){
        
            slides[i].classList.add('slide-none');
        }
    }
    slides[slideIndex-1].classList.remove('slide-none');
}
function controlSlide(n){
    slideIndex+=n;
    showSlide(slideIndex);
}

var slideNumber=1;
veiwSlide(slideNumber);
// let dot=document.querySelectorAll('.dot');
// for(let i=0;i<dot.length;i++){
//     dot[i].addEventListener("click",dotSlide(i))
// }

function veiwSlide(n){
    let i;
    const slides2=document.querySelectorAll('.slide2');
    if(n > slides2.length){
        slideNumber=1;
    }
    if(n < 1){
        slideNumber=slides2.length;
    }
    for(let i=0;i<slides2.length;i++){
        if(i != slideNumber-1){
        
            slides2[i].classList.add('slide-none');
        }
    }
    slides2[slideNumber-1].classList.remove('slide-none');
}
function moveSlide(n){
    slideNumber+=n;
    veiwSlide(slideNumber);
}
