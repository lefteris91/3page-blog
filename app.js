// elements
const topBtn = document.getElementById('top-btn')
const header = document.getElementById('header')
var sticky = header.offsetTop;
// 
// functions
  function OnScroll(){
    if (window.pageYOffset > sticky) {
        topBtn.classList.add('displayN')
        topBtn.classList.remove('displayY')
      } else {
        topBtn.classList.remove('displayN')
        topBtn.classList.add('displayY')
      }
  }

  function goTop(){
        document.body.scrollTop = 0; //   for safari
        document.documentElement.scrollTop = 0; // rest browsers
  }
// 


// actions
window.onscroll = function(){OnScroll()}
topBtn.addEventListener('click',()=>{
    goTop()
})
// topBtn.addEventListener('click' , goTop())
// 

    
