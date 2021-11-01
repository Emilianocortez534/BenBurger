const slides=document.querySelector(".slider__contenedor").children;
const prev= document.querySelector(".prev")
const next= document.querySelector(".next")
const indicador= document.querySelector(".indicador")

let index=0;

prev.addEventListener("click", ()=> {
    prevSlide();
    updateCircle();
    resetTime();
})

next.addEventListener("click", ()=> {
    nextSlide();
    updateCircle();
    resetTime();
})

//Circulos indicadores//

 function circleIndicator(){
     for(let i=0; i< slides.length; i++){
         const div=document.createElement("div")
            div.innerHTML=i+1;
            div.setAttribute("onclick", "indicateSlide")
            div.id=i;
            if(i==0){
                div.className="active"
            }
            indicador.appendChild(div)
            
     }
 }
circleIndicator();

function indicateSlide(element){
    index=element.id;
    changeSlide();
    updateCircle();
    resetTime();
}

function updateCircle(){
    for(let i=0; i<indicador.children.length; i++){
        indicador.children[i].classList.remove("active");
    }
    indicador.children[index].classList.add("active");
}


function prevSlide(){
    if(index==0){
        index=slides.length-1;
    }else{
        index--;
    }
    changeSlide();
}

function nextSlide() {
    if (index==slides.length-1) {
        index=0
    }else{
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove("active")
    }
    slides[index].classList.add("active")
}


 function resetTime(){
    clearInterval(timer);
    timer= setInterval(autoplay,10000)
}

function autoplay(){
   nextSlide()
   updateCircle()
}

let timer=setInterval(autoplay,5000) 