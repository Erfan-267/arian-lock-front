
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