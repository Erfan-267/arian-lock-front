
$('.btn-toast').on('click',function(e){
  e.preventDefault();
  $.toast({
    text: 'برای خرید باید احراز هویت خود را کامل کنید',
    heading:'attention!',
    icon:'info',
    showHideTransition:'slide',
    allowToastClose:true,
    hideAfter:3000,
    stack:5,
    position:'top-center',
    textAlign:'left',
    loader:true,
    loaderBg:'blue',
    beforeShow:function(){},
    afterShown:function(){},
    beforeHide:function(){},
    afterHidden:function(){}
  });
})

let proPage=document.querySelectorAll('.profile-data-script');
let proBtn=document.querySelectorAll('.data-link');
let proBtnText=document.querySelectorAll('.proBtnText');
for(let i=0;i<=proBtn.length-1;i++){
  proBtn[i].addEventListener('click',()=>{
    proBtnText[i].classList.add('text-[#FFFF00]');
    for(let j=0;j<=proBtnText.length-1;j++){
      if(i != j){
        proBtnText[j].classList.remove('text-[#FFFF00]');
      }
    }
    proPage[i].classList.remove('hidden');
    for(let q=0;q<=proPage.length-1;q++){
      if(q !== i){
        proPage[q].classList.add('hidden');
      }
    }
  })
}


