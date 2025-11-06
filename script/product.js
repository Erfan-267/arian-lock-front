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