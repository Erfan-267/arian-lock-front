let proPageData=document.querySelectorAll('.pro-data');
let proBtnDATA=document.querySelectorAll('.pro-data-btn');

for(let i=0;i<=proBtnDATA.length-1;i++){
  proBtnDATA[i].addEventListener('click',()=>{
    proBtnDATA[i].classList.add('selectedBtn');
    for(let j=0;j<=proBtnDATA.length-1;j++){
      if(i != j){
        proBtnDATA[j].classList.remove('selectedBtn');
      }
    }
    proPageData[i].classList.remove('hidden');
    for(let q=0;q<=proPageData.length-1;q++){
      if(q !== i){
        proPageData[q].classList.add('hidden');
      }
    }
  })
}

  const stars = document.querySelectorAll('#rating-stars span');
  const ratingValue = document.getElementById('rating-value');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const value = parseInt(star.getAttribute('data-value'));
      ratingValue.value = value;

      // بروزرسانی رنگ ستاره‌ها
      stars.forEach(s => {
        if (parseInt(s.getAttribute('data-value')) <= value) {
          s.classList.add('text-[#FFFF00]');
          s.classList.remove('text-gray-300');
        } else {
          s.classList.add('text-gray-300');
          s.classList.remove('text-[#FFFF00]');
        }
      });
    });
  });

var imageIndex=1;
IMGShow(imageIndex);
function IMGShow(n){
    let i;
    const image=document.querySelectorAll('.IMG');
    if(n > image.length){
        imageIndex=1;
    }
    if(n < 1){
        imageIndex=image.length;
    }
    for(let i=0;i<image.length;i++){
        if(i != imageIndex-1){
        
            image[i].classList.add('hidden');
        }
    }
    image[imageIndex-1].classList.remove('hidden');
}
function controlImg(n){
    imageIndex+=n;
    IMGShow(imageIndex);
}

$('.closeBtn').on('click',function(){

  $('.showImgCont').removeClass('fixed');
  $('.showImgCont').addClass('hidden');
})

function showImgCont(){
  $('.showImgCont').removeClass('hidden');
  $('.showImgCont').addClass('fixed');

}