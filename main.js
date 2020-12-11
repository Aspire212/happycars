//header position

const header = document.querySelector('.header')
const height = window.innerHeight;
let vhHeight = height * 0.5;
window.addEventListener('scroll', ()=>{
  if(window.scrollY >= vhHeight){
  header.style.top = "-100px";
  }
  else{
      header.style.top = "0px";
  }
})




//slider op
let slide = document.querySelectorAll('.slide');
let slides = document.querySelector('.slides');
let text = document.querySelector('.text');
let b = 1;
let curentTime = 0; //current time

slide[0].classList.add('slide_active');

function Next() {
  curentTime += 1;
  if (b >= 6) {
    b = 0
  }
slide[curentTime].classList.add('slide_active');

if (curentTime == slide.length - 1) {
  curentTime = 0;
  for (let i = 1; i <= slide.length - 1; i++) {
    slide[i].classList.remove('slide_active');

  }
}
}

window.onload = setInterval(Next, 5000);


/*----------MENU ACCORDEON------------

const accordeon = document.querySelector('.accordeon ');
const openArr = document.querySelectorAll('.open');
const hiddenArr = document.querySelectorAll('.hidden');

//function delete all classes------------

let delActive = (sel) => {
  sel.forEach(elem => {
    elem.classList.remove('active');
  })
}
///function add all classes------------
let addActive = (sel) => {
  sel.classList.toggle('active');
  sel.nextElementSibling.classList.toggle('active');
}
//-----------------------------------

 accordeon.addEventListener('click' || 'touchstart',  (event)=>{
  let itemTarget = event.target;
  if(itemTarget.classList.contains('open')){
    addActive(itemTarget);
  }
  
   if(itemTarget.classList.contains('Acwrap')){
  if(itemTarget.firstElementChild.classList.contains('open')){
  console.log(1);
    addActive(itemTarget.firstElementChild);
  }
 }
  //-------------------------------------
  //closed all accordeon
  
    //-------------------------------------
    //closed all accordeon
    /*------button closed*/
    /*if (itemTarget.classList.contains('closed')) {
      delActive(hiddenArr);
      delActive(openArr);
    }
    //--------------------------------------
  //удаление класса по клику на li
  if (itemTarget.parentElement.classList.contains('hidden')) {
    itemTarget.parentElement.classList.remove('active');
    itemTarget.parentElement.previousElementSibling.classList.remove('active');
  }
})*/
