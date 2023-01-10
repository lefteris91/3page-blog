// elements
const topBtn = document.getElementById('top-btn')
const header = document.getElementById('header')
const modal = document.getElementById('modal')
const modalCloseBtn =document.getElementById('modal-close-btn')
const modalLink1 = document.getElementById('modal-link-1')
const modalLink2 = document.getElementById('modal-link-2')
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
  function closeBtn(){
    modalCloseBtn.disabled = false
    modalCloseBtn.addEventListener('click', ()=>{
      modal.classList.remove('displayN')
      modal.classList.add('displayY')
      enableA()
      
    })
  }
  function disableA(){
    document.querySelectorAll('a').forEach(a =>{
      a.classList.add('disabled')
    })
    modalLink1.classList.remove('disabled')
    modalLink2.classList.remove('disabled')
  }
  function enableA(){
    document.querySelectorAll('a').forEach(a =>{
      a.classList.remove('disabled')
    })
  }
  
// 


// actions
window.onscroll = function(){OnScroll()}
topBtn.addEventListener('click',()=>{
    goTop()
})

setTimeout(() => {
  if (sessionStorage.getItem('firstVisit') === null){
    modal.classList.add('displayN')
    modal.classList.remove('displayY') //modal reveal
    disableA()
    sessionStorage.setItem('firstVisit', '1');
  }
}, 3000);

setTimeout(()=>{
  closeBtn()
  modalCloseBtn.style = 'color:red; cursor:pointer'
}, 6000)

// 
 

    
