const button = document.querySelector(".menu");
const navbar=document.querySelector("nav");
const buttonPressed = (e) => {
  navbar.classList.toggle("menu-active");
}
button.addEventListener("click", buttonPressed);

function reportWindowSize() {
  if(window.innerWidth>950){
      navbar.classList.remove("menu-active");
  }
}

window.onresize = reportWindowSize;

function scroll() {
  if(window.pageYOffset>0){
    navbar.style.backgroundColor="#FFFFFF";
    
  }
  else{
    navbar.style.backgroundColor="transparent";
  }
}
window.onscroll = scroll;
const lngpopup=document.querySelector(".lng-popup");
const lngpopbutton=document.querySelectorAll(".lng-desktop , .close-lng , .background");
for(j=0;j<lngpopbutton.length;j++){
  lngpopbutton[j].addEventListener('click',function(){
      lngpopup.classList.toggle("active-lng");
  });
  
}
const lngpopupmobile=document.querySelector(".menu-mobile");
const lngpopbuttonmobile=document.querySelectorAll(".lng-mobile-text , .lng");
for(j=0;j<lngpopbuttonmobile.length;j++){
  lngpopbuttonmobile[j].addEventListener('click',function(){
      lngpopupmobile.classList.toggle("lng-mobile-active");
  });
  
}


const lngbutton=document.querySelectorAll(".buttons button , .lng-mobile-button");
lngbutton[1].setAttribute('disabled', 'true');
lngbutton[3].setAttribute('disabled', 'true');
for(i=0;i<lngbutton.length;i++){
  lngbutton[i].addEventListener('click',function(){
[].forEach.call(lngbutton, function(el) {
  el.removeAttribute('disabled');
});
      this.setAttribute('disabled', 'true');
  })
}
const ButtonLoadMore=document.querySelector(".button-div button");
const LoadMoreContent=document.querySelector(".load-more-content");


      ButtonLoadMore.addEventListener('click',function(){
        LoadMoreContent.classList.toggle("load-more-content-active");
        console.log(ButtonLoadMore)
    });


const wrap=document.querySelector(".wrapper");

const paralax=document.getElementById("naslov");

function scroll() {
  if(wrap.scrollTop>wrap.clientHeight){
    
    paralax.style.position="relative"
  }
  else{
    paralax.style.position="sticky"
  }
  
    if(wrap.scrollTop+70>wrap.offsetHeight){
      navbar.classList.remove("transparent");
    }
    else{
        navbar.classList.add("transparent");
    }
  }
  wrap.onscroll = scroll;
function reportWindowSize() {
  if(window.innerWidth>950){
      navbar.classList.remove("menu-active");
  }
  pageyoff=wrap.scrollTop;

}

window.onresize = reportWindowSize;


